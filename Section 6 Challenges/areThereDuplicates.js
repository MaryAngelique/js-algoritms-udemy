function areThereDuplicates() {
    let arr = [...arguments];
    if (arr.length === 0) {
        return false;
    }
  
    let counter = {};
  
    for (let i =0; i < arr.length; i++){
        let digit = arr[i];
        
        counter[digit] ? counter[digit] += 1 : counter[digit] = 1;
    }
  
     let values = Object.values(counter);
     
     for (let i = 0 ; i < values.length; i++){
       if(values[i] != 1){
         return true;
       }
     }
     
    return false;
}