var Soldier = require("./soldier.js");
var Civilian = require("./civilian.js");

function Pk() {
}

Pk.startPk = function (soldier,civilian) {
  var resultText = "";
  var features = soldier.weapon.feature;

  while(true){
    if(soldier.hp <= 0) {
      resultText += soldier.name + "被打败了！！！";
      break;
    }
    this.getAttackMethod(features, soldier, civilian);

    if(civilian.hp <= 0) {
      resultText += civilian.name + "被打败了！！！";
      break;
    }
    if(civilian.state === 0) {
      civilian.civilianBeat(soldier, soldier.armor);
    }
  }
  console.log(resultText);
};

Pk.getAttackMethod = function (feature, soldier, civilian) {
  if(feature.name === '致命一击') {
    return soldier.criticalStrikes(civilian);
  }

  if(feature.name === '火') {
    return soldier.fireStrikes(civilian);
  }

  if(feature.name === '毒') {
    return soldier.venomStrikes(civilian);
  }

  if(feature.name === '晕') {
    return soldier.dizzyStrikes(civilian);
  }

  if(feature.name === '冰') {
    return soldier.iceStrikes(civilian);
  }
};

module.exports = Pk;
