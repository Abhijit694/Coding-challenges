function checkPalindrome(num){
    let numCopy = num
    let reversedNum = 0
    while(numCopy > 0){
        let lastDigit = numCopy % 10
        reversedNum = (reversedNum * 10) + lastDigit
        numCopy = Math.floor(numCopy/10)
    }
    return num === reversedNum
}

console.log(checkPalindrome(77177));