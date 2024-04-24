// JavaScript code
const themeToggleButton = document.getElementById("light-dark-btn");
const content = document.documentElement;
const footer = document.getElementById("footer");
const footerSeparate = document.getElementById("footer-separator");
const loginPage = document.getElementById("login-signup-container-inner");


themeToggleButton.addEventListener('click', ()=> {
  if (content.getAttribute('data-bs-theme') === 'dark') {
    content.setAttribute('data-bs-theme', 'light');
    document.documentElement.style.setProperty('--cl-black', 'rgba(0, 0, 0, 0.9)');
    themeToggleButton.classList.toggle("light-btn");
    themeToggleButton.classList.toggle("dark-btn");
    footer.classList.toggle("footer-light");
    footerSeparate.classList.toggle("separate-footer-main-light");
    footerSeparate.classList.toggle("separate-footer-main");
    loginPage.classList.toggle("bg-dark");
    loginPage.classList.toggle("bg-light");
    loginPage.classList.toggle("border-light");
    loginPage.classList.toggle("border-dark");
    document.documentElement.style.setProperty('--cl-search', 'rgba(200, 200, 200, 1)');
    document.documentElement.style.setProperty('--cl-green', 'rgb(0, 85, 14)');
    document.documentElement.style.setProperty('--cl-lime', 'rgb(0, 139, 42)');
  } else {
    content.setAttribute('data-bs-theme', 'dark');
    document.documentElement.style.setProperty('--cl-black', 'rgba(0, 0, 0, 0.4)');
    themeToggleButton.classList.toggle("dark-btn");
    themeToggleButton.classList.toggle("light-btn");
    footerSeparate.classList.toggle("separate-footer-main-light");
    footerSeparate.classList.toggle("separate-footer-main");
    loginPage.classList.toggle("bg-dark");
    loginPage.classList.toggle("bg-light");
    loginPage.classList.toggle("border-light");
    loginPage.classList.toggle("border-dark");
    document.documentElement.style.setProperty('--cl-search', '#111');
    document.documentElement.style.setProperty('--cl-green', 'rgb(0, 185, 31)');
    document.documentElement.style.setProperty('--cl-lime', 'rgb(0, 201, 60)');
    footer.classList.toggle("footer-light");
  }
});
