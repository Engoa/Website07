/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */

async function fetchHtmlAsText(url) {
   return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function loadPage(page, oldPage) {
   const contentDiv = document.getElementById('app');
   contentDiv.innerHTML = await fetchHtmlAsText(page + '.html');
   if (document.getElementById('script_' + oldPage)) {
      contentDiv.removeChild('#script_' + oldPage);
   }
   const script = document.createElement('script');
   script.src = 'assets/js/' + page + '.js';
   script.type = 'text/javascript';
   script.id = 'script_' + page;
   contentDiv.appendChild(script);
}

const getPageByHash = (hash) => (hash ? hash.replace('#', '') : 'home');

loadPage(getPageByHash(location.hash));

window.addEventListener(
   'hashchange',
   (ev) => loadPage(getPageByHash(ev.target.location.hash), ev.oldURL.split('#')[1]),
   false
);
