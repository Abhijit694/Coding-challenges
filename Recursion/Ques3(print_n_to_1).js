// Desc : Print integer from from n to 1
// Difficulty : easy
// Time Complexity: O(n)
// Space Complexity: O(n)
// Each recursive call waits for the next one → n calls are stacked in memory → space = O(n)
// Note : Use loops for O(1) space complexity


function printIntegerRev(n){
    if(n<1) return

    console.log(n);
    printIntegerRev(n-1)
}

printIntegerRev(5)