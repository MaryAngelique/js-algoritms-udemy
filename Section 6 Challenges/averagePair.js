function averagePair(arr, n){
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        let average = (arr[i] + arr[j]) / 2;
        
        if (average === n) {
            return true;
            
        } else if (average < n) {
            i++;
            
        } else {
            j--;
        }
    }
    
    return false;
}