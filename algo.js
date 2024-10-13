// 692. Top K Frequent Words



// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.







/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
    let map = new Map()

    for(let word of words){

        if(map.has(word)){

            let count = map.get(word)
            map.set(word, count+1)
        }else{
            map.set(word, 1)
        }
    }

    const sortedWords = [...map.entries()].sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]); // Sort alphabetically if frequencies are the same
        } else {
            return b[1] - a[1]; // Sort by frequency in descending order
        }
    });

    let results = [];
    for (let i = 0; i < k; i++) {
        results.push(sortedWords[i][0]); // Push the word, not the frequency
    }

    return results;
};