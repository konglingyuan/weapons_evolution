var Civilian = require("./civilian");
var Weapon = require("./weapon");
var Player = require("./player");
var WeaponFeature = require("./weapon-feature");
var Armor = require("./armor");
var State = require("./state");
var _ = require("lodash");

function Soldier(name, hp, attack, profession, state, weapon, armor) {
  Player.call(this, name, hp, attack, profession, state);
  this.weapon = weapon;
  this.armor = armor;
  this.count = 0;
  this.counts = [];
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.criticalStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var attackHarm = (this.attack + this.weapon.attack)*3;

  var resultText = "";


   var soldier = this.profession + this.name;

  if(one < odd) {
    player.hp = player.hp - attackHarm;
    resultText += soldier + '用' + this.weapon.name + "攻击了" +
      player.profession + player.name + ',' +
      soldier + "发动了" + this.weapon.feature.name + "," +
      player.name + "受到了" + attackHarm + "点伤害," + player.name + "生命值还剩：" + player.hp + "\n";

  } else {
    player.hp = player.hp - this.attack;
    resultText += soldier + '用' + this.weapon.name + "攻击了" +
      player.profession + player.name + ',' + player.name + "受到了" +
      this.attack + "点伤害," + player.name + "生命值还剩：" + player.hp + "\n";
  }

  console.log(resultText);
  return resultText;
};

Soldier.prototype.fireStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var resultText = "";

  var soldier = this.profession + this.name;

  player.hp = player.hp - this.attack;

  if(one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "着火了，生命值还剩：" + player.hp  + "\n";

    this.count =  this.count <= 0 ? this.weapon.feature.count - 1 : this.weapon.feature.count;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp  + "\n";
    this.count--;
  }

  if(player.hp > 0) {
    resultText += State.continueState(player, this.weapon, this.count);
  }
  if(this.count >= 2) {
    this.count--;
  }

  console.log(resultText);
  return resultText;
};

Soldier.prototype.venomStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;
  var resultText = "";

  player.hp = player.hp - this.attack;

  var soldier = this.profession + this.name;

  if(one < odd) {

    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "中毒了，生命值还剩：" + player.hp  + "\n";

    this.count =  this.count <= 0 ? this.weapon.feature.count - 1 : this.count + 1;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp  + "\n";
    this.count--;
  }

  if(player.hp > 0) {
    resultText += State.continueState(player, this.weapon, this.count);
  }

  if(this.count >= 2) {
    this.count--;
  }

  console.log(resultText);
  return resultText;
};

Soldier.prototype.dizzyStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;
  var resultText = "";
  var soldier = this.profession + this.name;

  player.hp = player.hp - this.attack;

  if(one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "晕倒了，生命值还剩：" + player.hp + "\n";

    this.count =  this.count <= 0 ? this.weapon.feature.count - 1 : this.count + 1;
  } else {
    resultText +=soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
    this.count--;
  }

  if(player.hp > 0) {
    resultText += State.dizzyState(player, this.count);
  }
  console.log(resultText);
  return resultText;
};

Soldier.prototype.iceStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;
  var resultText = "";
  var _this = this;

  player.hp = player.hp - this.attack;

  var soldier = this.profession + this.name;

  if(one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "冻僵了，生命值还剩：" + player.hp + "\n";
    this.counts.push(0);
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了" + player.profession + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
  }

  if(this.counts.length > 0) {
    this.counts = _.map(_this.counts, function(num) {return num + 1;});
  }

  if(player.hp > 0) {
    resultText += State.iceState(player, this.counts, soldier);
  }

  console.log(resultText);
  return resultText;
};

module.exports = Soldier;
