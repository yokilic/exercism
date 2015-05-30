//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

    if (/[a-z0-9]\?$/g.test(input)) {
        return "Sure.";
    }if (/\b([A-Z])+\b(\?|!)/g.test(input) || ((/\B[^a-z0-9]\D/g.test(input)&&!/[a-z\xdc]/g.test(input)))) {
        return "Whoa, chill out!"
    }
    else {
        return "Whatever."
    }
};

module.exports = Bob;
