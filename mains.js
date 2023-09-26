const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#tel');
const btnSend = document.querySelector('#btn_send');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
const mask = IMask(inputTel, maskOptions);

function tempName() {
    if (inputName.value.length < 2){
        inputName.value = 'Error'
        return
    } 
    alert(inputName.value);
};

btnSend.addEventListener('click', tempName);    