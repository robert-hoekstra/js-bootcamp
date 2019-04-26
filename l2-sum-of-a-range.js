function range(start, end){
    let listOfNumbers = [];
            for (var i = start; i <= end; i++){
                listOfNumbers.push(i)
        }
    // optellen als start kleiner is dan end
            for (var i = start; i >= end; i--){
                listOfNumbers.push(i)
    // aftellen als start kleiner is dan end
    }
    return listOfNumbers;
}
console.log(range(1, 10));
console.log(range(10, 1));

function sum (listOfNumbers){
    let totalOfList = 0;
    for (var i = 0; i < listOfNumbers.length; i++){
        totalOfList += listOfNumbers[i];
    }
    return totalOfList;
}

console.log(sum(range(1, 10)));
