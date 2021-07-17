/**
 * 关于泛型的理解
 **/

// 目的：函数可重用

// 与any类型区别

function identity(arg: any): any {
  return arg;
}

/***
 *
 *说明：
 *使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：
 *传入的类型与返回的类型应该是相同的。
 *如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
 */

/**
*
* 使用泛型：确保使返回值的类型与传入参数的类型是相同的
*/

function identityT<T>(arg: T): T {
  return arg;
}

// 调用1
// 这里我们明确的指定了T是string类型，并做为一个参数传给函数
let output1 = identityT<string>("myString"); 

// 调用2
// 利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output2 = identityT("myString");

/*******************************************/
// 泛型约束
// 背景
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
// 我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
// 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型
// 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性
// 为此，我们需要列出对于T的约束要求。泛型约束

// 实现

interface Lengthwise {
  length: number;
}

function loggingIdentityRulr<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentityRulr(3) // error 类型“number”的参数不能赋给类型“Lengthwise”的参数
loggingIdentity({length: 10, value: 3});