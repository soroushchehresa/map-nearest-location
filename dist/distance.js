'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (position1, position2) {
  Number.prototype.toRad = _toRadiance2.default;
  var lat1 = position1.lat;
  var lat2 = position2.lat;
  var lng1 = position1.lng;
  var lng2 = position2.lng;
  var R = 6371000;
  var φ1 = lat1.toRad();
  var φ2 = lat2.toRad();
  var Δφ = (lat2 - lat1).toRad();
  var Δλ = (lng2 - lng1).toRad();
  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

var _toRadiance = require('./toRadiance');

var _toRadiance2 = _interopRequireDefault(_toRadiance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;