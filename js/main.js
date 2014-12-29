var Result = require("./result.js");
var Player = require("./player.js");
var Weapon = require("./weapon.js");
var Armor = require("./armor.js");

game();
function game() {
  var playerOne = new Player("张三", 100, 20,'战士');
  var playerTwo = new Player("李四", 100, 10,'普通人');

  var weapon = new Weapon('无尽之刃',5);
  var armor = new Armor('荆棘之甲',3);

  Result.getScore(playerOne, playerTwo,weapon,armor);
}
