/* ─── CalcolatoreTrading.it — comportamenti condivisi ──────────────────── */
// Lo script AdSense è caricato nel <head> di ogni pagina e ogni slot ha il suo
// push inline. Il consenso cookie è gestito dal messaggio di Google (AdSense →
// Privacy e messaggi, piattaforma certificata IAB TCF), che compare da solo.

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
