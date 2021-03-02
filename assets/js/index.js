/* Show menu mobile */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* Rremove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll sections active link */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Show scroll top */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* Scroll animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .services__content, .menu__content,
            .footer__content`, {
    interval: 200
})

/* Menu */
let categories = [{
    id: 1,
    name: 'Maglie',
},
{
    id: 2,
    name: 'Felpe',
},
{
    id: 3,
    name: 'Sacche',
},
{
    id: 4,
    name: 'Timbro',
},
{
    id: 5,
    name: 'Bigliettino da visita',
},
{
    id: 6,
    name: 'Pantaloni',
},
{
    id: 7,
    name: 'Calzini',
},
];

// Qua bisogna fare la rischiesta AJAX per ottenere tutti i piatti
let products = [{
    name: 'Maglia bianca logo',
    category: {
        id: 1,
        name: "Maglie",
    },
    description: 'Maglia bianca con logo sia davanti che dietro',
    price: 10.00,
    image: '/assets/img/magliaWhiteFront.png',
    inCart: 0,
},
{
    name: 'Maglia nera logo',
    category: {
        id: 1,
        name: "Maglie",
    },
    description: 'Maglia nera con logo sia davanti che dietro',
    price: 10.00,
    image: '/assets/img/magliaBlackFront.png',
    inCart: 0,
},
{
    name: 'Felpa Venezia',
    category: {
        id: 2,
        name: "Felpe",
    },
    description: 'Felpa bianca Venezia',
    price: 30.00,
    image: '/assets/img/graficaVenezia.jpeg',
    inCart: 0,
},
{
    name: 'Felpa Las Vegas',
    category: {
        id: 2,
        name: "Felpe",
    },
    description: 'Felpa bianca Las Vegas',
    price: 30.00,
    image: '/assets/img/graficaVenezia.jpeg',
    inCart: 0,
},
{
    name: 'Felpa Egitto',
    category: {
        id: 2,
        name: "Felpe",
    },
    description: 'Felpa bianca Egitto',
    price: 30.00,
    image: '/assets/img/graficaVenezia.jpeg',
    inCart: 0,
},
];

addButtonCategory(categories);
addCategories(categories);
addMenu(products);

// FUNZIONE PER INSERIRE PULSANTI CATEGORY

function addButtonCategory(caterogy) {
    caterogy.forEach(element => {
        $(".button-category").append(
            `<button class="button_category" onclick="window.location.href='#category-${element.id - 1}'">${element.name}</button>`
        );
    });
}
//onclick="window.location.href='#category-${element.id}'

// FUNZIONE PER INSERIRE TUTTI I PIATTI ALL'INTERNO DELL MENU

function addMenu(items) {
    items.forEach(element => {
        $("#category-" + element.category.id).append(
            `<div class="menu__content">
                <img src="${element.image}" alt="" class="menu__img">
                <h3 class="menu__name">${element.name}</h3>
                <span class="menu__detail">${element.description}</span>
                <span class="menu__price">${element.price} €</span>
                <button class="button add-cart"><i class='fa fa-shopping-cart'></i></button>
            </div>`
        );
    });
}

// if (element.category.id == element.id)
function addCategories(categories) {
    categories.forEach(element => {
        $(".menu__container").append(
            `<div id="category-${element.id}" class="category">
                <h3>${element.name}</h3>
            </div>`
        );
    })
}