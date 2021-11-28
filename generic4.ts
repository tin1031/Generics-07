// 타입 알리아스
type HelloFunctionGeneric1 = 
    <T>(message: T) => T;

const HelloFunction1: HelloFunctionGeneric1 
    = <T>(message: T): T => {
        return message;
    }


// 인터페이스
interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

const HelloFunction2: HelloFunctionGeneric2
    = <T>(message: T): T => {
        return message;
    }


// 함수의 타입에 제네릭을 추가하는 것