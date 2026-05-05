# Setup — Bella PWA (Standalone)

Este é o módulo independente de chat da Bella, projetado para funcionar como um PWA (Progressive Web App) para homologação e testes de IA.

## 🛠️ Tecnologias
- **Vite**: Build system ultra-rápido.
- **Vanilla JS**: Performance máxima sem overhead de frameworks.
- **Vite-Plugin-PWA**: Suporte completo para instalação em dispositivos móveis.
- **Docker**: Pronto para deploy no Railway.

---

## 🚀 Como Rodar Localmente

1.  **Instalar dependências**:
    ```bash
    pnpm install
    ```

2.  **Iniciar servidor de desenvolvimento**:
    ```bash
    pnpm dev
    ```

3.  **Acessar**: Abra o link gerado (geralmente `http://localhost:5173`).

---

## 📦 Build para Produção

Para gerar os arquivos estáticos otimizados:
```bash
pnpm run build
```
Os arquivos serão gerados na pasta `dist/`.

---

## ☁️ Deploy no Railway

Como este é um repositório independente (`neomello/bella-pwa`), o deploy deve ser feito em um novo serviço no Railway.

### Opção 1: GitHub Integration (Recomendado)
1.  No Railway, crie um **New Project**.
2.  Selecione **Deploy from GitHub repo**.
3.  Escolha o repositório `neomello/bella-pwa`.
4.  O Railway usará o `Dockerfile` automaticamente.

### Opção 2: CLI
```bash
# Dentro da pasta apps/bella-pwa
railway link (selecione 'Create new project')
railway up
```

---

## 📱 Notas de PWA
Para testar a instalação no celular:
1.  Acesse a URL de produção.
2.  **iOS (Safari)**: Clique no botão de compartilhar e selecione "Adicionar à Tela de Início".
3.  **Android (Chrome)**: Clique nos três pontos e selecione "Instalar Aplicativo".
