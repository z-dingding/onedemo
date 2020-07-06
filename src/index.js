// 这个文件是一个 ES6语法 的js文件，稍后，我们尝试把这个 ES6 语法的 js 文件转化为 ES5 的 js 文件。
// PS：我们在写代码时，能用单引号尽量用单引号，而不是双引号，前者在压缩之后，程序执行会更快。



let a = 'smyhvae';
const b = 'qianguyihao';

console.log(a);
console.log(b);





let mySymbol = Symbol('0');
let mySymbol2 = Symbol('1');

let obj = {
    name: 'smyhvae',
    age: 26
};

//obj.mySymbol = 'male'; //错误：不能用 . 这个符号给对象添加 Symbol 属性。
obj[mySymbol] = 'hello';    //正确：通过**属性选择器**给对象添加 Symbol 属性。后面的属性值随便写。
obj[mySymbol2] = 'hello2';    //正确：通过**属性选择器**给对象添加 Symbol 属性。后面的属性值随便写。

console.log(obj);
console.log(obj[mySymbol2]);