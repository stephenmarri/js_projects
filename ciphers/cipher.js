// ASCII codes from 32 to 126 will only be considered for this project
// so the allowed conversions are from [1 to 94 ]
// 95 = 0, 96 = 1
//
//
let startASCII = 32;
let endASCII = 126;

function getASCII(str){
    return [...str].map(char => char.charCodeAt(0))
}




function encode(str,rotate){
  let result="";
  for(let i=0;i<str.length;i++){
    let startCode = str[i].charCodeAt(0);
    let endCode=startCode + rotate;

    if(startCode<startASCII || startCode>endASCII) endCode=0;
    if(endCode>endASCII) endCode=(startASCII-1)+(endCode-endASCII)%(endASCII-startASCII)
    //console.log(startCode,startCode + rotate)
    result+=(String.fromCharCode( endCode ))
  }

  return result
}
function decode(str,rotate){
  let result="";
  for(let i=0;i<str.length;i++){
    let startCode = str[i].charCodeAt(0);
    let endCode=startCode - rotate;

    if(startCode<startASCII || startCode>endASCII) endCode=0;
    if(endCode < startASCII) endCode=(endASCII+1) - (startASCII-endCode)%(endASCII-startASCII);
    
    result+=(String.fromCharCode( endCode ))
  }

  return result
}

function encodeWithKey(str,key){
  let result="";  
  if(str.length <1 || key.length<1 ) return str;
  for(let i=0;i<str.length;i++){

    let charStr=str[i];
    let charKey=key[i%key.length];
    let asciiKey = charKey.charCodeAt(0);

    if(asciiKey > 31 && asciiKey < 127)  {
      asciiKey = asciiKey - 31; 
      result+=(encode(charStr,asciiKey))
    }
  }
  
  return result;
}

function decodeWithKey(str,key){
  let result="";  
  if(str.length <1 || key.length<1 ) return str;
  for(let i=0;i<str.length;i++){

    let charStr=str[i];
    let charKey=key[i%key.length];
    let asciiKey = charKey.charCodeAt(0);

    if(asciiKey > 31 && asciiKey < 127)  {
      asciiKey = asciiKey - 31; 
      result+=(decode(charStr,asciiKey))
    }
  }
  
  return result;
}


