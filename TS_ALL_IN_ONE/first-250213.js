"use strict";
let target = [];
forEach([1, 2, 3], el => target.push(el));
forEach([1, 2, 3], el => { target.push(el); });
const a = {
    talk() { return 3; }
};
const b = a.talk();
//위는 A의 메서드 talk는 void여서 아래 타입으로 들어가는 변수에 talk에 3이 return으로 넣어도 b에서 사용된 메서드 return값에선 오류가 나게된다.
// void 이기 때문에 값을 무시하기 때문
//declare은 타입스크립트에서 "이 함수나 변수가 이미 다른 곳에서 정의되어 있다는 것을 알려주는 키워드"이다. 주로 타입 선언 파일에서 사용되며, 실제로 구현된 코드가 아닌 타입 정보만 제공하는 역할을 한다.
