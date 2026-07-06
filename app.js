/* ═══════════════════════════════════════════
   CHATTERBOX — Application
   ═══════════════════════════════════════════ */

'use strict';

// ─── EMOJIS ────────────────────────────────

const EMOJIS = [
  '😀','😃','😄','😁','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘',
  '😗','😙','😚','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐',
  '😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢',
  '🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','😮','😯',
  '😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩',
  '😫','🥱','😤','😡','😠','🤬','👋','✋','🖐','✌','🤞','🤟','🤘','🤙','👈','👉',
  '👆','👇','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','💪','🦵',
  '❤','🧡','💛','💚','💙','💜','🖤','💔','💕','💞','💓','💖','💘','💝','⭐','🌟',
  '✨','🔥','💯','🎉','🎊','🎈','🎁','🎀','👑','💄','💍','🐶','🐱','🐭','🐹','🐰',
  '🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🦋','🐙','🐬','🐳',
  '🌵','🌲','🌳','🌴','🌱','🌿','🌸','🌼','🌻','🌞','🌝','🌚','🌙','🌍','🌎','🌏',
  '🌈','☀','⛅','☁','🌧','⛈','❄','🌊','🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇',
  '🍓','🍈','🍒','🍑','🥭','🍍','🍅','🥑','🥦','🥕','🍞','🧀','🍳','🍔','🍟','🍕',
  '🌭','🥪','🍝','🍜','🍲','🍣','🍱','🍰','🎂','🍪','🍩','☕','🍺','🍻','🥂','🍷',
  '🥃','⚽','🏀','🏈','⚾','🎾','🏐','🎱','🏓','🥊','🎽','🎿','🏆','🥇','🥈','🥉',
  '🎮','🎯','🎳','🎲','♟','🎨','🎬','🎤','🎧','🎹','🎸','🎻','🎺','🚗','🚙','🚌',
  '🚓','🚑','🚲','✈','🚁','🚀','🚂','🚆','🚇','🚉','🛸','💻','🖥','📱','📷','📸',
  '📹','📞','📺','📻','⏰','⌛','🔋','💡','🔦','💰','💳','💎','🔧','🔨','🔪','🔫',
  '💊','💉','🔬','🔭','🗺','🏔','🗻','🏠','🏡','🏢','🏥','🏨','🏫','🏛','🗼','🗽',
  '⛪','🎠','🎡','🎢','🏙','🌃','🌄','🌅','🌆','🌇','🌉','🎪','🎭','🎨','🎬','🎤',
];

// ─── CONTACTS DATA ─────────────────────────

const CONTACTS = [
  { id: 'c1', name: 'Alice Johnson', avatar: '👩', color: '#6C5CE7', status: 'online', lastMsg: 'Hey, how are you?', time: '2:30 PM' },
  { id: 'c2', name: 'Bob Smith', avatar: '👨', color: '#00CEC9', status: 'online', lastMsg: 'Sure, sounds good!', time: '1:15 PM' },
  { id: 'c3', name: 'Charlie Davis', avatar: '🧑', color: '#F39C12', status: 'away', lastMsg: 'See you tomorrow!', time: '11:45 AM' },
  { id: 'c4', name: 'Diana Miller', avatar: '👩‍🦰', color: '#E74C3C', status: 'offline', lastMsg: 'Thanks for the help', time: 'Yesterday' },
  { id: 'c5', name: 'Edward Wilson', avatar: '👨‍🦱', color: '#2ECC71', status: 'online', lastMsg: 'Let me check that', time: 'Yesterday' },
  { id: 'c6', name: 'Fiona Brown', avatar: '👩‍🦳', color: '#9B59B6', status: 'offline', lastMsg: 'Perfect, thank you!', time: '2 days ago' },
  { id: 'c7', name: 'George Lee', avatar: '👨‍🦲', color: '#1ABC9C', status: 'away', lastMsg: 'I\'ll send it over', time: '2 days ago' },
  { id: 'c8', name: 'Hannah Taylor', avatar: '👩‍👧', color: '#3498DB', status: 'online', lastMsg: 'Great idea!', time: '3 days ago' },
  { id: 'c9', name: 'Ivan Martinez', avatar: '🧔', color: '#E67E22', status: 'offline', lastMsg: 'Sounds like a plan', time: '3 days ago' },
  { id: 'c10', name: 'Julia Anderson', avatar: '👩‍🎤', color: '#2C3E50', status: 'online', lastMsg: 'Let\'s do it!', time: '4 days ago' },
];

const AUTO_REPLIES = [
  'That\'s interesting! Tell me more. 😊',
  'Sounds great! I\'m on board with that.',
  'Haha, nice one! 😄',
  'Sure, no problem at all!',
  'Thanks for letting me know! 👍',
  'Got it. I\'ll take care of it.',
  'That makes sense. What do you think?',
  'Let me think about that... 🤔',
  'Awesome! Can\'t wait. 🎉',
  'I agree with you on that.',
  'Nice! Keep me posted. 👋',
  'Good point! I hadn\'t thought of that.',
  'Absolutely! 100% agree. 💯',
  'Sure thing! Anytime. 😊',
  'Let\'s catch up soon! ☕',
];

// ─── STATE ─────────────────────────────────

const state = {
  contacts: [],
  messages: {},
  currentContactId: null,
  darkMode: false,
  typingTimers: {},
};

// ─── DOM REFS ──────────────────────────────

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const DOM = {};

function cacheDOM() {
  DOM.appLayout = $('#appLayout');
  DOM.sidebar = $('#sidebar');
  DOM.sidebarOpen = $('#sidebarOpen');
  DOM.sidebarClose = $('#sidebarClose');
  DOM.sidebarOverlay = $('#sidebarOverlay');
  DOM.contactsList = $('#contactsList');
  DOM.contactSearch = $('#contactSearch');
  DOM.themeToggle = $('#themeToggle');

  DOM.chatHeader = $('#chatHeader');
  DOM.chatAvatar = $('#chatAvatar');
  DOM.chatContactName = $('#chatContactName');
  DOM.chatContactStatus = $('#chatContactStatus');
  DOM.messagesContainer = $('#messagesContainer');
  DOM.messagesEmpty = $('#messagesEmpty');
  DOM.messageInput = $('#messageInput');
  DOM.sendBtn = $('#sendBtn');
  DOM.typingIndicator = $('#typingIndicator');
  DOM.typingText = $('#typingText');

  DOM.emojiPicker = $('#emojiPicker');
  DOM.emojiBtn = $('#emojiBtn');
  DOM.emojiClose = $('#emojiClose');
  DOM.emojiGrid = $('#emojiGrid');

  DOM.searchMsgsBtn = $('#searchMsgsBtn');
  DOM.msgSearchBar = $('#msgSearchBar');
  DOM.msgSearchInput = $('#msgSearchInput');
  DOM.msgSearchClose = $('#msgSearchClose');

  DOM.toastContainer = $('#toastContainer');

  DOM.userName = $('#userName');
}

cacheDOM();

// ─── UTILITY ───────────────────────────────

function getFromStorage(key, def) {
  try { return JSON.parse(localStorage.getItem(key)) || def; }
  catch { return def; }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function formatTime(date) {
  const h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${m} ${ampm}`;
}

function formatDate(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msgDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = (today - msgDate) / 86400000;

  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff < 7) return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][msgDate.getDay()];
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function getMessageDate(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

// ─── TOAST ─────────────────────────────────

function showToast(message, type = 'info') {
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${escapeHtml(message)}`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─── DATA INIT ─────────────────────────────

function initData() {
  const savedMessages = getFromStorage('cb_messages', {});
  const savedContacts = getFromStorage('cb_contacts', null);

  // Initialize contacts
  if (savedContacts) {
    state.contacts = savedContacts;
  } else {
    state.contacts = CONTACTS.map(c => ({ ...c, unread: Math.random() > 0.6 ? rand(1, 3) : 0 }));
    saveContacts();
  }

  // Initialize messages
  state.messages = savedMessages;
  if (Object.keys(state.messages).length === 0) {
    // Generate some initial messages
    state.contacts.forEach((contact, idx) => {
      if (idx < 5) {
        const msgs = [];
        const now = new Date();
        for (let i = 0; i < rand(2, 5); i++) {
          const age = rand(1, 72);
          const date = new Date(now.getTime() - age * 3600000);
          msgs.push({
            id: `init-${contact.id}-${i}`,
            text: pick(AUTO_REPLIES),
            sender: i % 2 === 0 ? 'me' : contact.id,
            time: date.toISOString(),
          });
        }
        state.messages[contact.id] = msgs;
      }
    });
    saveMessages();
  }
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[rand(0, arr.length - 1)]; }

function saveContacts() {
  saveToStorage('cb_contacts', state.contacts);
}

function saveMessages() {
  saveToStorage('cb_messages', state.messages);
}

// ─── RENDER CONTACTS ───────────────────────

function renderContacts(filter = '') {
  const q = filter.toLowerCase().trim();
  const filtered = q ? state.contacts.filter(c => c.name.toLowerCase().includes(q)) : state.contacts;

  // Sort: online first, then by last message time
  const sorted = [...filtered].sort((a, b) => {
    const statusOrder = { online: 0, away: 1, offline: 2 };
    const diff = (statusOrder[a.status] || 2) - (statusOrder[b.status] || 2);
    if (diff !== 0) return diff;
    return b.unread - a.unread;
  });

  DOM.contactsList.innerHTML = sorted.map(c => {
    const isActive = c.id === state.currentContactId;
    const statusClass = c.status;
    return `<div class="contact-item${isActive ? ' active' : ''}" data-contact-id="${c.id}">
      <div class="contact-avatar" style="background:${c.color}25">
        <span>${c.avatar}</span>
        <span class="status-dot ${statusClass}"></span>
      </div>
      <div class="contact-info">
        <div class="contact-name">
          ${escapeHtml(c.name)}
          ${c.unread > 0 ? `<span class="unread-badge">${c.unread}</span>` : ''}
        </div>
        <div class="contact-preview">${escapeHtml(c.lastMsg || 'No messages yet')}</div>
      </div>
      <div class="contact-meta">
        <div class="contact-time">${c.time || ''}</div>
        ${c.unread > 0 ? '<span class="unread-dot"></span>' : ''}
      </div>
    </div>`;
  }).join('');
}

// ─── SELECT CONTACT ────────────────────────

function selectContact(contactId) {
  state.currentContactId = contactId;
  const contact = state.contacts.find(c => c.id === contactId);
  if (!contact) return;

  // Clear unread
  contact.unread = 0;
  saveContacts();
  renderContacts(DOM.contactSearch.value);

  // Update header
  DOM.chatAvatar.textContent = contact.avatar;
  DOM.chatContactName.textContent = contact.name;
  const statusText = { online: 'Online', away: 'Away', offline: 'Offline' };
  DOM.chatContactStatus.textContent = statusText[contact.status] || 'Offline';

  // Render messages
  renderMessages(contactId);

  // Close sidebar on mobile
  closeSidebar();

  // Reset message search
  DOM.msgSearchBar.style.display = 'none';
  DOM.msgSearchInput.value = '';

  // Focus input
  DOM.messageInput.focus();

  // Simulate typing after a delay
  simulateTyping(contactId);
}

function simulateTyping(contactId) {
  if (state.typingTimers[contactId]) clearTimeout(state.typingTimers[contactId]);

  state.typingTimers[contactId] = setTimeout(() => {
    if (state.currentContactId !== contactId) return;
    const contact = state.contacts.find(c => c.id === contactId);
    if (!contact) return;

    DOM.typingText.textContent = `${contact.name} is typing...`;
    DOM.typingIndicator.style.display = 'flex';
  }, 5000);
}

function closeSidebar() {
  DOM.sidebar.classList.remove('open');
  DOM.sidebarOverlay.classList.remove('active');
}

// ─── RENDER MESSAGES ───────────────────────

function renderMessages(contactId, searchQuery = '') {
  const msgs = state.messages[contactId] || [];
  const messagesHtml = [];
  let lastDate = null;

  msgs.forEach((msg, i) => {
    const date = new Date(msg.time);
    const dateKey = getMessageDate(date);
    const displayDate = formatDate(date);

    // Date divider
    if (dateKey !== lastDate) {
      messagesHtml.push(`<div class="message-date-divider"><span>${displayDate}</span></div>`);
      lastDate = dateKey;
    }

    const isOwn = msg.sender === 'me';
    const timeStr = formatTime(date);
    const isHighlighted = searchQuery && msg.text.toLowerCase().includes(searchQuery.toLowerCase());

    messagesHtml.push(`<div class="message ${isOwn ? 'own' : 'other'}${isHighlighted ? ' highlight' : ''}" data-msg-id="${msg.id}">
      <div class="message-bubble">${escapeHtml(msg.text)}</div>
      <div class="message-time">${timeStr}</div>
    </div>`);
  });

  if (messagesHtml.length === 0) {
    DOM.messagesContainer.innerHTML = `
      <div class="messages-empty">
        <i class="fas fa-comment-dots" style="font-size:40px"></i>
        <p style="color:var(--text-light);font-size:15px">No messages yet. Say hello! 👋</p>
      </div>`;
  } else {
    DOM.messagesContainer.innerHTML = messagesHtml.join('');
    // Scroll to first match if searching, otherwise to bottom
    if (searchQuery) {
      const firstMatch = DOM.messagesContainer.querySelector('.message.highlight');
      if (firstMatch) firstMatch.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else {
      DOM.messagesContainer.scrollTop = DOM.messagesContainer.scrollHeight;
    }
  }
}

// ─── SEND MESSAGE ──────────────────────────

function sendMessage() {
  const text = DOM.messageInput.value.trim();
  if (!text || !state.currentContactId) return;

  const contact = state.contacts.find(c => c.id === state.currentContactId);
  if (!contact) return;

  const msg = {
    id: `msg-${Date.now()}`,
    text,
    sender: 'me',
    time: new Date().toISOString(),
  };

  if (!state.messages[state.currentContactId]) {
    state.messages[state.currentContactId] = [];
  }
  state.messages[state.currentContactId].push(msg);

  // Update contact preview
  contact.lastMsg = text;
  contact.time = formatTime(new Date());
  saveMessages();
  saveContacts();

  DOM.messageInput.value = '';
  renderMessages(state.currentContactId, DOM.msgSearchInput.value);
  renderContacts(DOM.contactSearch.value);

  // Simulate reply
  setTimeout(() => simulateReply(state.currentContactId), rand(1000, 3000));
}

function simulateReply(contactId) {
  if (state.currentContactId !== contactId) return;
  const contact = state.contacts.find(c => c.id === contactId);
  if (!contact) return;

  setTimeout(() => {
    if (state.currentContactId !== contactId) return;

    DOM.typingIndicator.style.display = 'none';

    if (state.currentContactId !== contactId) return;

    const reply = pick(AUTO_REPLIES);
    const msg = {
      id: `reply-${Date.now()}`,
      text: reply,
      sender: contactId,
      time: new Date().toISOString(),
    };

    state.messages[contactId].push(msg);
    contact.lastMsg = reply;
    contact.time = formatTime(new Date());

    // If this contact is not the active one, increment unread
    if (contactId !== state.currentContactId) {
      contact.unread = (contact.unread || 0) + 1;
    }

    saveMessages();
    saveContacts();
    renderMessages(state.currentContactId, DOM.msgSearchInput.value);
    renderContacts(DOM.contactSearch.value);

    // Schedule next typing
    simulateTyping(contactId);
  }, rand(1500, 3000));
}

// ─── EMOJI PICKER ──────────────────────────

function initEmojiPicker() {
  DOM.emojiGrid.innerHTML = EMOJIS.map(e => `<div class="emoji-item" data-emoji="${e}">${e}</div>`).join('');

  DOM.emojiGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.emoji-item');
    if (!item) return;
    DOM.messageInput.value += item.dataset.emoji;
    DOM.messageInput.focus();
  });

  DOM.emojiBtn.addEventListener('click', () => {
    DOM.emojiPicker.classList.toggle('active');
  });

  DOM.emojiClose.addEventListener('click', () => {
    DOM.emojiPicker.classList.remove('active');
  });

  // Close emoji picker on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.emoji-picker') && !e.target.closest('#emojiBtn')) {
      DOM.emojiPicker.classList.remove('active');
    }
  });
}

// ─── SEARCH MESSAGES ───────────────────────

DOM.searchMsgsBtn.addEventListener('click', () => {
  DOM.msgSearchBar.style.display = 'flex';
  DOM.msgSearchInput.focus();
});

DOM.msgSearchClose.addEventListener('click', () => {
  DOM.msgSearchBar.style.display = 'none';
  DOM.msgSearchInput.value = '';
  if (state.currentContactId) renderMessages(state.currentContactId);
});

DOM.msgSearchInput.addEventListener('input', () => {
  if (state.currentContactId) renderMessages(state.currentContactId, DOM.msgSearchInput.value);
});

// ─── INPUT EVENTS ──────────────────────────

DOM.messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

DOM.sendBtn.addEventListener('click', sendMessage);

// ─── SIDEBAR EVENTS ────────────────────────

DOM.sidebarOpen.addEventListener('click', () => {
  DOM.sidebar.classList.add('open');
  DOM.sidebarOverlay.classList.add('active');
});

DOM.sidebarClose.addEventListener('click', closeSidebar);
DOM.sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebar();
    DOM.emojiPicker.classList.remove('active');
    DOM.msgSearchBar.style.display = 'none';
  }
});

// ─── CONTACT EVENTS (delegation) ───────────

DOM.contactsList.addEventListener('click', (e) => {
  const item = e.target.closest('.contact-item');
  if (!item || !item.dataset.contactId) return;
  selectContact(item.dataset.contactId);
});

DOM.contactSearch.addEventListener('input', () => {
  renderContacts(DOM.contactSearch.value);
});

// ─── THEME TOGGLE ──────────────────────────

function initTheme() {
  state.darkMode = getFromStorage('cb_darkmode', false);
  if (state.darkMode) {
    document.body.classList.add('dark');
    DOM.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

DOM.themeToggle.addEventListener('click', () => {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark', state.darkMode);
  DOM.themeToggle.innerHTML = state.darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  saveToStorage('cb_darkmode', state.darkMode);
});

// ─── KEYBOARD SHORTCUTS ────────────────────

document.addEventListener('keydown', (e) => {
  // Ctrl+K or Cmd+K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    DOM.contactSearch.focus();
  }
});

// ─── INIT ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEmojiPicker();
  initData();
  renderContacts();

  // Select first contact by default
  if (state.contacts.length > 0) {
    selectContact(state.contacts[0].id);
  }
});
