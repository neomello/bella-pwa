#      BΞLLΛ · PWA CONTROL PLANE
# ========================================
# Project: bella-pwa
# Version: 1.0.0 (SDR Sovereign Edition)
# ========================================

.PHONY: help install dev start build clean check audit push save

# --- CONFIGURATION ---
PNPM = pnpm
PROJECT_NAME = Bella PWA
VERSION = 1.0.0

# Colors for terminal
CYAN  := \033[0;36m
GREEN := \033[0;32m
RED   := \033[0;31m
RESET := \033[0m
BOLD  := \033[1m

# --- HELP ---
help:
	@echo "$(BOLD)$(CYAN)⟠ $(PROJECT_NAME) · Control Plane$(RESET)"
	@echo "────────────────────────────────────────"
	@echo "Usage: make [target]"
	@echo ""
	@echo "$(BOLD)1. INITIALIZATION$(RESET)"
	@echo "  install       Instala dependências via pnpm"
	@echo ""
	@echo "$(BOLD)2. DEVELOPMENT$(RESET)"
	@echo "  dev           Inicia servidor de desenvolvimento Vite"
	@echo "  start         Roda servidor Express local (requer build)"
	@echo "  clean         Remove artefatos de build e caches"
	@echo ""
	@echo "$(BOLD)3. QUALITY & SECURITY$(RESET)"
	@echo "  check         Roda auditoria e build de teste"
	@echo "  audit         Verifica vulnerabilidades nas dependências"
	@echo ""
	@echo "$(BOLD)4. PRODUCTION & DEPLOY$(RESET)"
	@echo "  build         Gera bundle de produção otimizado"
	@echo "  deploy        Sobe para o Railway via CLI"
	@echo ""
	@echo "$(BOLD)5. GIT AUTOMATION$(RESET)"
	@echo "  save MSG=\"...\"  Fluxo Seguro: Audit + Build + Commit + Push"
	@echo "────────────────────────────────────────"

# --- 1. INITIALIZATION ---
install:
	@echo "$(CYAN)[SYNC] Syncing $(PROJECT_NAME) dependencies...$(RESET)"
	@$(PNPM) install --filter .
	@echo "$(GREEN)✅ Local sync complete.$(RESET)"

# --- 2. DEVELOPMENT ---
dev:
	@echo "$(CYAN)[START] Launching $(PROJECT_NAME) Dev Server...$(RESET)"
	@$(PNPM) --filter . dev

start: build
	@echo "$(CYAN)[START] Running Express server locally...$(RESET)"
	@node server.js

clean:
	@echo "$(CYAN)[CLEAN] Removing artifacts and local cache...$(RESET)"
	@rm -rf dist .vite node_modules
	@echo "$(GREEN)✅ Local clean complete.$(RESET)"

clean-all: clean
	@echo "$(CYAN)[CLEAN-ALL] Deep cleaning workspace and stores...$(RESET)"
	@rm -rf ../../node_modules ../../.pnpm-store
	@echo "$(GREEN)✅ Workspace deep clean complete.$(RESET)"

# --- 3. QUALITY & SECURITY ---
check: audit build
	@echo "$(GREEN)✅ All quality gates passed.$(RESET)"

audit:
	@echo "$(CYAN)[SEC] Running security audit...$(RESET)"
	@$(PNPM) audit

# --- 4. PRODUCTION & DEPLOY ---
build:
	@echo "$(CYAN)[BUILD] Generating production bundle...$(RESET)"
	@$(PNPM) --filter . run build
	@echo "$(GREEN)✅ Build successful (dist/).$(RESET)"

deploy:
	@echo "$(CYAN)[SHIP] Deploying to Railway...$(RESET)"
	@railway up

# --- 5. SOVEREIGN SYNC ---
# Usage: make save MSG="feat: nova funcionalidade"
save:
	@echo "$(BOLD)$(CYAN)[START] Starting Sovereign Sync Protocol...$(RESET)"
	@$(MAKE) audit
	@$(MAKE) build
	@echo "$(CYAN)[GIT] Staging changes...$(RESET)"
	@git add .
	@if [ -z "$(MSG)" ]; then \
		echo "$(RED)[ERROR] You must provide a message. Example: make save MSG=\"feat: add chat\"$(RESET)"; \
		exit 1; \
	fi
	@echo "$(CYAN)[GIT] Committing: $(MSG)$(RESET)"
	@git commit -m "$(MSG)"
	@echo "$(CYAN)[GIT] Pushing to origin main...$(RESET)"
	@git push origin main
	@echo "$(BOLD)$(GREEN)✅ Protocol complete. Sync successful.$(RESET)"
