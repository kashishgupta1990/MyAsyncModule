var async = require('./parallelRun');

async.parallel([function (callback) {
    setImmediate(function () {
        callback(null, 'First Method');
    });
}, function (callback) {
    setImmediate(function () {
        callback(null, 'Second Method');
    });
}, function (callback) {
    setImmediate(function () {
        callback(null, 'Third Method');
    });

}], function (err, result) {
    console.log(err);
    console.log(result);
});