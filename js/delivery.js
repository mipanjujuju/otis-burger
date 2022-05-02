var exclamation = document.querySelector(".exclamation")
var deliveryInfo = document.querySelector(".delivery-info")

exclamation.addEventListener("mouseenter", function(evt){
    evt.preventDefault()
    deliveryInfo.classList.add("delivery-info-block")
})


exclamation.addEventListener("mouseleave", function(){
    deliveryInfo.classList.remove("delivery-info-block")
})