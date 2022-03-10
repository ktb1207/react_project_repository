### 关于javascript原型

在javascript中，原型也是一个对象，通过原型可以实现对象的属性继承；javascript的对象中，都包含了一个`"[[Prototype]]"`内部属性，这个属性就是所对应的对象的原型。

`"[[Prototype]]"`作为对象内部属性，不能被直接访问，为了方便查看对象的原型，chrome和firefox中提供了一个`__proto__`这个非标准的访问器；

ES5引入了标准对象原型的访问器：Object.getPrototypeOf(Object)

> 1. 实例与构造函数

```js
var a = new String('hello');
```

- 任何一个构造函数，只要被new了以后，就被称为构造函数
- new出来的值被称为实例
- 除箭头函数和匿名函数，任何函数都可以当作构造函数。

> 2. 原型，实例，构造函数之间关系

首先需要记住前面的概念：

- javascript的对象中，都包含了一个`"[[Prototype]]"`内部属性，这个属性就是所对应的对象的原型，即实例同样存在这样一个`"[[Prototype]]"`原型对象
- javascript中，函数都有一个`prototype`属性，在申明一个函数的时候就会有一个`prototype`属性自动创建被初始化一个空对象，也就是原型对象
- 原型对象，中会有一个`constructor`，它默认指向原型对象的原型。

```js
var a = new String('hello');

a.__proto__ === String.prototype===`原型对象`

`原型对象`.construstor = String;

`原型对象`.__proto__ = `上层原型对象的原型`

```

> 3. 实例与constructor

```js
var a = new String('hello');

// a实例本身并不存在constructor属性，但是a.__proto__ === String.prototype === 原型对象
// 而 原型对象.constructor === string

console.log(a.constructor) // String
// 即实例通过原型链查找到了原型对象的constructor，即a.constructor其实为 a.__proto__.constructor
```

> 4. String.prototype.__proto__

String.prototype.__proto__,即范文a实例原型对象的原型，将得到Object{}对象，所有对象的原型都将追溯到"Object {}"对象。

typeof (Object) 返回function类型，既然Object为一个function类型，那么它也存在prototype属性

Object.prototype.__proto__"获取Object原型的原型的时候，将会得到"null"，也就是说"Object {}"原型对象就是原型链的终点了。

> 5. hasOwnProperty

"hasOwnProperty"是"Object.prototype"的一个方法，该方法能判断一个对象是否包含自定义属性而不是原型链上的属性，因为"hasOwnProperty" 是 JavaScript 中唯一一个处理属性但是不查找原型链的函数。

```js
function Parent () {
  this.name = 'name';
}

Parent.prototype.say = function () {
  console.log(123)
}

var child = new Parent();

console.log(child.hasOwnProperty('name')) // true
console.log(child.hasOwnProperty('say')) // false
```

> 6. intanceof

在判断数据类型时候，简单数据类型我们可以使用typeof,但是typeof在判断 null,array,object都将返回object，这使得typeof在判断引用数据类型时不足；

instance运算符，用于通过查找原型链来检测某个`变量`是否为某个`类型`数据的实例

```js
var a = [1,2]
var b = {
  age: 20
}

console.log(a instanceof Array) // true
console.log(b instanceof Object) // true

console.log(a instanceof Array) // true, 

console.log(null instanceof Object) // false

```
intanceof 也存在不足，在上面a数组instanceof Object 返回true, 因为Array的原型也属于Object,Array继承自Object;


因此我们在判断一个变量时数组还是对象时，应该先判断数组类型，然后再去判断对象类型。如果先判断对象，那么数组值也会被判断为对象类型，这无法满足要求。

> 7. constructor判断引用数据类型

```js
var a = [1,2]
var b = {
  age: 20
}

console.log(a.constructor === Array) // true
console.log(a.constructor === Object) // false
console.log(b.constructor === Object) // true
```

constructor不能代替typeof用来判断数据类型，因为简单数据类型使用constructor都会将简单数据类型经过`自动装箱`包装为对应对象数据

```js
var b = 'hello';
console.log(b.constructor) // String()

typeof b // string
```

> 8. 数据类型检查终极Object.prototype.toString.call()

每种引用类型都会直接或者间接继承自Object类型，因此它们都包含toString()函数。不同数据类型的toString()类型返回值也不一样，所以通过toString()函数可以准确判断值的类型。