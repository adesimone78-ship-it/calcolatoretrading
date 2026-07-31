/* ─── CalcolatoreTrading.it — comportamenti condivisi ──────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  // Cookie banner
  const banner = document.getElementById("cookie-banner");
  if (banner) {
    if (localStorage.getItem("ct_cookie_choice")) {
      banner.classList.add("hidden");
    } else {
      banner.classList.remove("hidden");
    }
    banner.querySelectorAll("[data-cookie]").forEach(btn => {
      btn.addEventListener("click", () => {
        localStorage.setItem("ct_cookie_choice", btn.dataset.cookie);
        banner.classList.add("hidden");
        // Caricamento AdSense solo dopo consenso "accept"
        if (btn.dataset.cookie === "accept") {
          loadAdSense();
        }
      });
    });
    // Se già accettato in precedenza, carica AdSense
    if (localStorage.getItem("ct_cookie_choice") === "accept") loadAdSense();
  }
});

function loadAdSense() {
  if (document.getElementById("adsense-script")) return;
  const s = document.createElement("script");
  s.id = "adsense-script";
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1145255592067202";
  document.head.appendChild(s);
  document.querySelectorAll(".ad-slot ins.adsbygoogle").forEach(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
  });
}
