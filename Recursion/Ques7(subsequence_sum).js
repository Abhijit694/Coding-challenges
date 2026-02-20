// Desc : subsequences whose sum is k
// TC : O(2^n)
// SC : O(n) because recursion stack(n) + temp arr (n)
// Note : if array contains only posotive numbers then "if(currentSum > k) return" to prune recursion

function subsequenceSumK(index,arr,temp,currentSum,k,result){
    if(index >= arr.length){
        if(currentSum === k){
            result.push([...temp])
        }
        return
    }

    // pick condition
    temp.push(arr[index])
    subsequenceSumK(index+1,arr,temp,currentSum+arr[index],k,result)

    // not pick condition
    temp.pop()
    subsequenceSumK(index+1,arr,temp,currentSum,k,result)
}

let arr = [1,2,1]
let result = []

subsequenceSumK(0,arr,[],0,2,result)
console.log(result);