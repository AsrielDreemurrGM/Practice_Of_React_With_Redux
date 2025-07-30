<h1>React + Redux Practice</h1>
<p>
  Este README também está disponível em <a href="./README.pt-br.md">Português</a>.
</p>
<p>
  This project is a practical exercise on using <strong>React</strong> with <strong>Redux Toolkit</strong>,
  demonstrating the conversion of components from <code>useState</code> and <code>Fetch API</code>
  to <code>Redux</code> and <code>RTK Query</code>.
</p>
<p>
  <strong>⚠️ Note:</strong> This project is currently <strong>broken</strong> because the API used in the original course has been taken offline. It used to fetch data from:
</p>
<pre>
https://fake-api-tau.vercel.app/api/ebac_sports
</pre>
<p>
  The error returned is:
</p>
<pre>
404: NOT_FOUND
Code: DEPLOYMENT_NOT_FOUND
</pre>
<p>
  The API hosted mock JSON data for products. Despite this, the code structure and logic remain fully functional and demonstrate a correct implementation of Redux state management.
</p>
<h2>🚀 Technologies Used</h2>
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Redux Toolkit</li>
  <li>RTK Query</li>
  <li>TypeScript</li>
  <li>Fetch API (removed)</li>
  <li>React Hooks (useState, useEffect, useDispatch, useSelector)</li>
  <li>HTML5</li>
  <li>ESLint</li>
</ul>
<h2>📦 Installation</h2>
<pre><code>npm install</code></pre>
<h2>▶️ Running the Project</h2>
<pre><code>npm start</code></pre>
<h2>📁 Folder Highlights</h2>
<ul>
  <li><code>store/</code> – Redux store configuration</li>
  <li><code>slices/</code> – Contains individual Redux slices for cart and favorites</li>
  <li><code>services/api.ts</code> – RTK Query setup</li>
  <li><code>components/</code> – React components consuming Redux state</li>
</ul>
<h2>🎯 Goals</h2>
<ul>
  <li>Practice converting local state logic to Redux Toolkit.</li>
  <li>Implement asynchronous data fetching using RTK Query.</li>
  <li>Structure Redux logic using best practices.</li>
</ul>
