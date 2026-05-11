function currying(a) {
    return function (b) {
      if (b === undefined) return a;
      return currying(a + b);
    };
  }
  
  //console.log(currying(2)(3)(6)(1)())
  
  //debounce
  
  function debounced(fn, delay) {
    let timer;
    return function (...args) {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  
  function printName() {
    console.log('akshay');
  }
  
  const deb = debounced(printName, 1000);
  
  // deb();
  // deb();
  // deb();
  
  function throttling(fn, limit) {
    let isThrottle = false;
    return function (...args) {
      let context = this;
      if (!isThrottle) {
        isThrottle = true;
        fn.apply(context, args);
      }
      setTimeout(() => {
        isThrottle = false;
      }, limit);
    };
  }
  
  //flatten Array
  
  let val = [12, 2, 5, [5, 8, 9, 2, 0]];
  
  function flatArray(val) {
    let arr = [];
  
    for (let item of val) {
      if (Array.isArray(item)) {
        arr = arr.concat(flatArray(item));
      } else {
        arr.push(item);
      }
    }
    return arr;
  }
  
  // console.log(flatArray(val));
  
  //deep clone
  const obj = {
    name: {
      firstName: 'alice',
      lastName: null,
    },
    address: {
      number: 12345,
      country: 'London',
      pincode: 208027,
    },
    email: 'foo@bar.com',
    hobbies: ['singing', 'dancing', 'music'],
  };
  
  function deepclone(obj) {
    console.log(obj);
    if (typeof obj !== 'object' || obj === null) return obj;
  
    let copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      copy[key] = deepclone(obj[key]);
    }
    return copy;
  }
  
  let obj3 = deepclone(obj);
  
  obj3.name.lastName = 'singh';
  
  Array.prototype.myMap = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(callback(this[i], i, this));
    }
    return res;
  };
  
  Array.prototype.myFilter = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  };
  
  Array.prototype.myReducer = function (initalValue, callback) {
    let acc = initalValue;
    let startIndex = 0;
    if (acc !== undefined) {
      acc = this[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      acc = callback(this[i], i, this);
    }
    return acc;
  };
  
  function memorize(fn) {
    let cache = {};
    return function (...args) {
      let key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      let res = fn.apply(this, args);
      cache[key] = res;
  
      return res;
    };
  }
  
  const formateTime = (time)=>{
      const hr = String(Math.floor(time/3600)).padStart(2,'0');
      const min=String(Math.floor(time % 3600)).padStart(2,'0');
      const sec=String(Math.floor(time%60)).padStart(2, "0");
      console.log(hr,min,sec)
    }
  
    console.log(formateTime(10000))
  