function isSubsequence(str1, str2) {
    let i = 0;
    
    for (let j = 0; i < str1.length && j < str2.length; j++) {
      if (str2[j] === str1[i]) i++;
    }
    
    return i === str1.length;
}