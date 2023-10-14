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
        inputName.style.borderColor = 'red'
        return
    } 
    inputName.style.borderColor = 'green';
};
function tempTel() {
    if (mask.value = null) {
    return   mask.style.borderColor = 'red' 
    }    
}


btnSend.addEventListener('click', tempName);    
btnSend.addEventListenerd('click', tempTel)
