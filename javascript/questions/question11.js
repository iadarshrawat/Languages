// insertion sort
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let temp = arr[i];
        let j = i-1;
        for(; j>=0; j--){
            if(arr[j]>temp){
                // shift logic
                arr[j+1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j+1] = temp;
    }
}

let arr = [6,5,3,4,2,1]
insertionSort(arr);
console.log(arr);

