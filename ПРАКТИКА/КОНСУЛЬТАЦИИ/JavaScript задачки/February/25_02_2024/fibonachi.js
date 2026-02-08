//    ===== ФИБОНАЧИ ======
   
function fib(num) {
    
    let a = 1;
    let b = 1;
    
    for(let i = 3 ; i <= num; i++) {
      
      let   c = a + b
            a = b
            b = c
  
     return b;
  }
  
  // [a,b] = [b, a + b]
      
    }
  
  console.log(fib(10));


  function fib(num) {
    const result = [0, 1];
    
    for(let i = 2; i <= num; i++) {
      const firstNumber = result[i - 1];
      const secondNumber = result[i - 2];
      result.push(firstNumber + secondNumber);
    }
    
    return result[num]
    
  }
  
  console.log(fib(7))