// Copy menu for mobile
function copyMenu() {
    const dptCategory = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    if (dptCategory && dptPlace) {
        dptPlace.innerHTML = dptCategory.innerHTML;
    }

    const mainNav = document.querySelector('.header-nav nav');
    const navPlace = document.querySelector('.off-canvas nav');
    if (mainNav && navPlace) {
        navPlace.innerHTML = mainNav.innerHTML;
    }

    const topNav = document.querySelector('.header-top .wrapper');
    const topPlace = document.querySelector('.off-canvas .thetop-nav');
    if (topNav && topPlace) {
        topPlace.innerHTML = topNav.innerHTML;
    }
}
copyMenu();

// // Dropdown item selection
// document.querySelectorAll('.right ul li ul li a').forEach(item => {
//     item.addEventListener('click', function (event) {
//         // Prevent default link behavior
//         event.preventDefault();

//         // Get the parent `<li>` containing the main selector (e.g., USD, EURO)
//         const parentLi = this.closest('li').parentElement.parentElement;

//         // Update the parent `<a>` text to the selected option
//         const mainLink = parentLi.querySelector('a');
//         mainLink.innerHTML = this.textContent + ' <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span>';

//         // Reset background color for all dropdown items
//         parentLi.querySelectorAll('ul li').forEach(li => li.classList.remove('selected'));

//         // Set background color for the selected item
//         this.parentElement.classList.add('selected');
//     });
// });

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".trigger"),
          closeButton = document.querySelector(".t-close"),
          menu = document.querySelector(".site");

    if (menuButton && closeButton && menu) {
        menuButton.addEventListener("click", (event) => {
            event.preventDefault();
            setTimeout(() => {
                menu.classList.toggle("showmenu");
            }, 250);
        });

        closeButton.addEventListener("click", (event) => {
            event.preventDefault();
            menu.classList.remove("showmenu");
        });

        // Close when clicking outside the menu
        document.addEventListener("click", (e) => {
            const isInsideMenu = e.target.closest(".site-off");
            if (!isInsideMenu && menu.classList.contains("showmenu")) {
                menu.classList.remove("showmenu");
            }
        });
    } else {
        console.error("One or more elements ('.trigger', '.t-close', '.site') were not found in the DOM.");
    }
});


// Submenu toggle (for categories with child menus) 
const submenu = document.querySelectorAll('.has-child .icon-small');    
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

// Swiper initialization for slider functionality
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Search toggle (search bar visibility)
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');

if (searchButton && tClose && showClass) {
    searchButton.addEventListener('click', function() {
        showClass.classList.toggle('showsearch');
    });

    tClose.addEventListener('click', function() {
        showClass.classList.remove('showsearch');
    });
}

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
       dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt')
})       

// Initialize the thumbnails slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3, // Number of thumbnails visible
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});


// Initialize the main slider
var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true, // Adjust height automatically
    navigation: {
        nextEl: '.swiper-button-next', // Add navigation buttons if needed
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb, // Link the thumbnails slider
    },
});

var stocks = document.querySelectorAll('.products .stock');
for (let x=0; x<stocks.length; x++){
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}


const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

if (divTrigger && divPopup) {   
    divTrigger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling to `document`
        divPopup.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest(divtoShow) && !e.target.closest('.cart-trigger')) {
            divPopup.classList.remove('show');
        }
    });
}


window.onload = function () {
    const site = document.querySelector('.site');
    const modalClose = document.querySelector('.modalclose');

    // Ensure elements exist before applying actions
    if (site) {
        site.classList.add('showmodal'); // Always show modal on load
    }

    if (modalClose) {
        modalClose.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent unwanted navigation
            if (site) {
                site.classList.remove('showmodal'); // Hide modal on close
            }
        });
    }
};