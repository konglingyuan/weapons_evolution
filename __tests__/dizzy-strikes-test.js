jest.dontMock("../js/model/soldier.js");
jest.dontMock("../js/model/civilian.js");
jest.dontMock("../js/model/weapon.js");
jest.dontMock("../js/model/player");
jest.dontMock("../js/model/weapon-feature");


describe("Soldier", function() {
    describe(".dizzyStrikes", function() {
        var Player = require("../js/model/player");
        var Soldier = require("../js/model/soldier");
        var Weapon = require("../js/model/weapon");
        var Civilian = require("../js/model/civilian");
        var WeaponFeature = require("../js/model/weapon-feature");

        it("should return the correct statement", function() {

            var feature = new WeaponFeature("晕", 2, 1);

            var count = feature.count - 1;

            var weapon = new Weapon("无敌大晕锤", 3, feature);

            var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

            var civilian = new Civilian("李四", 100, 10);

            var result = soldier.dizzyStrikes(civilian);

            var str = "战士张三用无敌大晕锤攻击了普通人李四，李四受到了20点伤害，李四晕倒了，生命值还剩：80" + "\n" +
                "李四晕倒了，无法攻击，眩晕还剩：" + count + "轮" + "\n" +
                "战士张三用无敌大晕锤攻击了普通人李四，李四受到了20点伤害，李四晕倒了，生命值还剩：60";
            expect(result).toBe(str);
        });
        it("should return the correct statement", function() {
            var feature = new WeaponFeature("晕", 2, 0);

            var weapon = new Weapon("无敌大晕锤", 3, feature);

            var soldier = new Soldier("张三", 100, 20, weapon, "荆棘之甲");

            var civilian = new Civilian("李四", 100, 10);

            var result = soldier.dizzyStrikes(civilian);

            var str = "战士张三用无敌大晕锤攻击了普通人李四，李四受到了20点伤害，李四生命值还剩：80";
            expect(result).toBe(str);
        });
    });
});
