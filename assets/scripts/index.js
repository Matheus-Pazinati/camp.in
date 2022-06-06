import { showHidePassword } from "./show-hide-passwd.js";
import { formValidator } from "./form-validator.js"
showHidePassword()

let form = document.querySelector('form')
form.addEventListener('submit', formValidator.handleSubmit)