jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/weapon.js");
jest.dontMock("../js/model/player");
jest.dontMock("../js/model/weapon-feature");


describe("Soldier", function() {
  describe(".venomStrikes", function() {
    it("should return the correct statement", function() {
      var Player = require("../js/model/player");
      var Soldier = require("../js/model/soldier");
      var Weapon = require("../js/model/weapon");
      var Civilian = require("../js/model/civilian");
      var WeaponFeature = require("../js/model/weapon-feature");

      var feature = WeaponFeature.all();

      var weapon = new Weapon("电光毒龙钻", 3, feature[0]);

      var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.venomStrikes(civilian);

      var str = "战士张三用电光毒龙钻攻击了普通人李四，李四受到了20点伤害，李四中毒了，生命值还剩：80" + "\n" +
      "李四受到了3点毒液伤害，李四生命值还剩：77";
      expect(result).toBe(str);
    });
  });
});
