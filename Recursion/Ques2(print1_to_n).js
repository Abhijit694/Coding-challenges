// Desc : Print integer from from 1 to n
// Difficulty : easy
// Time Complexity: O(n)
// Space Complexity: O(n)
// Each recursive call waits for the next one → n calls are stacked in memory → space = O(n)
// Note : Use loops for O(1) space complexity

function printInteger(n){
    if(n<1) return

    printInteger(n-1)
    console.log(n);
}

printInteger(5)