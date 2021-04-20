'use strict'
export default function functionNav() {
    const $nav = document.getElementById("nav"),
        $navButton = document.getElementById("nav-button")

    document.addEventListener("click", e => {
        // Click para aparecer y desaparecer el nav
        if (e.target.matches("#nav-button") || e.target.matches("#nav-button *")) {
            if ($nav.classList.contains("nav__a-opacity")) {
                $nav.classList.remove("nav__a-opacity")
                $navButton.querySelector("i").classList.replace("fa-bars", "fa-times")
            } else {
                $nav.classList.add("nav__a-opacity")
                $navButton.querySelector("i").classList.replace("fa-times", "fa-bars")
            }
            return
        }

        // Click en los links del nav
        if (e.target.matches(".nav__a") || e.target.matches(".nav__a *") || e.target.matches(".nav__logo") || e.target.matches(".nav__logo *")) {

            $nav.classList.add("nav__a-opacity")
            $navButton.querySelector("i").classList.replace("fa-times", "fa-bars")

            return
        }
    })
}