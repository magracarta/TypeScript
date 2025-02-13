"use strict";
// // const a: string = '5';
// // const b = 5;
// // const c: boolean = true;
// // const d: undefined = undefined;
// // const e: null = null;
// // const f: symbol = Symbol.for('abc'); //es2015 문법
// // // const g: bigint = 10000000n; //es2020 문법
// // const h: any = true; //모든 타입이 된다. (자바스크립트와 동일) -> 타입스크립트의 목적은 any를 없에는 것이다.
// // const tr: true = true;
// // const five: 5 = 5;
// // //자스크립트에서 변수 메개변수 리턴값에 타입을 붙여 넣은게 타입스크립트이다.
// // // function add(x: number, y: number): number { return x + y }
// // // type Add = (x:number, y:number) => number;
// // // const add: (x: number, y: number) => number = (x, y) => x + y;
// // // interface ADD{
// // //   (x: number, y: number): Number;
// // // }
// // const arr: string[] = ['123','456'];
// // const arr2: number[] = [123,456];
// // const arr3: Array<number> = [123,456];
// // // type Add = () => number;
// // // interface Minus{};
// // // Array<String>
// // // function add(x: number, y: number) : number;
// // // function add(x, y){
// // //     return x+y;
// // // }
// // //튜플 길이가 고정된 배열
// // const arr4: [ number, number, string] = [123,4546,'hello'];
// // // arr4[3] = "sadf";
// // // arr4.push("kk");
// // const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
// // // function add( x: number, y: number) {
// // //     return x+y;
// // // }
// // // let rusult = add(1,2);
// // let aa = 123;
// // aa ="hello" as unknown as number;
// // // try{
// // //     const array = [];
// // //     array[0];
// // // } catch(error){
// // //     error;
// // // }
// // // const head = document.querySelector("#head");
// // // console.log(head);
// // const head = document.querySelector("#head")!;
// // if(head){
// //     head.innerHTML = "hello world";
// // }
// // //무조건 소문자를 사용해야 한다..
// // // const a:string = 'hello';
// // // const b:STring = "Hell";
// // type World = "world" | "hell";
// // const ww: World =  "world";
// // //type Greeing = "hello world"
// // type Greeting = `hello ${World}`;
// // const cc: Greeting = "hello world";
// // function rest(a: string,...args: string[]){
// //     console.log(args) ;
// // }
// // rest('1','2','3');
// const enum EDirection{
//     Up,
//     Down,
//     Left,
//     Right,
// }
// const ODirection = {
//     Up:0,
//     Down:1,
//     Left:2,
//     Rigt:3
// }as const;
// function walk(dir:EDirection){}
// walk(EDirection.Up);
// const obj = {a:"123",b:"hello", c:"world"} as const;
// //자바스크립트 값은 타입으로 사용할 수 없다. 해서 아래와 같이 typeof를 붙여주고 그안의 key를 꺼내서 만드는 것이다.
// type key = keyof typeof obj;
// //밸류들의 타입만 가져오고 싶다.
// type key2 = typeof obj[keyof typeof obj];
// type ODirection = typeof ODirection[keyof typeof ODirection];
// function walk2(dir:ODirection){}
// walk2(ODirection.Up);
// // const a = EDirection.Up;
// // const c = EDirection.Left;
// type A = {a: string};
// const a:A = {a:"hello"};
// //객체지향 프로그래밍을 하고 싶다면 interface를 사용하면 된다.
// interface B {a: string};
// const b: B = {a: 'hello'};
// // function addd(x: string | number , y: string| number) :string | number {return x+y };
// //union
// // const result: string | number = addd(1,2);
// //값은 number인데 타입스크립트가 string이라고 착각할 수 있다. -> 문제가 생길 수 있음.
// // addd('1','2');
// // addd('1',2);
// // type X = string & number;
// // const x:X = 3;
// type X = {hello : "world"} | {minju : "kim"};
// const x: X = {hello:"world"};
// //상속
// type Animal = {breath : true};
// type mammalia = Animal & { bread :true };
// type Human = mammalia & {think: true};
// const me: Human = {breath: true, bread: true, think: true};
// // interface BB extends AA {
// //     bread:true
// // }
// // const bb: BB = {breath: true, bread:true};
// // const bbtype: Human = {breath: true, bread: true , think : true};
// // interface AA {
// //     breath : true
// // }
// // interface AA {
// //     talk: ()=>void;
// // }
// // interface AA {
// //     eat: ()=>void;
// // }
// // interface AA {
// //     sleep: ()=>void;
// // }
// // const aa:AA = {breath:true, talk(){return null;}, eat(){}, sleep() {},}
// type Animal = {breath : true};
// type Poyouryu = Animal & {breed : true};
// type Human = Poyouryu & {think : true};
// interface A {
//     breath: true;
// }
// interface B extends A {
//     breed: true
// }
// //타입은 간단하게 쓸때
// //인터페이스는 욱여 넣을 수 없기 때문에 
// // 보통은 인터페이스를 사용 (대부분은)
// //타입과 인터페이스를 서로 확장(상속) 및 사용이 가능하다. 그래서 실무에서는 기능적 차이가 많이 다르지 않아 사용할 때 많이 생각 안해도 된다.
// //인터페이스는 오버라이딩 가능
// interface A { 
//     talk : ()=> void;
// }
// interface A { 
//     eat : ()=> void;
// }
// //인터페이스는 서로간의 합쳐져서 사용가능 오버라이딩시 덮어 씌우기가 아닌 내용이 추가되어짐~
// //(talk , eat 모두 들어가져 잇음)
// interface Props { }
// type Type = string | number;
// enum Hello {
//     Left,
//     Right,
// }
// const a : Props = {};
// interface A { a: string }
// const obj1: A = {a:'hello', b:'world'};
// //잉여 속성검사
// //인터페이스 A에는 a 속성 밖에 없다 b를 넣게 되면 오류가 난다.
// const obj = {a:'hello', b:'world'};
// const obj2 : A = obj;
// // 하지만 변수로 우회해서 넣게 될 경우 오류가 나지 않는다.
// interface Human{
//     talk: ()=> void;
// }
// const human : Human ={
//     talk(){return 'abc';}
// }
// function a():void {
// }
//하지만 interface안의 메소드에 return 값을 void로 넣었을 때는 왜 return 값을 다른 타입으로 삽입해도 괜찮은 가?
