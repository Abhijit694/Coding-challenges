// Desc : Checking the string if it is palindrome or not
// Time Complexity: O(n)
// Space Complexity: O(n)
// Even though we make only n/2 swaps, recursion still creates n/2 call frames that wait in the call stack → space used = O(n/2) = O(n)
// Note : use loop for O(1) space complexity

function checkPalindromeRecursion(str,i){
    if(i > (str.length-1)/2) return true       // base case

    if(str[i] !== str[(str.length-1)-i]) return false
    return checkPalindromeRecursion(str,i+1)
}

let str1 = "madam"
let str2 = "tiger"
console.log(checkPalindromeRecursion(str1,0));
console.log(checkPalindromeRecursion(str2,0));