

const call1224 = (callback) => {
    callback  = (a, b) => {
  return a - b;
};

return callback(1, 2); 
};

const sum = (a, b) => {
  return a + b;
}; 

call1224(sum);