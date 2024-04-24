if (content.getAttribute('data-bs-theme') === 'light') {
   document.documentElement.style.setProperty('--cl-black', 'rgba(0, 0, 0, 0.9)');
    themeToggleButton.classList.toggle("light-btn");
    themeToggleButton.classList.toggle("dark-btn");
    footer.classList.toggle("footer-light");
    footerSeparate.classList.toggle("separate-footer-main-light");
    footerSeparate.classList.toggle("separate-footer-main");
    document.documentElement.style.setProperty('--cl-search', 'rgba(200, 200, 200, 1)');
    document.documentElement.style.setProperty('--cl-green', 'rgb(0, 85, 14)');
    document.documentElement.style.setProperty('--cl-lime', 'rgb(0, 139, 42)');
}