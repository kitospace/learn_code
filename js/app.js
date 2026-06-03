/* ===========================
   CODECRAFT — app.js
   =========================== */

/* ─── Theme (runs immediately, before DOM) ─── */
(function () {
  const saved = localStorage.getItem('cc_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

/* ─── Helpers ─── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ─── Theme Toggle ─── */
function initThemeToggle() {
  const btn = $('#themeToggle');
  if (!btn) return;
  const update = (t) => { btn.textContent = t === 'dark' ? '☀️' : '🌙'; };
  update(document.documentElement.getAttribute('data-theme'));
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cc_theme', next);
    update(next);
  });
}

/* ─── Mobile Menu ─── */
function initMobileMenu() {
  const hamburger = $('#hamburger');
  const menu = $('#mobileMenu');
  const close = $('#mobileClose');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => menu.classList.add('open'));
  close?.addEventListener('click', () => menu.classList.remove('open'));
  menu.addEventListener('click', (e) => { if (e.target === menu) menu.classList.remove('open'); });
}

/* ─── Active Nav ─── */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach((link) => {
    link.classList.remove('active');
    const href = (link.getAttribute('href') || '').split('/').pop().split('?')[0];
    if (href === path) link.classList.add('active');
  });
}

/* ─── Scroll Animations ─── */
function initScrollAnimations() {
  const els = $$('.animate-fade-up, .animate-fade');
  if (!els.length) return;
  // Start hidden; observer reveals on scroll-into-view
  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = el.classList.contains('animate-fade-up') ? 'translateY(28px)' : 'none';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Small stagger if the element has a delay class
        const el = entry.target;
        const delay = el.classList.contains('delay-4') ? 400
          : el.classList.contains('delay-3') ? 300
          : el.classList.contains('delay-2') ? 200
          : el.classList.contains('delay-1') ? 100 : 0;
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  els.forEach((el) => io.observe(el));
}

/* ─── Counter Animation ─── */
function initCounters() {
  $$('.stat-num[data-target]').forEach((el) => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
  });
}

/* ─── Typing Animation (hero) ─── */
function initTypingAnimation() {
  const el = $('#typingText');
  if (!el) return;
  const lines = ['master C++ & Python', 'build real projects', 'ace coding interviews', 'understand algorithms'];
  let li = 0, ci = 0, del = false;
  function tick() {
    const line = lines[li];
    if (!del) {
      el.textContent = line.slice(0, ++ci);
      if (ci === line.length) { del = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = line.slice(0, --ci);
      if (ci === 0) { del = false; li = (li + 1) % lines.length; }
    }
    setTimeout(tick, del ? 40 : 80);
  }
  tick();
}

/* ─── Roadmap Tabs + Accordion ─── */
function initRoadmapTabs() {
  $$('.roadmap-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const lang = tab.dataset.lang;
      $$('.roadmap-tab').forEach((t) => t.classList.remove('active', 'cpp', 'python'));
      tab.classList.add('active', lang);
      $$('.roadmap-content').forEach((c) => c.classList.remove('active'));
      $('#roadmap-' + lang)?.classList.add('active');
    });
  });
  $$('.stage-header').forEach((h) => {
    h.addEventListener('click', () => h.closest('.roadmap-stage').classList.toggle('open'));
  });
}

/* ─── Copy Buttons ─── */
function initCopyButtons() {
  $$('.copy-btn').forEach((btn) => {
    // Avoid double-binding
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const block = btn.closest('.code-block');
      const text = (block?.querySelector('pre code') || block?.querySelector('pre'))?.textContent || '';
      navigator.clipboard.writeText(text.trim()).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓';
        btn.style.color = 'var(--python-color)';
        setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1600);
      }).catch(() => {});
    });
  });
}

/* ─── Search (Learn / Cheatsheet) ─── */
function initSearch() {
  const input = $('#searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    $$('[data-searchable]').forEach((el) => {
      const match = !q || el.textContent.toLowerCase().includes(q);
      el.style.display = match ? '' : 'none';
    });
    // Hide orphaned section dividers on learn page
    $$('.stage-divider').forEach((div) => {
      const topicList = div.nextElementSibling;
      if (!topicList) return;
      const visible = $$('[data-searchable]', topicList).some((el) => el.style.display !== 'none');
      div.style.display = visible || !q ? '' : 'none';
      topicList.style.display = visible || !q ? '' : 'none';
    });
  });
}

/* ─── Learn Page — URL param ─── */
function initLearnPage() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (!lang) return;
  // Scroll to the matching column
  const col = $('#col-' + lang);
  if (col) {
    setTimeout(() => col.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    // Dim the other column
    $$('.path-col').forEach((c) => {
      c.style.transition = 'opacity 0.4s ease';
      c.style.opacity = c.id === 'col-' + lang ? '1' : '0.35';
    });
    // Add a highlight banner
    const header = col.querySelector('.path-col-header');
    if (header && !header.querySelector('.lang-highlight-banner')) {
      const banner = document.createElement('div');
      banner.className = 'lang-highlight-banner';
      banner.style.cssText = `display:inline-flex;align-items:center;gap:0.5rem;padding:0.3rem 0.85rem;border-radius:100px;font-size:0.75rem;font-weight:700;font-family:var(--font-code);background:${lang==='cpp'?'var(--cpp-dim)':'var(--python-dim)'};color:${lang==='cpp'?'var(--cpp-color)':'var(--python-color)'};border:1px solid ${lang==='cpp'?'rgba(0,217,255,0.3)':'rgba(57,255,138,0.3)'};margin-top:0.5rem`;
      banner.textContent = '← You selected this path';
      header.appendChild(banner);
    }
  }
}

/* ─── Filter Buttons (Projects) ─── */
function initFilters() {
  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      $$('[data-filter]').forEach((card) => {
        const show = filter === 'all' || card.dataset.filter.split(' ').includes(filter);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ─── Progress Tracking ─── */
const Progress = {
  key: 'cc_progress',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  save(d) { localStorage.setItem(this.key, JSON.stringify(d)); },
  markDone(id) { const d = this.get(); d[id] = true; this.save(d); },
  unmark(id) { const d = this.get(); delete d[id]; this.save(d); },
  isDone(id) { return !!this.get()[id]; },
  count() { return Object.keys(this.get()).length; },
};

function initProgressTracking() {
  // Sidebar lesson links — use data-topic if present, else slugify text
  $$('.sidebar-link[data-topic]').forEach((link) => {
    const id = link.dataset.topic;
    if (Progress.isDone(id)) link.classList.add('done');
    link.addEventListener('click', () => {
      Progress.markDone(id);
      link.classList.add('done');
    });
  });

  // Bookmark button — requires data-bookmark attr
  $$('[data-bookmark]').forEach((btn) => {
    const id = 'bm_' + btn.dataset.bookmark;
    if (localStorage.getItem(id)) {
      btn.textContent = '🔖 Bookmarked';
      btn.style.color = 'var(--cpp-color)';
    }
    btn.addEventListener('click', () => {
      const isBookmarked = !!localStorage.getItem(id);
      if (isBookmarked) {
        localStorage.removeItem(id);
        btn.textContent = '🔖 Bookmark';
        btn.style.color = '';
      } else {
        localStorage.setItem(id, '1');
        btn.textContent = '🔖 Bookmarked';
        btn.style.color = 'var(--cpp-color)';
      }
    });
  });
}

function initProgressDashboard() {
  const section = $('#progressSection');
  if (!section) return;
  section.style.display = 'none'; // start hidden
  const count = Progress.count();
  if (count === 0) return;
  section.style.display = 'block';
  const countEl = $('#progressCount');
  const barEl = $('#progressBar');
  if (countEl) countEl.textContent = count + ' topic' + (count !== 1 ? 's' : '');
  if (barEl) setTimeout(() => { barEl.style.width = Math.min((count / 46) * 100, 100) + '%'; }, 250);
}

/* ─── Quiz Engine ─── */
const QUIZ_SETS = {
  mixed: [
    { type:'MCQ', lang:'cpp', text:'What is the correct syntax to declare an integer variable in C++?', options:['int x = 5;','integer x = 5;','var x = 5;','x: int = 5;'], answer:0, explanation:'In C++, the <code>int</code> keyword declares an integer variable followed by the variable name and optional initializer.' },
    { type:'MCQ', lang:'python', text:'Which of the following creates a list in Python?', options:['my_list = (1, 2, 3)','my_list = {1, 2, 3}','my_list = [1, 2, 3]','my_list = &lt;1, 2, 3&gt;'], answer:2, explanation:'Square brackets <code>[]</code> create a list. Parentheses create a tuple; curly braces create a set or dict.' },
    { type:'MCQ', lang:'cpp', text:'What does the <code>*</code> operator do when used on an existing pointer?', options:['Multiplies the pointer','Dereferences the pointer','Declares a pointer','Deletes the pointer'], answer:1, explanation:'Applying <code>*</code> to an existing pointer <em>dereferences</em> it — it gives you the value stored at that memory address.' },
    { type:'MCQ', lang:'python', text:'What is the output of <code>print(type([]))</code>?', options:["&lt;class 'array'&gt;","&lt;class 'list'&gt;","&lt;class 'tuple'&gt;","&lt;class 'dict'&gt;"], answer:1, explanation:'<code>[]</code> is an empty list, so <code>type([])</code> returns <code>&lt;class \'list\'&gt;</code>.' },
    { type:'MCQ', lang:'cpp', text:'Which header file is needed to use <code>cout</code> in C++?', options:['&lt;stdio.h&gt;','&lt;iostream&gt;','&lt;conio.h&gt;','&lt;string&gt;'], answer:1, explanation:'<code>&lt;iostream&gt;</code> provides standard I/O stream objects including <code>cout</code> and <code>cin</code>.' },
  ],
  'cpp-variables': [
    { type:'MCQ', lang:'cpp', text:'Which of these is a valid C++ variable name?', options:['2myVar','my-var','_myVar','my var'], answer:2, explanation:'Variable names in C++ can start with a letter or underscore, not a digit or hyphen, and cannot contain spaces.' },
    { type:'MCQ', lang:'cpp', text:'What is the size of an <code>int</code> on most 64-bit systems?', options:['2 bytes','4 bytes','8 bytes','Depends on the value'], answer:1, explanation:'On most modern 64-bit systems, <code>int</code> is 4 bytes (32 bits), holding values from -2,147,483,648 to 2,147,483,647.' },
    { type:'MCQ', lang:'cpp', text:'What keyword makes a variable constant in modern C++?', options:['final','const','#define','static'], answer:1, explanation:'The <code>const</code> keyword declares a variable as immutable after initialization. <code>#define</code> is a preprocessor macro, not a variable.' },
    { type:'MCQ', lang:'cpp', text:'What does <code>auto x = 3.14;</code> do in C++11+?', options:['Error — auto is not valid','Declares x as int','Declares x as double','Declares x as float'], answer:2, explanation:'<code>auto</code> deduces the type at compile time. Since <code>3.14</code> is a double literal, <code>x</code> becomes <code>double</code>.' },
    { type:'MCQ', lang:'cpp', text:'What is the output of <code>cout &lt;&lt; 7/2;</code>?', options:['3.5','3','4','Error'], answer:1, explanation:'Both operands are integers, so C++ performs integer division: 7/2 = 3 (remainder discarded). Use <code>7.0/2</code> for floating-point division.' },
  ],
  'cpp-pointers': [
    { type:'MCQ', lang:'cpp', text:'What operator gives you the address of a variable?', options:['*','&','->','::'], answer:1, explanation:'The <code>&</code> (address-of) operator returns the memory address of a variable.' },
    { type:'MCQ', lang:'cpp', text:'What is a NULL pointer in modern C++?', options:['A pointer to 0','A pointer to an empty string','nullptr','void*'], answer:2, explanation:'In modern C++, use <code>nullptr</code> (not NULL or 0) to represent a null pointer — it is type-safe and unambiguous.' },
    { type:'MCQ', lang:'cpp', text:'If <code>int* p = &x;</code> then <code>*p = 5;</code> does what?', options:['Sets p to 5','Sets x to 5','Creates a new variable','Causes undefined behaviour'], answer:1, explanation:'Dereferencing <code>p</code> with <code>*p</code> accesses the value at the address stored in p — which is x — so x is set to 5.' },
    { type:'MCQ', lang:'cpp', text:'What is a dangling pointer?', options:['A pointer to null','A pointer to freed/out-of-scope memory','An uninitialized pointer','A pointer to a const variable'], answer:1, explanation:'A dangling pointer points to memory that has already been freed or has gone out of scope — accessing it is undefined behaviour.' },
  ],
  'python-basics': [
    { type:'MCQ', lang:'python', text:'What is the result of <code>3 ** 2</code> in Python?', options:['6','9','8','Error'], answer:1, explanation:'<code>**</code> is the exponentiation operator in Python. <code>3 ** 2</code> = 3² = 9.' },
    { type:'MCQ', lang:'python', text:'Which statement correctly swaps two variables <code>a</code> and <code>b</code> in Python?', options:['temp=a; a=b; b=temp','a,b = b,a','swap(a,b)','a=b; b=a'], answer:1, explanation:'Python supports tuple packing/unpacking, so <code>a, b = b, a</code> swaps them in one line without a temporary variable.' },
    { type:'MCQ', lang:'python', text:'What does <code>type(True)</code> return in Python?', options:["&lt;class 'bool'&gt;","&lt;class 'int'&gt;","&lt;class 'str'&gt;","True"], answer:0, explanation:'<code>bool</code> is a separate type in Python (though it is a subclass of int). <code>type(True)</code> returns <code>&lt;class \'bool\'&gt;</code>.' },
    { type:'MCQ', lang:'python', text:'What is the output of <code>print(10 // 3)</code>?', options:['3.33','3','4','10'], answer:1, explanation:'<code>//</code> is the floor division operator — it divides and rounds down to the nearest integer: 10 // 3 = 3.' },
    { type:'MCQ', lang:'python', text:'Which keyword defines a function in Python?', options:['function','func','def','fn'], answer:2, explanation:'Python uses <code>def</code> to define a function: <code>def my_func():</code>.' },
  ],
};

function initQuiz() {
  const container = $('#quizContainer');
  if (!container) return;

  let currentSet = 'mixed';
  let current = 0, score = 0, answered = false;

  const titleEl = $('#quizTitle');
  const setLabels = {
    mixed: 'Mixed Quiz — C++ & Python',
    'cpp-variables': 'C++ Variables Quiz',
    'cpp-pointers': 'C++ Pointers Quiz',
    'python-basics': 'Python Basics Quiz',
  };

  // Topic card selection
  $$('.quiz-topic-card').forEach((card) => {
    card.addEventListener('click', () => {
      $$('.quiz-topic-card').forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      const setKey = card.dataset.quizSet || 'mixed';
      currentSet = setKey;
      current = 0; score = 0; answered = false;
      if (titleEl) titleEl.textContent = setLabels[setKey] || 'Quiz';
      // Scroll to quiz area
      $('#quizContainer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateMeta();
      render();
    });
  });

  function questions() { return QUIZ_SETS[currentSet] || QUIZ_SETS.mixed; }

  function updateMeta() {
    const qs = questions();
    $('#quizTotal') && ($('#quizTotal').textContent = qs.length);
    $('#quizCurrent') && ($('#quizCurrent').textContent = current + 1);
    $('#quizScore') && ($('#quizScore').textContent = score);
    $('#quizProgressFill') && ($('#quizProgressFill').style.width = ((current / qs.length) * 100) + '%');
  }

  function render() {
    const qs = questions();
    if (current >= qs.length) {
      const pct = Math.round((score / qs.length) * 100);
      const emoji = pct === 100 ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '📚' : '💪';
      container.innerHTML = `
        <div class="question-card" style="text-align:center;padding:3rem 2rem">
          <div style="font-size:4.5rem;margin-bottom:1.25rem">${emoji}</div>
          <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:0.5rem">Quiz Complete!</h2>
          <p style="color:var(--text-secondary);margin-bottom:0.5rem">You scored</p>
          <div style="font-size:2.5rem;font-weight:900;font-family:var(--font-code);background:linear-gradient(90deg,var(--cpp-color),var(--python-color));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.5rem">${score} / ${qs.length}</div>
          <div style="height:8px;background:var(--bg-secondary);border-radius:4px;max-width:280px;margin:0 auto 2rem;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--cpp-color),var(--python-color));border-radius:4px;transition:width 1s ease"></div>
          </div>
          <button class="hero-btn hero-btn-cpp" style="margin:0 auto;display:inline-flex" onclick="(function(){window._quizRestart&&window._quizRestart()})()">↺ Try Again</button>
        </div>`;
      setTimeout(() => container.querySelector('.hero-btn')?.querySelector('div + div')?.style?.setProperty('width', pct + '%'), 100);
      return;
    }
    answered = false;
    const q = qs[current];
    updateMeta();
    const langColor = q.lang === 'cpp' ? 'var(--cpp-color)' : 'var(--python-color)';
    const langBg = q.lang === 'cpp' ? 'var(--cpp-dim)' : 'var(--python-dim)';
    container.innerHTML = `
      <div class="question-card" style="opacity:0;transform:translateY(16px);transition:opacity 0.3s ease,transform 0.3s ease">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
          <span class="question-type" style="margin:0">${q.type}</span>
          <span style="padding:0.2rem 0.65rem;border-radius:100px;font-family:var(--font-code);font-size:0.7rem;font-weight:700;background:${langBg};color:${langColor};border:1px solid ${langColor}40">${q.lang.toUpperCase()}</span>
        </div>
        <p class="question-text">${q.text}</p>
        <div class="options-grid">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-idx="${i}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
        <div class="quiz-feedback" id="qFeedback"></div>
        <div class="quiz-actions">
          <button class="btn btn-outline" id="skipBtn">Skip →</button>
          <button class="btn btn-primary" id="nextBtn" style="display:none">Next Question →</button>
        </div>
      </div>`;

    // Fade in
    requestAnimationFrame(() => {
      const card = container.querySelector('.question-card');
      if (card) { card.style.opacity = '1'; card.style.transform = 'none'; }
    });

    container.querySelectorAll('.option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const idx = parseInt(btn.dataset.idx);
        const feedback = $('#qFeedback');
        container.querySelectorAll('.option-btn').forEach((b, i) => {
          b.disabled = true;
          if (i === q.answer) b.classList.add('correct');
          else if (i === idx) b.classList.add('wrong');
        });
        if (idx === q.answer) {
          score++;
          $('#quizScore') && ($('#quizScore').textContent = score);
          feedback.className = 'quiz-feedback visible correct';
          feedback.innerHTML = '<strong>✓ Correct!</strong> ' + q.explanation;
        } else {
          feedback.className = 'quiz-feedback visible wrong';
          feedback.innerHTML = '<strong>✗ Not quite.</strong> ' + q.explanation;
        }
        const nextBtn = $('#nextBtn');
        nextBtn.style.display = 'inline-flex';
        nextBtn.addEventListener('click', () => { current++; render(); }, { once: true });
      });
    });
    $('#skipBtn')?.addEventListener('click', () => { current++; render(); }, { once: true });
  }

  window._quizRestart = () => { current = 0; score = 0; answered = false; updateMeta(); render(); };
  updateMeta();
  render();
}

/* ─── Lesson Code Editor ─── */
function initLessonEditor() {
  const textarea = $('#codeEditor');
  const runBtn = $('#runBtn');
  const output = $('#editorOutput');
  if (!textarea || !runBtn || !output) return;

  const snippets = {
    cpp: `#include <iostream>
using namespace std;

int main() {
    string name = "World";
    cout << "Hello, " << name << "!" << endl;

    for (int i = 1; i <= 5; i++) {
        cout << "Count: " << i << endl;
    }
    return 0;
}`,
    python: `# Python Hello World
name = "World"
print(f"Hello, {name}!")

# Loop example
for i in range(1, 6):
    print(f"Count: {i}")`,
  };

  // Detect current lang from URL (lessons.js may have already set editor content)
  const urlLang = new URLSearchParams(window.location.search).get('lang') || 'cpp';
  let lang = urlLang === 'python' ? 'python' : 'cpp';

  // Only set default code if lessons.js has NOT already populated the editor
  if (!textarea.value.trim()) {
    textarea.value = snippets[lang];
  }

  // Sync the active lang-switch button to match current lang
  $$('.lang-switch-btn').forEach((b) => {
    b.classList.remove('active', 'cpp', 'python');
    if (b.dataset.lang === lang) b.classList.add('active', lang);
  });

  // Capture the initial code (set by lessons.js or the default above)
  let initialCode = textarea.value;

  $$('.lang-switch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.lang-switch-btn').forEach((b) => b.classList.remove('active', 'cpp', 'python'));
      btn.classList.add('active', btn.dataset.lang);
      lang = btn.dataset.lang;
      // When manually switching language, load the generic snippet for that language
      textarea.value = snippets[lang];
      initialCode = snippets[lang];
      output.innerHTML = '<span class="output-line info">// Output will appear here</span>';
    });
  });

  // Smart output: inspects what print/cout calls exist in the code
  function simulateOutput(code, language) {
    const lines = [];
    if (language === 'python') {
      const printRe = /print\s*\(\s*(?:f?["']([^"']*?)["']|([^)]+))\s*\)/g;
      let m;
      while ((m = printRe.exec(code)) !== null) {
        const raw = (m[1] || m[2] || '').trim();
        // Evaluate simple f-string patterns like f"Count: {i}"
        lines.push(raw.replace(/\{[^}]+\}/g, '<value>'));
      }
      if (!lines.length) lines.push('(no output)');
    } else {
      const coutRe = /cout\s*<<\s*"([^"]+)"/g;
      let m;
      while ((m = coutRe.exec(code)) !== null) lines.push(m[1]);
      if (!lines.length) lines.push('(no output)');
    }
    return lines.slice(0, 12);
  }

  runBtn.addEventListener('click', () => {
    output.innerHTML = `<span class="output-line info">▶ Running ${lang === 'python' ? 'Python' : 'C++'}...</span>`;
    setTimeout(() => {
      const outLines = simulateOutput(textarea.value, lang);
      output.innerHTML =
        `<span class="output-line info output-prompt">$ program output:</span>\n` +
        outLines.map((l) => `<span class="output-line success">${escHtml(l)}</span>`).join('\n');
    }, 500);
  });

  $('#resetBtn')?.addEventListener('click', () => {
    textarea.value = initialCode;
    output.innerHTML = '<span class="output-line info">// Output will appear here</span>';
  });

  // Tab key indentation
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = textarea.selectionStart, end = textarea.selectionEnd;
      textarea.value = textarea.value.slice(0, s) + '    ' + textarea.value.slice(end);
      textarea.selectionStart = textarea.selectionEnd = s + 4;
    }
  });
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ─── highlight.js ─── */
function initHighlightJS() {
  if (typeof hljs === 'undefined') return;
  document.querySelectorAll('pre code').forEach((el) => hljs.highlightElement(el));
}

/* ─── Cheatsheet Tabs ─── */
function initCheatsheetTabs() {
  $$('.cs-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const lang = tab.dataset.cs;
      $$('.cs-tab').forEach((t) => t.classList.remove('active', 'cpp', 'python'));
      tab.classList.add('active', lang);
      $$('.cs-content').forEach((c) => c.classList.remove('active'));
      $('#cs-' + lang)?.classList.add('active');
      // Re-highlight any newly visible code blocks
      setTimeout(initHighlightJS, 50);
    });
  });
}

/* ─── Cheatsheet Sections (collapsible) ─── */
function initCheatsheetSections() {
  $$('.cs-section-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.cs-section');
      section?.classList.toggle('collapsed');
    });
  });
}

/* ─── Cheatsheet Copy ─── */
function initCheatsheetCopy() {
  $$('.cs-copy-btn').forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const block = btn.closest('.cs-snippet, .cheat-card');
      const text = (block?.querySelector('pre code') || block?.querySelector('pre'))?.textContent?.trim() || '';
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓';
        btn.style.color = 'var(--python-color)';
        setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1600);
      }).catch(() => {});
    });
  });
}

/* ─── Projects Modal ─── */
function initProjectModals() {
  // Close on backdrop click
  $('#projectModal')?.addEventListener('click', (e) => {
    if (e.target === $('#projectModal')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initActiveNav();
  initScrollAnimations();
  initCounters();
  initTypingAnimation();
  initRoadmapTabs();
  initCopyButtons();
  initSearch();
  initLearnPage();
  initFilters();
  initProgressTracking();
  initProgressDashboard();
  initQuiz();
  initLessonEditor();
  initHighlightJS();
  initCheatsheetTabs();
  initCheatsheetSections();
  initCheatsheetCopy();
  initProjectModals();

  // Re-run hljs after CDN might finish loading
  setTimeout(initHighlightJS, 800);
});
