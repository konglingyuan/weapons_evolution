var Player = require("./player");
var Soldier = require("./soldier");
var Armor = require("./armor.js");

function Civilian(name, hp, attack, profession, state) {
  Player.call(this, name, hp, attack, profession, state);
}

Civilian.prototype = Object.create(Player.prototype);
Civilian.prototype.constructor = Civilian;

Civilian.prototype.civilianBeat = function(soldier,armor) {
  var armorHarm = this.attack - armor.defense;

  soldier.hp = soldier.hp - armorHarm;
  var resultText = "";

  resultText += this.profession + this.name + "攻击了" + soldier.profession + soldier.name +
    ',' + soldier.profession + soldier.name + "受到了" + armorHarm +
    "点伤害," + soldier.profession + soldier.name + "生命值还剩" + soldier.hp;

  console.log(resultText);
  return resultText;
};

module.exports = Civilian;
