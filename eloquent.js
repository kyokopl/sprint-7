// Minimum:

function min(x, y) {
    if (x < y) return x; 
      else return y;
    }

// Recursion:

function isEven(num) {
    if (num == 0) return true;
     else if (num == 1) return false;
     else if (num < 0) isEven(-num);
     else return isEven(num-2);
   }

// Bean counting:
// Part 1:

function countBs(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
    if (string[i] == "B"){
    count += 1;
    }
  }
   return count;
  }

//Part B (updated code):

function countChar(string, ch) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        count += 1;
      }
    }
    return count;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
