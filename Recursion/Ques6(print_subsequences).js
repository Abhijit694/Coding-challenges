// Desc : print all subsequences of an array using recursion
// TC : O(2^n)
// SC : O(n)
// Note : 

function printSubsequences(index,arr,temp){
    if(index >= arr.length){
        console.log(temp);         // here we print the snapshots so we directely print temp arr without copying it 
        return
    }

    // take or pick the particular index into subsequence
    temp.push(arr[index])
    printSubsequences(index+1,arr,temp)

    // not pick or take condition, this element is not added to subsequence
    temp.pop()
    printSubsequences(index+1,arr,temp)
}


// Returning all subsequences by storing it
// here I copied the temp arr by spread operator
// because arr in javascript is referential type and After backtracking finishes, all stored subsequences become empty or identical.
function getSubsequences(index, arr, temp, result) {
    if (index >= arr.length) {
        result.push([...temp]);   // copy required
        return;
    }

    temp.push(arr[index]);
    getSubsequences(index + 1, arr, temp, result);

    temp.pop();
    getSubsequences(index + 1, arr, temp, result);
}

// call
let result = [];
getSubsequences(0, [1, 2, 3], [], result);
console.log(result);


printSubsequences(0, [3,1,2], []);