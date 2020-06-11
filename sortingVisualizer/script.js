let graph = document.querySelector('#graph')

let linesCount = arrLen
console.log(unsortedArr);

function init(){
    drawLines();
}


function drawLines(){
    
    for(let i=0;i<linesCount;i++){
        let height = unsortedArr[i]
        height = (100/linesCount)*height

        let lineElement = document.createElement('div')
        lineElement.className='line'        
        lineElement.style.height = `${height}%`
        lineElement.style.width = `${100/linesCount}%`
        graph.appendChild(lineElement)
    }
}

init()