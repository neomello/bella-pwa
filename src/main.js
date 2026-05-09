import './style.css'

const app = document.querySelector('#app')

const STORAGE_KEY = 'bella_chat_history_v2'
let chatHistory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory))
}

app.innerHTML = `
  <div class="home-screen">
    <div class="home-bg"></div>
    <img src="/brand/logo_cor_horizontal.png" alt="Instituto Embelleze" class="home-watermark">
  </div>

  <button class="fab" id="fab">
    <img src="/bella/bella-front.png" alt="Bella" class="fab-img">
    <span class="fab-label">Falar com a Bella</span>
  </button>

  <div class="chat-overlay" id="chat-overlay">
    <div class="chat-sheet">
      <div class="sheet-header">
        <div class="sheet-avatar-wrap">
          <img src="/bella/bella-front.png" alt="Bella" class="avatar-img">
        </div>
        <div class="header-info">
          <h1>Bella</h1>
          <div class="status">Consultora de Carreira</div>
        </div>
        <button class="clear-btn" id="clear-btn" title="Limpar conversa">
          <iconify-icon icon="ph:trash-simple"></iconify-icon>
        </button>
        <button class="close-btn" id="close-btn" title="Fechar">
          <iconify-icon icon="ph:x-bold"></iconify-icon>
        </button>
      </div>

      <div class="chat-container" id="chat-box"></div>

      <div class="input-area">
        <form class="input-container" id="chat-form">
          <input type="text" id="user-input" placeholder="Escreva sua mensagem..." autocomplete="off">
          <button type="submit" class="send-btn">
            <iconify-icon icon="ph:paper-plane-right-fill"></iconify-icon>
          </button>
        </form>
        <footer class="footer">
          <img src="/brand/logo_cor_horizontal.png" alt="Instituto Embelleze" class="footer-logo">
          <div class="footer-info">
            <p>Instituto da Beleza Goiana de Ensino e Serviços LTDA</p>
            <p>CNPJ: 19.367.067/0001-97</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
`

const chatBox    = document.querySelector('#chat-box')
const chatForm   = document.querySelector('#chat-form')
const userInput  = document.querySelector('#user-input')
const overlay    = document.querySelector('#chat-overlay')
const fab        = document.querySelector('#fab')

// Open / close overlay
fab.addEventListener('click', () => {
  overlay.classList.add('open')
  setTimeout(() => userInput.focus(), 300)
})

document.querySelector('#close-btn').addEventListener('click', () => {
  overlay.classList.remove('open')
  userInput.blur()
})

function renderMessage(msg) {
  const msgDiv = document.createElement('div')
  msgDiv.className = `message ${msg.isUser ? 'message-user' : 'message-bella'}`
  msgDiv.innerHTML = `${msg.text}<span class="time">${msg.time}</span>`
  chatBox.appendChild(msgDiv)
  chatBox.scrollTop = chatBox.scrollHeight
}

function addMessage(text, isUser = false) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const newMsg = { text, isUser, time }
  chatHistory.push(newMsg)
  renderMessage(newMsg)
  saveHistory()
}

chatHistory.forEach(renderMessage)

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const text = userInput.value.trim()
  if (!text) return

  addMessage(text, true)
  userInput.value = ''

  const typing = addTypingIndicator()

  try {
    const history = chatHistory
      .filter(m => m.text && m.text !== '...')
      .map(m => ({ role: m.isUser ? 'user' : 'assistant', content: m.text }))

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })

    const data = await res.json()
    removeTypingIndicator(typing)
    addMessage(data.reply || 'Não consegui processar sua mensagem.')

  } catch {
    removeTypingIndicator(typing)
    addMessage('Tive um probleminha aqui. Pode tentar de novo?')
  }
})

document.querySelector('#clear-btn').addEventListener('click', () => {
  chatHistory = []
  saveHistory()
  chatBox.innerHTML = ''
})

function addTypingIndicator() {
  const div = document.createElement('div')
  div.className = 'message message-bella typing-indicator'
  div.innerHTML = '<span></span><span></span><span></span>'
  chatBox.appendChild(div)
  chatBox.scrollTop = chatBox.scrollHeight
  return div
}

function removeTypingIndicator(el) {
  el?.remove()
}
