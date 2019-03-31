var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "nickName", {
        get: function () {
            return this._nickName;
        },
        set: function (nickname) {
            this._nickName = nickname;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
