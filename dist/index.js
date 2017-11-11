'use strict';

var _distance = require('./distance');

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (latLng, locations) {
  var closestDistance = (0, _distance2.default)(latLng, locations[0]);
  var closest = locations[0];
  for (var i = 1; i < locations.length; i++) {
    var dis = (0, _distance2.default)(locations[i], latLng);
    if (dis < closestDistance) {
      closestDistance = dis;
      closest = locations[i];
    }
  }
  return {
    location: closest,
    distance: closestDistance
  };
};