var Pk = require("./model/pk.js");
var Weapon = require("./model/weapon.js");
var Armor = require("./model/armor.js");
var Soldier = require("./model/soldier.js");
var Civilian = require("./model/civilian.js");
var WeaponFeature = require("./model/weapon-feature.js");

game();

function game() {
  var feature = WeaponFeature.all();

  var weapon = new Weapon("火箭", 3, feature[1]);
  var armor = new Armor("荆棘之甲", 3);

  var soldier = new Soldier("张三", 100, 10, "战士", 0, weapon, armor);

  var civilian = new Civilian("李四", 100, 5, "普通人", 0);

  Pk.startPk(soldier, civilian);
}
