// Desc : count the subsequence with sum = k
// TC : O(2^n)
// SC : O(n) because recursion stack(n) + temp arr (n)
// Note : 


function countSubsequencesSumK(index,arr,temp,currentSum,k){
    if(index >= arr.length){
        if(currentSum === k) return 1
        else return 0
    }

    // pick condition
    temp.push(arr[index])
    currentSum += arr[index]
    let l = countSubsequencesSumK(index+1,arr,temp,currentSum,k)

    // not pick condition
    temp.pop()
    currentSum -= arr[index]
    let r = countSubsequencesSumK(index+1,arr,temp,currentSum,k)

    return l+r
}

let arr = [1,2,1]
let k = 2

console.log("Subsequences with sum",k,"is",countSubsequencesSumK(0,arr,[],0,k))