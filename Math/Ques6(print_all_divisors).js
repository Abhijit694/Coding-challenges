function printAllDivisors(num){
    for(let i=1;i*i<=num;i++){
        if(num%i === 0){
            console.log(i);     // First divisor
            if(Math.floor(num/i) !== i){
                console.log(Math.floor(num/i));     // Paired divisor
            }
        }
    }
}

printAllDivisors(16)