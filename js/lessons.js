/* ================================================
   CODECRAFT — lessons.js
   All lesson content keyed by "lang-topic" slug.
   Each lesson: title, level, time, prev, next,
                editorLang, editorCode, body (HTML)
   ================================================ */

const LESSONS = {

  /* ══════════════════ C++ ══════════════════ */

  'cpp-hello-world': {
    lang: 'cpp', title: 'Hello World & Setup', level: 'Basic', time: '10 min',
    prev: null, next: 'cpp-variables',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    body: `
<h2>Your First C++ Program</h2>
<p>Every C++ journey starts with the same two lines of output. Let's understand exactly what each part does.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre></div>
<h2>Breaking It Down</h2>
<ul>
  <li><code class="inline-code">#include &lt;iostream&gt;</code> — Imports the <strong>input/output stream</strong> library so you can use <code class="inline-code">cout</code> and <code class="inline-code">cin</code>.</li>
  <li><code class="inline-code">using namespace std;</code> — Lets you write <code class="inline-code">cout</code> instead of <code class="inline-code">std::cout</code>.</li>
  <li><code class="inline-code">int main()</code> — The <strong>entry point</strong>. Every C++ program starts executing here.</li>
  <li><code class="inline-code">cout &lt;&lt; "Hello, World!" &lt;&lt; endl;</code> — Prints text to the terminal. <code class="inline-code">endl</code> adds a newline and flushes the buffer.</li>
  <li><code class="inline-code">return 0;</code> — Signals to the OS that the program finished successfully.</li>
</ul>
<h2>Compiling & Running</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">bash</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-bash"># Compile with g++
g++ hello.cpp -o hello

# Run
./hello
# Output: Hello, World!</code></pre></div>
<div class="note-box"><strong>💡 Note:</strong> The <code class="inline-code">-o hello</code> flag names the output file. Without it the default is <code class="inline-code">a.out</code>.</div>
<h2>Multiple Output Lines</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Line 1" &lt;&lt; endl;
    cout &lt;&lt; "Line 2" &lt;&lt; endl;
    cout &lt;&lt; "Line 3" &lt;&lt; "\n";  // \n also works
    return 0;
}</code></pre></div>`
  },

  'cpp-variables': {
    lang: 'cpp', title: 'Variables & Data Types', level: 'Basic', time: '15 min',
    prev: 'cpp-hello-world', next: 'cpp-operators',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    double gpa = 3.85;
    string name = "Alice";
    bool isPassed = true;

    cout << name << " | Age: " << age << endl;
    cout << "GPA: " << gpa << endl;
    cout << "Passed: " << isPassed << endl;
    return 0;
}`,
    body: `
<h2>Declaring Variables</h2>
<p>A variable is a named storage location. In C++ you must declare the <strong>type</strong> before you can use a variable.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int age = 25;           // whole number
double price = 9.99;    // decimal number (64-bit)
float temp = 36.6f;     // decimal number (32-bit) — note the 'f'
char grade = 'A';       // single character
bool isActive = true;   // true or false
string name = "Alice";  // text (needs &lt;string&gt; or &lt;iostream&gt;)</code></pre></div>
<h2>Primitive Types Quick Reference</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:1rem 0">
  <thead><tr style="border-bottom:1px solid var(--border)"><th style="padding:0.5rem;text-align:left;color:var(--text-muted)">Type</th><th style="padding:0.5rem;text-align:left;color:var(--text-muted)">Size</th><th style="padding:0.5rem;text-align:left;color:var(--text-muted)">Example</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid var(--border)"><td style="padding:0.5rem"><code class="inline-code">int</code></td><td style="padding:0.5rem;color:var(--text-secondary)">4 bytes</td><td style="padding:0.5rem;color:var(--text-secondary)">-2,147,483,648 to 2,147,483,647</td></tr>
    <tr style="border-bottom:1px solid var(--border)"><td style="padding:0.5rem"><code class="inline-code">long long</code></td><td style="padding:0.5rem;color:var(--text-secondary)">8 bytes</td><td style="padding:0.5rem;color:var(--text-secondary)">±9.2 × 10¹⁸</td></tr>
    <tr style="border-bottom:1px solid var(--border)"><td style="padding:0.5rem"><code class="inline-code">double</code></td><td style="padding:0.5rem;color:var(--text-secondary)">8 bytes</td><td style="padding:0.5rem;color:var(--text-secondary)">±1.7 × 10³⁰⁸</td></tr>
    <tr style="border-bottom:1px solid var(--border)"><td style="padding:0.5rem"><code class="inline-code">char</code></td><td style="padding:0.5rem;color:var(--text-secondary)">1 byte</td><td style="padding:0.5rem;color:var(--text-secondary)">'A', 'z', '5'</td></tr>
    <tr><td style="padding:0.5rem"><code class="inline-code">bool</code></td><td style="padding:0.5rem;color:var(--text-secondary)">1 byte</td><td style="padding:0.5rem;color:var(--text-secondary)">true / false</td></tr>
  </tbody>
</table>
<h2>Type Modifiers</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">unsigned int u = 4000000000u;  // only positive, doubles max
short int s = 32000;           // 2 bytes
const int MAX = 100;           // cannot change after init
auto x = 3.14;                 // compiler deduces type (double)
auto msg = string("Hello");    // also works for objects</code></pre></div>
<div class="warning-box"><strong>⚠️ Uninitialized variables</strong> in C++ contain <em>garbage values</em> — always initialize before use.</div>
<h2>Type Conversion</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">double pi = 3.14159;
int n = (int)pi;              // C-style cast → 3  (truncates)
int m = static_cast&lt;int&gt;(pi); // C++ style  → 3  (preferred)

int a = 5, b = 2;
double result = (double)a / b; // → 2.5  (without cast: → 2)</code></pre></div>`
  },

  'cpp-operators': {
    lang: 'cpp', title: 'Operators & Expressions', level: 'Basic', time: '12 min',
    prev: 'cpp-variables', next: 'cpp-control-flow',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 4;
    cout << a + b << endl;  // 19
    cout << a - b << endl;  // 11
    cout << a * b << endl;  // 60
    cout << a / b << endl;  // 3 (integer division)
    cout << a % b << endl;  // 3 (remainder)
    cout << (a > b) << endl; // 1 (true)
    return 0;
}`,
    body: `
<h2>Arithmetic Operators</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int a = 17, b = 5;
cout &lt;&lt; a + b;   // 22 — addition
cout &lt;&lt; a - b;   // 12 — subtraction
cout &lt;&lt; a * b;   // 85 — multiplication
cout &lt;&lt; a / b;   // 3  — integer division (truncates)
cout &lt;&lt; a % b;   // 2  — modulus (remainder)

// Floating-point division
cout &lt;&lt; (double)a / b;  // 3.4</code></pre></div>
<h2>Comparison & Logical</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// Comparison — return bool
5 == 5    // true
5 != 3    // true
7 &gt; 3     // true
4 &lt;= 4    // true

// Logical
true &amp;&amp; false  // AND → false
true || false  // OR  → true
!true          // NOT → false</code></pre></div>
<h2>Assignment & Increment</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2

int i = 0;
i++;      // post-increment: use then add 1
++i;      // pre-increment:  add 1 then use
i--;      // post-decrement</code></pre></div>
<h2>Bitwise Operators</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int a = 0b1010;  // 10
int b = 0b1100;  // 12
a &amp; b   // 0b1000 = 8  — AND
a | b   // 0b1110 = 14 — OR
a ^ b   // 0b0110 = 6  — XOR
~a      // flips all bits
a &lt;&lt; 1  // 0b10100 = 20 — left shift (×2)
a &gt;&gt; 1  // 0b0101  = 5  — right shift (÷2)</code></pre></div>`
  },

  'cpp-control-flow': {
    lang: 'cpp', title: 'Control Flow — if / else / switch', level: 'Basic', time: '14 min',
    prev: 'cpp-operators', next: 'cpp-loops',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int main() {
    int score = 75;

    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    return 0;
}`,
    body: `
<h2>if / else if / else</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 42;

if (x &gt; 100) {
    cout &lt;&lt; "big";
} else if (x &gt; 10) {
    cout &lt;&lt; "medium";   // ← this runs
} else {
    cout &lt;&lt; "small";
}</code></pre></div>
<h2>Ternary Operator</h2>
<p>A compact one-line conditional: <code class="inline-code">condition ? value_if_true : value_if_false</code></p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int age = 20;
string status = (age &gt;= 18) ? "adult" : "minor";
cout &lt;&lt; status; // "adult"

int max = (a &gt; b) ? a : b;  // find larger value</code></pre></div>
<h2>switch Statement</h2>
<p>Use <code class="inline-code">switch</code> when comparing one variable against several fixed values — cleaner than a chain of <code class="inline-code">else if</code>.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">char grade = 'B';

switch (grade) {
    case 'A':
        cout &lt;&lt; "Excellent!";
        break;
    case 'B':
        cout &lt;&lt; "Good job!";    // ← runs
        break;
    case 'C':
        cout &lt;&lt; "Pass";
        break;
    default:
        cout &lt;&lt; "Unknown grade";
}</code></pre></div>
<div class="warning-box"><strong>⚠️ Always include <code>break</code></strong> in each case. Without it execution <em>falls through</em> to the next case — a common bug.</div>
<div class="note-box"><strong>💡 Tip:</strong> <code class="inline-code">switch</code> only works with integer types and <code class="inline-code">char</code>, not strings. For strings, use <code class="inline-code">if / else if</code> chains.</div>`
  },

  'cpp-loops': {
    lang: 'cpp', title: 'Loops — for / while / do-while', level: 'Basic', time: '16 min',
    prev: 'cpp-control-flow', next: 'cpp-functions',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int main() {
    // Sum 1 to 10
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    cout << "Sum: " << sum << endl; // 55

    // Countdown
    int n = 5;
    while (n > 0) {
        cout << n << " ";
        n--;
    }
    cout << endl;
    return 0;
}`,
    body: `
<h2>for Loop</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// for (init; condition; update)
for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";  // 0 1 2 3 4
}

// Counting down
for (int i = 10; i &gt; 0; i--) {
    cout &lt;&lt; i &lt;&lt; " ";
}

// Range-based for (C++11) — best for containers
int arr[] = {10, 20, 30, 40};
for (int x : arr) {
    cout &lt;&lt; x &lt;&lt; " ";  // 10 20 30 40
}

// With auto reference (avoids copying)
vector&lt;string&gt; names = {"Alice", "Bob"};
for (auto&amp; name : names) {
    cout &lt;&lt; name &lt;&lt; "\n";
}</code></pre></div>
<h2>while Loop</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int n = 1;
while (n &lt;= 5) {
    cout &lt;&lt; n &lt;&lt; " ";
    n++;
}  // 1 2 3 4 5</code></pre></div>
<h2>do-while Loop</h2>
<p>Runs the body <strong>at least once</strong> before checking the condition — useful for menus.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int choice;
do {
    cout &lt;&lt; "Enter 1-3: ";
    cin &gt;&gt; choice;
} while (choice &lt; 1 || choice &gt; 3);</code></pre></div>
<h2>break & continue</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">for (int i = 0; i &lt; 10; i++) {
    if (i == 3) continue;  // skip 3
    if (i == 7) break;     // stop at 7
    cout &lt;&lt; i &lt;&lt; " ";     // 0 1 2 4 5 6
}</code></pre></div>`
  },

  'cpp-functions': {
    lang: 'cpp', title: 'Functions', level: 'Basic', time: '20 min',
    prev: 'cpp-loops', next: 'cpp-arrays',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

bool isEven(int n) {
    return n % 2 == 0;
}

void greet(string name = "World") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << add(3, 7) << endl;
    cout << isEven(4) << endl;
    greet();
    greet("Alice");
    return 0;
}`,
    body: `
<h2>Defining a Function</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// return_type  name (parameters)
int add(int a, int b) {
    return a + b;
}

void printMessage(string msg) {  // void = no return value
    cout &lt;&lt; msg &lt;&lt; endl;
}

// Call them
int result = add(3, 4);   // result = 7
printMessage("Hi there"); // prints "Hi there"</code></pre></div>
<h2>Default Parameters</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">void greet(string name = "World", int times = 1) {
    for (int i = 0; i &lt; times; i++)
        cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!\n";
}

greet();              // Hello, World!
greet("Alice");       // Hello, Alice!
greet("Bob", 3);      // Hello, Bob! (×3)</code></pre></div>
<h2>Pass by Value vs Reference</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// By VALUE — function gets a copy
void doubleVal(int x) {
    x *= 2;  // original unchanged
}

// By REFERENCE — function works on original
void doubleRef(int&amp; x) {
    x *= 2;  // original IS changed
}

int n = 5;
doubleVal(n); cout &lt;&lt; n; // 5 — unchanged
doubleRef(n); cout &lt;&lt; n; // 10 — changed</code></pre></div>
<h2>Function Overloading</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// Same name, different parameter types
int    max(int a, int b)    { return (a&gt;b)?a:b; }
double max(double a, double b) { return (a&gt;b)?a:b; }

max(3, 7);      // calls int version
max(3.1, 7.2);  // calls double version</code></pre></div>`
  },

  'cpp-arrays': {
    lang: 'cpp', title: 'Arrays & Strings', level: 'Basic', time: '18 min',
    prev: 'cpp-functions', next: 'cpp-pointers',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int scores[] = {85, 92, 78, 95, 88};
    int n = 5;
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += scores[i];
    }
    cout << "Average: " << sum / n << endl;

    string name = "CodeCraft";
    cout << "Length: " << name.length() << endl;
    cout << "Upper: " << (char)toupper(name[0]) << endl;
    return 0;
}`,
    body: `
<h2>Arrays</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// Declaring and initialising
int scores[5] = {10, 20, 30, 40, 50};
double prices[] = {1.5, 2.3, 0.9}; // size inferred

// Access by index (0-based)
cout &lt;&lt; scores[0]; // 10
cout &lt;&lt; scores[4]; // 50
scores[2] = 99;    // modify

// Traverse with for loop
int n = 5;
for (int i = 0; i &lt; n; i++)
    cout &lt;&lt; scores[i] &lt;&lt; " ";</code></pre></div>
<h2>2D Arrays</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

cout &lt;&lt; matrix[1][2]; // 6 (row 1, col 2)

// Traverse
for (int r = 0; r &lt; 3; r++)
    for (int c = 0; c &lt; 3; c++)
        cout &lt;&lt; matrix[r][c] &lt;&lt; " ";</code></pre></div>
<h2>std::string</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;string&gt;
string s = "Hello, World!";

s.length();           // 13
s.substr(7, 5);       // "World"
s.find("World");      // 7
s.replace(0,5,"Hi"); // "Hi, World!"
s += " Bye";          // concatenate
s[0];                 // 'H'

// Convert
stoi("42");           // string → int: 42
to_string(100);       // int → string: "100"</code></pre></div>
<div class="note-box"><strong>💡</strong> Prefer <code class="inline-code">std::string</code> over C-style <code class="inline-code">char[]</code> arrays — it manages memory automatically and has a rich API.</div>`
  },

  'cpp-pointers': {
    lang: 'cpp', title: 'Pointers & References', level: 'Basic', time: '25 min',
    prev: 'cpp-arrays', next: 'cpp-oop',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    cout << "Before: x=" << x << " y=" << y << endl;
    swap(&x, &y);
    cout << "After:  x=" << x << " y=" << y << endl;
    return 0;
}`,
    body: `
<h2>What is a Pointer?</h2>
<p>A <strong>pointer</strong> stores the <em>memory address</em> of another variable.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int age = 25;
int* ptr = &amp;age;   // ptr holds the ADDRESS of age

cout &lt;&lt; age;    // 25        (value)
cout &lt;&lt; &amp;age;   // 0x7fff5  (address)
cout &lt;&lt; ptr;    // 0x7fff5  (same address)
cout &lt;&lt; *ptr;   // 25       (dereference)</code></pre></div>
<div class="note-box"><strong>Key:</strong> <code class="inline-code">*</code> in declaration means "pointer to". <code class="inline-code">*</code> on an existing pointer means "value at that address" (dereference).</div>
<h2>Modifying Through a Pointer</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 10;
int* p = &amp;x;
*p = 99;
cout &lt;&lt; x;  // 99 — original changed!</code></pre></div>
<h2>References — Cleaner Alias</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 10;
int&amp; ref = x;  // ref is an alias for x

ref = 50;
cout &lt;&lt; x; // 50</code></pre></div>
<h2>Pointer Arithmetic</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int arr[] = {10, 20, 30};
int* p = arr;
cout &lt;&lt; *p;       // 10
cout &lt;&lt; *(p+1);   // 20
cout &lt;&lt; *(p+2);   // 30</code></pre></div>
<div class="warning-box"><strong>⚠️ Dangling Pointers:</strong> Never access memory after it's freed. Always set pointers to <code class="inline-code">nullptr</code> after <code class="inline-code">delete</code>, and prefer smart pointers in modern C++.</div>`
  },

  'cpp-oop': {
    lang: 'cpp', title: 'Classes & Objects', level: 'Intermediate', time: '30 min',
    prev: 'cpp-pointers', next: 'cpp-stl',
    editorLang: 'cpp',
    editorCode: `#include <iostream>
using namespace std;

class Rectangle {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area()    { return width * height; }
    double perimeter() { return 2 * (width + height); }
    void display() {
        cout << "Area: " << area() << endl;
        cout << "Perimeter: " << perimeter() << endl;
    }
};

int main() {
    Rectangle r(5.0, 3.0);
    r.display();
    return 0;
}`,
    body: `
<h2>Defining a Class</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Car {
private:
    string brand;
    int speed;

public:
    // Constructor
    Car(string b, int s) : brand(b), speed(s) {}

    // Getter
    string getBrand() const { return brand; }

    // Method
    void accelerate(int amount) {
        speed += amount;
        cout &lt;&lt; brand &lt;&lt; " now at " &lt;&lt; speed &lt;&lt; " km/h\n";
    }

    // Destructor
    ~Car() { cout &lt;&lt; brand &lt;&lt; " destroyed\n"; }
};

// Create objects
Car myCar("Toyota", 60);
myCar.accelerate(20);   // Toyota now at 80 km/h
cout &lt;&lt; myCar.getBrand(); // Toyota</code></pre></div>
<h2>Inheritance</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Animal {
public:
    string name;
    Animal(string n) : name(n) {}
    virtual void speak() {
        cout &lt;&lt; name &lt;&lt; " makes a sound\n";
    }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    void speak() override {     // override keyword
        cout &lt;&lt; name &lt;&lt; ": Woof!\n";
    }
};

Animal* a = new Dog("Rex");
a-&gt;speak();   // Rex: Woof!  (polymorphism!)
delete a;</code></pre></div>
<h2>Access Specifiers</h2>
<ul>
  <li><code class="inline-code">private</code> — only accessible within the class itself</li>
  <li><code class="inline-code">protected</code> — accessible in class and subclasses</li>
  <li><code class="inline-code">public</code> — accessible from anywhere</li>
</ul>`
  },

  'cpp-stl': {
    lang: 'cpp', title: 'STL Containers', level: 'Intermediate', time: '40 min',
    prev: 'cpp-oop', next: null,
    editorLang: 'cpp',
    editorCode: `#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};
    sort(v.begin(), v.end());
    for (int x : v) cout << x << " ";
    cout << endl;

    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"]   = 87;
    for (auto& [name, score] : scores)
        cout << name << ": " << score << endl;
    return 0;
}`,
    body: `
<h2>vector — Dynamic Array</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;vector&gt;
vector&lt;int&gt; v = {1, 2, 3};

v.push_back(4);           // append
v.pop_back();             // remove last
v.insert(v.begin()+1, 10);// insert at index 1
v.erase(v.begin()+1);     // remove at index 1
v.size();                 // count
v[0];  v.at(0);          // access
sort(v.begin(), v.end()); // sort</code></pre></div>
<h2>map — Key-Value Store</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;map&gt;
map&lt;string, int&gt; m;

m["apple"] = 5;
m["banana"] = 3;
m.count("apple");  // 1 (exists)
m.erase("banana");

for (auto&amp; [key, val] : m)
    cout &lt;&lt; key &lt;&lt; ": " &lt;&lt; val &lt;&lt; "\n";</code></pre></div>
<h2>set — Unique Sorted Elements</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;set&gt;
set&lt;int&gt; s = {3, 1, 2, 1, 3}; // {1, 2, 3}
s.insert(4);
s.erase(1);
s.count(2);  // 1 if present</code></pre></div>`
  },

  /* ══════════════════ PYTHON ══════════════════ */

  'py-hello-world': {
    lang: 'python', title: 'Hello World & Setup', level: 'Basic', time: '8 min',
    prev: null, next: 'py-variables',
    editorLang: 'python',
    editorCode: `# Your first Python program
print("Hello, World!")

# Python can do math inline
print(2 + 2)
print("Python" + " " + "is fun!")

# input() reads from the user
# name = input("Your name: ")
# print(f"Hello, {name}!")`,
    body: `
<h2>Your First Python Program</h2>
<p>Python is interpreted — no compilation step needed. Save a file as <code class="inline-code">.py</code> and run it directly.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">print("Hello, World!")</code></pre></div>
<p>That's it. One line. No <code class="inline-code">main()</code>, no semicolons, no headers.</p>
<h2>Running Python</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">bash</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-bash"># Run a file
python3 hello.py

# Interactive shell (REPL)
python3
&gt;&gt;&gt; print("Hello")
Hello</code></pre></div>
<h2>print() Function</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">print("Hello, World!")
print(42)
print(3.14)
print(True)
print("Name:", "Alice", "Age:", 25)  # multiple values

# sep and end parameters
print("a", "b", "c", sep="-")   # a-b-c
print("no newline", end="")      # stays on same line</code></pre></div>
<h2>Getting Input</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">name = input("Enter your name: ")
print(f"Hello, {name}!")

age = int(input("Enter your age: "))  # input() always returns str
print(f"Next year you'll be {age + 1}")</code></pre></div>
<div class="note-box"><strong>💡</strong> Unlike C++, Python uses <strong>indentation</strong> (4 spaces) to define code blocks — not curly braces <code class="inline-code">{}</code>.</div>`
  },

  'py-variables': {
    lang: 'python', title: 'Variables & Data Types', level: 'Basic', time: '12 min',
    prev: 'py-hello-world', next: 'py-operators',
    editorLang: 'python',
    editorCode: `# Python is dynamically typed
x = 10
y = 3.14
name = "Alice"
is_active = True
nothing = None

print(type(x))       # <class 'int'>
print(type(y))       # <class 'float'>
print(type(name))    # <class 'str'>

# Type conversion
age = int("25")
price = float("9.99")
text = str(42)
print(age, price, text)`,
    body: `
<h2>Variables in Python</h2>
<p>Python is <strong>dynamically typed</strong> — you don't declare types. The type is attached to the <em>value</em>, not the variable.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">x = 10          # int
y = 3.14        # float
name = "Alice"  # str
flag = True     # bool
nothing = None  # NoneType

# Type hints (optional, Python 3.5+)
count: int = 0
price: float = 9.99
message: str = "Hello"</code></pre></div>
<h2>Built-in Types</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">type(42)        # &lt;class 'int'&gt;
type(3.14)      # &lt;class 'float'&gt;
type("hello")   # &lt;class 'str'&gt;
type(True)      # &lt;class 'bool'&gt;
type(None)      # &lt;class 'NoneType'&gt;
type([1,2,3])   # &lt;class 'list'&gt;
type({"a":1})   # &lt;class 'dict'&gt;</code></pre></div>
<h2>Multiple Assignment & Swapping</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">a, b, c = 1, 2, 3      # multiple assignment
a = b = c = 0          # assign same value

# Swap — no temp variable needed!
x, y = 10, 20
x, y = y, x
print(x, y)  # 20 10</code></pre></div>
<h2>Type Conversion</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">int("42")       # → 42
float("3.14")   # → 3.14
str(100)        # → "100"
bool(0)         # → False
bool(1)         # → True
bool("")        # → False
bool("hello")   # → True</code></pre></div>
<div class="note-box"><strong>💡 Truthiness:</strong> In Python, <code class="inline-code">0</code>, <code class="inline-code">""</code>, <code class="inline-code">[]</code>, <code class="inline-code">{}</code>, <code class="inline-code">None</code> are all <em>falsy</em>. Everything else is truthy.</div>`
  },

  'py-operators': {
    lang: 'python', title: 'Operators & Expressions', level: 'Basic', time: '10 min',
    prev: 'py-variables', next: 'py-control-flow',
    editorLang: 'python',
    editorCode: `a, b = 17, 5
print(a + b)   # 22
print(a - b)   # 12
print(a * b)   # 85
print(a / b)   # 3.4  (true division)
print(a // b)  # 3    (floor division)
print(a % b)   # 2    (modulus)
print(a ** 2)  # 289  (exponentiation)

print(a > b)   # True
print(a == b)  # False
print(3 in [1,2,3])  # True`,
    body: `
<h2>Arithmetic Operators</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">10 + 3   # 13
10 - 3   # 7
10 * 3   # 30
10 / 3   # 3.3333...  ← always float
10 // 3  # 3          ← floor division
10 % 3   # 1          ← modulus
2 ** 8   # 256        ← exponentiation (no ^ in Python!)</code></pre></div>
<h2>Comparison & Logical</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">5 == 5    # True
5 != 3    # True
7 > 3     # True
4 &lt;= 4    # True

True and False  # False
True or False   # True
not True        # False

# Python allows chained comparisons
1 &lt; x &lt; 10     # equivalent to 1 &lt; x and x &lt; 10</code></pre></div>
<h2>Identity & Membership</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">x = None
x is None      # True  — checks identity (same object)
x is not None  # False

3 in [1, 2, 3]      # True  — membership test
"py" in "python"    # True
"z" not in "python" # True</code></pre></div>
<div class="note-box"><strong>💡</strong> Use <code class="inline-code">is</code> only for <code class="inline-code">None</code>, <code class="inline-code">True</code>, <code class="inline-code">False</code>. Use <code class="inline-code">==</code> for value comparison.</div>`
  },

  'py-control-flow': {
    lang: 'python', title: 'Control Flow — if / elif / else', level: 'Basic', time: '12 min',
    prev: 'py-operators', next: 'py-loops',
    editorLang: 'python',
    editorCode: `score = 78

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score {score} → Grade {grade}")

# match-case (Python 3.10+)
status = 404
match status:
    case 200: print("OK")
    case 404: print("Not Found")
    case _:   print("Unknown")`,
    body: `
<h2>if / elif / else</h2>
<p>Python uses <strong>indentation</strong> (4 spaces) to define blocks — no braces needed.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">age = 20

if age &gt;= 18:
    print("Adult")
elif age &gt;= 13:
    print("Teenager")
else:
    print("Child")</code></pre></div>
<h2>Ternary Expression</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">age = 20
label = "adult" if age &gt;= 18 else "minor"
print(label)  # "adult"

# Nested ternary (use sparingly)
grade = "A" if score &gt;= 90 else "B" if score &gt;= 80 else "C"</code></pre></div>
<h2>match-case (Python 3.10+)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">command = "quit"

match command:
    case "quit":
        print("Exiting...")
    case "help":
        print("Commands: quit, help, run")
    case "run":
        print("Running!")
    case _:             # default
        print(f"Unknown command: {command}")</code></pre></div>
<div class="note-box"><strong>💡</strong> Python has no <code class="inline-code">switch</code> statement before 3.10. Use <code class="inline-code">elif</code> chains or a dictionary dispatch pattern instead.</div>`
  },

  'py-loops': {
    lang: 'python', title: 'Loops — for / while', level: 'Basic', time: '15 min',
    prev: 'py-control-flow', next: 'py-functions',
    editorLang: 'python',
    editorCode: `# Sum using for loop
total = 0
for i in range(1, 11):
    total += i
print("Sum 1-10:", total)

# Enumerate
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# While with user input simulation
n = 10
while n > 0:
    print(n, end=" ")
    n -= 2
print()`,
    body: `
<h2>for Loop</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 10, 2): # 2, 4, 6, 8
    print(i)

# Iterate over a list directly
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre></div>
<h2>enumerate() & zip()</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># enumerate — index + value
for i, val in enumerate(fruits):
    print(f"{i}: {val}")  # 0: apple, 1: banana...

# zip — pair two lists
names  = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")</code></pre></div>
<h2>while Loop</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">count = 0
while count &lt; 5:
    print(count)
    count += 1</code></pre></div>
<h2>break, continue & else</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">for x in range(10):
    if x == 3: continue  # skip 3
    if x == 7: break     # stop at 7
    print(x)             # 0 1 2 4 5 6

# else on loop — runs only if no break occurred
for n in range(2, 10):
    if 10 % n == 0:
        print(f"10 is divisible by {n}")
        break
else:
    print("10 is prime")</code></pre></div>`
  },

  'py-functions': {
    lang: 'python', title: 'Functions', level: 'Basic', time: '18 min',
    prev: 'py-loops', next: 'py-lists',
    editorLang: 'python',
    editorCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def stats(*numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

print(greet("Alice"))
print(greet("Bob", "Hi"))

lo, hi, avg = stats(4, 8, 2, 9, 1)
print(f"Min={lo}, Max={hi}, Avg={avg}")`,
    body: `
<h2>Defining Functions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def add(a, b):
    return a + b

result = add(3, 4)  # 7</code></pre></div>
<h2>Default Parameters</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")          # Hello, Alice!
greet("Bob", "Hi")      # Hi, Bob!</code></pre></div>
<h2>*args and **kwargs</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># *args — variable number of positional args
def total(*nums):
    return sum(nums)

total(1, 2, 3)        # 6
total(10, 20, 30, 40) # 100

# **kwargs — variable keyword args
def display(**info):
    for key, val in info.items():
        print(f"  {key}: {val}")

display(name="Alice", age=25, city="Delhi")</code></pre></div>
<h2>Lambda Functions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">square = lambda x: x ** 2
add    = lambda a, b: a + b

nums = [3, 1, 4, 1, 5, 9]
nums.sort(key=lambda x: -x)  # sort descending
print(nums)  # [9, 5, 4, 3, 1, 1]</code></pre></div>
<div class="note-box"><strong>💡 Type hints</strong> make code self-documenting: <code class="inline-code">def divide(a: float, b: float) -&gt; float:</code></div>`
  },

  'py-lists': {
    lang: 'python', title: 'Lists & Tuples', level: 'Basic', time: '18 min',
    prev: 'py-functions', next: 'py-dicts',
    editorLang: 'python',
    editorCode: `# List operations
fruits = ["banana", "apple", "cherry", "date"]
fruits.sort()
print(fruits)

# Slicing
print(fruits[1:3])   # middle two
print(fruits[::-1])  # reversed

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)

# Tuple (immutable)
point = (3, 4)
x, y = point
print(f"x={x}, y={y}")`,
    body: `
<h2>Lists</h2>
<p>A list is an <strong>ordered, mutable</strong> sequence. You can change it after creation.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">lst = [1, 2, 3, "four", 5.0]  # mixed types allowed

lst.append(6)         # add to end
lst.insert(0, 0)      # insert at index 0
lst.remove("four")    # remove first match
lst.pop()             # remove &amp; return last
lst.pop(1)            # remove &amp; return index 1
lst.sort()            # sort in place
lst.reverse()         # reverse in place
lst.index(3)          # find index of 3
lst.count(1)          # count occurrences</code></pre></div>
<h2>Slicing</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">lst = [0, 1, 2, 3, 4, 5]

lst[1:4]    # [1, 2, 3]     — index 1 to 3
lst[:3]     # [0, 1, 2]     — first 3
lst[3:]     # [3, 4, 5]     — from index 3
lst[-2:]    # [4, 5]        — last 2
lst[::-1]   # [5,4,3,2,1,0] — reversed copy
lst[::2]    # [0, 2, 4]     — every other</code></pre></div>
<h2>List Comprehension</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># [expression for item in iterable if condition]
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]
words   = [w.upper() for w in ["hello", "world"]]</code></pre></div>
<h2>Tuples — Immutable Lists</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">point = (3, 4)        # immutable
x, y = point          # unpacking
a, *rest = (1,2,3,4)  # a=1, rest=[2,3,4]

# Tuples as function returns
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 4, 1, 5])</code></pre></div>`
  },

  'py-dicts': {
    lang: 'python', title: 'Dicts & Sets', level: 'Basic', time: '16 min',
    prev: 'py-lists', next: 'py-oop',
    editorLang: 'python',
    editorCode: `# Dictionary
student = {"name": "Alice", "age": 20, "gpa": 3.8}
student["major"] = "CS"       # add key
student["age"] = 21           # update
print(student.get("phone", "N/A"))  # safe get

for key, val in student.items():
    print(f"  {key}: {val}")

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print("union:", a | b)
print("inter:", a & b)
print("diff:", a - b)`,
    body: `
<h2>Dictionaries</h2>
<p>Dicts store <strong>key-value pairs</strong>. Keys must be unique and hashable.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">d = {"name": "Alice", "age": 25}

d["city"] = "Delhi"   # add
d["age"] = 26         # update
del d["city"]         # delete

d.get("phone")         # None (no error)
d.get("phone", "N/A")  # "N/A" (default)

"name" in d           # True
d.keys()              # dict_keys(['name','age'])
d.values()            # dict_values(['Alice', 26])
d.items()             # dict_items([...])

d.pop("age")          # remove and return value
d.update({"x": 1, "y": 2})  # merge</code></pre></div>
<h2>Dict Comprehension</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">squares = {x: x**2 for x in range(5)}
# {0:0, 1:1, 2:4, 3:9, 4:16}

# Invert a dict
original = {"a": 1, "b": 2}
inverted = {v: k for k, v in original.items()}</code></pre></div>
<h2>Sets</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">s = {1, 2, 3, 2, 1}  # {1, 2, 3} — duplicates removed
s.add(4)
s.discard(1)         # no error if missing

a = {1, 2, 3}
b = {2, 3, 4}
a | b   # {1,2,3,4} — union
a &amp; b   # {2,3}     — intersection
a - b   # {1}       — difference
a ^ b   # {1,4}     — symmetric difference</code></pre></div>`
  },

  'py-oop': {
    lang: 'python', title: 'Classes & OOP', level: 'Intermediate', time: '28 min',
    prev: 'py-dicts', next: 'py-decorators',
    editorLang: 'python',
    editorCode: `class BankAccount:
    interest_rate = 0.05  # class variable

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # private

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount

    @property
    def balance(self):
        return self.__balance

    def __str__(self):
        return f"{self.owner}: \${self.__balance:.2f}"

acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc)
print("Balance:", acc.balance)`,
    body: `
<h2>Defining a Class</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class Dog:
    species = "Canis familiaris"  # class variable

    def __init__(self, name, breed):
        self.name = name    # instance variable
        self.breed = breed

    def bark(self):
        return f"{self.name} says: Woof!"

    def __str__(self):
        return f"Dog({self.name}, {self.breed})"

rex = Dog("Rex", "Labrador")
print(rex.bark())   # Rex says: Woof!
print(rex)          # Dog(Rex, Labrador)</code></pre></div>
<h2>Inheritance</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError

class Cat(Animal):
    def speak(self):
        return f"{self.name}: Meow!"

class Duck(Animal):
    def speak(self):
        return f"{self.name}: Quack!"

animals = [Cat("Whiskers"), Duck("Donald")]
for a in animals:
    print(a.speak())  # polymorphism</code></pre></div>
<h2>Properties & Class Methods</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value &lt; 0: raise ValueError("Must be &gt;= 0")
        self._radius = value

    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2

    @classmethod
    def unit(cls):          # factory method
        return cls(1)

    @staticmethod
    def describe():
        return "A round shape"</code></pre></div>`
  },

  'py-decorators': {
    lang: 'python', title: 'Decorators', level: 'Intermediate', time: '25 min',
    prev: 'py-oop', next: 'py-comprehensions',
    editorLang: 'python',
    editorCode: `import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@timer
@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")`,
    body: `
<h2>What is a Decorator?</h2>
<p>A decorator is a function that <strong>wraps another function</strong> to add behaviour without modifying the original code.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@shout                 # same as: greet = shout(greet)
def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))  # HELLO, ALICE</code></pre></div>
<h2>Preserving Metadata with @wraps</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">from functools import wraps

def log(func):
    @wraps(func)          # preserves __name__, __doc__
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log
def add(a, b):
    """Adds two numbers."""
    return a + b

print(add.__name__)  # "add" (not "wrapper")</code></pre></div>
<h2>Decorator with Arguments</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")

say_hi()  # prints "Hi!" three times</code></pre></div>`
  },

  'py-comprehensions': {
    lang: 'python', title: 'Comprehensions', level: 'Intermediate', time: '18 min',
    prev: 'py-decorators', next: 'py-file-io',
    editorLang: 'python',
    editorCode: `# List comprehension with condition
nums = range(1, 21)
evens = [x for x in nums if x % 2 == 0]
print("Evens:", evens)

# Dict comprehension
words = ["hello", "world", "python"]
lengths = {w: len(w) for w in words}
print("Lengths:", lengths)

# Nested comprehension — matrix transpose
matrix = [[1,2,3],[4,5,6],[7,8,9]]
transposed = [[row[i] for row in matrix] for i in range(3)]
print("Transposed:", transposed)

# Generator (memory-efficient)
total = sum(x**2 for x in range(1000000))
print("Sum of squares:", total)`,
    body: `
<h2>List Comprehension</h2>
<p>A concise way to build lists — replaces verbose for-loops.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># [expression  for item  in iterable  if condition]
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]
words   = [w.title() for w in ["hello", "world"]]

# vs. equivalent for loop:
result = []
for x in range(10):
    result.append(x**2)  # same as squares above</code></pre></div>
<h2>Dict & Set Comprehension</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># Dict comprehension
squares_d = {x: x**2 for x in range(5)}
# {0:0, 1:1, 2:4, 3:9, 4:16}

# Set comprehension (unique values)
unique_lens = {len(w) for w in ["hi","hello","hey"]}
# {2, 5}</code></pre></div>
<h2>Generator Expressions</h2>
<p>Like list comprehensions but <strong>lazy</strong> — compute values one at a time, using almost no memory.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># () instead of [] → generator (lazy)
gen = (x**2 for x in range(1_000_000))

# Doesn't compute all 1M values yet!
next(gen)         # 0 (first value)
next(gen)         # 1 (second value)

# Use directly in functions
total = sum(x**2 for x in range(1_000_000))  # memory-efficient</code></pre></div>
<h2>Nested Comprehension</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">matrix = [[1,2,3],[4,5,6]]
flat   = [n for row in matrix for n in row]
# [1, 2, 3, 4, 5, 6]</code></pre></div>`
  },

  'py-file-io': {
    lang: 'python', title: 'File I/O & Context Managers', level: 'Intermediate', time: '22 min',
    prev: 'py-comprehensions', next: null,
    editorLang: 'python',
    editorCode: `import json

# Simulate writing a file
data = {
    "students": [
        {"name": "Alice", "grade": "A"},
        {"name": "Bob",   "grade": "B"},
    ]
}

json_str = json.dumps(data, indent=2)
print("JSON output:")
print(json_str)

# Parse it back
parsed = json.loads(json_str)
for student in parsed["students"]:
    print(f"{student['name']}: {student['grade']}")`,
    body: `
<h2>Reading Files</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># with statement auto-closes the file
with open("data.txt", "r") as f:
    content = f.read()         # entire file as string
    lines   = f.readlines()    # list of lines
    # or iterate line by line:
    for line in f:
        print(line.strip())</code></pre></div>
<h2>Writing Files</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">with open("output.txt", "w") as f:
    f.write("Hello, file!\n")
    f.writelines(["Line 2\n", "Line 3\n"])

with open("log.txt", "a") as f:  # append mode
    f.write("New log entry\n")</code></pre></div>
<h2>JSON</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import json

# Write JSON
data = {"name": "Alice", "scores": [95, 87, 91]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json") as f:
    loaded = json.load(f)

# Without files
json_str = json.dumps(data)    # dict → JSON string
back     = json.loads(json_str) # JSON string → dict</code></pre></div>
<h2>Custom Context Manager</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class Timer:
    def __enter__(self):
        import time
        self.start = time.perf_counter()
        return self

    def __exit__(self, *args):
        import time
        elapsed = time.perf_counter() - self.start
        print(f"Elapsed: {elapsed:.4f}s")

with Timer():
    total = sum(range(1_000_000))</code></pre></div>`
  },
};

/* ════════════════════════════════════════
   LESSON RENDERER
   Reads ?lang=xxx&topic=yyy from the URL
   and renders the correct lesson.
   ════════════════════════════════════════ */
function renderLesson() {
  const params = new URLSearchParams(window.location.search);
  const lang  = params.get('lang')  || 'cpp';
  const topic = params.get('topic') || 'pointers';

  // Build the key: cpp-pointers, py-hello-world, etc.
  const prefix = lang === 'python' ? 'py' : 'cpp';
  const key = `${prefix}-${topic}`;

  const lesson = LESSONS[key];
  if (!lesson) {
    renderNotFound(lang, topic);
    return;
  }

  /* ── Page title ── */
  document.title = `${lesson.title} — CodeCraft`;

  /* ── Breadcrumb ── */
  const langColor = lang === 'python' ? 'var(--python-color)' : 'var(--cpp-color)';
  const langLabel = lang === 'python' ? 'Python' : 'C++';
  const bc = document.getElementById('lessonBreadcrumb');
  if (bc) bc.innerHTML = `
    <a href="learn.html" style="color:${langColor}">${langLabel}</a>
    <span>›</span><span>${lesson.level}</span>
    <span>›</span><span>${lesson.title}</span>`;

  /* ── Title & meta ── */
  const titleEl = document.getElementById('lessonTitle');
  if (titleEl) titleEl.textContent = lesson.title;

  const levelDot = lesson.level === 'Basic' ? '🟢' : lesson.level === 'Intermediate' ? '🟡' : '🔴';
  const metaEl = document.getElementById('lessonMeta');
  if (metaEl) metaEl.innerHTML = `
    <span class="lesson-difficulty">${levelDot} ${lesson.level}</span>
    <span class="lesson-time">⏱ ~${lesson.time} read</span>
    <button data-bookmark="${key}" style="margin-left:auto;font-size:0.8rem;color:var(--text-muted);border:1px solid var(--border);padding:0.3rem 0.75rem;border-radius:var(--radius-sm);background:none;cursor:pointer;transition:all var(--transition)">🔖 Bookmark</button>`;

  /* ── Body ── */
  const bodyEl = document.getElementById('lessonBody');
  if (bodyEl) {
    bodyEl.innerHTML = lesson.body;
    // Bind copy buttons in newly-injected HTML
    bodyEl.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.closest('.code-block');
        const text = (block?.querySelector('pre code') || block?.querySelector('pre'))?.textContent?.trim() || '';
        navigator.clipboard.writeText(text).then(() => {
          const orig = btn.textContent;
          btn.textContent = '✓ Copied';
          btn.style.color = 'var(--python-color)';
          setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1600);
        }).catch(() => {});
      });
    });
    // Syntax highlight
    if (window.hljs) bodyEl.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
    else setTimeout(() => {
      if (window.hljs) bodyEl.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
    }, 900);
  }

  /* ── Prev / Next navigation ── */
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) {
    if (lesson.prev) {
      const p = LESSONS[lesson.prev];
      prevBtn.textContent = `← ${p ? p.title : lesson.prev}`;
      prevBtn.href = `lesson.html?lang=${p?.lang || lang}&topic=${lesson.prev.replace(/^(cpp|py)-/,'')}`;
      prevBtn.style.visibility = 'visible';
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }
  if (nextBtn) {
    if (lesson.next) {
      const n = LESSONS[lesson.next];
      nextBtn.textContent = `${n ? n.title : lesson.next} →`;
      nextBtn.href = `lesson.html?lang=${n?.lang || lang}&topic=${lesson.next.replace(/^(cpp|py)-/,'')}`;
      nextBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'none';
    }
  }

  /* ── Editor default snippet ── */
  const editor = document.getElementById('codeEditor');
  if (editor && lesson.editorCode) {
    editor.value = lesson.editorCode;
    // Set correct editor language
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      btn.classList.remove('active', 'cpp', 'python');
      if (btn.dataset.lang === lesson.editorLang) btn.classList.add('active', lesson.editorLang);
    });
  }

  /* ── Sidebar active state ── */
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.topic === key) link.classList.add('active');
  });

  /* ── Bookmark state ── */
  const bkBtn = metaEl?.querySelector('[data-bookmark]');
  if (bkBtn) {
    const bkId = 'bm_' + key;
    if (localStorage.getItem(bkId)) {
      bkBtn.textContent = '🔖 Bookmarked';
      bkBtn.style.color = langColor;
    }
    bkBtn.addEventListener('click', () => {
      const saved = !!localStorage.getItem(bkId);
      if (saved) {
        localStorage.removeItem(bkId);
        bkBtn.textContent = '🔖 Bookmark';
        bkBtn.style.color = '';
      } else {
        localStorage.setItem(bkId, '1');
        bkBtn.textContent = '🔖 Bookmarked';
        bkBtn.style.color = langColor;
      }
    });
  }
}

function renderNotFound(lang, topic) {
  const bodyEl = document.getElementById('lessonBody');
  if (bodyEl) bodyEl.innerHTML = `
    <div style="text-align:center;padding:3rem">
      <div style="font-size:3rem;margin-bottom:1rem">📭</div>
      <h2>Lesson Not Found</h2>
      <p style="color:var(--text-secondary);margin:1rem 0">No lesson for <code class="inline-code">${lang}/${topic}</code> yet.</p>
      <a href="learn.html" class="btn btn-primary">← Back to Learning Paths</a>
    </div>`;
  const titleEl = document.getElementById('lessonTitle');
  if (titleEl) titleEl.textContent = 'Lesson Not Found';
}

/* ── Auto-init: run as soon as the DOM is ready ──
   Deferred scripts execute after HTML is parsed (readyState = 'interactive')
   but before DOMContentLoaded. Call renderLesson() immediately if the
   lesson shell elements exist on this page. */
(function initLessons() {
  if (!document.getElementById('lessonBody')) return; // not the lesson page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLesson);
  } else {
    renderLesson();
  }
}());
