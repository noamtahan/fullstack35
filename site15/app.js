var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function () {
        console.log(this.fullName + " is " + this.age + " years old");
    };
    Person.prototype.Age = function () {
        return this.age;
    };
    return Person;
}());
var person1 = new Person();
var person2 = new Person();
person1.fullName = "Anna Karp";
person1.age = 18;
person1.print();
person2.fullName = "Gil Wax";
person2.age = 20;
person2.print();
