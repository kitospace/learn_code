# CodeCraft — Learn C++ & Python

A free, self-paced educational website for learning **C++** and **Python** — from absolute beginner to advanced level.

Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no installation required — open `index.html` in any browser and start learning.

---

## Live Preview

Open `index.html` in your browser or serve the folder locally:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

Then visit `http://localhost:8080`.

---

## Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Hero, features, roadmap preview, testimonials |
| Learning Paths | `pages/learn.html` | Full C++ & Python topic lists, Beginner → Advanced |
| Lessons | `pages/lesson.html` | Lesson content, sidebar navigation, live code editor |
| Quizzes | `pages/quiz.html` | MCQ engine, fill-in-the-blank, topic selector |
| Projects | `pages/projects.html` | 12 guided projects with step-by-step modal |
| Cheat Sheet | `pages/cheatsheet.html` | Quick-reference with TOC, search, C++ vs Python view |

---

## Features

- **Dark / Light mode** — theme persists via `localStorage`
- **Live code editor** — write and simulate C++ & Python output in-browser
- **Quiz engine** — 4 topic sets (Mixed, C++ Variables, C++ Pointers, Python Basics) with instant feedback
- **Project modals** — step-by-step guides for 12 beginner-to-advanced projects
- **Cheat sheet** — collapsible sections, sticky tabs, TOC sidebar, live search, side-by-side C++ vs Python comparison
- **Progress tracking** — completed lessons tracked in `localStorage`, no account needed
- **Bookmark lessons** — toggle bookmarks per lesson, persisted locally
- **Scroll animations** — IntersectionObserver-based fade-in
- **Counter animations** — stats count up on scroll
- **Responsive** — mobile menu, single-column layout on small screens
- **Syntax highlighting** — Highlight.js (CDN) on all code blocks
- **URL parameters** — `learn.html?lang=cpp` or `?lang=python` scrolls to the correct column

---

## Topics Covered

### C++

| Level | Topics |
|---|---|
| **Basic** | Hello World, Variables & Types, Operators, Control Flow, Loops, Functions, Arrays & Strings, Pointers & References |
| **Intermediate** | Classes & Objects, Inheritance, Polymorphism, STL (vector/map/set), File I/O, Exception Handling, Templates, Lambdas |
| **Advanced** | Smart Pointers, Move Semantics, Multithreading, DSA — Sorting, DSA — Trees & Graphs, Design Patterns |

### Python

| Level | Topics |
|---|---|
| **Basic** | Hello World, Variables & Types, Operators, Control Flow, Loops, Functions, Lists & Tuples, Dicts & Sets |
| **Intermediate** | Classes & OOP, Comprehensions, Decorators, Modules & Packages, File I/O, Error Handling, Iterators & Generators |
| **Advanced** | Async/Await, Metaclasses, Context Managers, DSA — Sorting, DSA — Trees & Graphs, ML Basics (NumPy) |

---

## Project Structure

```
PythonNCpp/
├── index.html              # Home page
├── pages/
│   ├── learn.html          # Learning path (C++ & Python)
│   ├── lesson.html         # Lesson viewer with editor
│   ├── quiz.html           # Quiz engine
│   ├── projects.html       # Projects gallery
│   ├── cheatsheet.html     # Quick-reference cheat sheet
│   └── 404.html            # Not found page
├── css/
│   └── style.css           # All styles (~975 lines)
└── js/
    └── app.js              # All interactivity (~480 lines)
```

---

## Tech Stack

| Layer | Tool |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Scripting | Vanilla JavaScript (ES2020) |
| Fonts | JetBrains Mono (code), Sora (body) via Google Fonts |
| Highlighting | Highlight.js 11.9 (CDN) |
| Persistence | `localStorage` (no backend required) |

---

## Design System

- **Background:** Deep navy `#0a0e1a` (dark) · `#f0f4ff` (light)
- **C++ accent:** Electric cyan `#00d9ff`
- **Python accent:** Lime green `#39ff8a`
- **Code font:** JetBrains Mono
- **Body font:** Sora
- **Grid overlay:** CSS `background-image` grid for terminal feel

---

## License

MIT — free to use, fork, and modify.
