//############################ Globals
let arrLen,unsortedArr, sleepTime
//############################ Globals

// arrLen=10
// sleepTime=1000
unsortedArr = Array(arrLen).fill().map((item,index)=>item=index+1)
unsortedArr = unsortArr(unsortedArr)
// heapSort(unsortedArr)

//####################################################### heap sort
async function heapify(arr,currIdx,len){
    let largest = currIdx
    let left = 2*currIdx + 1
    let right = 2*currIdx + 2

    if( left<len && arr[left]>arr[largest]){
        largest = left
    }

    if( right<len && arr[right]>arr[largest]){
        largest = right
    }

    if(largest!=currIdx){
        [arr[currIdx],arr[largest]]=[arr[largest],arr[currIdx]]
        await heapify(arr,largest,len)
    }
     
}

async function buildMaxHeap(arr){
    let len = arr.length
    let startIdx = Math.floor(len/2)-1
    
    for(let i=startIdx;i>=0;i--){
        await heapify(arr,i,len)
        await sleep(sleepTime)   
        drawLines(arr)
    }        
}

async function heapSort(a){
    let len = a.length;
    let startIdx=0
    let endIdx = len-1
    await buildMaxHeap(a)

    for(let i=0;i<len;i++){
        [a[endIdx],a[startIdx]]=[a[startIdx],a[endIdx]];
        endIdx--;
        await heapify(a,0,endIdx+1)
        await sleep(sleepTime)        
        drawLines(a)
    }
    console.log(a);
}
//####################################################### heap sort


//####################################################### merge sort
async function mergeSort(unsortedArr){
    let low = 0
    let high = unsortedArr.length - 1
    let temp = [...unsortedArr]
    let m = 1
    while(m <= high - low){
        for(let i=low;i<high;i+=(2*m)){
            let from = i
            let to = Math.min(high,i+(2*m)-1)
            let mid = i + m -1 
            await merge(unsortedArr,from,to,mid,temp)
        }
        m*=2;
    }    
}

async function merge(A,from,to,mid,temp){

    let a=from
    let b=mid + 1
    let k=from

    while(a <= mid && b <= to){
        if(A[a]<A[b]){
            temp[k]=A[a]
            a+=1
        }else{
            temp[k]=A[b]
            b+=1
        }
        k+=1
    }

    while(a <= mid && k<=to){
        temp[k]=A[a]
        a+=1
        k+=1
    }
    while(b<=to && k<=to){
        temp[k]=A[b]
        b+=1
        k+=1
    }

    for(let i=0;i<A.length;i++){
        A[i]=temp[i]
    }     
    await sleep(sleepTime)  
    drawLines(A) 
}
//####################################################### merge sort


//####################################################### bubble sort
async function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }        
        await sleep(sleepTime)  
        drawLines(arr)    
    }    
    return arr
}
//####################################################### bubble sort

//####################################################### selection sort

async function selectionSort(arr){    

    for(let i=0;i<arr.length;i++){
        smallIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[smallIndex]){
                smallIndex=j
            }      
        }
        if(smallIndex>i){
        temp = arr[smallIndex]
        arr[smallIndex] = arr[i]
        arr[i] = temp
        }
        await sleep(sleepTime)  
        drawLines(arr)  
    }    
    return arr
}
//####################################################### selection sort

//####################################################### insertion sort
async function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                temp=arr[i]
                arr.splice(i,1)
                arr.splice(j,0,temp)
                break
            }
        }
        await sleep(sleepTime)  
        drawLines(arr)  
    }
    return arr

}
//####################################################### insertion sort    

//####################################################### helpers
function unsortArr(arr){
    let res=[]
    let arrL = arr.length;
    for(let i=0;i<arrL;i++){
        let randomI = Math.floor(Math.random()*(arrL-i))
        res.push(arr[randomI]);
        arr.splice(randomI,1)
    }
    return res;
}


function sleep(await){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, await)
    })
}
//####################################################### helpers