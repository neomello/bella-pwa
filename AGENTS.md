<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

```text
========================================
   BELLA PWA · AGENTS & PROTOCOLS
========================================
Escopo : Workspace root
Função : Protocolo para agentes de IA
========================================
```

## ⟠ [1] DESENVOLVEDOR

*Agente que edita código e infraestrutura.*

Papel: engenheiro de software.
Manter o PWA rápido, estável e com design premium.
Não adicionar frameworks pesados sem necessidade.
Stack: Vite + Vanilla JS.

Leitura obrigatória antes de qualquer mudança:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ARQUIVO           FINALIDADE
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ CONTEXT.md        Visão do negócio
┃ ROADMAP.md        Status do projeto
┃ SETUP.md          Comandos técnicos
┃ MEMORY.md         Decisões fixas
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ⟠ [2] PERSONA DA BELLA

*Agente que configura ou treina o LLM da Bella.*

Papel: Consultora SDR.
Não confundir com o papel do desenvolvedor.

**Fonte única de verdade — Azure OpenAI System Message:**

```text
▓▓▓ ARQUIVO AUTORIDADE
────────────────────────────────────────
└─ persona/BELLA_SYSTEM_PROMPT.md
```

Consolida: identidade, tom de voz, fluxo SDR,
catálogo de cursos, objeções, regras e dados da unidade.

Qualquer atualização de instrução da Bella:
SOMENTE neste arquivo.

────────────────────────────────────────

## ⧉ Arquivos de Referência

*Histórico e manutenção. NÃO injetar como prompt.*

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ARQUIVO                     STATUS
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ persona/BELLA_MASTER.md      obsoleto
┃ persona/BELLA_PERSONA.md     consolidado
┃ persona/SDR_STRATEGY.md      consolidado
┃ persona/LANDING_OFFERS.md    consolidado
┃ persona/bella.knowledge.md   consolidado
┃ src/content/bella.knowledge  duplicata
┃ persona/courses.json         dados estruturados
┃ persona/faqs.json            perguntas frequentes
┃ persona/offers.json          oferta ativa
┃ persona/testimonials.json    sem conteúdo aprovado
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ⨷ Regra de Ouro

Nunca misture as instruções.
Desenvolvendo: siga o item [1].
Configurando o prompt da IA: use somente
`persona/BELLA_SYSTEM_PROMPT.md`.

────────────────────────────────────────

## ◬ Dados Pendentes — Não Preencher sem Confirmação

```text
▓▓▓ AGUARDANDO RESPONSÁVEL DA UNIDADE
────────────────────────────────────────
└─ Preços por curso (price: null em courses.json)
└─ Taxa de inscrição
└─ Datas das próximas turmas
└─ Condições de pagamento
└─ Regras de reserva via PIX
```

Quando confirmados, atualizar nos dois projetos:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ PROJETO           ARQUIVO
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ bella-pwa         persona/courses.json
┃ embelleze-trdd    embelleze-landing/src/
┃                   content/courses.json
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Não inventar valores. Não usar estimativas.
O system prompt da Bella já tem respostas
de contorno para cada um desses itens.

────────────────────────────────────────

```text
▓▓▓ NΞØ MELLØ
────────────────────────────────────────
Core Architect · NΞØ Protocol
neo@neoprotocol.space

"Code is law. Expand until
chaos becomes protocol."

Security by design.
Exploits find no refuge here.
────────────────────────────────────────
```
