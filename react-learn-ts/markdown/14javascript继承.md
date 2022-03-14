### 关于javascript中继承的理解

面向对象的三个基本特征：封装、继承、多态。在javascript中，不同于传统的面向对象语言，早期的javascript没有类class的概念，其继承方式主要依赖原型实现继承。

继承注意事项：
- 解决代码复用
- 高耦合
- 组合优于继承

> 1. 原型链继承

依据构造函数constructor、原型对象prototype、实例之间的关系，每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

其本质，重写子类原型对象，赋值为另一个父类的实例对象，子类的实例获得父类的属性和方法

```js
// 父类
function SuperType() {
  this.name = 'hello';
  this.colors = ['red', 'blue'];
}
SuperType.prototype.getName = function() {
  return this.name;
}
// 子类
function SubType () {
  this.age = 18;
}
// 关键，重写子类原型对象
SubType.prototype = new SuperType()
// 子类添加方法
SubType.prototype.getAge = function () {
  return this.age;
}

vra obj1 = new SubType()
vra obj2 = new SubType()

obj1.colors.push('yellow')
console.log(obj1.colors) // red,blue,yellow
console.log(obj2.colors) // red, blue, yellos
```

优点： 
- 父类方法可以被重用

缺点：
- 父类的引用属性会被子类所有实列共享，子类实例对引用属性的修改会相互影响
- 子类构建实例时不能向父类传递参数。

> 2. 借用构造函数

其本质通过使用call/apply,复制父类的实例给子类

```js
function SuperType () {
  this.colors = ['red', 'blue'];
}

function SubType() {
  // 关键，调用父类构造函数，复制父类给子类
  SuperType.call(this)
}

var obj1 = new SubType()
var obj2 = new SubType()

obj1.colors.push('yellow')
console.log(obj1.colors) // red,blue,yellow
console.log(obj2.colors) // red, blue
```

优点：
- 解决了原型链继承中父类引用属性被子类实列共享问题
- 子类构建实例时候可以传递参数

缺点：
- 只能继承父类的实列属性和方法，父类原型上的属性和方法子类得不到继承
- 无法实现复用，每个子类都有父类实例函数的副本


> 3. 组合继承(原型链+借用构造函数)

组合继承就是将原型链继承和借用构造函数继承共同使用，互相弥补各自不足。使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承

```js
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
        
SuperType.prototype.sayName = function(){
    alert(this.name);
};

function SubType(name, age){  
    // //借用构造函数实现对实例属性的继承，每个实例对象都会创建一个该属性的副本
    SuperType.call(this, name);     
    this.age = age;
}
SubType.prototype = new SuperType();//原型链实现对原型属性和方法的继承，这样它的实例实例对象都会继承原型属性方法，都相当于是指针引用，除非自己重写了一个相同的属性或者方法实现覆盖，否则修改熟悉就会出现原型链中德问题

SubType.prototype.sayAge = function(){
    alert(this.age);
};
```

> 4. 原型式继承

原型式继承，其实就是浅拷贝，主要应用于普通对象的属性继承；

举例：现在有两个对象，一个叫做“中国人”，一个对象叫做“医生”，怎样才能让“医生”去继承“中国人”？

这里要注意，这两个对象都是普通对象，不是构造函数，所以无法使用构造函数方法实现"继承"。

```js
const Chinese = {
  nation: '中国'
}

const Doctor = {
  career: '医生'
}
```

实现：利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型

```js
function copyObj(obj) {
  function F() {}
  // 利用原型对象，浅拷贝一个对象
  F.prototype = obj;
  return new F()
}
```

使用：

```js
function copyObj(obj) {
  function F() {}
  // 利用原型对象，浅拷贝一个对象
  F.prototype = obj;
  return new F()
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

// 浅拷贝，引用属性共享
alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

ECMAScript5原型式继承规范：

在ECMAScript5中，新增了一个Object.create()方法规范了原型式继承，这个方法接受两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下，Object.create()与object()方法的行为相同。

```js
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
        
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
        
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

> 5. 寄生式继承

其本质是原型式继承的增强版

```js
function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun();
}

function createAnother(original) {
  // 依赖原型式继承
  let clone = objectCopy(original);
  // 增强
  clone.getName = function () {
    console.log(this.name);
  };
  return clone;
}

let person = {
     name: "yhd",
     friends: ["rose", "tom", "jack"]
}

let person1 = createAnother(person);
let person2 = createAnother(person);
person1.friends.push("lily");
console.log(person2.friends); // ["rose", "tom", "jack", "lily"]
```

> 6. 寄生组合继承

组合继承会有两次调用父类的构造函数而造成浪费的缺点，寄生组合继承就可以解决这个问题。

寄生组合继承核心在于：让子类的prototype指向父类原型的拷贝，这样就不会调用父类的构造函数，进而引发内存的浪费问题。

```js
function inheritPrototype(subType, superType) {
  // 修正子类原型对象指针，指向父类原型的一个副本 (用object()也可以) ，子类继承父类原型上的属性
  subType.prototype = Object.create(superType.prototype)
  // 增强对象，弥补因重写原型而失去的默认的constructor属性
  subType.prototype.constructor = subType
}

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getColors = function () {
  console.log(this.colors)
}
// 借用构造函数
function SubType(name, age) {
  // 借用构造函数，继承父类实例属性，父类实例引用属性不会被子类实例共享
  SuperType.call(this, name)
  this.age = age
}
// 寄生继承
inheritPrototype(SubType, SuperType)

SubType.prototype.getAge = function () {
  console.log(this.age)
}

let inst1 = new SubType("Asuna", 20)
let inst2 = new SubType("Krito", 21)
```

优点：
- 只调用一次父类构造函数
- Child可以向Parent传参
- 父类方法可以复用
- 父类的引用属性不会被共享

寄生式组合继承可以算是引用类型继承的最佳模式

缺点：
- 实现比较复杂。

> 7.class中的继承

es6新增了class的概念，class知识语法糖，它的实现可由es5实现，只是继承方式看上去更加清晰

es6 class的继承依赖super和extends完成

- extends关键字实现继承，原理类似es5中寄生组合继承
- 子类如果有定义constructor函数，必须在其内部调用super函数，用来产生实例的this
- super有两种使用方式：
   + 作为函数调用，代表父类的构造函数，且返回的是子类的实例
   + 作为对象调用，普通函数中super对象指向父类的 原型对象，静态函数中，指向父类。

es6继承与es5中继承的区别：

- ES5的实例化对象是由子类构造函数先创建的，然后父类构造函数是使用call或者apply修改这个对象
- ES6的实例化对象是由父类构造函数先创建的（这就是为什么要先调用super），然后子类构造函数修改这个对象


> 8. new运算符

new 是一个语法糖，主要的作用是创建构造函数的实例

```js
function Person(name, age) {  
  this.name = name;  
  this.age = age;   
}  
var person = new Person("Alice", 23); 
```

分析：

```js
// 1. 创建一个空对象
let obj = new Object(); 
// 2. 让Person中的this指向obj，并执行Person的函数体
let result = Person.call(obj);  
// 3. 设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象
obj.__proto__ = Person.prototype;
// 4. 判断Person的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象
if (typeof(result) == "object")
{
  person = result;  
}
else{
  person = obj;
}
```

过程分析：

- 创建一个空对象
- 执行构造函数并将构造函数内部this执行新对象
- 设置新对象内置属性_proto等于构造函数的原型
- 对构造函数的返回值判断，如果返回值为object类型，则返回object，如果是简单值类型，则返回新建对象。