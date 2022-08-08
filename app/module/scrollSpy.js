'use strict';

export default function scrollSpy(){
    
    const $sections = document.querySelectorAll("section[data-scroll-spy]")

    const cb = entries =>{

        entries.forEach(entry => {

            const id = entry.target.getAttribute("id")

            if (entry.isIntersecting)
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("nav__a-selected")
            else 
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("nav__a-selected")
        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: [0.3, 1, 0.3]
    })

    $sections.forEach(el => observer.observe(el))
}