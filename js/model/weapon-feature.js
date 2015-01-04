function WeaponFeature(name, count, odds) {
  this.name = name;
  this.count = count;
  this.odds = odds;
}

WeaponFeature.all = function() {
  return [
    new WeaponFeature("毒", 2, 0.4),
    new WeaponFeature("火", 2, 0.4),
    new WeaponFeature("冰", 1, 0.4),
    new WeaponFeature("晕", 2, 0.5),
    new WeaponFeature("致命一击", 1, 0.4)
  ];
};

module.exports = WeaponFeature;
