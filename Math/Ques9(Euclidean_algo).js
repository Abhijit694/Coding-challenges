// Euclidean algo -: gcd(n1,n2) = gcd(n1-n2,n2)             where n1 > n2
// We can also take reminder instead of repeated sunstraction
// T.C = o(log base phi (min(n1,n2)))           here base is phi because everytime the reminder changes

function euclideanGCD1(num1,num2){
    while(num1>0 && num2>0){
        if(num1<num2) num2 = num2 % num1
        else num1 = num1 % num2
    }
    if(num1 === 0) return num2
    return num1
}

function euclideanGCD2(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}