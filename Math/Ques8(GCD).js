function gcd(num1,num2){
    if(num1 === 0) return num2
    if(num2 === 0) return num1
    
    for(let i=Math.min(num1,num2);i>1;i--){
        if(num1%i === 0 && num2%i === 0){
            return i
        }
    }
    return 1
}