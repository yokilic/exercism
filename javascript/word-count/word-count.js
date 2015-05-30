var Words = function (input) {
    var slicedStringArray = input.split(/[ ]+|\n|\t/);
    var StringObj = {};

    for (var i = 0; i < slicedStringArray.length; i++) {
        if (i == 0) {
            StringObj[slicedStringArray[i]] = 1;

        } else if (typeof(StringObj[slicedStringArray[i]]) != "number") {
            StringObj[slicedStringArray[i]] = 1;
        } else {

            StringObj[slicedStringArray[i]]++;
        }
    }
    return StringObj;
};

module.exports = Words;

