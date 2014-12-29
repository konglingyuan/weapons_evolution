var Result = require("./result.js");
var Player = require("./player.js");
game();
function game() {
  var playerOne = new Player("张三", 100, 20);
  var playerTwo = new Player("李四", 100, 10);

  Result.getScore(playerOne, playerTwo);
}
