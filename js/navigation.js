const links = document.querySelectorAll(".menu__link")

// Logic for highlighting selected menu item on click
links.forEach(link => {
    link.addEventListener("click", () => {
        let active = document.querySelectorAll(".menu__link--active");
        active.forEach(element => {
            element.classList.contains("menu__link--active") && element.classList.remove('menu__link--active')
        })
        link.classList.add("menu__link--active")
    })
})

// Logic for highlighting focused input
const input = document.querySelector(".menu__input")
const searchIcon = document.querySelector(".fa-search")
input.addEventListener("focus", () => {
    searchIcon.classList.add("menu__link--active")
})
input.addEventListener("blur", () => {
    searchIcon.classList.remove("menu__link--active")
})

// Logic for changing active menu link on scroll
window.addEventListener("scroll", () => {
    let active = document.querySelectorAll(".menu__link--active");
    let about = document.querySelector(".about").getBoundingClientRect().top + window.scrollY
    let shop = document.querySelector(".productsBoxGrid")
    const linksArr = Array.from(links)
    if (window.scrollY >= (shop.offsetHeight - 500)) {
        active.forEach(element => {
            element.classList.contains("menu__link--active") && element.classList.remove('menu__link--active')
        })
        linksArr[1].classList.add("menu__link--active")
    }
    else {
        active.forEach(element => {
            element.classList.contains("menu__link--active") && element.classList.remove('menu__link--active')
        })
        linksArr[0].classList.add("menu__link--active")
    }
})