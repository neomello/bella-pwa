import express from 'express';
import { AzureOpenAI } from 'openai';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

const SYSTEM_PROMPT = readFileSync(
  join(__dirname, 'persona/BELLA_SYSTEM_PROMPT.md'),
  'utf-8'
).split('# ============================================================')[1].trim();

const client = new AzureOpenAI({
  azureEndpoint: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey:        process.env.AZURE_OPENAI_API_KEY,
  apiVersion:    process.env.AZURE_OPENAI_API_VERSION || '2025-01-01-preview',
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  try {
    const completion = await client.chat.completions.create({
      model:             process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4o',
      messages:          [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens:        800,
      temperature:       0.7,
      top_p:             0.95,
      frequency_penalty: 0,
      presence_penalty:  0,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (err) {
    console.error('[BELLA] Azure error:', err);
    res.status(500).json({ error: 'Falha ao processar resposta' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bella server running on port ${PORT}`));
