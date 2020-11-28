import './styles.css';
import articles from './templates/template.hbs';
import obj from './menu.json';

console.log(obj);

const menuEl = document.querySelector('.js-menu');

const murkup = articles(obj);

menuEl.insertAdjacentHTML("beforeend", murkup);



const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const themeSwitchEl = document.querySelector(".theme-switch__toggle");
const bodyEl = document.querySelector("body");

bodyEl.classList.add(theme.LIGHT);
 if (localStorage.getItem("theme") === theme.DARK) {
    bodyEl.classList.add(theme.DARK);  
    themeSwitchEl.setAttribute("checked", true);
 }

themeSwitchEl.addEventListener("click", switchThemeHandler);

function switchThemeHandler(e){
    bodyEl.classList.remove(theme.LIGHT);
    bodyEl.classList.toggle(theme.DARK);

    localStorage.setItem("theme", theme.DARK);

    if (!bodyEl.classList.contains(theme.DARK)) {
        bodyEl.classList.add(theme.LIGHT); 
        localStorage.setItem("theme", theme.LIGHT);   
    }
}