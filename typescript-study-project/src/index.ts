/**对象任意属性*/ 

interface Student {
  name: string;
  age?: number;
  [propName: string]: any
}

const xiaoMing: Student = {
  name: '张三',
  age: 20,
  address: '北京市昌平区'
}


/**接口定义函数参数*/
interface PrintLabelValue {
  label: string;
} 

function printLabel(obj: PrintLabelValue) {
  console.log(obj.label)
}

let testObj = {
  size: 10,
  label: 'label text'
}

printLabel(testObj)


