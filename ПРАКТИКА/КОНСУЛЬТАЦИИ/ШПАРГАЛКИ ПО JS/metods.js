// Полифил для ForEach

let arr = [1,2,3,4,5,6,7]

Array.prototype.forEach2 = function (callback) {
  
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    
    callback(arr[i], i, arr)
    
  }
}

arr.forEach2((item, index, array) => {
  console.log({item, index})
  
})

// Полифил Редюсер

Array.prototype.reduce2 = function (func, result) {
  let i = 1;
  
  if(arguments.length < 2) {
    i = 1
    result = this[0]
  }
  
  for(; i < this.length; i++) {
    result = func(result, this[i], this)
  }
  
  return result
}

// Полифил Filter

Array.prototype.filter2 = function(callback, thisArgs) {
  if(this == null) {
    throw new Error('Не могу проитерироваться: undefined или null')
  }
  
  let context = this
  
  let obj = Object(this)
  
  if (arguments.length > 1) {
    context = thisArgs
  }
  
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function')
  }
  
  let len = obj.length
  
  let res = [];
  
  for(let i = 0; i < len; i++) {
    
     if(i in obj) {
       
       let cur = this[i]
       
     if (callback.call(context, cur, i, obj)) {
       res.push(cur)
     }
   }
    
  }
  
  return res;
  
}


// Полифил Map

Array.prototype.map2 = function(callback, thisArgs) {
  if(this == null) {
    throw new Error('Не могу проитерироваться: undefined или null')
  }
  
  let context = this
  
  let obj = Object(this)
  
  if (arguments.length > 1) {
    context = thisArgs
  }
  
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function')
  }
  
  let len = obj.length
  
  let newArray = []
  
  let res = [];
  
  let i = 0
  
  while (i < len) {
    
    if (i in obj) {
     newArray[i] = callback.call(context, this[i], i, obj)
    }
    
    i++
    
  }
  
  return newArray;
  
}

console.log(arr.map2)
    