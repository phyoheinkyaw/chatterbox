<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Status-Complete-success?style=for-the-badge" alt="Status"/>
  <br/>
  <br/>
  <h1>💬 ChatterBox</h1>
  <h3>Realistic Messaging App</h3>
  <p>A fully interactive chat application with contacts, emoji picker, message search, dark mode, and simulated conversations — all in vanilla HTML, CSS & JavaScript.</p>
  <br/>
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#keyboard-shortcuts">Keyboard Shortcuts</a> •
  <a href="#deployment">Deployment</a>
  <br/>
  <br/>
</div>

---

## ✨ Features

### 💬 Chat Interface
- 10 contacts with online/offline/away status indicators
- Realistic simulated conversations with contextual auto-replies
- Message bubbles with own/other styling and timestamps
- Date dividers between conversation days
- Typing indicator animation (bouncing dots)

### 😊 Emoji Picker
- 1,800+ emojis in a searchable grid
- Click to insert into message input
- Smooth slide-up animation with backdrop
- Closes on click outside or Escape

### 🔍 Search
- **Contact search:** Real-time filtering, Ctrl+K / Cmd+K shortcut
- **Message search:** Find within current conversation, highlight matches

### 🌙 Dark Mode
- One-click toggle with moon/sun button
- Full dark theme with adjusted colors and contrasts
- Persistent preference via `localStorage`

### 📱 Responsive Design
- Mobile sidebar with overlay backdrop
- Slide-in contacts panel on small screens
- Adaptive message widths
- Touch-friendly tap targets

### 💾 Data Persistence
- Messages saved to `localStorage` per contact
- Unread message counts preserved
- Dark mode preference saved
- Contacts and conversation history maintained across sessions

### ♿ Accessibility
- Skip-to-content navigation
- `aria-current` on active contacts
- `:focus-visible` keyboard focus indicators
- `prefers-reduced-motion` support
- `aria-live` regions for new messages
- `aria-expanded` on toggles

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic app layout |
| **CSS3** | Custom properties, dark/light themes, animations |
| **JavaScript (Vanilla ES6)** | Chat engine, emoji picker, localStorage |
| **Google Fonts** | Inter (system font) |
| **Font Awesome 6** | UI icons |

### Design System
- **Colors (Light):** Purple (#6C5CE7), White (#FFF), Light Gray (#F0F0F5)
- **Colors (Dark):** Dark Navy (#1A1A2E), Deep Purple (#2D2D44)
- **Message colors:** Sent (purple gradient), Received (light gray)
- **Status:** Green (online), Gray (offline), Yellow (away)

---

## 📁 Project Structure

```
chatterbox/
├── README.md           # You are here
├── index.html          # App layout + sidebar + emoji picker
├── style.css           # Full design system + dark mode
└── app.js              # Chat engine, contacts, emojis
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/phyoheinkyaw/chatterbox.git
cd chatterbox

# Open directly or use:
python -m http.server 8000
# → http://localhost:8000
```

### Deploy to GitHub Pages
```bash
cd chatterbox
git init && git add . && git commit -m "Initial commit: ChatterBox"
git branch -M main
git remote add origin https://github.com/your-username/chatterbox.git
git push -u origin main
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Send message |
| `Shift + Enter` | New line in message |
| `Escape` | Close sidebar / emoji picker / search |
| `Ctrl+K` / `Cmd+K` | Focus contact search |

---

## 💬 Example Conversations

ChatterBox comes with 10 pre-loaded contacts across different contexts:

| Contact | Context | Messages |
|---------|---------|----------|
| 🐱 Sarah Chen | Weekend plans | 8 |
| 🐶 Marcus Johnson | Project feedback | 6 |
| 🐰 Emily Rodriguez | Birthday dinner | 5 |
| 🦊 David Kim | Tech meetup | 4 |
| 🐻 Olivia Martinez | Book club | 7 |
| 🐼 James Wilson | Coffee catch-up | 8 |
| 🦁 Sophia Lee | Yoga class | 5 |
| 🐨 Ethan Brown | Gaming session | 6 |
| 🦊 Mia Garcia | Photography | 4 |
| 🐷 Noah Williams | Concert plans | 6 |

---

## 📱 Responsive Breakpoints

| Device | Layout |
|--------|--------|
| < 480px | Full-width chat, sidebar as overlay |
| 480–768px | Compact sidebar, collapsible |
| > 768px | Side-by-side layout (280px sidebar + chat) |

---

<div align="center">
  <br/>
  <p>Built with ❤️ using pure HTML, CSS & JavaScript</p>
  <p>
    <small>
      <a href="https://github.com/phyoheinkyaw">GitHub</a> •
      <a href="https://phyoheinkyaw.github.io/chatterbox/">Live Demo</a>
    </small>
  </p>
  <br/>
</div>
