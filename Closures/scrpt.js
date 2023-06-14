//Closures


// function cal(fun){
//     return function(){
//         console.log('abc');
//     }
// }



// function lg(){


//     function ac(){

//     }
//     return ac;
// }

//const ans=lg();
//console.log(ans);


//when we call lg function we will get ac function as a return


//case:1
// let a=100;//global
// function famina(){
//     let b=200;//famina variable
//     function club(){
//         let c=30;//;local
//         return a+b+c;
//     }
//     return club;
// }

// const result=famina();
// const finalans=result();
// console.log(finalans);//330


// let a=100;//global
// function famina(){
    
//     function club(){
//         let c=30;//;local
//         return a+b+c;
//     }
//     let b=200;//famina variable
//     return club;
// }

// const result=famina();
// const finalans=result();
// console.log(finalans);//330




//basic  example

// function abc(){
//     var c=14;
//     console.log(a);
//     console.log(c);
// }
// var a=12;
// abc();

//function along with local variable(lexical envirnoment)

function foo(){
    let var1=10;
    function bar(){
        var1=var1+1;
        console.log(var1);
    }
    return bar;
}

let resultofans=foo();
resultofans();
resultofans();




//--------------Deep and Shallow Copy------------

let math={
    marks:100,
    grade:'A+'
};

let science={
    marks:94,
    grade:'A'
}

let mathClone={...math};//spread copy

console.log(mathClone==math);
console.log(mathClone===math);


const counter = (function () {
    let privateCounter = 0;//0
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
