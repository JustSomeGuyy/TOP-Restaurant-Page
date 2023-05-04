function createNav(){
    const navMenuLinks = [
        {href: '#', text: 'Home'},
        {href: '#', text: 'Menu'},
        {href: '#', text: 'Contact Us'},
    ];

    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    let navItem;
    let navLink;

    nav.classList.add('nav');
    navList.classList.add('nav-list');

    nav.appendChild(navList);

    for(let i = 0; i < navMenuLinks.length; i++){
        navItem = document.createElement('li');
        navLink = document.createElement('a');
        navLink.classList.add('nav-menu');

        navLink.href = navMenuLinks[i].href;
        navLink.innerHTML = navMenuLinks[i].text;

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    };

    return nav;
}

export default createNav;