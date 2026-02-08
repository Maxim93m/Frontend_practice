const obj = {
  
    a: 7,
    async: function() {
      setTimeout(function() {
        console.log(this.a)
      }, 1000)
    }
  }
  
  obj.async()







  const debounce = (fn, ms) => {
    let timeout;
    
    return function() {
      const fnCall = () => { fn.apply(this, arguments) }
      
      clearTimeout(timeout)
      
      timeout = setTimeout(fnCall, ms)
      
    };
  }
  
  onChange = debounce(onChange, 1000)
  
  function onChange(e) {
    console.log(e.target.value)
  }
  
  document.getElementById('search').addEventListener('keyup', onChange)






  function throttle(func, ms) { 
  
    let isThrottled = false;
    let savedArgs;
    let savedThis;
    
    
    function wrapper() {
      
      if(isThrottled) {
        
        savedArgs = arguments
        savedThis = this
        return
        
      }
      
      func.apply(this, arguments)
      
      isThrottled = true;
      
      setTimeout(function() {
        
        isThrottled = false
        if(savedArgs) {
          
          wrapper.apply(savedThis, savedArgs)
          savedArgs = savedThis = null
          
        }
      }, ms)
      
    }
    
    return wrapper
    
  }
  
  function mouseMove() {
    console.log(new Date())
  }
  
  setInterval(mouseMove, 1000)