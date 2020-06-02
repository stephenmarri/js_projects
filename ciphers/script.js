const userInput = document.querySelector('#user__input');
const output = document.querySelector('#output__text');
const encodeShift = document.querySelector('#encode__number')
const decodeUnShift = document.querySelector('#decode__number')
const encodeButton = document.querySelector('#encode__button')
const decodeButton = document.querySelector('#decode__button')
const copyButton = document.querySelector('#copy-button');
const encodeKey = document.querySelector('#encode__key');
const decodeKey = document.querySelector('#decode__key')


encodeButton.addEventListener('click',encodeHandler);
decodeButton.addEventListener('click',decodeHandler);
copyButton.addEventListener('click',copyHandler)

function encodeHandler(){
    let result="";
    let text = userInput.value;
    let shift = parseInt(encodeShift.value)

    if(text.length > 0 && shift>=0){
        result = encode(text,shift);
        if(encodeKey.value.length>0){
            result = encodeWithKey(result,encodeKey.value)
        }
        writeOuput(result);
    }


}

function decodeHandler(){
    let result="";
    let text = userInput.value;
    let shift = parseInt(decodeUnShift.value)

    if(text.length > 0 && shift>=0){
        result =  decode(text,shift);
        if(decodeKey.value.length>0){
            result = decodeWithKey(result,decodeKey.value)
        }
        writeOuput(result);
    }
}

function copyHandler(){
    navigator.clipboard.writeText(output.textContent)
}

function writeOuput(str){
    output.textContent=str;
}