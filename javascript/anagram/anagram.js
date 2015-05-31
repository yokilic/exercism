var AnagramConst = function (input) {

    // Function to Construct an anagram object
    var anagram = function (inputWord) {
        this.word = inputWord;
    };

    // Method comes with every created anagram object
    anagram.prototype.matches = function () {

        // Declaration of variables to be used
        var wordArray = [];
        var found = [];
        var inputWord = this.word;

        // To check if the incoming arguments object is composed of strings or else an array
        // Converting the incoming arguments to an array each element is a word.
        if (typeof arguments[0] == "string") {
            for (var word in arguments) {
                wordArray.push(arguments[word]);
            }
        } else {
            wordArray = arguments["0"];
        }

        // Converting the word passed when object is created to a char array
        var charArrayOfInputWord = this.word.toUpperCase().split("").sort();

        // Converting the each word in the incoming array to the method to char array and checking if it is not equal to itself
        // and if it is the same length; if so, checking the every char in charArrays and if they are the same pushing the word
        wordArray.forEach(function (wordInArray) {
            var charArrayOfWordInArray = wordInArray.toUpperCase().split("").sort();
            if (charArrayOfWordInArray.length === charArrayOfInputWord.length && wordInArray.toUpperCase() != inputWord.toUpperCase()) {

                for (var i = 0, j = charArrayOfWordInArray.length; i < charArrayOfWordInArray.length; i++) {
                    if (charArrayOfWordInArray[i] != charArrayOfInputWord[i]) {
                        j--;
                    }
                }
                if (j === charArrayOfWordInArray.length) {
                    found.push(wordInArray);
                }
            }
        });
        return found;
    };
    return new anagram(input);
};
module.exports = AnagramConst;
