// Desc : Reverse an array
// difficulty : easy
// Time Complexity: O(n)
// Space Complexity: O(n)
// Even though we make only n/2 swaps, recursion still creates n/2 call frames that wait in the call stack → space used = O(n/2) = O(n)

// Reversing the array with two pointer
function reverseArrRecursion1(arr,left,right){
    if(left >= right) return

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    reverseArrRecursion1(arr,left+1,right-1)
}

// reversing the array with one pointer
function revArrRecursion(arr,i){
    if(i > Math.floor(arr.length-1)/2) return

    let temp = arr[i]
    arr[i] = arr[(arr.length-1)-i]
    arr[(arr.length-1)-i] = temp
    revArrRecursion(arr,i+1)
}

let arr1 = [5,4,6,3,6,6,3]
let arr2 = [5,3,7,2,8,9,1]
console.log("original array :",arr1);
console.log("original array :",arr2);

reverseArrRecursion1(arr1,0,arr1.length-1)
revArrRecursion(arr2,0)
console.log("Array afetr reversing :",arr1);
console.log("Array afetr reversing :",arr2);