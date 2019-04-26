let arrays = [[1, 2, 3], [4, 5], [6]];

let allArrays = arrays.reduce(function(accumulator, currentValue) { 
      return accumulator.concat(currentValue);
    });

console.log(allArrays);