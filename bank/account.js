"use strict";
var Account = /** @class */ (function () {
    function Account(balance) {
        this._balance = balance;
        alert(this._balance);
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        this._balance += amount;
        return this._balance;
    };
    Account.prototype.withdraw = function (amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
        }
        else {
            alert("LO");
        }
        return this._balance;
    };
    return Account;
}());
