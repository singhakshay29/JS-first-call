let s="My Name is akshay Singh";
//output arr=["My","Name","is","akshay","singh"];

let s2=s.split(" ");
console.log(s2);


let str1="lucknow";

let str2="kanpur 1234";

//output lkuacn..so on
function mergedString(str1,str2){
    let mergedString="";
let maxLength=Math.max(str1.length,str2.length);

for(let i=0;i<maxLength;i++){
    if(i<str1.length){
        mergedString+=str1.charAt(i);
    }
    if(i<str2.length){
        mergedString+=str2.charAt(i);
    }
}
return mergedString;
}
console.log(mergedString(str1,str2));


//
console.log(sum(2,4));
console.log(sum(2)(5));

function sum(a,b){
    if(b!==undefined){
        return a+b;
    }else{
        return function (c){
            return a+c;
        }
    }
}