const btnEncriptElement = document.getElementById("btn-encript");
const btnDecryptElement = document.getElementById("btn-decrypt");
const btnCopyElement = document.getElementById("copy-text");

const textAreaElement = document.getElementById("text-input");

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto)
}

btnEncriptElement.addEventListener("click", () => {
    
    const errorMessageElement = document.getElementById("message-error");

    if(validarTexto(textAreaElement.value)){
        errorMessageElement.classList.add("d-none");
    } else {
        errorMessageElement.classList.remove("d-none");
    }
})

btnDecryptElement.addEventListener("click", () => {
    const textAreaElement = document.getElementById("text-input");
    const errorMessageElement = document.getElementById("result-error");
    const resultOkElement = document.getElementById("result-ok");
    const messageText = document.getElementById("result-message");

    if(textAreaElement.value){
        resultOkElement.classList.remove("d-none");
        errorMessageElement.classList.add("d-none");
        messageText.innerText = textAreaElement.value;
        
    } else {
        errorMessageElement.classList.remove("d-none");
        resultOkElement.classList.add("d-none");
    }
})

btnCopyElement.addEventListener("click", () => {
    const currentDecryptedText = document.getElementById("result-message");
    navigator.clipboard.writeText(currentDecryptedText.innerText);
    
})
