//find max element in an array
let arr=[12,34,45,67,32,89,65,87,23];

function findMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=max){
            max=arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

//find min

function findMin(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
//find second max

function secondMax (arr){
    let max=Math.max(arr[0],arr[1]);
    let secondMax=Math.min(arr[0],arr[1]);
    for(let i=2;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max
            max=arr[i];
        }else if(arr[i]>secondMax && max != arr[i]){
            secondMax=arr[i];
        }
    }
    return secondMax;
}

//find  second max

function secondMin(arr){
    let min=Math.min(arr[0],arr[1]);
    let sMin=Math.max(arr[0],arr[1]);
    for(let i=2;i<arr.length;i++){
        if(arr[i]<min){
            sMin=min;
            min=arr[i];
        }else if(arr[i]<sMin && min !=arr[i]){
            sMin=arr[i];
        }
    }
    return sMin;
}


arr=[12,34,45,67,32,89,65,87,23];

//reverse array

function revArray(arr){
    let rev=[];
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i]);
    }
    return rev;
}

//II method

function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    let temp;
    while(i<j){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}

// sort 0's and 1's

let newArray =[0,1,1,0,1,1,0,0,0,1,0,1,1,0];

function sortZeroAndOne(newArray){
    let i=0;
    let j=0;
    let temp;
    while(i<arr.length){
       if(arr[i]==0){
        temp =arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++;
       } 
       i++;
    }
    
}

//sort +ve and -ve

let num=[-2,-8,12,34,-23,78,-4,-99,54];
function sortPosAndNeg(arr){
    let i=0;
    let j=0;
    while(i<j){
        if(arr[i]<0){
            let temp =arr[i];
            arr[i]=arr[j];
            arr[j]=arr[i];
            j++;
        }
        i++;
    }
}

console.log(sortPosAndNeg(num))

//left rotation by 1

function leftRotation(arr){
    let temp=arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=temp;
}

//right rotation by 2

arr=[2,5,7,9,32,54];
function rightRotation(arr){
    let temp = arr[arr.length-1];
    for(let i=1;i<arr.length-1;i++){
        arr[i+1]=arr[i];
    }
}