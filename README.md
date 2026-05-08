<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

```text
========================================
   BELLA PWA · INDEX
========================================
Escopo : Workspace root
Status : Fase 2 em execução
========================================
```

## ⟠ Sobre

Interface de chat progressiva (PWA) para a **Bella**,
agente SDR do Instituto Embelleze Trindade (GO).

A Bella é a primeira camada comercial do Instituto:
qualifica leads e os conduz ao agendamento
de visita presencial.

────────────────────────────────────────

## ⨷ Stack

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ITEM              VALOR
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ Frontend          Vite + Vanilla JS
┃ Deploy            Railway via Docker
┃ Inteligência      Azure OpenAI
┃ Banco de Dados    PostgreSQL (Railway)
┃ Package Manager   pnpm
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ⧉ Documentação

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ARQUIVO           FINALIDADE
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ CONTEXT.md        Visão do negócio e canais
┃ ROADMAP.md        Fases e próximos passos
┃ SETUP.md          Comandos locais e Railway
┃ MEMORY.md         Decisões técnicas fixas
┃ AGENTS.md         Protocolo para agentes de IA
┃ CLAUDE.md         Instruções para Claude Code
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

────────────────────────────────────────

## ⍟ Inteligência da Bella

> Fonte única de verdade: `persona/BELLA_SYSTEM_PROMPT.md`

Usar no campo "System Message" do Azure OpenAI.
Consolida identidade, fluxo SDR, cursos, objeções e regras.

Os demais arquivos em `persona/` são referência histórica.
Não usá-los como prompt.

────────────────────────────────────────

## ◬ Iniciando

```bash
pnpm install
pnpm dev
```

Consulte `SETUP.md` para deploy no Railway.

────────────────────────────────────────

## ◱ Contato da Unidade

```text
▓▓▓ INSTITUTO EMBELLEZE TRINDADE
────────────────────────────────────────
└─ Av. Manoel Monteiro, 1691 — Sala 104
└─ Trindade/GO
└─ WhatsApp: 62 98483-6550
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
