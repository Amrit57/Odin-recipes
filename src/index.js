import _ from 'lodash';
import './style.css';

// import menuPage from './menu.js'
// import contactPage from './contact.js'
function pageLoader() {

    const main = document.createElement('div');
    const nav = document.createElement('div');
    const content = document.createElement('div');
    main.setAttribute('id', 'main');
    nav.setAttribute('id', 'nav');
    content.setAttribute('id', 'content');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    main.appendChild(nav)
    main.appendChild(content);
    return main;
}
document.body.appendChild(pageLoader())