//############################ Globals
let arrLen,unsortedArr
//############################ Globals

arrLen = 100
unsortedArr = Array(arrLen).fill().map((item,index)=>item=index+1)
unsortedArr.sort(function(a,b){
    if(a*(Math.floor(Math.random()*arrLen)) > b*(Math.floor(Math.random()*arrLen))){
        return 1
    }else{
        return -1
    }
})



//console.log(bubbleSort(unsortedArr))
//console.log(selectionSort(unsortedArr));
//console.log(insertionSort(unsortedArr));
//console.log(mergeSort(unsortedArr));


function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }        
    }    
    return arr
}

function selectionSort(arr){    

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
    }    
    return arr
}

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                temp=arr[i]
                arr.splice(i,1)
                arr.splice(j,0,temp)
                break
            }
        }
    }
    return arr

}


function mergeSort(arr){
    
    function merge(l,r){
        // console.log(`merge: left:${l} right:${r}`);
        let res=[]
        while(l.length >0 && r.length>0){
            if(l[0]<r[0]){
                res.push(l[0])
                l.splice(0,1)
            }else {
                res.push(r[0])
                r.splice(0,1)
            }
        }

        return res.concat(l).concat(r);
    }    

    function divide(arr){
        // console.log(`divide: ${arr}`);
        if(arr.length < 2){
            return arr
        }
        const mid = Math.floor(arr.length/2)
        const left = arr.slice(0,mid)
        const right = arr.slice(mid)
        
        return merge(divide(left),divide(right))       
    }

    return divide(arr)
}

