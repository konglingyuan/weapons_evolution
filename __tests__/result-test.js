jest.dontMock("../js/result.js");

describe("Result", function() {
  describe("#getResult", function() {
    it("should return 李四被打败了", function() {
      var Result = require("../js/result.js");

      var playerOne = {name : "张三", hp : 100, attack : 20};
      var playerTwo = {name : "李四", hp : 100, attack : 10};

      var result = Result.getScore(playerOne, playerTwo);

      expect(result).toBe(
      "张三攻击了李四,李四受到了20点伤害,李四生命值还剩80\n" +
      "李四攻击了张三,张三受到了10点伤害,张三生命值还剩90\n" +
      "张三攻击了李四,李四受到了20点伤害,李四生命值还剩60\n" +
      "李四攻击了张三,张三受到了10点伤害,张三生命值还剩80\n" +
      "张三攻击了李四,李四受到了20点伤害,李四生命值还剩40\n" +
      "李四攻击了张三,张三受到了10点伤害,张三生命值还剩70\n" +
      "张三攻击了李四,李四受到了20点伤害,李四生命值还剩20\n" +
      "李四攻击了张三,张三受到了10点伤害,张三生命值还剩60\n" +
      "张三攻击了李四,李四受到了20点伤害,李四生命值还剩0\n" +
      "李四被打败了！");
    });
  });
});
