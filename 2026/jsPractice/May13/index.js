function merge(intervals) {
    let res=[];
    intervals.sort((a,b)=>a[0]-b[0]);
    console.log(intervals)
    let current=intervals[0];//[1,6]
    res.push(current);

    for(let i=1;i<intervals.length;i++){
    current=intervals[i];
     let last=res[res.length-1];
        if(current[0]<=last[1]){
            last[1]=Math.max(last[1],current[1]);
        }else{
            res.push(current);
        }
    }

    return res;
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

function groupAnagrams(strs) {
    let obj={};
    for(let str of strs){
        let sort=str.split('').sort().join('');
        if(obj[sort]){
          obj[sort].push(str);  
        }else{
            obj[sort]=[str];
        }
    }
    return Object.values(obj);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


function nextGreaterElement(nums1, nums2) {
    let stack=[];
    let map=new Map();
    for(let num of nums2){
        while(stack.length && num>stack[stack.length-1]){
            let smaller = stack.pop();
            map.set(smaller,num);
        }
        stack.push(num);
        console.log(stack)
    }
    console.log([...map])
    return nums1.map((num)=>map.get(num)||-1);
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))

