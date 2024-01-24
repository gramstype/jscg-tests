// Credit: https://javascript.info/closure

function makeCounter() {
    let count = 0;
  
    return s = function() {
      return count++;
    };
  }
  
let counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2