exports.parallel = function (array) {

    var EventEmitter = require('events').EventEmitter,
        event = new EventEmitter(),
        resultArray = [],
        errorArray = [];

    //Arguments Length is Always Two
    if (arguments.length != 2) {
        throw "First Argument Should be Array of Function and Second should be Callback"
    }

    //Check Function Validation
    if (typeof array != "object") {
        console.log(typeof arguments[x]);
        throw "Arguments Should be Array Type Only";
    }

    //Check Function Validation
    for (var x = 0; x < array.length; x++) {
        if (typeof array[x] != "function") {
            console.log(typeof array[x]);
            throw "Arguments Should be Function Only";
        }
    }

    //Checking Array is Empty
    function isArrayValueUndefined(array) {
        var status = false;
        for (var x = 0; x < array.length; x++) {
            if (typeof array[x] == 'undefined') {
                status = true;
                return status
            }
        }
        return status;
    }

    function done(arrlen, error, result, callback) {

        if (error.length == arrlen
            && result.length == arrlen
            && !isArrayValueUndefined(error)
            && !isArrayValueUndefined(result)) {

            callback(error, result);
        }
    };

    for (var y = 0; y < array.length; y++) {


        (function (h, callback) {
            array[h](function (err, res) {
                errorArray[h] = err;
                resultArray[h] = res;
                done(array.length, errorArray, resultArray, callback);
            });
        })(y, arguments[1]);


    }
};