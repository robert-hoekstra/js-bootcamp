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