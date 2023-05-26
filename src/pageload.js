import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'

export default function pageLoader() {

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

    const menuTab = menuPage();
    const homeTab = homePage();
    const contactTab = contactPage();

    content.appendChild(homeTab);

    function swtichTabPage() {
        menu.addEventListener('click', openMenuTab)
        contact.addEventListener('click', openContactTab)
        home.addEventListener('click', openHomeTab)

        function openMenuTab() {
            if (content.appendChild(homeTab)) {
                content.removeChild(homeTab);
            } if (content.appendChild(contactTab)) {
                content.removeChild(contactTab)
            }

            content.appendChild(menuTab);
        }
        function openContactTab() {
            if (content.appendChild(homeTab)) {
                content.removeChild(homeTab);
            }
            if (content.appendChild(menuTab)) {
                content.removeChild(menuTab)
            }

            content.appendChild(contactTab);
        }
        function openHomeTab() {
            if (content.appendChild(contactTab)) {
                content.removeChild(contactTab);
            }
            if (content.appendChild(menuTab)) {
                content.removeChild(menuTab)
            }

            content.appendChild(homeTab);
        }

    }
    swtichTabPage()

    main.appendChild(nav)
    main.appendChild(content);

    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')
    footer.textContent = 'Copyright by Amrit Lama Syangbo @ 2023'

    main.appendChild(footer)
    return main;
}