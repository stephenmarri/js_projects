let graph = document.querySelector('#graph')
let alg_Names = document.querySelectorAll('.alg_name')
let playButton = document.querySelector('#play')
let runSizeButton = document.querySelector('#sizeLevel')
let runSpeedButton = document.querySelector('#speedLevel')
let generateButton = document.querySelector('#newSet')
let linesCount = arrLen
let runAlgName = 'bubble'
let runSpeed = runSpeedButton.value;

let runSize = runSizeButton.value;


let running = false

function init(){
    generateHandler()   
}
  
init()

//######################################## draw lines
function drawLines(arr){
    graph.innerHTML="";
    
    for(let i=0;i<linesCount;i++){
        let height = arr[i]
        height = (100/linesCount)*height

        let lineElement = document.createElement('div')
        lineElement.className='line'        
        lineElement.style.height = `${height}%`
        lineElement.style.width = `${100/linesCount}%`
        graph.appendChild(lineElement)
    }
}

//#################################### event handlers
alg_Names.forEach(element => {
    element.addEventListener('click',algNameHandler)
});

playButton.addEventListener('click',playButtonHandler)
generateButton.addEventListener('click',generateHandler)


function generateHandler(e){
    if(running) return;    
    arrLen = parseInt(runSizeButton.value)    
    linesCount = arrLen
    unsortedArr = Array(arrLen).fill().map((item,index)=>item=index+1)
    unsortedArr = unsortArr(unsortedArr)    
    drawLines(unsortedArr)
}


function playButtonHandler(e){
    if(!running){
        playButton.textContent = '......'
        run(runAlgName)
    }
}

function algNameHandler(e){
    if(running) return
    alg_Names.forEach(x => x.classList.remove('selected'))
    this.classList.add('selected')
    if(unsortedArr[0]==1) generateHandler();
    runAlgName=this.id
}

async function run(algName) { 
    running = true
    document.documentElement.style.setProperty("--transform","scale(1)")
    sleepTime = 1050- parseInt(runSpeedButton.value)    
    switch (algName) {
        case 'bubble':
            await bubbleSort(unsortedArr);
            break;
        case 'selection':
            await selectionSort(unsortedArr);
            break;
        case 'insertion':
            await insertionSort(unsortedArr);
            break;
        case 'merge':
            await mergeSort(unsortedArr);
            break;
        case 'heap':
            await heapSort(unsortedArr);
            break;
    
        default:
            await bubbleSort(unsortedArr);
            break;
    }
   playButton.textContent='Play'
   running=false
   document.documentElement.style.setProperty("--transform","scale(0.98)")
};