//Map

const myans=[1,2,3,4,5].map((items)=>{
   return items*items;
})
console.log(myans);

const my=[1,2,3,34,55].map((value)=>{
    return {
        items:value
    }
})

console.log(my);
// want to make our function myMap

Array.prototype.myMap =function(callback)
{
    let array=this;

    const ans=[];
    for(let i=0;i<array.length;i++)
    {
        const item=array[i];
        const returnVal=callback(item,i)
        ans.push(returnVal);
    }
    return ans;
}

const callback=(item,index)=>{
    return {
        index,
        val:item
    }

}

const res=[34,55,67,89].myMap(callback);
console.log(res);

//----filter
const resfilter=[23,45,66,78,12].filter((item)=>{
    return item%2==0
})
console.log(resfilter + '   oldans');

//-----Lets make my filter----------//
Array.prototype.myfilter =function(callback){
    let array=this                                //[18,42,79,22,37,87,72,11,67,97,80]
    let result=[];
    for(let i=0;i<array.length;i++)
    {
        const item=array[i];
        const newresult=callback(item,i);
        if(newresult)
        {
            result.push(item);
        }
    }
    return result;
}

const callbackFilter=(item,index)=>{
    return item %2==0
}

const resfilternew=[23,45,66,78,12].myfilter(callbackFilter);
console.log(resfilternew +" ans");



//------------Reduce--------------------//

const reduceans=[18,42,79,22,37,87,72,11,67,97,80].reduce((acc,current)=>{
    return acc+current
},0)
console.log(reduceans);

//-------Let make our reduce--------------//


Array.prototype.myReduce=function(callback,initialVal){
    let array=this;
    let acc=initialVal ? initialVal :0;
    for(let i=0;i<array.length;i++)
    {
        const items =array[i];
        acc =callback(acc,items);

    }
    return acc;
}


const reduceansmy=[18,42,79,22,37,87,72,11,67,97,80].myReduce((acc,current)=>{
    return acc+current;
},0)

console.log(reduceansmy + " myReduce") 



//--------set Interval-----------//



console.log("setIntervals");

setTimeout(()=>{
    console.log('its a party time');
},3000)

// const setIntervalsId=setInterval(()=>{
//     console.log("let have some fun");
// },3000)

//console.log(setIntervalsId);

//setInterval,settimeout take space

//after setTimeoutId generated
//we can clear it by clearTimeout(setTimeoutId);

//....same for set Interval



for(var i=0; i<3;i++)
{
    setTimeout(()=>{
        console.log(i);
    },2000)
}
//3,3,3


for(let i=0; i<3;i++)
{
    setTimeout(()=>{
        console.log(i);
    },2000)
}

for(var i=0; i<3;i++)
{
    function val(){
    setTimeout(()=>{
        
        console.log(i);
        
    },2000)
    
}
}


//IIF



for(let index=0;index <4;index++)
{
    //()()<-----IIF
    ((num1)=>{
        console.log(num1);
    })(10)
    var a=1;
}
console.log(a);


(()=>{})()


for(let i=0; i<3;i++)
{
    console.log(i);
    ((a)=>{
    setTimeout(()=>{
        
        console.log(a);
        
    },2000)
    
})(i)
}



