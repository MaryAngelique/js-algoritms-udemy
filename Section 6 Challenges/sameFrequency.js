function sameFrequency(a, b){
    let int1 = a.toString();
    let int2 = b.toString();
    
    if (int1.length !== int2.length) {
        return false;
    }
    
    const count = {};
    
    for (let i = 0; i < int2.length; i++) {
        let num = int1[i];
        count[num] ? count[num] += 1 : count[num] = 1;
    }
    
    for (let i = 0; i < int2.length; i++) {
        let num = int2[i];
        
        if(!count[num]) {
            return false;
            
        } else {
            count[num] -= 1;
        }
    }
    
    return true;
}