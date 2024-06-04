/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, object) {
    // 1. Turn sentence string into an array of words.
    let words = sentence.split(' ');

    // 2. Iterate through each word element in the array (each word)...
    words.forEach((word, index) => {
        // 3. Iterate through each key string in the object...
        for (key in object) {
            let callback = object[key];

            // 4. Check if the current key string is included in the current element...
            if (word.includes(key)) {
                // 5. Mutate the current element by reassigning it's value to the return value of passing the word element through the callback function value.  Also "break" out of the object for loop to prevent replacing the already replaced word if it includes both key strings.
                words[index] = callback(word);
                break;
            }
        }
    });

    return words.join(' ');
};




let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = suffixCipher;
