var async = require('./parallelRun');

async.parallel([function (callback) {
    setTimeout(function () {
        callback(null, 'First Method');
    }, 5000);
}, function (callback) {
    setTimeout(function () {
        callback(null, 'Second Method');
    }, 2000);
}, function (callback) {
    setTimeout(function () {
        callback(null, 'Third Method');
    }, 7000);

}], function (err, result) {
    console.log(err);
    console.log(result);
});