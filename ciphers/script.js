const userInput = document.querySelector('#user__input');
const output = document.querySelector('#output__text');
const encodeShift = document.querySelector('#encode__number')
const decodeUnShift = document.querySelector('#decode__number')
const encodeButton = document.querySelector('#encode__button')
const decodeButton = document.querySelector('#decode__button')
const copyButton = document.querySelector('#copy-button');

encodeButton.addEventListener('click',encodeHandler);
decodeButton.addEventListener('click',decodeHandler);
copyButton.addEventListener('click',copyHandler)

function encodeHandler(){
    let text = userInput.value;
    let shift = parseInt(encodeShift.value)

    if(text.length > 0 && shift>=0){
        writeOuput(encode(text,shift));
    }
}

function decodeHandler(){
    let text = userInput.value;
    let shift = parseInt(decodeUnShift.value)

    if(text.length > 0 && shift>=0){
        writeOuput(decode(text,shift));
    }
}

function copyHandler(){
    navigator.clipboard.writeText(output.textContent)
}

function writeOuput(str){
    output.textContent=str;
}