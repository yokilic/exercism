var Words = function (input) {
    var slicedStringArray = input.split(/\s+/);
    var StringObj = {};

    for (var i = 0; i < slicedStringArray.length; i++) {

        if (typeof StringObj[slicedStringArray[i]] != "number") {
            StringObj[slicedStringArray[i]] = 1;
        } else {
            StringObj[slicedStringArray[i]]++;
        }
    }
    return StringObj;
};

module.exports = Words;

