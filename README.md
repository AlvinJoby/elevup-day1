<h1 align="center">Google Homepage Clone</h1>

<p align="center">
  A lightweight, framework-free recreation of the current Google Search homepage built with
  <strong>semantic HTML</strong>, <strong>clean CSS</strong>, and a small amount of
  <strong>vanilla JavaScript</strong>.
</p>

<p align="center">
  <a href="./index.html"><img alt="HTML5" src="https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=white"></a>
  <a href="./styles.css"><img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></a>
  <a href="./script.js"><img alt="Vanilla JS" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000"></a>
</p>

<hr>

<h2>Overview</h2>

<p>
  This project focuses on visual fidelity and interaction fidelity rather than adding extra features.
  The layout, spacing, navigation behavior, search field treatment, and footer styling are all tuned to
  resemble the current Google homepage as closely as possible.
</p>

<table>
  <tr>
    <td><strong>Goal</strong></td>
    <td>Pixel-accurate Google homepage clone</td>
  </tr>
  <tr>
    <td><strong>Stack</strong></td>
    <td>Pure HTML, CSS, and JavaScript</td>
  </tr>
  <tr>
    <td><strong>Behavior</strong></td>
    <td>Responsive search, apps launcher, and mobile drawer</td>
  </tr>
  <tr>
    <td><strong>Accessibility</strong></td>
    <td>Keyboard navigation, focus states, and semantic landmarks</td>
  </tr>
</table>

<h2>What's Included</h2>

<ul>
  <li>Exact Google favicon in the document head</li>
  <li>Current Google page title</li>
  <li>Official Google logo image for more accurate proportions</li>
  <li>SVG search, Lens, microphone, grid, and drawer icons</li>
  <li>Google Apps launcher with Gmail, Maps, YouTube, Drive, Calendar, Photos, Translate, and News</li>
  <li>Mobile hamburger navigation styled as a left-side sheet with a dimmed backdrop</li>
  <li>Search form that opens results in the same tab by default</li>
  <li>Hover, focus, and active-state styling tuned for a Google-like feel</li>
  <li>Responsive footer and centered search layout</li>
</ul>

<h2>Project Structure</h2>

<pre><code>.
|-- index.html
|-- styles.css
|-- script.js
`-- README.md
</code></pre>

<h2>How It Works</h2>

<ol>
  <li><strong>Header</strong> uses a compact top-right nav on desktop and a hamburger button on smaller screens.</li>
  <li><strong>Search</strong> is centered with Google-like sizing, icon placement, and button spacing.</li>
  <li><strong>Apps launcher</strong> opens a floating panel anchored to the top-right area of the page.</li>
  <li><strong>Mobile drawer</strong> slides in from the left and closes with Escape, backdrop click, or resize changes.</li>
  <li><strong>Footer</strong> keeps the familiar two-row Google layout with region and policy links.</li>
</ol>

<h2>Accessibility Notes</h2>

<ul>
  <li>All interactive controls have descriptive labels.</li>
  <li>Keyboard users can open, navigate, and dismiss the launcher and drawer.</li>
  <li>Focus styles are visible and consistent.</li>
  <li>Semantic landmarks are used for header, navigation, main content, and footer.</li>
</ul>

<h2>Run Locally</h2>

<ol>
  <li>Open <code>index.html</code> in a browser.</li>
  <li>Type a query in the search box.</li>
  <li>Use the Google Search or I'm Feeling Lucky buttons to submit.</li>
  <li>On smaller screens, open the hamburger menu to view the mobile drawer.</li>
</ol>

<h2>Implementation Details</h2>

<ul>
  <li>The page relies on native browser form submission for search behavior.</li>
  <li>Overlay panels are controlled with a small vanilla JavaScript module.</li>
  <li>Styles are organized with CSS custom properties for consistent spacing, color, and shadows.</li>
  <li>Inline SVGs are used where Google-style icons need precise control.</li>
</ul>

<h2>Notes</h2>

<blockquote>
  This project is intentionally minimal. It is designed to look and feel like Google Search, not to add
  brand variations, extra widgets, or custom themes.
</blockquote>

<p align="center">
  <strong>Built for a faithful Google homepage clone with clean structure and polished presentation.</strong>
</p>
