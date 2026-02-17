function countDigits1(num){
    num = Math.abs(num) // For negative numbers
    let count = 0
    while(num>0){
        num = Math.floor(num/10)
        count++
    }
    return count
}

// With log method
function countDigits2(num){
    num = Math.abs(num) // For negative numbers
    if(num === 0) return 1
    return Math.floor(Math.log10(num)) + 1
}

// With recursion
function countDigits3(num){
    num = Math.abs(num) // For negative numbers
    
    if(num < 10) return 1       // Base case
    return countDigits3(Math.floor(num/10))     // Recursive case
}


console.log(countDigits(7));