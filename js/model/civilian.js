function Civilian(name, hp, attack) {
  Player.call(this, name, hp, attack);
}

Civilian.prototype = Object.create(Player.prototype);
Civilian.prototype.constructor = Civilian;

Civilian.prototype.beatCivilian = function(palyer) {

};
