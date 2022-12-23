
let burgerBar = document.getElementById("burgerbar");
let nav__item = document.querySelector(".navigatio");
let accordion = document.querySelectorAll('.acordeon__box');

burgerBar.addEventListener("click", function(){
    nav__item.classList.toggle("newMenuBar");
    burgerBar.classList.toggle('is-active')
} )


accordion.forEach(function (element) {
    element.addEventListener("click", function () {
      this.classList.toggle("active");
    });
});