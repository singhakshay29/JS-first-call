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

console.log('4' * 6 + 10);

console.log('5' - '3');

console.log(NaN === NaN);


let str='ak ak a aks aksh ';
//output = akshay longest word;


function findlongestStr(str){
let newStr=str.split(" ");
let max=newStr[0].length;//4
let result=newStr[0];
for(let i = 1;i<newStr.length;i++){
if(max<newStr[i].length){
result=newStr[i];
}
}
return result
}

console.log(findlongestStr(str));

console.log(12**12);


function test(){
    salary=1200;
    console.log(salary);
    }
    
    
    test();

    console.log({} == {});
    
    
    let a={
        name:"akshay"
        }
        
        let b={
        ...a
        }
        
        b.name="raja";
        
        console.log(b.name);

        // let a=10;

        // let b=new Number(10);
        
        // let c=10;
        
        // console.log(b===c);
        
        
        // function test(record){
        //     if(record=={age:28}){
        //     console.log("Hello");
        //     }else if(record === {age:28}){
        //     console.log("World");
        //     }else {
        //     console.log("No record")
        //     }
        //     }
            
        //     test({age:28});
        
//         var a={}
// var b={key:'b'};
// var c={key:'c'};


// a[b]=600;
// b[c]=700;
// b[b]=400;


// console.log(a[c]);
// console.log(a[b]);
// console.log(b[b]);
// console.log(b[c]);