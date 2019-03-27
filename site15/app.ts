class Person {
    public fullName: string
    public age: number;

    public print(): void {
        console.log(`${this.fullName} is ${this.age} years old`);
    }

    public Age(): number {
        return this.age ;
    }

} 


let person1: Person = new Person ();
let person2: Person = new Person ();


person1.fullName = "Anna Karp";
person1.age = 18;
person1.print();

person1.


person2.fullName = "Gil Wax";
person2.age = 20;
person2.print();





