//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

    if (!(/[A-Z]+(?=[^a-z])/g.test(input) && !/[a-z]/g.test(input)) && /[A-z0-9]\?$/g.test(input)) {
        return "Sure.";
    }if ((/[A-Z]+(?=[^a-z])/g.test(input) && !/[a-z\xdc]/g.test(input)) || (/\xdc/g.test(input) && /!/g.test(input))) {
        return "Whoa, chill out!"
    } else if (!/[A-z0-9]/g.test(input)) {
        return "Fine. Be that way!";
    }
    else {
        return "Whatever."
    }
};

module.exports = Bob;
