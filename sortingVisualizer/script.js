let graph = document.querySelector('#graph')

let linesCount = arrLen
console.log(unsortedArr);

function init(){
    drawLines(unsortedArr);
    
}


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

async function main() { 
    //console.log(bubbleSort(unsortedArr))
    //console.log(selectionSort(unsortedArr));
    //console.log(insertionSort(unsortedArr));     
    await mergeSort(unsortedArr);        
};
  
init()
main()