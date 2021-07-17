

class Gretter {
  
  // private-私有，它就不能在声明它的类的外部访问，只能在类内部访问
  // 必须声明初始化赋值
  private name: string = 'private name';

  // protected
  // protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
  protected protectedName: string = 'protected name'
  
  // readonly
  // 只读属性必须在声明时或构造函数里被初始化。
  readonly readonlyName: string = 'readonly name'

  // 静态属性，可以通过类自身访问或者子类继承，但不会被实例继承
  static welText: string;
  // 实例属性，可以被实例继承
  // public welcome: string;---默认为public
  welcome: string;
  constructor(message: string) {
    this.welcome = message;
    Gretter.welText = message;
  } 
  // 静态方法，可以通过类自身访问或者子类继承，但不会被实例继承
  static sayHello() { 
    // 静态方法内部this指向类本身
    return 'welcome:' + Gretter.welText;
  }
  // 实例方法，可以被实例继承
  // public hello() { -- 默认为public
  hello() {
    // 实例方法内部this指向类实例
    return Gretter.sayHello();
  }
}

const tomUser = new Gretter('xiaoming')
console.log(tomUser.hello())