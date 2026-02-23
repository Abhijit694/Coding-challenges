// Desc : Print any one subsequence whose sum is "k" not more than that only one subsequence
// TC : O(2^n)
// SC : O(n) because recursion stack(n) + temp arr (n)
// Note : 


function oneSubsequenceSumK(index,arr,temp,currentSum,k,result){
    if(index >= arr.length){
        if(currentSum === k){
            result.push([...temp])
            return true
        }
        return false
    }

    // pick condition
    temp.push(arr[index])
    currentSum += arr[index]
    if(oneSubsequenceSumK(index+1,arr,temp,currentSum,k,result) === true) return true

    // not pick condition
    temp.pop()
    currentSum -= arr[index]
    if(oneSubsequenceSumK(index+1,arr,temp,currentSum,k,result) === true) return true

    return false
}

let arr = [1,2,1]
let k = 2
let result = []

if(oneSubsequenceSumK(0,arr,[],0,k,result) === true){
    console.log("Subsequence is",result);
}else{
    console.log("Ther is no subsequence");
}