function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 같은 로직을 반복하는 함수을 해결하기 위해
// 모든 타입을 받을 수 있는 걸(any) 인자로 받고 return


function hello(message: any): any {
    return message;
}

console.log(hello('tt').length);
console.log(hello(33).length);

// 문자열에서 사용할 수 있는 length 조차 any가 됨
// 컴파일에선 문제 없으나 결과에선 undefined가 뜬다


function helloGeneric<T>(message: T){ // Type의 T
    return message;
}
// 문자를 출력하면 위의 함수 안에선 T를 string 처럼 사용

console.log(helloGeneric('tt').length);
console.log(helloGeneric(33));
// 결과가 33으로 추론돼 숫자형에서 사용할 수 있는 함수가 나옴
// length를 사용할 수 없게 된다(number에선 length를 사용못하기에)

console.log(helloGeneric(true))
// 결과를 보면 T가 모두 true로 바뀐다
// T를 변수처럼 사용 가능

