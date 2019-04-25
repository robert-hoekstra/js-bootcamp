function range(start, end){
    let listOfNumbers = [start];
        if (start <= end){
            for (var i in (end - start)){
                listOfNumbers.push(start+i)
                return listOfNumbers;

        }
    // optellen als start kleiner is dan end
        } else {
            for (var i in (start - end)){
                listOfNumbers.push(start-i)
                return listOfNumbers;
    // aftellen als start kleiner is dan end
    }

}
    listOfNumbers.push(end);
    return listOfNumbers;
}

console.log(range(1, 10));