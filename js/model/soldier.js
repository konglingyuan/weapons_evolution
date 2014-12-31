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
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var attackHarm = (this.attack + this.weapon.attack)*3;

  var soldier = "战士" + this.name;
  var resultText = "";

  if(one < odd) {
    player.hp = player.hp - attackHarm;
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + ',' +
        soldier + "发动了" + this.weapon.feature.name + "," +
        player.name + "受到了" + attackHarm + "点伤害," + player.name + "生命值还剩：" + player.hp;

  } else {
    player.hp = player.hp - this.attack;
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + ',' +
        player.name + "受到了" + this.attack + "点伤害," + player.name + "生命值还剩：" + player.hp;
  }
  console.log(resultText);
  return resultText;
};

Soldier.prototype.fireStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

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
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp;

  }
  console.log(resultText);

  return resultText;
};

Soldier.prototype.venomStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;
  var resultText = "";

  var fireHarm = this.weapon.attack;

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if (one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "中毒了，生命值还剩：" + player.hp + "\n";

    player.hp = player.hp - fireHarm;
    resultText += player.name + "受到了" + fireHarm + "点毒液伤害，" + player.name + "生命值还剩：" + player.hp;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp;

  }
  console.log(resultText);

  return resultText;
};

Soldier.prototype.dizzyStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var resultText = "";

  var count = this.weapon.feature.count - 1;

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if (one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "晕倒了，生命值还剩：" + player.hp + "\n";

    resultText += player.name + "晕倒了，无法攻击，眩晕还剩：" + count + "轮" + "\n";
    player.hp = player.hp - this.attack;

    if(player.hp > 0) {
      resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
      player.name + "受到了" + this.attack + "点伤害，" + player.name + "晕倒了，生命值还剩：" + player.hp ;
    }

  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp;

  }
  console.log(resultText);

  return resultText;
};

module.exports = Soldier;
