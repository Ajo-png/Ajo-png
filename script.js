(function () {

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        document.getElementById('btn-dark').classList.toggle('toggle__btn--active', theme === 'dark');
        document.getElementById('btn-light').classList.toggle('toggle__btn--active', theme === 'light');
        document.getElementById('btn-dark').setAttribute('aria-pressed', theme === 'dark');
        document.getElementById('btn-light').setAttribute('aria-pressed', theme === 'light');
        localStorage.setItem('hb-theme', theme);
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dataset.lang = lang;
        document.querySelectorAll('[data-en][data-es]').forEach(function (el) {
            el.innerHTML = el.dataset[lang];
        });
        document.getElementById('btn-en').classList.toggle('toggle__btn--active', lang === 'en');
        document.getElementById('btn-es').classList.toggle('toggle__btn--active', lang === 'es');
        document.getElementById('btn-en').setAttribute('aria-pressed', lang === 'en');
        document.getElementById('btn-es').setAttribute('aria-pressed', lang === 'es');
        localStorage.setItem('hb-lang', lang);
    }

    window.setTheme = applyTheme;
    window.setLang  = applyLang;

    var savedTheme = localStorage.getItem('hb-theme') || 'dark';
    var savedLang  = localStorage.getItem('hb-lang')  || 'en';

    applyTheme(savedTheme);
    if (savedLang !== 'en') applyLang(savedLang);

}());