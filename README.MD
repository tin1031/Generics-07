## Generics, Any와 다른 점 
    any는 모든 걸 받아와 모든 걸 any로 추론하지만
    Generics는 타입으로 된 로직, 연산이 함수 내에서 가능.
    내가 사용하는 것에 따라 타입이 바뀌어진다. - generic1.ts 참조

<br>

## Generics Basic(제네릭 문법)
    generic2.ts 참조

<br>

## Generics Array & Tuple
    함수 안에서 Array나 Tuple 표현하는 방법 - generic3.ts 참조

<br>

## Generics Function
    함수의 타입만 선언하기 - generic4.ts

<br>

## Generics Class
    클래스의 제네릭을 선언하고 사용하기 - generic5.ts 참조

<br>

## Generics with extends
    generic으로 사용할 땐 상속이 아닌 제약의 개념에 가깝다
    - generic6.ts 참조

<br>

## keyof & type lookup system
    keyof와 generic을 이용해 타입을 찾아내고 활용하는 시스템(컴파일의 타입을
    정확히 찾아내는 방식)을 만들기 - generic7.ts 참조

