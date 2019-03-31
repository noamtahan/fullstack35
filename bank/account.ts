class Account {

    public constructor(balance: number) {
        this._balance = balance;
        alert(this._balance);
    }
    private _balance: number;

    get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): number {
        this._balance += amount;
        return this._balance;
    }


    public withdraw(amount: number): number {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
            alert("LO");
        }
        return this._balance;
    }

}


class Person {

    private _balance : number;
    public fullName: string;
    public account: Account = new Account(15);


    public constructor(balance: number) {
        this._balance = balance;
        this.fullName = "Noam";
        alert(this._balance);
    }
    
    get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): number {
        this._balance += amount;
        return this._balance;
    }


    public withdraw(amount: number): number {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
            alert("LO");
        }
        return this._balance;
    }

}
