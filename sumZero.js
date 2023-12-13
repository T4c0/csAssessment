function addToZero(numbers) {
    // Create a set to keep track of numbers seen so far
    const seenNumbers = new Set();

    
    for (const num of numbers) {
        // Check if the complement of the current number is in the set
        if (seenNumbers.has(-num)) {
            return true; 
        }

        // Add the current number to the set
        seenNumbers.add(num);
    }

    return false; // If no pair is found, return false
}

// Examples
console.log(addToZero([]));            
console.log(addToZero([1]));           
console.log(addToZero([1, 2, 3]));      
console.log(addToZero([1, 2, 3, -2]));  

// Runtime comment: The runtime of this code is O(n),
// where n is the length of the input array.
// The loop iterates through the array once,
// and set operations are generally constant time on average.
