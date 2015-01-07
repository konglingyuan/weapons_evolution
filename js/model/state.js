function State() {
}

State.continueState = function(player, weapon, count) {
  var fireHarm = weapon.attack;
  var resultText = "";
  if(count < 2 && count >= 0) {
    player.hp = player.hp - fireHarm;
    resultText += player.profession + player.name +
      "受到了" + fireHarm + "点" + weapon.feature.name + "伤害，" + player.name + "生命值还剩：" + player.hp;
  }
  
  if(count >= 2) {
    fireHarm += weapon.attack;
    player.hp = player.hp - fireHarm;
    resultText += player.profession + player.name +
      "受到了" + fireHarm + "点" + weapon.feature.name + "伤害，" + player.name + "生命值还剩：" + player.hp;
  }
  return resultText;
};

State.dizzyState = function(player, count) {
  var resultText = "";
  if(count >= 0) {
    resultText += player.name + "晕倒了，无法攻击，眩晕还剩：" + count + "轮";
    player.state = 1;
  } else {
    player.state = 0;
  }
  return resultText;
};

module.exports = State;
