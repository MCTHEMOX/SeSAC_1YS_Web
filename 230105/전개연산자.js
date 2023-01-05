// @ts-check

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(...arr);

const copyArr = arr;
console.log(copyArr); //주소까지 카피

console.log(arr === copyArr);
console.log('-------------------------------');

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
const copyArr2 = [...arr2];
console.log(arr2 === copyArr2);

console.log('-------------------------------');

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

console.log({ ...obj });

const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);

console.log('-------------------------------');

// function foo(a, b, ...rest) {
//   rest = { c: 'cc', d: 'dd' };
// }
