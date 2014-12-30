var Civilian = require("./civilian");
var Weapon = require("./weapon");
var Player = require("./player");

function Soldier(name, hp, attack, weapon, armor) {
  Player.call(this, name, hp, attack);
  this.weapon = weapon;
  this.armor = armor;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.soldierAttack = function(player) {
  var attackHarm = (this.attack + this.weapon.attack)*3;

  player.hp = player.hp - attackHarm;

  var soldier = "战士" + this.name;

  var resultText = soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + ',' +
  soldier + "发动了" + this.weapon.feature + "," +
  player.name + "受到了" + attackHarm + "点伤害," + player.name + "生命值还剩：" + player.hp;

  return resultText;
};

module.exports = Soldier;
