function createNav(){
    const navMenuLinks = [
        {href: '#', text: 'Home'},
        {href: '#', text: 'Menu'},
        {href: '#', text: 'Contact'},
    ];

    const nav = document.createElement('div');
    const navList = document.createElement('ul');
    let navItem;
    let navLink;

    navList.classList.add('nav-menu');

    nav.appendChild(navList);

    for(let i = 0; i < navMenuLinks.length; i++){
        navItem = document.createElement('li');
        navLink = document.createElement('a');
        navItem.classList.add('nav-links')

        navLink.href = navMenuLinks[i].href;
        navLink.innerHTML = navMenuLinks[i].text;

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    };

    return nav;
}

export default createNav;