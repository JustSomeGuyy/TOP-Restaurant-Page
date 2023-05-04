import createNav from "./menu";


const content = document.getElementById('content');

// Creates the header for the page
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.textContent = 'Toe Beans Cafe';

    header.appendChild(logo);
    header.appendChild(createNav());


    return header;
};

export default createHeader;

content.appendChild(createHeader());

function createMain() {
    const mainElement = document.createElement('div');
    const heroElement = document.createElement('div');
    const heroHead = document.createElement('h2');
    const heroPara = document.createElement('p');

    mainElement.classList.add('main');
    heroElement.classList.add('hero');
    heroHead.classList.add('hero-header');
    heroPara.classList.add('hero-para');

    // create the cards for the experiences for the cafe
    const cardMenu = document.createElement('div')
    cardMenu.classList.add('card-menu');
    let card;
    let cardHead;
    let cardPara;

    for(let i = 0; i < 3; i++){
        card = document.createElement('div');
        card.classList.add('card');

        for(let j = 0; j < 2; j++){
            cardHead = document.createElement('h3');
            cardPara = document.createElement('p');

            
        }
    }






    return mainElement;
}