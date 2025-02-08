"use strict";
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;
const f = Symbol.for('abc'); //es2015 문법
const g = 10000000n; //es2020 문법
const h = true; //모든 타입이 된다. (자바스크립트와 동일) -> 타입스크립트의 목적은 any를 없에는 것이다.
//자스크립트에서 변수 메개변수 리턴값에 타입을 붙여 넣은게 타입스크립트이다.
// function add(x: number, y: number): number { return x + y }
// type Add = (x:number, y:number) => number;
// const add: (x: number, y: number) => number = (x, y) => x + y;
// interface ADD{
//   (x: number, y: number): Number;
// }
const arr = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456];
//튜플 길이가 고정된 배열
const arr4 = [123, 4546, 'hello'];
const obj = { lat: 37.5, lon: 127.5 };
