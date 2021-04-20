'use strict'
export default function formContact() {
    const $formContacto = document.getElementById("contact-mail"),
        $required = document.querySelectorAll("[required]")

    // Aqui creamos dinamicamente los span que aconpanan a los inputs para los errores
    $required.forEach(input => {
        const $span = document.createElement("span")

        $span.classList.add("contact-mail__error")
        $span.classList.add("contact-mail__error-none")
        $span.textContent = "Error: " + input.title
        input.insertAdjacentElement("afterend", $span)
    })

    //Validation when we click in the event submit
    document.addEventListener("click", e => {
        // Click en el submit del formulario
        if (e.target === $formContacto.button) {

            // Validacion del nombre
            let pattern = $formContacto.name.pattern,
                regex = new RegExp(pattern)

            if (!regex.exec($formContacto.name.value)) {
                $formContacto.name.nextSibling.classList.remove("contact-mail__error-none")
                e.preventDefault()
            } else
                $formContacto.name.nextSibling.classList.add("contact-mail__error-none")

            // Validacion del email
            pattern = $formContacto.email.pattern
            regex = new RegExp(pattern)

            if (!regex.exec($formContacto.email.value)) {
                $formContacto.email.nextSibling.classList.remove("contact-mail__error-none")
                e.preventDefault()
            } else
                $formContacto.email.nextSibling.classList.add("contact-mail__error-none")

            // Validacion messaje
            pattern = $formContacto.message.dataset.pattern
            regex = new RegExp(pattern)

            if (!regex.exec($formContacto.message.value)) {
                $formContacto.message.nextSibling.classList.remove("contact-mail__error-none")
                e.preventDefault()
            } else
                $formContacto.message.nextSibling.classList.add("contact-mail__error-none")

        }
    })
}