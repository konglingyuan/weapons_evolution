function State() {
}

State.fireState = function(player, weapon, count) {
  var fireHarm = weapon.attack;
  var resultText = "";

  if(count < 2 && count >= 0) {
    player.hp = player.hp - fireHarm;
    resultText += player.profession + player.name +
      "受到了" + fireHarm + "点火焰伤害，" + player.name + "生命值还剩：" + player.hp;
  }
  if(count >= 2) {
    fireHarm += weapon.attack;
    player.hp = player.hp - fireHarm;

    resultText += player.profession + player.name +
      "受到了" + fireHarm + "点火焰伤害，" + player.name + "生命值还剩：" + player.hp;
    count--;
  }

  return resultText;
};

module.exports = State;
