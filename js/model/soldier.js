function Soldier(name, hp, attack, weapon, armor) {
  Player.call(this, name, hp, attack, weapon, armor);
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Civilian;
