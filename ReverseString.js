const result = function reverse(str){
    let newString ="";
    
    for (let i=str.length - 1 ;i>=0;i--)
    {
        newString += str[i];
    }
       return newString;
   }
   
   let see = result("hello world");
   
   console.log(see)