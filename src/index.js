const Handlebars = require("handlebars");
import obj from '../menu.json';

const menuEl = document.querySelector('.js-menu');
const source = document.querySelector('#tmp').innerHTML.trim();


const template = Handlebars.compile(source);
const markup = template(obj);

menuEl.innerHTML = markup;


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