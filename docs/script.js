/* Navigationsleiste */
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/* Lebenslauf */
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el){
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || documentElement.clientWidth)
  );
}

function callbackFunc() {
  for(var i = 0; i < items.length; i++){
    if (isElementInViewport(items[i])){
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")){
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);