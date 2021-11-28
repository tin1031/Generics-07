// extends로 타입을 추가
// string | number 는 유니온 타입
// 아래 T 는 string과 number만 들어갈 수 있게 됨
class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends('namee');
new PersonExtends(33);
// new PersonExtends(true);