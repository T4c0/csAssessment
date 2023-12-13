function isPangram(sentence) {
    // Create a set to keep track of unique letters in the sentence
    const seenLetters = new Set();

    
    for (const char of sentence.toLowerCase()) {
        // Check if the character is an alphabet letter
        if (/[a-z]/.test(char)) {
            // Add the lowercase letter to the set
            seenLetters.add(char);
        }
    }

    // Check if the set has all 26 alphabet letters
    return seenLetters.size === 26;
}

// Runtime comment: The runtime of this code is O(n), where n is the length of the input sentence. The loop iterates through each character once, and set operations are generally constant time on average.
