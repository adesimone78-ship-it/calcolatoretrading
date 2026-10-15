/* ─── CalcolatoreTrading.it — comportamenti condivisi ──────────────────── */
// Lo script AdSense è caricato nel <head> di ogni pagina e ogni slot ha il suo
// push inline. Il consenso cookie è gestito dal messaggio di Google (AdSense →
// Privacy e messaggi, piattaforma certificata IAB TCF), che compare da solo.

// Indirizzi con ".html" (es. /calcolatore-interesse-composto.html): GitHub Pages serve la
// stessa pagina anche all'indirizzo pulito, ma non permette redirect 301. Portiamo chi arriva
// (e Google) sulla versione senza estensione, che è quella dichiarata nel canonical.
(function () {
  var path = location.pathname;
  if (/\.html$/.test(path)) {
    var clean = path.replace(/(^|\/)index\.html$/, "$1").replace(/\.html$/, "");
    location.replace(clean + location.search + location.hash);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  // Link "modifica le tue preferenze cookie": riapre il messaggio di consenso di Google
  document.querySelectorAll("[data-cookie-settings]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      window.googlefc = window.googlefc || {};
      window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
      window.googlefc.callbackQueue.push(() => window.googlefc.showRevocationMessage());
    });
  });
});
