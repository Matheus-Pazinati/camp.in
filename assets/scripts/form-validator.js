function showSucessMessage() {
  return Swal.fire(
    'Cadastro realizado com sucesso!',
    'Faça login na plataforma',
    'success'
  )
}

export const formValidator = {
  handleSubmit: (event) => {
    event.preventDefault();
    formValidator.clearErrors()
    let submitForm = true;
    const formElement = event.target
    const inputs = Array.from(document.querySelectorAll('input')).filter((input) => input.getAttribute('type') != 'submit')
    inputs.forEach((input) => {
      let check = formValidator.checkInput(input)
      if (check !== true) {
        submitForm = false;
        formValidator.showError(input, check)
      }
    })
    if (submitForm) {
      formElement.submit;
      showSucessMessage()
      formValidator.clearFields(inputs)
    }
  },
  checkInput: (input) => {
    let rulesList = input.getAttribute('data-rules')
    if (rulesList !== null) {
      rulesList = rulesList.split('|')
      for (let k in rulesList) {
        let rDetails = rulesList[k].split('=');
        switch (rDetails[0]) {
          case 'required':
            if (input.value == '') {
              return 'Campo não pode ser vazio !';
            }
          break;
          case 'min':
            if (input.value.length < rDetails[1]) {
              return `O campo precisa ter no mínimo ${rDetails[1]} caracteres`
            }
          break;
          case 'max':
            if (input.value.length >= rDetails[1]) {
              return `O campo deve ter no máximo ${rDetails[1]} caracteres`
            }
          break;
          case 'password':
            let password = document.getElementById('password1')
            if (input.value !== password.value) {
              return 'As senhas devem ser iguais !'
            }
          break;
          case 'email': 
            let pattern =  new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$');
            if (!pattern.test(input.value)) {
              return 'Email inválido.'
            }
        }
      }
    }
    return true;
  },
  showError: (input, check) => {
    input.style.borderColor = '#FF4030';
    let errorElement = document.createElement('div')
    errorElement.classList.add('error')
    errorElement.innerHTML = check
    input.parentElement.insertBefore(errorElement, null)
  },
  clearErrors: () => {
    const inputs = Array.from(document.querySelectorAll('input')).filter((input) => input.getAttribute('type') != 'submit')
    inputs.forEach((input) => {
      input.style.borderColor = '#868686'
    })
    const errorBoxes = document.querySelectorAll('.error')
    errorBoxes.forEach((box) => {
      box.remove()
    })
  },
  clearFields: (inputs) => {
    inputs.forEach((input) => {
      input.value = "";
    })
  }
};