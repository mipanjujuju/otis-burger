var menuList = document.querySelector(".menuList")
var menuButton = document.querySelector(".menuu")

menuButton.addEventListener("click", function(evt){
    evt.preventDefault()
    menuList.classList.add("menuListBlock")
    // console("ies")

})


// function showList(){
//      preventDefault
//      document.querySelector(".menuList").style.display = "block";
// }

// function hideList(){
//     document.querySelector(".menuList").style.display = "none"
// }