var Civilian = require("./civilian");
var Weapon = require("./weapon");
var Player = require("./player");
var WeaponFeature = require("./weapon-feature");

function Soldier(name, hp, attack, weapon, armor) {
  Player.call(this, name, hp, attack);
  this.weapon = weapon;
  this.armor = armor;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.criticalStrikes = function(player) {
  var attackHarm = (this.attack + this.weapon.attack)*3;

  player.hp = player.hp - attackHarm;

  var soldier = "战士" + this.name;

  var resultText = soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + ',' +
  soldier + "发动了" + this.weapon.feature + "," +
  player.name + "受到了" + attackHarm + "点伤害," + player.name + "生命值还剩：" + player.hp;

  return resultText;
};

Soldier.prototype.fireStrikes = function(player) {
  var one = Math.floor(Math.random()*9+0);
  var odd = this.weapon.feature.odds * 10;
  console.log(one);
  var resultText = "";

  var fireHarm = this.weapon.attack;

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if (one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "着火了，生命值还剩：" + player.hp + "\n";

    player.hp = player.hp - fireHarm;
    resultText += player.name + "受到了" + fireHarm + "点火焰伤害，" + player.name + "生命值还剩：" + player.hp;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + ',' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp;

  }

  return resultText;
};

module.exports = Soldier;
