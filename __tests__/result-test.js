jest.dontMock("../js/model/result.js");

describe("Result", function() {
  describe(".getResult", function() {
    it("should return 李四被打败了", function() {
      var Result = require("../js/model/result.js");

      var playerOne = {name : "张三", hp : 100, attack : 20, profession : '战士'};
      var playerTwo = {name : "李四", hp : 100, attack : 10, profession : '普通人'};

      var weapon = {name : '无尽之刃', attack : 5};
      var armor = {name : '荆棘之甲', defense : 3};


      var result = Result.getScore(playerOne, playerTwo, weapon, armor);

      expect(result).toBe(
      "战士张三用无尽之刃攻击了普通人李四,普通人李四受到了25点伤害,普通人李四生命值还剩75\n" +
      "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩93\n" +
      "战士张三用无尽之刃攻击了普通人李四,普通人李四受到了25点伤害,普通人李四生命值还剩50\n" +
      "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩86\n" +
      "战士张三用无尽之刃攻击了普通人李四,普通人李四受到了25点伤害,普通人李四生命值还剩25\n" +
      "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩79\n" +
      "战士张三用无尽之刃攻击了普通人李四,普通人李四受到了25点伤害,普通人李四生命值还剩0\n" +
      "普通人李四被打败了！");
    });
  });
});
