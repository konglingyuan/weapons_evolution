jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/player");

describe("Civilian", function() {
  describe(".civilianBeat", function() {
    it("should return the correct statement", function() {
      var Soldier = require("../js/model/soldier");
      var Civilian = require("../js/model/civilian");

      var armor = {name : '荆棘之甲', defense : 3};
      var soldier = new Soldier("张三", 100, 10, "战士", 0, "", armor);
      var civilian = new Civilian("李四", 100, 5, "普通人", 0);

      var result = civilian.civilianBeat(soldier,armor);
      var str = "普通人李四攻击了战士张三,战士张三受到了2点伤害,战士张三生命值还剩98";

      expect(result).toBe(str);
    });
  });
});
