// 배열을 받겠다는 표시
function helloArray<T>(message: T[]): T {
    return message[0];
    // T 배열로 들어온 0번째 요소(T 요소 자체)리턴
}

helloArray(['hello', 'world']);
helloArray(['hello', 5]);
// 문장 마지막에 .을 찍으면 문자열과 넘버의 조합에서 나오는 함수가 나옴


function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(['hello', 'world']);
helloTuple(['hello', 5]);


// 배열 형태면 배열, 튜플이면 튜플로 지정해야 좋다.