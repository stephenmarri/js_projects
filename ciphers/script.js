const userInput = document.querySelector('#user__input');
const output = document.querySelector('#output__text');
const encodeShift = document.querySelector('#encode__number')
const decodeUnShift = document.querySelector('#encode__number')
const encodeButton = document.querySelector('#encode__button')
const decodeButton = document.querySelector('#decode__button')
const copyButton = document.querySelector('#copy-button');
const pasteButton = document.querySelector('#paste-button');
const encodeKey = document.querySelector('#encode__key');
const decodeKey = document.querySelector('#encode__key')


encodeButton.addEventListener('click',encodeHandler);
decodeButton.addEventListener('click',decodeHandler);
copyButton.addEventListener('click',copyHandler)
pasteButton.addEventListener('click',pasteHandler)

function encodeHandler(){
    let result="";
    let text = userInput.value;
    let shift = parseInt(encodeShift.value)

    if(text.length > 0 && shift>=0){
        result = encode(text,shift);
        if(encodeKey.value.length>0){
            result = encodeWithKey(result,encodeKey.value)
        }
    }
    writeOuput(result);
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
    }
    writeOuput(result);
}

function copyHandler(){
    navigator.clipboard.writeText(output.textContent)
}
function pasteHandler(){
    const text = navigator.clipboard.readText();
    text.then(x => userInput.value = x)
}

function writeOuput(str){
    output.textContent=str;
}