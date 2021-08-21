/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */

async function fetchHtmlAsText(url) {
   return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function loadPage(page) {
   const contentDiv = document.getElementById('app');
   contentDiv.innerHTML = await fetchHtmlAsText(page + '.html');
   const script = document.createElement('script');
   script.src = 'assets/js/' + page + '.js';
   script.type = 'text/javascript';
   contentDiv.appendChild(script);
}

const getPageByHash = (hash) => (hash ? hash.replace('#', '') : 'home');

loadPage(getPageByHash(location.hash));

window.addEventListener(
   'hashchange',
   (ev) => loadPage(getPageByHash(ev.target.location.hash)),
   false
);
