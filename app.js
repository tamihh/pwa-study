const apiKey = '8e9fd4f18cb346a08113df08733d912c';
const main = document.querySelector('main');

window.addEventListener('load', e => {
  updateNews();
});

async function updateNews() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
  const json = await res.json();

  main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article) {
  return (`
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}"/>
        <p>${article.description}</p>
      </a>
    </div>
  `)
}