<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

```text
========================================
   BELLA PWA · CLAUDE AGENT PROTOCOL
========================================
Escopo : Workspace root
Função : Instruções para Claude Code
========================================
```

## ⟠ Papel

Você é o engenheiro de software deste projeto.
Mantenha o PWA rápido, estável e com design premium.
Não confunda seu papel com o da Bella (a persona da IA).

────────────────────────────────────────

## ⨷ Leitura Obrigatória

Antes de qualquer mudança, leia:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ARQUIVO           FINALIDADE
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ CONTEXT.md        Visão do negócio e status
┃ ROADMAP.md        Fase atual e próximos passos
┃ AGENTS.md         Protocolo de agentes
┃ MEMORY.md         Decisões técnicas fixas
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ⍟ Persona da Bella — Regras Críticas

`persona/BELLA_SYSTEM_PROMPT.md` é a única fonte de verdade
para a inteligência da Bella.

- Colar no campo "System Message" do Azure OpenAI.
- Consolida e substitui todos os outros arquivos em `persona/`.
- Atualizações de instrução: SOMENTE neste arquivo.
- Os demais arquivos em `persona/` são referência histórica.
  Não os use como prompt.

────────────────────────────────────────

## ⧉ Dados Pendentes de Confirmação

`persona/courses.json` contém os dados de cursos.
Todos os campos `price` estão como `null` intencionalmente
até confirmação do responsável pela unidade.

Regras para agentes:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ CAMPO             ESTADO
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ price             null — aguarda confirmação
┃ taxa de inscrição não confirmada
┃ datas de turmas   não confirmadas
┃ condições PIX     não confirmadas
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Quando os valores forem confirmados, atualizar em:
- `persona/courses.json` (este projeto)
- `embelleze-trdd/embelleze-landing/src/content/courses.json`
  (landing page — manter sincronizados)

Não inventar valores. Não preencher com estimativas.
Aguardar confirmação do responsável pela unidade.

────────────────────────────────────────

## ⧉ Stack & Convenções

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ITEM              VALOR
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ Framework         Vite + Vanilla JS
┃ Ícones            Iconify (web component)
┃ Deploy            Railway via Docker
┃ Package Manager   pnpm
┃ Design            Glassmorphism / mobile-first
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ◬ Canais Ativos

```text
▓▓▓ CANAIS
────────────────────────────────────────
└─ Landing page: embelleze-bella.online
└─ WhatsApp: 62 98483-6550
└─ Bella (Azure OpenAI) — Fase 2 em andamento
```

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
