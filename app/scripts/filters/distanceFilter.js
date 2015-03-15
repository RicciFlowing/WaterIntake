angular.module('waterintakeApp').filter('distance', function () {
return function (input) {
    if (input >= 1000) {
        return (input/1000).toFixed(3) + ' km';
    } else {
        return input + ' m';
    }
}
});
