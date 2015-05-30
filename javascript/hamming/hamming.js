var Hamming = {
    compute: function (firstStrand, secondStrand) {
        var difference = 0;

        if (firstStrand.length != secondStrand.length) {
            throw new Error("DNA strands must be of equal length.");
        } else {
            for (var i = 0; i < firstStrand.length; i++) {
                if (firstStrand[i] != secondStrand[i]) {
                    difference++;
                }

            }
        }
        return difference;
    }
};

module.exports = Hamming;

