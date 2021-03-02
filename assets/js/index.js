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
    name: 'Panini',
},
{
    id: 2,
    name: 'Genovesi',
},
{
    id: 3,
    name: 'Pizze',
},
{
    id: 4,
    name: 'Bibite',
},
{
    id: 5,
    name: 'Caffè',
},
{
    id: 6,
    name: 'Dolci',
},
{
    id: 7,
    name: 'Caramelle',
},
];

// Qua bisogna fare la rischiesta AJAX per ottenere tutti i piatti
let products = [{
    name: 'Panino con cotoletta',
    category: {
        id: 1,
        name: "Panini",
    },
    description: 'Pane, cotoletta, insalata, pomodoro, maionese o ketchup',
    price: 3.00,
    image: '/assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Genovese cotto e mozzarella',
    category: {
        id: 2,
        name: "Genovesi",
    },
    description: 'Pane, prosciutto cotto, mozzarella',
    price: 2.00,
    image: '/assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Pizzetta rotonda',
    category: {
        id: 3,
        name: "Pizze",
    },
    description: 'Pizza con mozzarella e pomodoro',
    price: 1.20,
    image: '/assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Genovese porchetta e funghi',
    category: {
        id: 2,
        name: "Genovesi",
    },
    description: 'Pane, porchetta, funghi',
    price: 2.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Genovese speck e würstel',
    category: {
        id: 2,
        name: "Genovesi",
    },
    description: 'Pane, speck, würstel',
    price: 2.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Acqua frizzante',
    category: {
        id: 4,
        name: "Bibite",
    },
    description: 'Acqua con bolle',
    price: 1.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Acqua naturale',
    category: {
        id: 4,
        name: "Bibite",
    },
    description: 'Acqua liscia',
    price: 1.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Cappuccino',
    category: {
        id: 5,
        name: "Caffè",
    },
    description: 'Cappuccino',
    price: 1.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Biscotto al cioccolato',
    category: {
        id: 6,
        name: "Dolci",
    },
    description: 'Biscotto con il cioccolato fondente',
    price: 2.00,
    image: 'assets/img/Paninazo.png',
    inCart: 0,
},
{
    name: 'Goleador alla cocacola',
    category: {
        id: 7,
        name: "Caramelle",
    },
    description: 'Caramella alla cocacola',
    price: 0.10,
    image: 'assets/img/Paninazo.png',
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

//if (element.category.id == element.id)
function addCategories(categories) {
    categories.forEach(element => {
        $(".menu__container").append(
            `<div id="category-${element.id}" class="category">
                <h3>${element.name}</h3>
            </div>`
        );
    })
}


/* Shopping cart */

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart-numbers').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-numbers').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-numbers').textContent = 1;
    }

    setItem(product);
}

// function setItem(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if (cartItems != null) {
//         if (cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart++;
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.tag]: product
//         }
//     }

//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart++;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

onLoadCartNumbers();