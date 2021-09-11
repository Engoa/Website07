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
  contentDiv.innerHTML = await fetchHtmlAsText('assets/templates/' + page + '.html');
  if (document.getElementById('script_' + oldPage)) {
    contentDiv.removeChild('#script_' + oldPage);
  }
  const script = document.createElement('script');
  script.src = 'assets/js/templates/' + page + '.js';
  script.type = 'text/javascript';
  script.id = 'script_' + page;
  contentDiv.appendChild(script);
}

const Router = {
  getHash(hash) {
    return hash ? hash.split('?')[0].replace('#', '') : 'home';
  },
  getCurrentQuery() {
    if (location.hash) {
      return Object.fromEntries(new URLSearchParams(location.hash.split('?')[1]));
    } else {
      return null;
    }
  },
};

loadPage(Router.getHash(location.hash));

window.addEventListener(
  'hashchange',
  (ev) => {
    loadPage(Router.getHash(ev.target.location.hash), ev.oldURL.split('#')[1]);
    if (CartModal.isOpen) {
      CartModal.close();
    }
  },
  false
);
