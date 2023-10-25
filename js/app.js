let menu = document.querySelector('.menu')
let header = document.querySelector(' header')
let nav = document.querySelector(' header nav')
let nav_links = document.querySelectorAll(' header nav ul li a')
let menu_close = document.querySelector(' header nav .close')
let product_category_links = document.querySelectorAll('.nav-product-category ul li a')
let product_price_range = document.querySelectorAll('.product-price-range a')


menu.addEventListener('click', shownav => {
    nav.classList.add('nav-flex')
})

menu_close.addEventListener('click', hidenav => {
    nav.classList.remove('nav-flex')

})

window.addEventListener('scroll', scroll => {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 80) {
        header.classList.add('sticky-top')
    } else if (document.documentElement.scrollTop < 8) {
        header.classList.remove('sticky-top')

    }
})

//*========== active nav link before green dot before =========
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
//----------- End of active nav link before green dot


//*============ active nav-product category link before =========
let c_name;
product_category_links.forEach(each_link => {
    each_link.addEventListener('click', click_linked => {
        click_linked.preventDefault()
        c_name = click_linked.target.innerHTML.trim().toLowerCase();
        if (click_linked.target.innerHTML.trim().toLowerCase() == c_name) {
            for (let i = 0; i < product_category_links.length; i++) {
                if (product_category_links[i].innerHTML.trim().toLowerCase() == c_name) {
                    product_category_links[i].classList.value = "active-category";
                } else {
                    product_category_links[i].classList.value = "";

                }
            }
        }
    })
})
//----------- End of active nav-product category link before


//*========== price range =========
let pR;
product_price_range.forEach(each_price => {
    each_price.addEventListener('click', price_clicked => {
        price_clicked.preventDefault()

        pR = price_clicked.target.innerHTML.trim().toLowerCase();
        console.log(pR)
        console.log(price_clicked.target.innerHTML.trim().toLowerCase())
        if (price_clicked.target.innerHTML.trim().toLowerCase() == pR) {
            for (let i = 0; i < product_price_range.length; i++) {
                if (product_price_range[i].innerHTML.trim().toLowerCase() == pR) {
                    product_price_range[i].classList.value = "active-price-range";
                } else {
                    product_price_range[i].classList.value = "";

                }
            }
        }
    })
})
//----------- End of price range
