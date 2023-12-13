function findLongestWord(words) {
    let longestLength = 0;

    // Iterate through each word in the list
    for (const word of words) {
        // Update the longest length if the current word is longer
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}

// Example
console.log(findLongestWord(["hi", "hello"])); // -> 5


// Runtime comment: The runtime of this code is O(n),
//where n is the length of the input word.
//The loop iterates through each character once,
//and set operations are generally constant time on average.