function hasUniqueChars(word) {
  // Create a set to keep track of characters seen so far
  const seenChars = new Set();

  
  for (const char of word) {
    
    if (seenChars.has(char)) {
      return false; 
    }

    
    seenChars.add(char);
  }

  return true; 
}


console.log(hasUniqueChars("Monday")); 
console.log(hasUniqueChars("Moonday")); 

// Runtime comment: The runtime of this code is O(n),
//where n is the length of the input word.
//The loop iterates through each character once,
//and set operations are generally constant time on average.
