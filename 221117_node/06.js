let list = ['apple', 'banana'];
[item1, item2]= list;
// let item1 = list[0];
// let item2 = list[1];
// let item3 = list[2];
console.log( item1 );
console.log( item2 );

[item1, item2 = 'peach', item3='orange']=list;
//없으면 피치로 대체해라 있으면 안바뀜
//없으니까 오렌지로 들어감
console.log( item1 );
console.log( item2 );
console.log( item3 );


let obj = {
    a: 'one',
    b: 'two',
    c : '1',
   
};
let { a, b ,c = 'three' } = obj;
console.log( a );
console.log( b );
console.log( c );





//전개연산자
//  ...이 전개 연산자, 간단히말해 나머지 애들을 가져온다. ...rest

