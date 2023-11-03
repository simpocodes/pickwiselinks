let empty = document.querySelector('.empty')
let menu = document.querySelector('.menu')
let header = document.querySelector(' header')
let nav = document.querySelector(' header nav')
let nav_links = document.querySelectorAll(' header nav ul li a')
let menu_close = document.querySelector(' header nav .close')
let product_category_links = document.querySelectorAll('.nav-product-category ul li a')
let product_price_range = document.querySelectorAll('.product-price-range a')
let body = document.querySelector('body');
let pageLoader = document.querySelector('.page-loader');
body.classList.add('mybody')
let loader_span = document.querySelector('.loader span');

// ...

//*==================product-container before loading
document.querySelectorAll('.product').forEach(eachproduct => {
    Array.from(eachproduct.children).forEach(e => {
        e.classList.add('opacity-0')
    })
    eachproduct.classList.add('loading')
})
//------------------- End of product-container before loading


//*================== profile-image before loading
document.querySelectorAll('.profile').forEach(eachprofile => {
    Array.from(eachprofile.children).forEach(e => {
        e.classList.add('opacity-0')
    })
    eachprofile.classList.add('loading')
})
//--------------------- End of profile-image before loading


//*================== all images  before loading
document.querySelectorAll('img').forEach(eachImg => {
    eachImg.classList.add('blur-10')
    // eachImg.classList.add('d-none')

})
//--------------------- End of all images  before loading

//*================== background-image url before loading
document.querySelectorAll('.img').forEach(eachImg => {
    eachImg.classList.add('blur-10')

})
//--------------------- End of background-image url before loading


//*================== zoom buttons before loading
document.querySelectorAll('.zoom-product').forEach(eachzoombutton => {
    eachzoombutton.classList.add('d-none')
})
//--------------------- End of zoom buttons before loading


//*============ remove loader 
function removeLoader() {
    body.classList.remove('mybody')
    pageLoader.classList.add('d-none')
}
setTimeout(removeLoader, 8200)

//-------------end of remove loader 


window.addEventListener('load', loadsuccess => {

    //*================== profile-image after loading
    document.querySelectorAll('.profile').forEach(eachprofile => {
        Array.from(eachprofile.children).forEach(e => {
            e.classList.remove('opacity-0')
        })
        eachprofile.classList.remove('loading')
    })
    //--------------------- End profile-image after loading

    //*================== product-container after loading
    document.querySelectorAll('.product').forEach(eachproduct => {
        Array.from(eachproduct.children).forEach(e => {
            e.classList.remove('opacity-0')
        })
        eachproduct.classList.remove('loading')
    })
    //--------------------- End of product-container after loading

    //*================== all images  after loading
    document.querySelectorAll('img').forEach(eachImg => {
        eachImg.classList.remove('blur-10')

    })
    //--------------------- End of all images after loading

    //*================== all background-image url  after loading
    document.querySelectorAll('.img').forEach(eachImg => {
        eachImg.classList.remove('blur-10')

    })
    //--------------------- End of all background-image url  after loading

    //*================== all zoom buttons url  after loading
    document.querySelectorAll('.zoom-product').forEach(eachzoombutton => {
        eachzoombutton.classList.remove('d-none')
    })
    //--------------------- End of all zoom buttons url  after loading

})

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


//*================== zoom product
let targetImgUrl;
let newImgContainer;
let newImg;
let closeZoomed;
document.querySelectorAll('.zoom-product').forEach(eachzoombutton => {
    eachzoombutton.addEventListener('click', zoom => {

        empty.classList.remove('d-none')
        Array.from(zoom.target.parentElement.children).forEach(child => {
            if (child.getAttribute('class').trim().toLowerCase() == 'product-img') {
                Array.from(child.children).forEach(targetImg => {
                    targetImgUrl = targetImg.getAttribute('src');
                    newImgContainer = document.createElement('div');
                    newImgContainer.setAttribute('class', 'zoomed-img')
                    newImg = document.createElement('img');
                    newImg.setAttribute('src', targetImgUrl)
                    newImgContainer.appendChild(newImg)
                    closeZoomed = document.createElement('span')
                    closeZoomed.innerText = 'x'
                    closeZoomed.setAttribute('class', 'close')
                    newImgContainer.appendChild(closeZoomed)
                    empty.appendChild(newImgContainer);
                    empty.style.marginTop = document.documentElement.scrollTop - 10 + 'px'


                    //*=====closeZoomed
                    closeZoomed.addEventListener('click', close_zoomed_img => {
                        empty.style.marginTop = ""

                        empty.classList.add('d-none')
                        empty.removeChild(newImgContainer);

                    })
                    window.addEventListener('scroll', sc => {
                        empty.style.marginTop = ""

                        empty.classList.add('d-none')
                        empty.innerHTML = ""
                    })
                    // ..............................


                })
            }
        })

    })
})
//--------------------- End of zoom product

