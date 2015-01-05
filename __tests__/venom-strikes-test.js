jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/weapon.js");
jest.dontMock("../js/model/player");
jest.dontMock("../js/model/weapon-feature");
jest.dontMock("../js/model/armor");

describe("Soldier", function() {
  describe(".venomStrikes", function() {
    var Player = require("../js/model/player");
    var Soldier = require("../js/model/soldier");
    var Weapon = require("../js/model/weapon");
    var Civilian = require("../js/model/civilian");
    var WeaponFeature = require("../js/model/weapon-feature");
    var Armor = require("../js/model/armor");

    it("should return the correct statement", function() {
      var feature =new WeaponFeature("毒", 2, 1);

      var weapon = new Weapon("电光毒龙钻", 3, feature);
      var armor = new Armor("荆棘之甲", 3);

      var soldier = new Soldier("张三", 100, 20, weapon, armor);

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.venomStrikes(civilian);

      var str = "战士张三用电光毒龙钻攻击了普通人李四，李四受到了20点伤害，李四中毒了，生命值还剩：80" + "\n" +
          "李四受到了3点毒液伤害，李四生命值还剩：77" + "\n" +
          "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩93";
      expect(result).toBe(str);
    });

    it("should return the correct statement", function() {
      var feature =new WeaponFeature("毒", 2, 0);

      var weapon = new Weapon("电光毒龙钻", 3, feature);
      var armor = new Armor("荆棘之甲", 3);

      var soldier = new Soldier("张三", 100, 20, weapon, armor);

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.venomStrikes(civilian);

      var str = "战士张三用电光毒龙钻攻击了普通人李四，李四受到了20点伤害，李四生命值还剩：80" + "\n" +
          "普通人李四攻击了战士张三,战士张三受到了7点伤害,战士张三生命值还剩93";
      expect(result).toBe(str);
    });
  });
});
