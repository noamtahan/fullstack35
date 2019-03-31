class Person {
    public fullName: string
    private _age: number;
    private _nickName: string;


    set age(age: number) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set nickName(nickname: string) {
        this._nickName = nickname;
    }

    get nickName() {
        return this._nickName;
    }





}
