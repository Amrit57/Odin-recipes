
export default function homeRender() {
    const content = document.createElement('div');
    content.setAttribute('id', 'home-text');
    const restroName = document.createElement('h1');
    const intro = document.createElement('p');
    const establised = document.createElement('p');

    restroName.textContent = 'KhajaGhar';
    intro.textContent = "Delicious and Organic Food";
    establised.textContent = 'SINCE 2005';
    
    content.appendChild(restroName);
    content.appendChild(intro);
    content.appendChild(establised);
    return content;
}