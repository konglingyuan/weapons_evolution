jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/player");

describe("Civilian", function() {
  describe(".Civilianbeat", function() {
    it("should return the correct statement", function() {
      var Player = require("../js/model/player");
      var Soldier = require("../js/model/soldier");
      var Civilian = require("../js/model/civilian");

      var soldier = new Soldier("张三", 100, 20, "", "荆棘之甲");

      var civilian = new Civilian("李四", 100, 10);

      var armor = {name : '荆棘之甲', defense : 3};

      var result = civilian.Civilianbeat(soldier,armor);

      var str = "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩93"
      expect(result).toBe(str);
    });
  });
});
