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
   ADDITIONAL LESSONS (C++ & Python)
   ════════════════════════════════════════ */
Object.assign(LESSONS, {

  /* ── C++ Intermediate ── */

  'cpp-inheritance': {
    lang:'cpp', title:'Inheritance & Polymorphism', level:'Intermediate', time:'35 min',
    prev:'cpp-oop', next:'cpp-stl',
    editorLang:'cpp',
    editorCode:`#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() = 0;   // pure virtual
    virtual void describe() {
        cout << "Area: " << area() << endl;
    }
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() override { return 3.14159 * r * r; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() override { return w * h; }
};

int main() {
    Shape* shapes[] = { new Circle(5), new Rectangle(4, 6) };
    for (auto s : shapes) { s->describe(); delete s; }
}`,
    body:`
<h2>Inheritance</h2>
<p>Inheritance lets a class <strong>reuse and extend</strong> another class. The child class gets all public/protected members of the parent.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Animal {
public:
    string name;
    Animal(string n) : name(n) {}
    virtual void speak() { cout &lt;&lt; "..."; }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}         // call parent constructor
    void speak() override {              // override parent method
        cout &lt;&lt; name &lt;&lt; ": Woof!\n";
    }
};

class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}
    void speak() override { cout &lt;&lt; name &lt;&lt; ": Meow!\n"; }
};</code></pre></div>
<h2>Polymorphism</h2>
<p>A parent pointer can point to any child object. The correct <code class="inline-code">speak()</code> is called at <strong>runtime</strong> — this is polymorphism.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">Animal* animals[] = { new Dog("Rex"), new Cat("Whiskers") };
for (Animal* a : animals) {
    a->speak();      // calls the RIGHT speak() at runtime
    delete a;
}
// Output:
// Rex: Woof!
// Whiskers: Meow!</code></pre></div>
<h2>Abstract Classes</h2>
<p>A class with at least one <strong>pure virtual function</strong> (<code class="inline-code">= 0</code>) cannot be instantiated — it's a blueprint.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Shape {
public:
    virtual double area() = 0;      // pure virtual — must override
    virtual ~Shape() {}             // virtual destructor (always add!)
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() override { return 3.14159 * r * r; }
};

// Shape s;  // ERROR — cannot instantiate abstract class
Shape* s = new Circle(5);          // OK — Circle is concrete</code></pre></div>
<div class="note-box"><strong>Rule:</strong> Always declare the destructor <code class="inline-code">virtual</code> in a base class. Without it, deleting a derived object through a base pointer causes undefined behaviour.</div>
<h2>Access in Inheritance</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Base {
public:    int pub = 1;    // accessible everywhere
protected: int prot = 2;   // accessible in Base + subclasses
private:   int priv = 3;   // accessible ONLY in Base
};

class Child : public Base {
    void test() {
        pub  = 10;   // OK
        prot = 20;   // OK
        // priv = 30; ERROR
    }
};</code></pre></div>`
  },

  'cpp-exceptions': {
    lang:'cpp', title:'Exception Handling', level:'Intermediate', time:'22 min',
    prev:'cpp-stl', next:'cpp-file-io',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0)
        throw runtime_error("Division by zero!");
    return a / b;
}

int main() {
    try {
        cout << divide(10, 2) << endl;   // OK
        cout << divide(5, 0) << endl;    // throws
    }
    catch (const runtime_error& e) {
        cout << "Caught: " << e.what() << endl;
    }
    catch (...) {
        cout << "Unknown error" << endl;
    }
    cout << "Program continues..." << endl;
}`,
    body:`
<h2>try / catch / throw</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">try {
    // code that might throw
    throw runtime_error("Something went wrong");
}
catch (const runtime_error& e) {
    cout &lt;&lt; "Runtime error: " &lt;&lt; e.what();
}
catch (const exception& e) {
    cout &lt;&lt; "Exception: " &lt;&lt; e.what();
}
catch (...) {
    cout &lt;&lt; "Unknown exception";
}</code></pre></div>
<h2>Standard Exception Hierarchy</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;stdexcept&gt;

throw runtime_error("bad state");
throw invalid_argument("bad input");
throw out_of_range("index out of bounds");
throw logic_error("program logic error");
throw overflow_error("arithmetic overflow");</code></pre></div>
<h2>Custom Exceptions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class ValidationError : public runtime_error {
    int code;
public:
    ValidationError(const string& msg, int c)
        : runtime_error(msg), code(c) {}
    int getCode() const { return code; }
};

try {
    throw ValidationError("Invalid age", 400);
}
catch (const ValidationError& e) {
    cout &lt;&lt; e.what() &lt;&lt; " (code " &lt;&lt; e.getCode() &lt;&lt; ")\n";
}</code></pre></div>
<h2>RAII — Resource Safety</h2>
<p>C++ uses RAII (Resource Acquisition Is Initialization) — resources are tied to object lifetimes, so destructors always clean up even when exceptions are thrown.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// Smart pointers are RAII in action
{
    auto ptr = make_unique&lt;int&gt;(42); // allocated
    throw runtime_error("oops");
}   // ptr destroyed here — memory freed automatically
    // even though an exception was thrown</code></pre></div>
<div class="warning-box"><strong>⚠️ Never throw from a destructor.</strong> If a destructor throws while an exception is already propagating, <code class="inline-code">std::terminate()</code> is called.</div>`
  },

  'cpp-file-io': {
    lang:'cpp', title:'File I/O', level:'Intermediate', time:'20 min',
    prev:'cpp-exceptions', next:'cpp-templates',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Write to file
    ofstream out("notes.txt");
    out << "Hello from C++!" << endl;
    out << "Line 2" << endl;
    out.close();

    // Read back line by line
    ifstream in("notes.txt");
    string line;
    while (getline(in, line)) {
        cout << line << endl;
    }
    in.close();
    return 0;
}`,
    body:`
<h2>Writing to a File</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;fstream&gt;

ofstream file("output.txt");       // creates/overwrites
if (!file) { cerr &lt;&lt; "Can't open!"; return 1; }

file &lt;&lt; "Hello, File!" &lt;&lt; endl;
file &lt;&lt; 42 &lt;&lt; " " &lt;&lt; 3.14 &lt;&lt; endl;
file.close();

// Append mode
ofstream log("log.txt", ios::app);
log &lt;&lt; "New entry\n";
log.close();</code></pre></div>
<h2>Reading from a File</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">ifstream file("data.txt");
string line;

// Read line by line
while (getline(file, line)) {
    cout &lt;&lt; line &lt;&lt; "\n";
}

// Read word by word
int num;
while (file &gt;&gt; num) {
    cout &lt;&lt; num &lt;&lt; " ";
}

// Read entire file at once
string content((istreambuf_iterator&lt;char&gt;(file)),
                istreambuf_iterator&lt;char&gt;());</code></pre></div>
<h2>fstream — Both Read & Write</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">fstream f("data.txt", ios::in | ios::out | ios::trunc);

f &lt;&lt; "hello";         // write
f.seekg(0);           // seek to start
string word;
f &gt;&gt; word;            // read back: "hello"</code></pre></div>
<h2>String Streams</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;sstream&gt;

// Parse a CSV line
string csv = "Alice,25,90.5";
stringstream ss(csv);
string name; int age; double score;
getline(ss, name, ',');
ss &gt;&gt; age;
ss.ignore();    // skip comma
ss &gt;&gt; score;

cout &lt;&lt; name &lt;&lt; " " &lt;&lt; age &lt;&lt; " " &lt;&lt; score;</code></pre></div>`
  },

  'cpp-templates': {
    lang:'cpp', title:'Templates & Generics', level:'Intermediate', time:'28 min',
    prev:'cpp-file-io', next:'cpp-lambda',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <vector>
using namespace std;

// Generic function template
template<typename T>
T maxOf(T a, T b) { return (a > b) ? a : b; }

// Generic class template
template<typename T>
class Stack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }
    T pop() { T v = data.back(); data.pop_back(); return v; }
    bool empty() { return data.empty(); }
};

int main() {
    cout << maxOf(3, 7) << endl;         // int
    cout << maxOf(3.14, 2.71) << endl;   // double
    cout << maxOf(string("apple"), string("banana")) << endl;

    Stack<int> s;
    s.push(10); s.push(20); s.push(30);
    while (!s.empty()) cout << s.pop() << " ";
}`,
    body:`
<h2>Function Templates</h2>
<p>Templates let you write code that works for <strong>any type</strong> — the compiler generates the specific version when you call it.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">template&lt;typename T&gt;
T add(T a, T b) { return a + b; }

add(3, 4);           // T = int → 7
add(1.5, 2.5);       // T = double → 4.0
add(string("Hi"), string("!")); // T = string → "Hi!"

// Multiple type params
template&lt;typename T, typename U&gt;
auto mix(T a, U b) { return a + b; }</code></pre></div>
<h2>Class Templates</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">template&lt;typename T&gt;
class Pair {
public:
    T first, second;
    Pair(T a, T b) : first(a), second(b) {}
    T larger() { return (first &gt; second) ? first : second; }
};

Pair&lt;int&gt;    p1(3, 7);
Pair&lt;string&gt; p2("apple", "zebra");
cout &lt;&lt; p1.larger();   // 7
cout &lt;&lt; p2.larger();   // "zebra"</code></pre></div>
<h2>Template Specialization</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// Generic version
template&lt;typename T&gt;
void print(T val) { cout &lt;&lt; val; }

// Specialization for bool
template&lt;&gt;
void print&lt;bool&gt;(bool val) {
    cout &lt;&lt; (val ? "true" : "false");  // custom behaviour
}

print(42);     // "42"
print(true);   // "true"  ← uses specialization</code></pre></div>
<h2>Non-Type Template Parameters</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">template&lt;typename T, int SIZE&gt;
class Array {
    T data[SIZE];
public:
    T& operator[](int i) { return data[i]; }
    int size() { return SIZE; }
};

Array&lt;int, 5&gt; arr;
arr[0] = 10;</code></pre></div>`
  },

  'cpp-lambda': {
    lang:'cpp', title:'Lambda Functions', level:'Intermediate', time:'24 min',
    prev:'cpp-templates', next:'cpp-smart-pointers',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9, 3, 7};

    // Sort ascending
    sort(nums.begin(), nums.end());

    // Filter: keep only evens
    vector<int> evens;
    copy_if(nums.begin(), nums.end(), back_inserter(evens),
            [](int x) { return x % 2 == 0; });

    // Transform: square each
    vector<int> squares;
    transform(evens.begin(), evens.end(), back_inserter(squares),
              [](int x) { return x * x; });

    for (int n : squares) cout << n << " ";
    cout << endl;
    return 0;
}`,
    body:`
<h2>Lambda Syntax</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">// [capture](params) -> return_type { body }

auto greet = []() { cout &lt;&lt; "Hello!\n"; };
greet();

auto add = [](int a, int b) { return a + b; };
cout &lt;&lt; add(3, 4);   // 7

auto square = [](int x) -&gt; int { return x * x; };
cout &lt;&lt; square(5);   // 25</code></pre></div>
<h2>Capture Lists</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 10, y = 20;

// Capture by value (copy)
auto f1 = [x, y]() { cout &lt;&lt; x + y; };   // captures copies of x, y

// Capture by reference
auto f2 = [&x]() { x++; };     // modifies original x

// Capture all by value
auto f3 = [=]() { cout &lt;&lt; x * y; };

// Capture all by reference
auto f4 = [&]() { x = 0; y = 0; };

// Mixed
auto f5 = [=, &x]() { x = y; }; // x by ref, y by value</code></pre></div>
<h2>Lambdas with STL Algorithms</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">vector&lt;int&gt; v = {3, 1, 4, 1, 5, 9, 2, 6};

// Sort descending
sort(v.begin(), v.end(), [](int a, int b) { return a &gt; b; });

// Find first element &gt; 5
auto it = find_if(v.begin(), v.end(), [](int x) { return x &gt; 5; });

// Remove if even
v.erase(remove_if(v.begin(), v.end(), [](int x) { return x%2==0; }), v.end());

// Count elements satisfying condition
int n = count_if(v.begin(), v.end(), [](int x) { return x &gt; 3; });</code></pre></div>
<h2>std::function</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;functional&gt;

function&lt;int(int, int)&gt; op;

op = [](int a, int b) { return a + b; };
cout &lt;&lt; op(3, 4);   // 7

op = [](int a, int b) { return a * b; };
cout &lt;&lt; op(3, 4);   // 12</code></pre></div>`
  },

  'cpp-smart-pointers': {
    lang:'cpp', title:'Smart Pointers', level:'Advanced', time:'30 min',
    prev:'cpp-lambda', next:'cpp-move-semantics',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <memory>
using namespace std;

class Node {
public:
    int val;
    shared_ptr<Node> next;
    Node(int v) : val(v), next(nullptr) {
        cout << "Node " << v << " created\n";
    }
    ~Node() { cout << "Node " << val << " destroyed\n"; }
};

int main() {
    // unique_ptr: sole ownership
    auto p1 = make_unique<int>(42);
    cout << *p1 << endl;

    // shared_ptr: shared ownership
    auto n1 = make_shared<Node>(10);
    auto n2 = make_shared<Node>(20);
    n1->next = n2;

    cout << "ref count n2: " << n2.use_count() << endl;  // 2
    return 0;
    // All nodes destroyed automatically here
}`,
    body:`
<h2>Why Smart Pointers?</h2>
<p>Raw pointers require manual <code class="inline-code">delete</code> — forget it once and you have a memory leak. Smart pointers destroy their resource automatically when they go out of scope.</p>
<h2>unique_ptr — Sole Ownership</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;memory&gt;

auto p = make_unique&lt;int&gt;(42);    // allocates int on heap
cout &lt;&lt; *p;                       // 42
// p auto-deletes when it leaves scope

auto dog = make_unique&lt;Dog&gt;("Rex");
dog-&gt;speak();

// Transfer ownership (can't copy unique_ptr)
auto p2 = move(p);   // p is now null, p2 owns the int</code></pre></div>
<h2>shared_ptr — Shared Ownership</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">auto sp1 = make_shared&lt;string&gt;("hello");
auto sp2 = sp1;   // both own the same object
auto sp3 = sp1;   // three owners

cout &lt;&lt; sp1.use_count();  // 3
sp2.reset();              // sp2 releases ownership
cout &lt;&lt; sp1.use_count();  // 2
// object deleted when last shared_ptr goes out of scope</code></pre></div>
<h2>weak_ptr — Non-Owning Reference</h2>
<p>Use <code class="inline-code">weak_ptr</code> to break circular references that would prevent shared_ptr from ever reaching 0.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">auto sp = make_shared&lt;int&gt;(100);
weak_ptr&lt;int&gt; wp = sp;    // doesn't increase ref count

// Must lock() to safely access
if (auto locked = wp.lock()) {
    cout &lt;&lt; *locked;       // 100
} else {
    cout &lt;&lt; "Object gone";
}</code></pre></div>
<div class="note-box"><strong>Rule of thumb:</strong> Use <code class="inline-code">unique_ptr</code> by default. Use <code class="inline-code">shared_ptr</code> only when ownership truly needs to be shared. Use <code class="inline-code">weak_ptr</code> to observe without owning.</div>`
  },

  'cpp-move-semantics': {
    lang:'cpp', title:'Move Semantics & Rvalue References', level:'Advanced', time:'35 min',
    prev:'cpp-smart-pointers', next:'cpp-multithreading',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Buffer {
    string name;
    int* data;
    size_t size;
public:
    Buffer(string n, size_t s) : name(n), size(s), data(new int[s]) {
        cout << name << " constructed\n";
    }
    // Move constructor
    Buffer(Buffer&& other) noexcept
        : name(move(other.name)), size(other.size), data(other.data) {
        other.data = nullptr;
        other.size = 0;
        cout << name << " moved\n";
    }
    ~Buffer() { delete[] data; cout << name << " destroyed\n"; }
};

int main() {
    Buffer b1("buf1", 100);
    Buffer b2(move(b1));     // move, don't copy
    // b1.data is now null — safe
    return 0;
}`,
    body:`
<h2>Lvalues and Rvalues</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int x = 10;    // x is an lvalue (has a name, has an address)
               // 10 is an rvalue (temporary, no address)

int& ref = x;  // lvalue reference — binds to x
// int& r = 10; ERROR — can't bind lvalue ref to rvalue

int&& rref = 10;  // rvalue reference — binds to temporary</code></pre></div>
<h2>std::move</h2>
<p><code class="inline-code">std::move</code> casts an lvalue to an rvalue — it says "I'm done with this, you can take its guts."</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">vector&lt;string&gt; src = {"hello", "world", "cpp"};
vector&lt;string&gt; dst = move(src);   // O(1) — just moves pointer
// src is now empty — its contents were "stolen"
cout &lt;&lt; src.size();   // 0
cout &lt;&lt; dst.size();   // 3</code></pre></div>
<h2>Move Constructor & Assignment</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class MyVec {
    int* data;
    size_t size;
public:
    // Move constructor — steal resources
    MyVec(MyVec&& other) noexcept
        : data(other.data), size(other.size) {
        other.data = nullptr;   // leave source in valid state
        other.size = 0;
    }
    // Move assignment
    MyVec& operator=(MyVec&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
        }
        return *this;
    }
};</code></pre></div>
<div class="note-box"><strong>Performance:</strong> Move is O(1) — it just transfers ownership of the underlying resource. Copy is O(n) — it duplicates every element. For large containers, move is dramatically faster.</div>`
  },

  'cpp-multithreading': {
    lang:'cpp', title:'Multithreading', level:'Advanced', time:'45 min',
    prev:'cpp-move-semantics', next:'cpp-dsa-sorting',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

mutex mtx;
int counter = 0;

void increment(int n, const string& name) {
    for (int i = 0; i < n; i++) {
        lock_guard<mutex> lock(mtx);  // auto-unlocks on scope exit
        counter++;
    }
    cout << name << " done\n";
}

int main() {
    thread t1(increment, 1000, "Thread-1");
    thread t2(increment, 1000, "Thread-2");
    t1.join();
    t2.join();
    cout << "Final counter: " << counter << endl;  // always 2000
    return 0;
}`,
    body:`
<h2>Creating Threads</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;thread&gt;

void task(int id) {
    cout &lt;&lt; "Thread " &lt;&lt; id &lt;&lt; " running\n";
}

thread t1(task, 1);
thread t2(task, 2);

t1.join();   // wait for t1 to finish
t2.join();   // wait for t2 to finish

// Lambda thread
thread t3([]() { cout &lt;&lt; "Lambda thread\n"; });
t3.join();</code></pre></div>
<h2>Mutex — Preventing Data Races</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;mutex&gt;
mutex mtx;
int shared = 0;

void safe_increment() {
    lock_guard&lt;mutex&gt; lock(mtx);  // locks on construction
    shared++;
}   // lock released automatically here (RAII)

// unique_lock — more flexible
void conditional_update() {
    unique_lock&lt;mutex&gt; lock(mtx);
    shared++;
    lock.unlock();    // manually unlock early
    // do non-shared work
}</code></pre></div>
<h2>async & future</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;future&gt;

// Run in background, get result later
future&lt;int&gt; result = async(launch::async, []() {
    return 6 * 7;
});

// Do other work here...

cout &lt;&lt; result.get();   // blocks until ready → 42</code></pre></div>
<div class="warning-box"><strong>⚠️ Data Race:</strong> Two threads accessing the same data concurrently without synchronisation is undefined behaviour. Always use a mutex, atomic, or other synchronisation primitive.</div>`
  },

  'cpp-dsa-sorting': {
    lang:'cpp', title:'DSA — Sorting Algorithms', level:'Advanced', time:'50 min',
    prev:'cpp-multithreading', next:'cpp-dsa-trees',
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void mergeSort(vector<int>& arr, int l, int r) {
    if (l >= r) return;
    int mid = (l + r) / 2;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    vector<int> temp;
    int i = l, j = mid + 1;
    while (i <= mid && j <= r)
        temp.push_back(arr[i] <= arr[j] ? arr[i++] : arr[j++]);
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= r)   temp.push_back(arr[j++]);
    for (int k = l; k <= r; k++) arr[k] = temp[k - l];
}

int main() {
    vector<int> v = {64, 34, 25, 12, 22, 11, 90};
    mergeSort(v, 0, v.size() - 1);
    for (int x : v) cout << x << " ";
}`,
    body:`
<h2>Bubble Sort — O(n²)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">void bubbleSort(vector&lt;int&gt;& arr) {
    int n = arr.size();
    for (int i = 0; i &lt; n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j &lt; n - i - 1; j++) {
            if (arr[j] &gt; arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if (!swapped) break;   // already sorted
    }
}</code></pre></div>
<h2>Merge Sort — O(n log n)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">void merge(vector&lt;int&gt;& arr, int l, int mid, int r) {
    vector&lt;int&gt; left(arr.begin()+l, arr.begin()+mid+1);
    vector&lt;int&gt; right(arr.begin()+mid+1, arr.begin()+r+1);
    int i=0, j=0, k=l;
    while (i &lt; left.size() &amp;&amp; j &lt; right.size())
        arr[k++] = (left[i] &lt;= right[j]) ? left[i++] : right[j++];
    while (i &lt; left.size())  arr[k++] = left[i++];
    while (j &lt; right.size()) arr[k++] = right[j++];
}

void mergeSort(vector&lt;int&gt;& arr, int l, int r) {
    if (l &lt; r) {
        int mid = (l + r) / 2;
        mergeSort(arr, l, mid);
        mergeSort(arr, mid+1, r);
        merge(arr, l, mid, r);
    }
}</code></pre></div>
<h2>Quick Sort — O(n log n) avg</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">int partition(vector&lt;int&gt;& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j &lt; high; j++)
        if (arr[j] &lt; pivot) swap(arr[++i], arr[j]);
    swap(arr[i+1], arr[high]);
    return i + 1;
}

void quickSort(vector&lt;int&gt;& arr, int low, int high) {
    if (low &lt; high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}</code></pre></div>
<h2>STL sort — use in practice</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">sort(v.begin(), v.end());                     // ascending
sort(v.begin(), v.end(), greater&lt;int&gt;());     // descending
sort(v.begin(), v.end(), [](int a, int b) {   // custom
    return abs(a) &lt; abs(b);
});</code></pre></div>`
  },

  'cpp-dsa-trees': {
    lang:'cpp', title:'DSA — Trees & Graphs', level:'Advanced', time:'60 min',
    prev:'cpp-dsa-sorting', next:'cpp-design-patterns',
    editorLang:'cpp',
    editorCode:`#include <iostream>
using namespace std;

struct Node {
    int val;
    Node *left, *right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

Node* insert(Node* root, int val) {
    if (!root) return new Node(val);
    if (val < root->val) root->left  = insert(root->left, val);
    else                 root->right = insert(root->right, val);
    return root;
}

void inorder(Node* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->val << " ";
    inorder(root->right);
}

int main() {
    Node* root = nullptr;
    for (int v : {5, 3, 7, 1, 4, 6, 8})
        root = insert(root, v);
    inorder(root);  // 1 3 4 5 6 7 8 (sorted!)
}`,
    body:`
<h2>Binary Search Tree (BST)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">struct Node {
    int val;
    Node *left, *right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

Node* insert(Node* root, int val) {
    if (!root) return new Node(val);
    if (val &lt; root->val) root->left  = insert(root->left, val);
    else                 root->right = insert(root->right, val);
    return root;
}

bool search(Node* root, int val) {
    if (!root) return false;
    if (val == root->val) return true;
    return val &lt; root->val ? search(root->left, val)
                           : search(root->right, val);
}</code></pre></div>
<h2>Tree Traversals</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">void inorder(Node* n)  { if(n){ inorder(n->left); cout&lt;&lt;n->val&lt;&lt;" "; inorder(n->right);  } }
void preorder(Node* n) { if(n){ cout&lt;&lt;n->val&lt;&lt;" "; preorder(n->left); preorder(n->right); } }
void postorder(Node* n){ if(n){ postorder(n->left); postorder(n->right); cout&lt;&lt;n->val&lt;&lt;" "; } }

// BFS — level by level
#include &lt;queue&gt;
void bfs(Node* root) {
    if (!root) return;
    queue&lt;Node*&gt; q;
    q.push(root);
    while (!q.empty()) {
        Node* cur = q.front(); q.pop();
        cout &lt;&lt; cur->val &lt;&lt; " ";
        if (cur->left)  q.push(cur->left);
        if (cur->right) q.push(cur->right);
    }
}</code></pre></div>
<h2>Graph — Adjacency List + DFS/BFS</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">#include &lt;vector&gt;
#include &lt;queue&gt;
int N = 6;
vector&lt;vector&lt;int&gt;&gt; adj(N);

void addEdge(int u, int v) { adj[u].push_back(v); adj[v].push_back(u); }

void dfs(int node, vector&lt;bool&gt;& visited) {
    visited[node] = true;
    cout &lt;&lt; node &lt;&lt; " ";
    for (int nb : adj[node])
        if (!visited[nb]) dfs(nb, visited);
}

void bfsGraph(int start) {
    vector&lt;bool&gt; visited(N, false);
    queue&lt;int&gt; q;
    q.push(start); visited[start] = true;
    while (!q.empty()) {
        int cur = q.front(); q.pop();
        cout &lt;&lt; cur &lt;&lt; " ";
        for (int nb : adj[cur])
            if (!visited[nb]) { visited[nb]=true; q.push(nb); }
    }
}</code></pre></div>`
  },

  'cpp-design-patterns': {
    lang:'cpp', title:'Design Patterns', level:'Advanced', time:'55 min',
    prev:'cpp-dsa-trees', next:null,
    editorLang:'cpp',
    editorCode:`#include <iostream>
#include <memory>
#include <vector>
#include <functional>
using namespace std;

// Observer Pattern
class EventEmitter {
    vector<function<void(string)>> listeners;
public:
    void on(function<void(string)> cb) { listeners.push_back(cb); }
    void emit(string event) {
        for (auto& cb : listeners) cb(event);
    }
};

int main() {
    EventEmitter btn;
    btn.on([](string e) { cout << "Handler 1: " << e << endl; });
    btn.on([](string e) { cout << "Handler 2: " << e << endl; });
    btn.emit("click");
    btn.emit("hover");
}`,
    body:`
<h2>Singleton Pattern</h2>
<p>Ensures only one instance of a class ever exists.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Config {
    Config() {}                            // private constructor
    Config(const Config&) = delete;        // no copy
    Config& operator=(const Config&) = delete;
public:
    static Config& instance() {
        static Config inst;                // created once, thread-safe (C++11)
        return inst;
    }
    string getValue(string key) { return "value"; }
};

Config::instance().getValue("theme");     // always the same object</code></pre></div>
<h2>Factory Pattern</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Animal { public: virtual void speak() = 0; };
class Dog : public Animal { public: void speak() override { cout &lt;&lt; "Woof\n"; } };
class Cat : public Animal { public: void speak() override { cout &lt;&lt; "Meow\n"; } };

unique_ptr&lt;Animal&gt; create(string type) {
    if (type == "dog") return make_unique&lt;Dog&gt;();
    if (type == "cat") return make_unique&lt;Cat&gt;();
    return nullptr;
}

auto a = create("dog");
a-&gt;speak();   // Woof</code></pre></div>
<h2>Observer Pattern</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Subject {
    vector&lt;function&lt;void(int)&gt;&gt; observers;
    int state = 0;
public:
    void subscribe(function&lt;void(int)&gt; cb) { observers.push_back(cb); }
    void setState(int s) {
        state = s;
        for (auto& cb : observers) cb(state);  // notify all
    }
};

Subject s;
s.subscribe([](int v){ cout &lt;&lt; "Observer A: " &lt;&lt; v &lt;&lt; "\n"; });
s.subscribe([](int v){ cout &lt;&lt; "Observer B: " &lt;&lt; v &lt;&lt; "\n"; });
s.setState(42);</code></pre></div>
<h2>Strategy Pattern</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">cpp</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-cpp">class Sorter {
    function&lt;bool(int,int)&gt; strategy;
public:
    Sorter(function&lt;bool(int,int)&gt; s) : strategy(s) {}
    void sort(vector&lt;int&gt;& v) {
        std::sort(v.begin(), v.end(), strategy);
    }
};

Sorter asc( [](int a, int b){ return a &lt; b; });
Sorter desc([](int a, int b){ return a &gt; b; });

vector&lt;int&gt; v = {3,1,4,1,5};
asc.sort(v);   // {1,1,3,4,5}
desc.sort(v);  // {5,4,3,1,1}</code></pre></div>`
  },

  /* ── Python Intermediate / Advanced ── */

  'py-modules': {
    lang:'python', title:'Modules & Packages', level:'Intermediate', time:'20 min',
    prev:'py-comprehensions', next:'py-exceptions',
    editorLang:'python',
    editorCode:`import math
import random
from datetime import datetime, timedelta
from collections import Counter, defaultdict

# math module
print(math.pi, math.sqrt(16), math.factorial(5))

# random module
nums = [random.randint(1, 100) for _ in range(10)]
print("Random:", nums)
print("Choice:", random.choice(nums))

# datetime
now = datetime.now()
tomorrow = now + timedelta(days=1)
print("Today:", now.strftime("%Y-%m-%d"))
print("Tomorrow:", tomorrow.strftime("%Y-%m-%d"))

# Counter
words = "the quick brown fox jumps over the lazy dog".split()
freq = Counter(words)
print("Most common:", freq.most_common(3))`,
    body:`
<h2>Importing Modules</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import math                        # import whole module
from math import sqrt, pi          # import specific names
from math import sqrt as sq        # alias
import math as m                   # alias whole module

print(math.sqrt(16))   # 4.0
print(sqrt(16))        # 4.0
print(sq(16))          # 4.0
print(m.pi)            # 3.14159...</code></pre></div>
<h2>Useful Standard Library Modules</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import os           # OS interaction
import sys          # interpreter info
import json         # JSON parsing
import re           # regular expressions
import random       # random numbers
import datetime     # dates and times
import pathlib      # modern file paths
import collections  # Counter, deque, defaultdict
import itertools    # product, permutations, combinations
import functools    # reduce, lru_cache, partial</code></pre></div>
<h2>Creating Your Own Module</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># mymath.py
def add(a, b): return a + b
def square(x): return x ** 2
PI = 3.14159

# main.py
import mymath
print(mymath.add(3, 4))    # 7
print(mymath.PI)            # 3.14159</code></pre></div>
<h2>__name__ == '__main__'</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># utils.py
def helper():
    return "helpful"

# This block ONLY runs when utils.py is executed directly,
# NOT when it's imported by another script
if __name__ == '__main__':
    print("Running as a script")
    print(helper())</code></pre></div>
<h2>Packages</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># A package is a folder with __init__.py
# mypackage/
#   __init__.py
#   utils.py
#   models.py

from mypackage import utils
from mypackage.models import User

# Install third-party packages
# pip install requests numpy pandas</code></pre></div>`
  },

  'py-exceptions': {
    lang:'python', title:'Exception Handling', level:'Intermediate', time:'18 min',
    prev:'py-modules', next:'py-iterators',
    editorLang:'python',
    editorCode:`class InsufficientFundsError(Exception):
    def __init__(self, amount, balance):
        super().__init__(f"Cannot withdraw {amount}, balance is {balance}")
        self.amount = amount
        self.balance = balance

def withdraw(balance, amount):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    if amount > balance:
        raise InsufficientFundsError(amount, balance)
    return balance - amount

try:
    bal = withdraw(100, 150)
except InsufficientFundsError as e:
    print(f"Error: {e}")
    print(f"Tried: {e.amount}, Had: {e.balance}")
except ValueError as e:
    print(f"Invalid: {e}")
else:
    print(f"New balance: {bal}")
finally:
    print("Transaction attempt complete")`,
    body:`
<h2>try / except / else / finally</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Caught: {e}")           # runs on error
except (TypeError, ValueError) as e:
    print(f"Type or Value error")   # catch multiple types
except Exception as e:
    print(f"Unexpected: {e}")       # catch-all
else:
    print("No error occurred")      # runs only if no exception
finally:
    print("Always runs")            # runs no matter what</code></pre></div>
<h2>Raising Exceptions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def divide(a, b):
    if b == 0:
        raise ValueError("Denominator cannot be zero")
    return a / b

# Re-raise
try:
    divide(1, 0)
except ValueError:
    print("Logging error...")
    raise           # re-raises the same exception</code></pre></div>
<h2>Custom Exceptions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class AppError(Exception):
    """Base exception for this application."""
    pass

class ValidationError(AppError):
    def __init__(self, field, message):
        self.field = field
        super().__init__(f"{field}: {message}")

class NotFoundError(AppError):
    pass

try:
    raise ValidationError("email", "invalid format")
except ValidationError as e:
    print(e.field, str(e))   # email: email: invalid format</code></pre></div>
<div class="note-box"><strong>Best practice:</strong> Catch the <em>most specific</em> exception first. Catching bare <code class="inline-code">Exception</code> or <code class="inline-code">except:</code> hides bugs — only do it at the top level.</div>`
  },

  'py-iterators': {
    lang:'python', title:'Iterators & Generators', level:'Intermediate', time:'26 min',
    prev:'py-exceptions', next:'py-file-io',
    editorLang:'python',
    editorCode:`# Generator function — produces values lazily
def fibonacci(limit):
    a, b = 0, 1
    while a <= limit:
        yield a
        a, b = b, a + b

print("Fibonacci up to 100:")
for n in fibonacci(100):
    print(n, end=" ")
print()

# Infinite counter generator
def counter(start=0, step=1):
    n = start
    while True:
        yield n
        n += step

import itertools
first_10_evens = list(itertools.islice(counter(0, 2), 10))
print("First 10 evens:", first_10_evens)`,
    body:`
<h2>Iterators</h2>
<p>Any object that implements <code class="inline-code">__iter__</code> and <code class="inline-code">__next__</code> is an iterator. <code class="inline-code">for</code> loops use this protocol.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class CountUp:
    def __init__(self, stop):
        self.current = 0
        self.stop = stop

    def __iter__(self):
        return self           # iterable returns itself

    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration    # signals end of iteration
        val = self.current
        self.current += 1
        return val

for n in CountUp(5):
    print(n)   # 0 1 2 3 4</code></pre></div>
<h2>Generators with yield</h2>
<p>A function that uses <code class="inline-code">yield</code> is a generator — it pauses at each <code class="inline-code">yield</code> and resumes next time <code class="inline-code">next()</code> is called. Memory-efficient: values are computed one at a time.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def squares(n):
    for i in range(n):
        yield i ** 2      # pause and return value

gen = squares(5)
next(gen)   # 0
next(gen)   # 1
next(gen)   # 4

# Use in a for loop
for sq in squares(5):
    print(sq)             # 0 1 4 9 16

# Generator expression (lazy list comprehension)
gen = (x**2 for x in range(1_000_000))   # barely uses any memory</code></pre></div>
<h2>yield from</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)   # delegate to sub-generator
        else:
            yield item

list(flatten([1, [2, [3, 4]], 5]))   # [1, 2, 3, 4, 5]</code></pre></div>
<h2>itertools — Powerful Combinators</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import itertools

list(itertools.islice(counter(), 5))      # [0,1,2,3,4] from infinite
list(itertools.chain([1,2], [3,4]))       # [1,2,3,4]
list(itertools.combinations([1,2,3], 2)) # [(1,2),(1,3),(2,3)]
list(itertools.permutations("AB", 2))    # [('A','B'),('B','A')]</code></pre></div>`
  },

  'py-async': {
    lang:'python', title:'Async / Await', level:'Advanced', time:'40 min',
    prev:'py-file-io', next:'py-metaclasses',
    editorLang:'python',
    editorCode:`import asyncio

async def fetch_data(name, delay):
    print(f"{name}: starting...")
    await asyncio.sleep(delay)       # simulate I/O wait
    print(f"{name}: done after {delay}s")
    return f"{name}_result"

async def main():
    # Run tasks concurrently (not sequentially)
    task1 = asyncio.create_task(fetch_data("API-1", 2))
    task2 = asyncio.create_task(fetch_data("API-2", 1))
    task3 = asyncio.create_task(fetch_data("API-3", 3))

    results = await asyncio.gather(task1, task2, task3)
    print("All done:", results)

asyncio.run(main())
# Total time ~3s, not 6s — they run concurrently!`,
    body:`
<h2>What is Async?</h2>
<p>Async allows your program to do other work <strong>while waiting for I/O</strong> (network, file, database). It's not parallel (no multiple CPU cores) — it's <em>concurrent</em> on one thread.</p>
<h2>async def & await</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import asyncio

async def greet(name):            # coroutine function
    await asyncio.sleep(1)        # yield control for 1 second
    print(f"Hello, {name}!")

# Run a single coroutine
asyncio.run(greet("Alice"))       # entry point</code></pre></div>
<h2>Running Coroutines Concurrently</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">async def task(name, delay):
    await asyncio.sleep(delay)
    return f"{name} done"

async def main():
    # gather runs all coroutines concurrently
    results = await asyncio.gather(
        task("A", 3),
        task("B", 1),
        task("C", 2),
    )
    print(results)   # takes 3s total, not 6s

asyncio.run(main())</code></pre></div>
<h2>async with & async for</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import aiohttp   # pip install aiohttp

async def download(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# Async generator
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0)   # yield control
        yield i

async def main():
    async for val in async_range(5):
        print(val)</code></pre></div>
<div class="note-box"><strong>When to use async:</strong> Network requests, file I/O, database queries. <strong>Not useful for:</strong> CPU-heavy work (use multiprocessing instead) or simple scripts.</div>`
  },

  'py-metaclasses': {
    lang:'python', title:'Metaclasses', level:'Advanced', time:'45 min',
    prev:'py-async', next:'py-dsa-sorting',
    editorLang:'python',
    editorCode:`# Metaclass: controls how classes are created
class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=Singleton):
    def __init__(self):
        self.connected = False

    def connect(self):
        self.connected = True
        print("Connected to DB")

db1 = Database()
db2 = Database()
print(db1 is db2)   # True — same object!

db1.connect()
print(db2.connected)  # True — they're the same instance`,
    body:`
<h2>What is a Metaclass?</h2>
<p>A metaclass is the <strong>class of a class</strong>. Just as a class controls how its instances behave, a metaclass controls how classes are created.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">type(42)         # &lt;class 'int'&gt;   — type of an instance
type(int)        # &lt;class 'type'&gt;  — type of a class
type(type)       # &lt;class 'type'&gt;  — type is its own metaclass

# type() can also CREATE a class dynamically
Dog = type('Dog', (object,), {'speak': lambda self: 'Woof'})
d = Dog()
d.speak()   # Woof</code></pre></div>
<h2>Writing a Metaclass</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class AutoProperty(type):
    """Automatically turns _x attributes into properties."""
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        for key in list(namespace):
            if key.startswith('_') and not key.startswith('__'):
                prop_name = key[1:]
                setattr(cls, prop_name, property(lambda self, k=key: getattr(self, k)))
        return cls

class Point(metaclass=AutoProperty):
    def __init__(self, x, y):
        self._x = x
        self._y = y

p = Point(3, 4)
print(p.x, p.y)   # 3 4</code></pre></div>
<h2>__init_subclass__ — Simpler Alternative</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class Plugin:
    registry = {}

    def __init_subclass__(cls, plugin_name=None, **kwargs):
        super().__init_subclass__(**kwargs)
        if plugin_name:
            Plugin.registry[plugin_name] = cls

class JSONPlugin(Plugin, plugin_name="json"):
    pass

class XMLPlugin(Plugin, plugin_name="xml"):
    pass

print(Plugin.registry)   # {'json': JSONPlugin, 'xml': XMLPlugin}</code></pre></div>`
  },

  'py-dsa-sorting': {
    lang:'python', title:'DSA — Sorting & Searching', level:'Advanced', time:'50 min',
    prev:'py-metaclasses', next:'py-dsa-trees',
    editorLang:'python',
    editorCode:`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]

def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1

nums = [64, 34, 25, 12, 22, 11, 90]
sorted_nums = merge_sort(nums)
print("Sorted:", sorted_nums)
print("Search 25:", binary_search(sorted_nums, 25))`,
    body:`
<h2>Bubble Sort — O(n²)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break    # already sorted</code></pre></div>
<h2>Merge Sort — O(n log n)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # Merge two sorted halves
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]</code></pre></div>
<h2>Quick Sort — O(n log n) avg</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)</code></pre></div>
<h2>Binary Search — O(log n)</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1   # not found

import bisect
bisect.bisect_left([1,3,5,7], 5)   # 2 — stdlib binary search</code></pre></div>
<h2>Python built-ins</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">sorted([3,1,4,1,5])                      # new sorted list
sorted(data, key=lambda x: x['age'])     # sort by key
sorted(data, key=lambda x: x['age'], reverse=True)

import heapq
heapq.nlargest(3, nums)   # 3 largest
heapq.nsmallest(3, nums)  # 3 smallest</code></pre></div>`
  },

  'py-dsa-trees': {
    lang:'python', title:'DSA — Trees & Graphs', level:'Advanced', time:'60 min',
    prev:'py-dsa-sorting', next:'py-ml-basics',
    editorLang:'python',
    editorCode:`from collections import deque

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def insert_bst(root, val):
    if not root: return TreeNode(val)
    if val < root.val: root.left  = insert_bst(root.left, val)
    else:              root.right = insert_bst(root.right, val)
    return root

def inorder(root, result=[]):
    if root:
        inorder(root.left, result)
        result.append(root.val)
        inorder(root.right, result)
    return result

def bfs(root):
    if not root: return []
    q, result = deque([root]), []
    while q:
        node = q.popleft()
        result.append(node.val)
        if node.left:  q.append(node.left)
        if node.right: q.append(node.right)
    return result

root = None
for v in [5, 3, 7, 1, 4, 6, 8]:
    root = insert_bst(root, v)

print("Inorder:", inorder(root, []))
print("BFS:", bfs(root))`,
    body:`
<h2>Binary Tree & BST</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def insert(root, val):
    if not root: return TreeNode(val)
    if val &lt; root.val: root.left  = insert(root.left, val)
    else:              root.right = insert(root.right, val)
    return root

def search(root, val):
    if not root: return False
    if root.val == val: return True
    if val &lt; root.val: return search(root.left, val)
    return search(root.right, val)</code></pre></div>
<h2>Tree Traversals</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">def inorder(node):    # Left → Root → Right (sorted for BST)
    if node:
        inorder(node.left)
        print(node.val, end=" ")
        inorder(node.right)

def preorder(node):   # Root → Left → Right
    if node:
        print(node.val, end=" ")
        preorder(node.left)
        preorder(node.right)

def postorder(node):  # Left → Right → Root
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end=" ")</code></pre></div>
<h2>BFS — Level-Order Traversal</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">from collections import deque

def bfs(root):
    if not root: return []
    queue, result = deque([root]), []
    while queue:
        node = queue.popleft()
        result.append(node.val)
        if node.left:  queue.append(node.left)
        if node.right: queue.append(node.right)
    return result</code></pre></div>
<h2>Graph — DFS & BFS</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">graph = {0:[1,2], 1:[0,3], 2:[0,4], 3:[1], 4:[2]}

def dfs(node, visited=None):
    if visited is None: visited = set()
    visited.add(node)
    print(node, end=" ")
    for nb in graph[node]:
        if nb not in visited:
            dfs(nb, visited)

def bfs_graph(start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        print(node, end=" ")
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb); q.append(nb)</code></pre></div>`
  },

  'py-ml-basics': {
    lang:'python', title:'ML Basics with NumPy', level:'Advanced', time:'55 min',
    prev:'py-dsa-trees', next:'py-testing',
    editorLang:'python',
    editorCode:`import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5])
b = np.arange(0, 10, 2)          # [0,2,4,6,8]
c = np.linspace(0, 1, 5)         # [0,.25,.5,.75,1]
m = np.zeros((3, 3))             # 3x3 zeros matrix
i = np.eye(3)                    # 3x3 identity matrix

# Operations (all element-wise)
print(a * 2)        # [2,4,6,8,10]
print(a ** 2)       # [1,4,9,16,25]
print(a + b[:5])    # element-wise add

# Stats
print("Mean:", a.mean())
print("Std:", a.std())
print("Sum:", a.sum())
print("Max:", a.max(), "at index", a.argmax())

# Matrix multiply
A = np.array([[1,2],[3,4]])
B = np.array([[5,6],[7,8]])
print(A @ B)        # matrix product`,
    body:`
<h2>NumPy Basics</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import numpy as np

# Create arrays
a = np.array([1, 2, 3])              # 1D
m = np.array([[1,2],[3,4]])          # 2D matrix
z = np.zeros((3, 4))                 # 3×4 zeros
o = np.ones((2, 2))                  # 2×2 ones
r = np.random.rand(3, 3)             # 3×3 random [0,1)
i = np.eye(3)                        # 3×3 identity

a.shape    # (3,)
m.shape    # (2, 2)
a.dtype    # dtype('int64')</code></pre></div>
<h2>Array Operations — Broadcasting</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">a = np.array([1, 2, 3, 4, 5])

a + 10        # [11, 12, 13, 14, 15]  — scalar broadcast
a * 2         # [2, 4, 6, 8, 10]
a ** 2        # [1, 4, 9, 16, 25]
np.sqrt(a)    # [1, 1.41, 1.73, 2, 2.23]

# Element-wise on two arrays
b = np.array([10, 20, 30, 40, 50])
a + b         # [11, 22, 33, 44, 55]</code></pre></div>
<h2>Indexing & Slicing</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">m = np.array([[1,2,3],[4,5,6],[7,8,9]])

m[1, 2]        # 6
m[0:2, 1:3]    # [[2,3],[5,6]]  — slice rows 0-1, cols 1-2

# Boolean indexing
a = np.array([3, -1, 4, -1, 5])
a[a > 0]       # [3, 4, 5]  — only positive values
a[a < 0] = 0   # replace negatives with 0</code></pre></div>
<h2>Linear Algebra</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">A = np.array([[2, 1], [1, 3]])
b = np.array([5, 10])

x = np.linalg.solve(A, b)   # solve Ax = b
print(x)                     # [1. 3.]

np.linalg.det(A)             # determinant: 5.0
np.linalg.inv(A)             # inverse matrix
vals, vecs = np.linalg.eig(A)  # eigenvalues, eigenvectors</code></pre></div>
<div class="note-box"><strong>Next steps:</strong> With NumPy mastered, explore <strong>pandas</strong> (DataFrames), <strong>matplotlib</strong> (plotting), and <strong>scikit-learn</strong> (machine learning algorithms).</div>`
  },

  'py-testing': {
    lang:'python', title:'Testing with pytest', level:'Advanced', time:'35 min',
    prev:'py-ml-basics', next:null,
    editorLang:'python',
    editorCode:`# Functions to test
def add(a, b): return a + b
def divide(a, b):
    if b == 0: raise ZeroDivisionError("Cannot divide by zero")
    return a / b
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

# Tests (normally in test_mymodule.py)
import pytest

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_divide():
    assert divide(10, 2) == 5.0
    with pytest.raises(ZeroDivisionError):
        divide(5, 0)

def test_palindrome():
    assert is_palindrome("racecar")
    assert is_palindrome("A man a plan a canal Panama")
    assert not is_palindrome("hello")

# Run: pytest test_mymodule.py -v`,
    body:`
<h2>Writing Tests with pytest</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python"># test_math.py
def add(a, b): return a + b

def test_add_positive():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -2) == -3

def test_add_zero():
    assert add(0, 100) == 100</code></pre></div>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">bash</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-bash">pip install pytest
pytest test_math.py          # run tests
pytest test_math.py -v       # verbose output
pytest -k "add"              # run tests matching "add"</code></pre></div>
<h2>Testing Exceptions</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import pytest

def divide(a, b):
    if b == 0: raise ZeroDivisionError
    return a / b

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(5, 0)

def test_divide_message():
    with pytest.raises(ZeroDivisionError, match="zero"):
        raise ZeroDivisionError("division by zero")</code></pre></div>
<h2>Fixtures</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">import pytest

@pytest.fixture
def sample_user():
    return {"name": "Alice", "age": 25, "email": "alice@test.com"}

def test_user_name(sample_user):
    assert sample_user["name"] == "Alice"

def test_user_age(sample_user):
    assert sample_user["age"] >= 0</code></pre></div>
<h2>Parametrize</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">python</span><button class="copy-btn">Copy</button></div>
<pre><code class="language-python">@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (100, -50, 50),
])
def test_add(a, b, expected):
    assert add(a, b) == expected   # runs 4 times, once per row</code></pre></div>`
  },

});

/* ── Fix prev/next on existing lessons to connect the new chain ── */
// C++: oop now goes to inheritance (not stl directly)
LESSONS['cpp-oop'].next        = 'cpp-inheritance';
// C++: stl prev is inheritance, next is exceptions
LESSONS['cpp-stl'].prev        = 'cpp-inheritance';
LESSONS['cpp-stl'].next        = 'cpp-exceptions';

// Python: comprehensions → modules (not file-io directly)
LESSONS['py-comprehensions'].next = 'py-modules';
// Python: file-io prev is iterators, next is async
LESSONS['py-file-io'].prev       = 'py-iterators';
LESSONS['py-file-io'].next       = 'py-async';


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
