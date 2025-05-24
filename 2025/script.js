//Sum of natural number
function sumOfNaturalNum() {
  let n = Number(prompt("Enter a number"));
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n <= 0) {
      console.log("Enter positive number");
    } else {
      let s = 0;
      for (let i = 0; i <= n; i++) {
        s += i;
      }
      console.log(s);
    }
  }
}
//sumOfNaturalNum()

//factors of number

//10=>1,2,5,10
//20=>1,2,4,5,10
function factOfNum() {
    let n = Number(prompt("Enter a number"));
    if (isNaN(n)) {
      console.log("Invalid Input");
    } else {
      if (n <= 0) {
        console.log("Enter positive number");
      } else {
        for(let i=1;i<=Math.floor(n/2);i++){
            if(n%i===0){
                console.log(i);
            }
        }
        console.log(n);
      }
    }
  }
//  factOfNum()


//check prime number

function checkPrime(){
    let val=prompt("Enter a num");
    if(isNaN(val)){
        console.log("Invalid");
    }else{
        if(val<=0){
            console.log("Enter positive num");
        }else{
            console.log(isPrime(val));
        }
    }
}

function isPrime(value){
    if(value<=1 ) return false;
    if( value == 2) return true;
    if( value%2==0) return false;
    for(let i=3;i<Math.floor(Math.sqrt(value));i+=2){
        if(value%i===0){
            return false;
        }
    }
    return true;
    
}

//checkPrime()

//sum of digit Number

let num=1234;

function digitSum(n){
    if(n>0){
        let sum=0;
        while(n>0){
            let rem=n%10;
            sum=sum+rem;
            n=Math.floor(n/10);   
        }
        return sum;
    }
    
}
console.log(digitSum(num));


//rev digit of num

function revNumber(n){
    if(n>0){
        let rev=0;
        while(n>0){
           let rem=n%10;
           rev=rev*10+rem;
           n=Math.floor(n/10);
        }
        return rev;
    }
    
}
console.log(revNumber(num));

//strong Num

//145 => 1!+4!+5!

//rev digit of num

function strongNum(n){
    if(n>0){
        let strong=0;
        while(n>0){
            let rem=n%10;
            let fact=1;
            for(let i=1;i<=rem;i++){
                fact=fact*i;
            }
            strong=strong+fact;
          n=Math.floor(n/10);
        }
        return strong;
    }
    
}
console.log(strongNum(num));