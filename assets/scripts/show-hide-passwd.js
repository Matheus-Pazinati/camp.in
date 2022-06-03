export function showHidePassword() {
    const passwIcons = document.querySelectorAll('[data-icon]')
    passwIcons.forEach((icon) => {
        const input = icon.parentElement.children[0]
        icon.addEventListener('click', () => {
            if (input.getAttribute('type') === "password") {
                input.setAttribute('type', 'text')
                icon.nextElementSibling.style = "display: initial"
                icon.style = "display: none"
            } else {
                input.setAttribute('type', 'password')
                icon.style = "display: none";
                input.nextElementSibling.style = "display: initial"
            }
        })
    })
} 