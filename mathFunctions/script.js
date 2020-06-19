var input = document.querySelector("#userInput");
var check = document.querySelector("#check");
var option = document.querySelector('#function__name');
var reset_ele = document.querySelector('#reset__text');
//input.addEventListener('change',main);
check.addEventListener('click',main);
reset_ele.addEventListener('click',reset);

function printResult(value){
  //class="fas fa-times-circle fa-4x"
  //class="fas fa-check-circle fa-4x"
  let ele = document.querySelector("#resutl_i");
  Array.from(ele.classList).forEach(element => {
      ele.classList.remove(element)
  });
  if(value){
      ele.className="fas fa-check-circle fa-2x"
      ele.style.color="green"
  }
  else{
      ele.className="fas fa-times-circle fa-2x"
      ele.style.color="red"
  }
}

function main(){
  let inputValue = input.value;
  if(!inputValue)return;
  if(option.value==="isPalindrome"){
      printResult(isPalindrome(inputValue))
  }
  if(option.value==="isPrime"){
      printResult(isPrime(inputValue))
  }
  if(option.value==="isFibonacci"){
      printResult(isFibonacci(inputValue))
  }
  if(option.value==="isPerfectSquare"){
      printResult(isPerfectSquare(inputValue))
  }
  if(option.value==="isPerfectCube"){
      printResult(isPerfectCube(inputValue))
  }
}

function isPalindrome(n){
    let num = `${n}`;
    let rev="";
    for(let i=0;i<num.length;i++){
      rev+=(num[(num.length-1)-i])
    }
    return num===rev
  }

  function isPrime(n){
      for(let i=2; i<Math.sqrt(n)+1;i++){
          if(n%i==0)return false
      }
      return true;
  }

  function isPerfectSquare(n){
    if( (Math.sqrt(n))%1 == 0 ) return true
    return false
  }
  function isPerfectCube(n){
    if( (Math.cbrt(n))%1 == 0 ) return true
    return false
  }


  function isFibonacci(n){ 
    n=parseInt(n);
    let a =0;
    let b = 1;
    let c=1;
    
    if(n===0 || n===1) return true;
    
    while(c<n){
      c=a+b;
      a=b;
      b=c;     
    }    
    return n==c;
  }
  
  function reset(){
    input.value=""
    let ele = document.querySelector("#resutl_i");
    Array.from(ele.classList).forEach(element => {
        ele.classList.remove(element)
    });
  }



  //medoia


  function myFunction(media) {
    if (media.matches) { // If media query matches
      document.querySelector('#remove').innerHTML=""
      
    } 
  }
  

  document.addEventListener('DOMContentLoaded',()=>{
    var media = window.matchMedia("(max-width: 600px)")
    myFunction(media) // Call listener function at run time
  })

  