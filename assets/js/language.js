(()=> {
  const dict = {
    id: { Dashboard:"Dashboard", Course:"Perkuliahan", "Molecular Builder":"Pembangun Molekul", "Input Builder":"Pembuat Input", Results:"Analisis Hasil", "ORCA Docker":"ORCA Docker" },
    en: { Dashboard:"Dashboard", Course:"Courses", "Molecular Builder":"Molecular Builder", "Input Builder":"Input Builder", Results:"Results Analyzer", "ORCA Docker":"ORCA Docker" }
  };
  let lang = localStorage.getItem("simonusa-lang") || "id";
  const original = new WeakMap();
  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-id][data-en]").forEach(el => {
      el.innerHTML = el.dataset[lang];
    });
    document.querySelectorAll("nav a").forEach(a => {
      if (!original.has(a)) original.set(a, a.textContent.trim());
      const key = original.get(a);
      if (dict[lang][key] !== undefined) a.textContent = dict[lang][key];
    });
    const b = document.getElementById("langToggle");
    if (b) {
      b.textContent = lang === "id" ? "EN" : "ID";
      b.setAttribute("aria-label", lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
      b.title = b.getAttribute("aria-label");
    }
    document.querySelectorAll("[data-lang-label]").forEach(el => {
      el.textContent = lang === "id" ? el.dataset.idLabel : el.dataset.enLabel;
    });
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise();
    document.dispatchEvent(new CustomEvent("simonusa:languagechange", {detail:{language:lang}}));
  }
  function init() {
    if (!document.getElementById("langToggle")) {
      const b = document.createElement("button");
      b.id = "langToggle";
      b.type = "button";
      b.className = "language-toggle";
      b.addEventListener("click", () => {
        lang = lang === "id" ? "en" : "id";
        localStorage.setItem("simonusa-lang", lang);
        apply();
      });
      document.body.appendChild(b);
    }
    apply();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
  else init();
  window.SIMONUSA_LANG = { get:()=>lang, apply };
})();