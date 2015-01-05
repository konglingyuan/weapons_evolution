jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/weapon.js");
jest.dontMock("../js/model/player");
jest.dontMock("../js/model/weapon-feature");

describe("Soldier", function() {
  describe(".criticalStrikes", function() {
    var Player = require("../js/model/player");
    var Soldier = require("../js/model/soldier");
    var Weapon = require("../js/model/weapon");
    var Civilian = require("../js/model/civilian");
    var WeaponFeature = require("../js/model/weapon-feature");

    it("should return the correct statement", function() {
      var feature = new WeaponFeature("致命一击", 1, 1);

      var weapon = new Weapon("暴剑", 3, feature);

      var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.criticalStrikes(civilian);

      var str = "战士张三用暴剑攻击了普通人李四,战士张三发动了致命一击,李四受到了69点伤害,李四生命值还剩：31";
      expect(result).toBe(str);
    });
    
    it("should return the correct statement", function() {
      var feature = new WeaponFeature("致命一击", 1, 0);

      var weapon = new Weapon("暴剑", 3, feature);

      var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.criticalStrikes(civilian);

      var str = "战士张三用暴剑攻击了普通人李四,李四受到了20点伤害,李四生命值还剩：80";
      expect(result).toBe(str);
    });
  });
});
