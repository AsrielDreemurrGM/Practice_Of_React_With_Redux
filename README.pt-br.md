<h1>Prática com React + Redux</h1>
<p>
  This README is also available in <a href="./README.pt-br.md">English</a>.
</p>
<p>
  Este projeto é um exercício prático utilizando <strong>React</strong> com <strong>Redux Toolkit</strong>,
  demonstrando a conversão de componentes que utilizavam <code>useState</code> e <code>Fetch API</code>
  para o uso do <code>Redux</code> e <code>RTK Query</code>.
</p>
<p>
  <strong>⚠️ Aviso:</strong> Este projeto está atualmente <strong>quebrado</strong> porque a API utilizada no curso original foi retirada do ar. A URL utilizada era:
</p>
<pre>
https://fake-api-tau.vercel.app/api/ebac_sports
</pre>
<p>
  O erro retornado é:
</p>
<pre>
404: NOT_FOUND
Code: DEPLOYMENT_NOT_FOUND
</pre>
<p>
  Essa API hospedava um banco de dados fictício em JSON com produtos. Apesar disso, a estrutura do código e a lógica de implementação com Redux continuam funcionando corretamente.
</p>
<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Redux Toolkit</li>
  <li>RTK Query</li>
  <li>TypeScript</li>
  <li>Fetch API (removido)</li>
  <li>React Hooks (useState, useEffect, useDispatch, useSelector)</li>
  <li>HTML5</li>
  <li>ESLint</li>
</ul>
<h2>📦 Instalação</h2>
<pre><code>npm install</code></pre>
<h2>▶️ Executando o Projeto</h2>
<pre><code>npm start</code></pre>
<h2>📁 Estrutura de Pastas</h2>
<ul>
  <li><code>store/</code> – Configuração da store do Redux</li>
  <li><code>slices/</code> – Contém os slices do Redux (carrinho e favoritos)</li>
  <li><code>services/api.ts</code> – Configuração do RTK Query</li>
  <li><code>components/</code> – Componentes React que consomem o estado do Redux</li>
</ul>
<h2>🎯 Objetivos</h2>
<ul>
  <li>Praticar a conversão de lógica local para Redux Toolkit.</li>
  <li>Implementar busca assíncrona de dados com RTK Query.</li>
  <li>Organizar a lógica do Redux seguindo boas práticas.</li>
</ul>
