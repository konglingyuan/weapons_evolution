// 战士张三用火焰剑攻击了普通人李四,李四受到了8点伤害,李四着火了,李四剩余生命：12
// 李四受到2点火焰伤害, 李四剩余生命：10
// //李四进攻
// //张三进攻
// 李四受到2点火焰伤害, 李四剩余生命：x
// //李四进攻
jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/weapon.js");
jest.dontMock("../js/model/player");
jest.dontMock("../js/model/weapon-feature");


describe("Soldier", function() {
  describe(".fireStrikes", function() {
    it("should return the correct statement", function() {
      var Player = require("../js/model/player");
      var Soldier = require("../js/model/soldier");
      var Weapon = require("../js/model/weapon");
      var Civilian = require("../js/model/civilian");
      var WeaponFeature = require("../js/model/weapon-feature");

      var feature = WeaponFeature.all();

      var weapon = new Weapon("火箭", 3, feature[1]);

      var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

      var civilian = new Civilian("李四", 100, 10);

      var result = soldier.fireStrikes(civilian);

      var str = "战士张三用火箭攻击了普通人李四，李四受到了20点伤害，李四着火了，生命值还剩：80" + "\n" +
         "李四受到了3点火焰伤害，李四生命值还剩：77";
      expect(result).toBe(str);
    });
  });
});
