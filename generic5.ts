// T 의 유효범위는 클래스 전체에 발생
class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}


new Person("namee", 33);

// T를 미리 스트링으로 정하면 스트링만 들어와야하기에
// 숫자면 에러가 발생(T 하나일 경우)
// new Person<string>("namee");

new Person<string, number>("namee", 33);

// 제네릭을 사용하지 않으면 인자로 추론되고
// 지정하면 지정한 거에 맞는 값인지 인자를 확인

