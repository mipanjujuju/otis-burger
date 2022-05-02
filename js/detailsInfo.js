const productsEl = document.querySelector(".menu-list")
const cartItemsEl = document.querySelector(".cart-container")
const subtotalEl = document.querySelector(".subtotal")
const totalItemInCartEl = document.querySelector(".header-shop span")


// introducerea produselor in pagna HTML

function renderProducts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
            <li class="menu-item">
                <img width="200"  height="200"  src="${product.imgSrc}" alt="">
                <h3>${product.name}</h3>
                <div class="info-container ${product.info}">
                    <p class="info">${product.description}</p>
                    <button class="hide-btn" onclick="${product.hide}">Ascunde</button>
                </div>
                <p>${product.price} Lei</p>
                <div class="shop-container ${product.shop}">
                    <button class="details-btn details-btn-1" onclick="${product.show}">Detalii</button>
                </div>
            </li>
        `;
    });
}
renderProducts();

{/* <button class="shop-btn" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-plus"></i></button> */}


// cosul

let cart = JSON.parse(localStorage.getItem("CART"));
updateCart();


// adaugarea in cos a produselor

function addToCart(id){
    if(cart.some((item) => item.id === id)){
    //  alert("aurel")
    } else{
        const item = products.find((product) => product.id === id)

        cart.push({
            ...item,
            numberOfUnits : 1,
        });
    }

    updateCart();
}




function updateCart(){
    renderCartItems();
    renderSubtotal();


    localStorage.setItem("CART", JSON.stringify(cart));
}


function renderSubtotal(){
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal (<b>${totalItems}</b> Produse): <b>${totalPrice}</b>  Lei`;
    totalItemInCartEl.innerHTML = totalItems;
}



function renderCartItems(){
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="product">
                <button onclick="removeItemOnCart(${item.id})"><i class="fa-solid fa-circle-xmark"></i></button>
                <img width="90" height="90" src="${item.imgSrc}">
                <p>${item.name}</p>
            </div>
            <p class="price"><b>${item.price}</b><span>Lei</span></p>
            <div class="quantity">
                <button class="minus" onclick="changeNumberOfUnits('minus', ${item.id})"><i class="fa-solid fa-circle-minus"></i></button>
                <b>${item.numberOfUnits}</b>
                <button onclick="changeNumberOfUnits('plus', ${item.id})"><i class="fa-solid fa-circle-plus"></i></button>
            </div>
            <p class="total"><b>${item.price * item.numberOfUnits}</b><span>Lei</span</p>
            </div>
        </div>
        `
    })
}


function removeItemOnCart(id){
    cart = cart.filter((item) => item.id !== id)

    updateCart();
}


function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {


        let numberOfUnits = item.numberOfUnits
        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            } else if(action === "plus"){
                numberOfUnits++;
            }

        }
        return{
            ...item,
            numberOfUnits,
        }
    })
    updateCart();
}