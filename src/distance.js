import toRadiance from './toRadiance';

export default function (position1, position2) {
  Number.prototype.toRad = toRadiance;
  const lat1 = position1.lat;
  const lat2 = position2.lat;
  const lng1 = position1.lng;
  const lng2 = position2.lng;
  const R = 6371000;
  const φ1 = lat1.toRad();
  const φ2 = lat2.toRad();
  const Δφ = (lat2 - lat1).toRad();
  const Δλ = (lng2 - lng1).toRad();
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

