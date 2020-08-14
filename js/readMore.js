document.querySelectorAll(".item__buy").forEach(element => {
    element.innerHTML = "Kup"
})


// Logic for 'read more' button
const readMoreButtons = document.querySelectorAll(".item__readMore")

const handleShowDescription = (element) => {
    const span = element.parentElement.querySelector("span")
    span.classList.toggle("item__moreDescription--show")
    if (span.classList.contains("item__moreDescription--show")) {
        element.innerHTML = "ukryj"
    }
    else element.innerHTML = "więcej"
}
readMoreButtons.forEach(element => {
    element.addEventListener("click", handleShowDescription.bind(this, element))
});

