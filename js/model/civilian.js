var Player = require("./player");
var Soldier = require("./soldier");
var Armor = require("./armor.js");

function Civilian(name, hp, attack) {
  Player.call(this, name, hp, attack);
}

Civilian.prototype = Object.create(Player.prototype);
Civilian.prototype.constructor = Civilian;

Civilian.prototype.beatCivilian = function(soldier,armor) {

  var armorHarm = this.attack - armor.defense;
  soldier.hp = soldier.hp - armorHarm;

  var resultText = "";

  resultText += "普通人" + this.name + "攻击了战士" + soldier.name + ',战士' +
  soldier.name + "受到了" + armorHarm + "点伤害,战士" + soldier.name + "生命值还剩" + soldier.hp

  return resultText;
};

module.exports = Civilian;
