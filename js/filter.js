const items = document.querySelectorAll(".item")
const message = document.createElement("h3")
message.classList.add("productsBoxGrid__notFound")
message.innerHTML = "Przykro nam, nie mamy nic takiego."
document.querySelector(".productsBoxGrid").appendChild(message)

// Logic for finding products matching with typed text
const findProduct = (e) => {
    let found = [];
    items.forEach(item => {
        let text = item.querySelector(".item__name").textContent
        if (text.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
            item.style.display = "";
            found.push(item)
        }
        else item.style.display = "none";
    })
    // Logic for displaying a message if nothing has been found
    if (found.length === 0) {
        message.style.display = "inline-block"
        message.style.gridColumn = "1/-1"
        message.style.fontSize = "22px"
        message.style.height = "50vh"
        message.style.lineHeight = "50vh"
    }
    else {
        message.style.display = "none"
    }
}
input.addEventListener("keyup", findProduct)