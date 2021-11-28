// T 외에 U, K도 사용할 수 있고 이 각각은 함수 안에서 유효한 제네릭

function helloBasic<T>(message: T): T{
    return message;
}


// 사용하는 방법 1
// 함수에서 사용할 제네릭 타입을 직접 지정

helloBasic<string>('dd');

// <T>안에 넣을 문법을 지정
// T로 지정한 게 아니면 제한이 걸린다


// 사용하는 방법 2
// 지정하지 않고 호출하면서 값을 넣는다

helloBasic(33);

// 추론 규정에 따라 T 자체는 33이 된다
// 타입 스크립트는 가장 좁은 범위에 타이핑을 추론



// 갯수를 늘릴 경우
function helloBasic2<T, U>(message: T, comment: U): T{
    return message;
}
helloBasic2<string, number>("dd", 33);
helloBasic2(33, 32);

