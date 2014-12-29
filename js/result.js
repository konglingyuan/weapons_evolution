var Player = require("./player");

function Result() {

}

Result.getScore = function(playerOne, playerTwo) {
  var zhangsan = playerOne.name;
  var lisi = playerTwo.name;
  var resultText = "";
  while(true) {
    playerOne.hp = playerOne.hp - playerTwo.attack;
    playerTwo.hp = playerTwo.hp - playerOne.attack;

    if(playerOne.hp <= 0) {
      resultText += zhangsan + '被打败了！';
      console.log(zhangsan + '被打败了！');
      break;
    }

    resultText += zhangsan + "攻击了" + lisi + ',' +
    lisi + "受到了" + playerOne.attack + "点伤害," + lisi + "生命值还剩" + playerTwo.hp + "\n";
    console.log(zhangsan + "攻击了" + lisi + ',' +
    lisi + "受到了" + playerOne.attack + "点伤害," + lisi + "生命值还剩" + playerTwo.hp);

    if(playerTwo.hp <= 0) {
      resultText += lisi + '被打败了！';
      console.log(lisi + '被打败了！');
      break;
    }

    resultText += lisi + "攻击了" + zhangsan + ',' +
    zhangsan + "受到了" + playerTwo.attack + "点伤害," + zhangsan + "生命值还剩" + playerOne.hp + "\n";
    console.log(lisi + "攻击了" + zhangsan + ',' +
    zhangsan + "受到了" + playerTwo.attack + "点伤害," + zhangsan + "生命值还剩" + playerOne.hp);

  }

  return resultText;
};

module.exports = Result;
