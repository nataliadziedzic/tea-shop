const cartItemsContainer = document.querySelector(".shoppingCart")
let totalPrice = document.querySelector(".shoppingCart__totalPrice")
const cartValue = document.querySelector(".menu__cartValue")
const buyBtn = document.querySelectorAll(".item__buy")
const shoppingCartExit = document.querySelector(".shoppingCart__exit")

const overlay = document.createElement("div");

// Logic for showing and hiding the cart view

const handleCartView = () => {
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    if (!cartItemsContainer.classList.contains("shoppingCart--active")) {
        cartItemsContainer.classList.add("shoppingCart--active")
    }
    else {
        cartItemsContainer.classList.remove("shoppingCart--active")
    }
}

// Logic for closing the cart

shoppingCartExit.addEventListener("click", () => {
    cartItemsContainer.classList.remove("shoppingCart--active")
    overlay.classList.remove("overlay");

})

// Logic for updating number of items in cart

const updateCartValue = (products) => {
    let cartNumber = localStorage.getItem("productsNumber");
    cartNumber = parseInt(cartNumber)
    if (cartNumber) {
        localStorage.setItem("productsNumber", cartNumber + 1)
        cartValue.textContent = cartNumber + 1
    }
    else {
        localStorage.setItem("productsNumber", 1);
        cartValue.textContent = 1
    }
    setItems(products)
}
const onLoadCartValue = () => {
    let cartNumber = localStorage.getItem("productsNumber");
    if (cartNumber) cartValue.textContent = cartNumber
}
onLoadCartValue()

// Logic for storing product data
const setItems = (products) => {
    let cartProducts = localStorage.getItem("products")
    cartProducts = JSON.parse(cartProducts)

    if (cartProducts != null) {
        if (cartProducts[products.name] == undefined) {
            cartProducts = {
                ...cartProducts,
                [products.name]: products
            }
        }
        cartProducts[products.name].amount += 1
    }
    else {
        products.amount = 1
        cartProducts = {
            [products.name]: products
        }
    }
    localStorage.setItem("products", JSON.stringify(cartProducts))
}

// Logic for updating total cost
const updateTotalPrice = (products) => {
    let totalCost = localStorage.getItem("totalCost")
    let myPrice = parseFloat(products.price.replace(",", "."))
    if (totalCost != null) {
        totalCost = parseFloat(totalCost.replace(",", "."))
        localStorage.setItem("totalCost", (totalCost + myPrice).toFixed(2))
        totalPrice.innerHTML = (totalCost + myPrice).toFixed(2)
    }
    else {
        localStorage.setItem("totalCost", products.price)
        totalPrice.innerHTML = myPrice.toFixed(2)
    }
}

// Logic for 'buy' button
const handleBuyBtn = (element) => {
    const item = element.parentElement
    const img = item.querySelector(".item__img").src
    const name = item.querySelector(".item__name").textContent
    const price = item.querySelector(".item__price").textContent
    let products =
    {
        src: img,
        name: name,
        price: price,
        amount: 0
    }
    updateCartValue(products)
    updateTotalPrice(products)
}

buyBtn.forEach(element => {
    element.addEventListener("click", handleBuyBtn.bind(this, element))
})
document.querySelector(".menu__cartBtn").addEventListener("click", handleCartView)
