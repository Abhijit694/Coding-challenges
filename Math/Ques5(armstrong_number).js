function checkArmstrong(num){
    let copyNum = num
    let digitLength = 0
    let result = 0
    while(copyNum>0){
        digitLength += 1
        copyNum = Math.floor(copyNum/10)
    }
    copyNum = num
    while(copyNum>0){
        let lastDigit = copyNum % 10
        result = result + (lastDigit ** digitLength)
        copyNum = Math.floor(copyNum / 10)
    }
    return result === num
}

console.log(checkArmstrong(1634));