//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
var isShouting = function(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input;
};

var isQuestion = function(input) {
    return input.charAt(input.length - 1) === '?';
};

var isSilent = function(input) {
    return /^\s*$/.test(input);
};

if (isSilent(input)) {
    return 'Fine. Be that way!';
}

if (isShouting(input)) {
    return 'Whoa, chill out!';
}

if (isQuestion(input)) {
    return 'Sure.';
}

return 'Whatever.';

};

module.exports = Bob;
