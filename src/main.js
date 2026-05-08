import './style.css'

const app = document.querySelector('#app')

// Lógica de Persistência
const STORAGE_KEY = 'bella_chat_history'
let chatHistory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { text: "Olá! 👋 Eu sou a Bella. Estou aqui para te ajudar a encontrar o curso ideal e transformar sua carreira na beleza. Como posso te ajudar hoje?", isUser: false, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
]

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory))
}

app.innerHTML = `
  <header class="header">
    <div class="header-bottom">
      <div class="avatar-container">
        <div class="avatar-initials">B</div>
      </div>
      <div class="header-info">
        <h1>Bella</h1>
        <div class="status">Consultora de Carreira</div>
      </div>
      <button class="clear-btn" id="clear-btn" title="Limpar conversa">
        <iconify-icon icon="ph:trash-simple"></iconify-icon>
      </button>
    </div>
  </header>

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
`


const chatBox = document.querySelector('#chat-box')
const chatForm = document.querySelector('#chat-form')
const userInput = document.querySelector('#user-input')

function renderMessage(msg) {
  const msgDiv = document.createElement('div')
  msgDiv.className = `message ${msg.isUser ? 'message-user' : 'message-bella'}`
  msgDiv.innerHTML = `
    ${msg.text}
    <span class="time">${msg.time}</span>
  `
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

// Carregar histórico inicial
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

// Keyboard viewport compensation — prevents layout jump on mobile
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => {
    const offset = Math.max(0, window.innerHeight - window.visualViewport.height)
    document.documentElement.style.setProperty('--keyboard-inset', `${offset}px`)
    document.body.classList.toggle('keyboard-open', offset > 80)
    if (offset < 80) chatBox.scrollTop = chatBox.scrollHeight
  })
}

// Clear chat — resets to initial greeting with fresh timestamp
document.querySelector('#clear-btn').addEventListener('click', () => {
  const greeting = {
    text: "Olá! 👋 Eu sou a Bella. Estou aqui para te ajudar a encontrar o curso ideal e transformar sua carreira na beleza. Como posso te ajudar hoje?",
    isUser: false,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  chatHistory = [greeting]
  saveHistory()
  chatBox.innerHTML = ''
  renderMessage(greeting)
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

