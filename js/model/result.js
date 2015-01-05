var Player = require("./player");
var Weapon = require("./weapon.js");
var Armor = require("./armor.js");

function Result() {
}

Result.getResult = function(playerOne, playerTwo, weapon, armor) {
  var zhangsan = playerOne.profession + playerOne.name;
  var lisi = playerTwo.profession + playerTwo.name;

  var resultText = "";
  while(true) {
    var attackHarm = playerOne.attack + weapon.attack;
    var armorHarm = playerTwo.attack - armor.defense;

    playerOne.hp = playerOne.hp - armorHarm;
    playerTwo.hp = playerTwo.hp - attackHarm;

    if(playerOne.hp <= 0) {
      resultText += zhangsan + '被打败了！';
      console.log(zhangsan + '被打败了！');
      break;
    }

    resultText += zhangsan + '用' + weapon.name + "攻击了" + lisi + ',' +
    lisi + "受到了" + attackHarm + "点伤害," + lisi + "生命值还剩" + playerTwo.hp + "\n";
    console.log(zhangsan + '用' + weapon.name + "攻击了" + lisi + ',' +
    lisi + "受到了" + attackHarm + "点伤害," + lisi + "生命值还剩" + playerTwo.hp);

    if(playerTwo.hp <= 0) {
      resultText += lisi + '被打败了！';
      console.log(lisi + '被打败了！');
      break;
    }

    resultText += lisi + "攻击了" + zhangsan + ',' +
    zhangsan + "受到了" + armorHarm + "点伤害," + zhangsan + "生命值还剩" + playerOne.hp + "\n";
    console.log(lisi + "攻击了" + zhangsan + ',' +
    zhangsan + "受到了" + armorHarm + "点伤害," + zhangsan + "生命值还剩" + playerOne.hp);

  }

  return resultText;
};

module.exports = Result;
