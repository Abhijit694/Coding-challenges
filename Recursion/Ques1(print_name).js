// Print name n times
// TC -: O(n)
// SC -: O(n)

function printName(n,str){
    if(n<1) return

    console.log(str);
    printName(n-1,str)
}

printName(3,"Krishna")