const burger = document.querySelector(".burger-menu")
const nav = document.querySelector(".header-nav")


burger.addEventListener("click", () => {
    nav.style.transform = "translateX(0)"
})