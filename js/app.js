let menu = document.querySelector('.menu')
let header = document.querySelector(' header')
let nav = document.querySelector(' header nav')
let nav_links = document.querySelectorAll(' header nav ul li a')
let menu_close = document.querySelector(' header nav .close')


menu.addEventListener('click', shownav => {
    nav.classList.add('nav-flex')
})
menu_close.addEventListener('click', hidenav => {
    nav.classList.remove('nav-flex')

})

window.addEventListener('scroll', scroll => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 80) {
        header.classList.add('sticky-top')
    } else if (document.documentElement.scrollTop < 8) {
        header.classList.remove('sticky-top')

    }
})

// console.log(nav_links)
let l_name;
nav_links.forEach(each_link => {
    each_link.addEventListener('click', click_linked => {
        l_name = click_linked.target.innerHTML.trim().toLowerCase();
        if (click_linked.target.innerHTML.trim().toLowerCase() == l_name) {
            for (let i = 0; i < nav_links.length; i++) {
                if (nav_links[i].innerHTML.trim().toLowerCase() == l_name) {
                    nav_links[i].classList.value = "active-nav-link";
                } else {
                    nav_links[i].classList.value = "";

                }
            }
        }
    })
})