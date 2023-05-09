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

    // Creates hero in the body of the page
    const mainElement = document.createElement('div');
    const heroElement = document.createElement('div');
    const heroHead = document.createElement('h2');
    const heroPara = document.createElement('p');
    const heroImage = document.createElement('img');

    heroImage.src = "/images/pexels-liana-tril'-11719833.jpg";

    mainElement.classList.add('main');
    heroElement.classList.add('hero');
    heroHead.classList.add('hero-header');
    heroPara.classList.add('hero-para');

    // Content for the hero div block on the site
    heroHead.innerText = 'Hello';
    heroPara.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula ipsum massa, id convallis turpis pulvinar at. Sed sollicitudin porttitor enim, vel sollicitudin neque pellentesque sed. Fusce non sem luctus lacus tincidunt sodales. Mauris orci erat, condimentum eget mauris sed, faucibus sodales lorem. Nunc quis pellentesque leo, vitae feugiat velit. Phasellus ac dictum justo. Cras fermentum mi velit, eget commodo ligula vestibulum pulvinar. Pellentesque blandit mollis commodo. Maecenas mattis leo nec dolor faucibus fermentum eu eget dolor.";

    // create the cards for the experiences for the cafe
    const cardMenu = document.createElement('div')
    cardMenu.classList.add('card-menu');
    let card;
    let cardHead;
    let cardPara;


    // Creates the content for the cards
    const cardContext = [
        {title: 'Words', para: 'WORDS WORDS WORDS WORDS WORDS WORDS WORDS'},
        {title: 'Words', para: 'WORDS WORDS WORDS WORDS WORDS WORDS WORDS'},
        {title: 'Words', para: 'WORDS WORDS WORDS WORDS WORDS WORDS WORDS'},
    ]

    // Creates 3 cards
    for(let i = 0; i < cardContext.length; i++){
        card = document.createElement('div');
        cardHead = document.createElement('h3');
        cardPara = document.createElement('p');

        card.classList.add('card');

        cardHead.innerText = cardContext[i].title;
        cardPara.innerText = cardContext[i].para;

        cardMenu.appendChild(card);
        card.appendChild(cardHead);
        card.appendChild(cardPara);
    }

    // Appending elements to the main part of the site
    mainElement.appendChild(heroElement);
    heroElement.appendChild(heroHead);
    heroElement.appendChild(heroPara);
    heroElement.appendChild(heroImage);

    mainElement.appendChild(cardMenu);

    return mainElement;
}

content.appendChild(createMain());

function createFooter() {
    const footerEle = document.createElement('div');
    const footerCopyRight = document.createElement('p');
    const gitHubAccount = document.createElement('a');
    const gitHubLogo = new Image;

    gitHubLogo.src = '/images/github-mark.png';

    gitHubAccount.href = 'https://github.com/JustSomeGuyy';

    footerEle.classList.add('footer');

    footerCopyRight.innerText = 'Copyright by Tyler Wolfe 2023';

    footerEle.appendChild(footerCopyRight);
    footerEle.appendChild(gitHubAccount);
    gitHubAccount.appendChild(gitHubLogo);

    return footerEle;
};

content.appendChild(createFooter());

// export default createFooter;