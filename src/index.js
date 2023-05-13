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
    heroHead.innerText = 'Great coffee, even greater friends!';
    heroPara.innerText = "Visit Toe Beans Cafe for a cozy and delightful experience, where you can enjoy delicious drinks and snacks while cuddling with adoptable cats, all while supporting animal welfare and potentially finding your new best friend.";

    // create the cards for the experiences for the cafe
    const cardMenu = document.createElement('div')
    cardMenu.classList.add('card-menu');
    let card;
    let cardHead;
    let cardPara;


    // Creates the content for the cards
    const cardContext = [
        {title: 'Comfy Atmosphere!', para: 'Looking for a cozy spot to sip your coffee and cuddle with a furry feline? Look no further than Toe Beans Cafe, where you can enjoy the purrfect combination of caffeine and cat love!'},
        {title: 'Delicious and locally sourced!', para: 'Toe Beans Cafe offers a unique opportunity to meet and mingle with adorable adoptable cats while enjoying delicious snacks and beverages. Who knows, you might just find your new best friend!'},
        {title: 'Fall in love today!', para: "By visiting Toe Beans Cafe, you're not only treating yourself to a delightful experience, but also helping cats in need find their forever homes. Come for the coffee, stay for the kitties - you won't regret it!"},
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