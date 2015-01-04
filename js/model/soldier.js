var Civilian = require("./civilian");
var Weapon = require("./weapon");
var Player = require("./player");
var WeaponFeature = require("./weapon-feature");

function Soldier(name, hp, attack, weapon, armor) {
  Player.call(this, name, hp, attack);
  this.weapon = weapon;
  this.armor = armor;
  this.count = 0;
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

  var soldier1 = new Soldier(this.name,this.hp,this.attack,this.weapon,this.armor);

  var civilian = new Civilian(player.name, player.hp, player.attack);

  resultText += civilian.civilianBeat(soldier1, this.armor);

  console.log(resultText);
  return resultText;
};

Soldier.prototype.fireStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var resultText = "";

  var soldier = "战士" + this.name;

  player.hp = player.hp - this.attack;

  if(one < odd) {

    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "着火了，生命值还剩：" + player.hp  + "\n";

    this.count =  this.count <= 0 ? 1 : this.count + 1;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp  + "\n";
    this.count--
  }

  var fireHarm = this.weapon.attack;

  if(player.hp > 0) {
    if(this.count < 2 && this.count >= 0) {
      player.hp = player.hp - fireHarm;
      resultText += player.name + "受到了" + fireHarm + "点火焰伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
    }
    if(this.count >= 2) {
      fireHarm += this.weapon.attack;

      player.hp = player.hp - fireHarm;
      resultText += player.name + "受到了" + fireHarm + "点火焰伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
      this.count--;
    }
  }

  if(player.hp > 0) {
    var soldier1 = new Soldier(this.name,this.hp,this.attack,this.weapon,this.armor);

    var civilian = new Civilian(player.name, player.hp, player.attack);

    resultText += civilian.civilianBeat(soldier1, this.armor);

  }

  console.log(resultText);

  return resultText;
};

Soldier.prototype.venomStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;
  var resultText = "";

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if(one < odd) {

    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "中毒了，生命值还剩：" + player.hp  + "\n";

    this.count =  this.count <= 0 ? 1 : this.count + 1;
  } else {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp  + "\n";
    this.count--;
  }

  var fireHarm = this.weapon.attack;

  if(player.hp > 0) {
    if(this.count < 2 && this.count >= 0) {
      player.hp = player.hp - fireHarm;
      resultText += player.name + "受到了" + fireHarm + "点毒液伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
    }
    if(this.count >= 2) {
      fireHarm += this.weapon.attack;

      player.hp = player.hp - fireHarm;
      resultText += player.name + "受到了" + fireHarm + "点毒液伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
      this.count--;
    }
  }

  if(player.hp > 0) {
    var soldier1 = new Soldier(this.name,this.hp,this.attack,this.weapon,this.armor);

    var civilian = new Civilian(player.name, player.hp, player.attack);

    resultText += civilian.civilianBeat(soldier1, this.armor);

  }

  console.log(resultText);

  return resultText;
};

Soldier.prototype.dizzyStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var resultText = "";

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if(one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "晕倒了，生命值还剩：" + player.hp + "\n";

    this.count =  this.count <= 0 ? 1 : this.count + 1;
  } else {
    resultText +=soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
    this.count--;
  }

  if(this.count >= 0) {
    resultText += player.name + "晕倒了，无法攻击，眩晕还剩：" + this.count + "轮";

  } else {
    var soldier1 = new Soldier(this.name,this.hp,this.attack,this.weapon,this.armor);

    var civilian = new Civilian(player.name, player.hp, player.attack);

    resultText += civilian.civilianBeat(soldier1, this.armor);
  }

  console.log(resultText);

  return resultText;
};

Soldier.prototype.iceStrikes = function(player) {
  var one = Math.random();
  var odd = this.weapon.feature.odds;

  var resultText = "";

  player.hp = player.hp - this.attack;

  var soldier = "战士" + this.name;

  if(one < odd) {
    resultText += soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "冻僵了，生命值还剩：" + player.hp + "\n";

    this.count =  this.count <= 0 ? 1 : this.count + 1;
  } else {
    resultText +=soldier + '用' + this.weapon.name + "攻击了普通人" + player.name + '，' +
    player.name + "受到了" + this.attack + "点伤害，" + player.name + "生命值还剩：" + player.hp + "\n";
    this.count--;
  }

  if(this.count === 3) {
    resultText += player.name + "冻得直哆嗦，没有击中" + soldier;

  } else {
    var soldier1 = new Soldier(this.name,this.hp,this.attack,this.weapon,this.armor);

    var civilian = new Civilian(player.name, player.hp, player.attack);

    resultText += civilian.civilianBeat(soldier1, this.armor);
  }

  console.log(resultText);

  return resultText;
};


module.exports = Soldier;
