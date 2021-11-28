"use strict";
const person = {
    name: "namee",
    age: 33,
};
// type Keys = keyof IPerson;
// const keys: Keys = "age"
// 해당 키는 name 혹은 age를 가지게 된다
// 어떤 객체에 keyof를 붙이면 결과물이 type로 나오는데 해당 type은
// IPerson의 이름으로 된 문자열의 유니온 타입으로 만들어진다.
// 위의 값을 얻어오거나 바꿀 수 있는 함수
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"] 의 유니온 타입으로 나온다.
// => string | number의 유니온 타입
// name이 무조건 string으로 들어온다는 보장이 없어
// IPerson과 keyof IPerson 둘의 관계를 특정한 관계로 타입 지정 해야한다
function getProp(obj, key) {
    return obj[key];
}
// T에 K를 지정하면 해당 자리가 name 혹은 age 둘 중 하나를 변수로 지정 가능
getProp(person, 'name');
// value는 바꿀 값
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "age", 333);
