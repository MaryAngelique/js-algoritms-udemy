function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
      if (arr.length === 1) {
          return [arr[0][0].toUpperCase() + arr[0].substr(1)];
      }
      
      const res = capitalizeFirst(arr.slice(0, -1));
      const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1);
      res.push(string);
      return res;
}
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana'] 