##### React提供了一种“顶层注册，事件收集，统一触发”的事件机制。

- 对事件分已不同优先级调度执行
- 抹平浏览器兼容性差异

##### 事件的注册、执行回掉函数收集、事件的触发




### react-dom初始化-自执行

var simpleEventPluginEvents = ['abort',  'cancel',   'click', 'close', 'copy', 'cut', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'error', 'input','keyDown', 'keyPress', 'keyUp', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'submit','touchCancel', 'touchEnd', 'touchStart', 'scroll', 'toggle', 'touchMove', 'waiting', 'wheel'.....]


registerSimpleEvents(); // 离散事件


('onMouseEnter', ['mouseout', 'mouseover'])
('onMouseLeave', ['mouseout', 'mouseover'])
....
registerEvents$2(); // 连续事件

('onChange', ['change', 'click', 'focusin', 'focusout', 'input', 'keydown', 'keyup', 'selectionchange']);

registerEvents$1(); // onChange合成事件

('onSelect', ['focusout', 'contextmenu', 'dragend', 'focusin', 'keydown', 'keyup', 'mousedown', 'mouseup', 'selectionchange']);
registerEvents$3(); // onSelect合成事件

> react初始化自执行，定义事件插件系统并将原生事件分类，离散事件、连续事件、onChange、onSelect等。


举例 registerSimpleEvents()：

- 遍历离散事件数组simpleEventPluginEvents，定义原生事件名字，并生成合成事件名字：click---onClick,并建立映射关系
- 处理合成事件capture捕获，并建立对应捕获事件与原生事件的映射关系
- 原生事件添加 allNativeEvents

// 保存所有原生事件
var allNativeEvents = new Set();["click", "copy", "cancel"]



### createRoot-root节点监听原生事件，并依据事件优先级分为3种事件监听回调

listenToAllSupportedEvents(rootContainerElement): root

- 遍历allNativeEvents，root节点监听所有原生事件，冒泡和捕获两个阶段 listenToNativeEvent(domEventName, true/false, rootContainerElement);
- createEventListenerWrapperWithPriority 根据事件类型不同优先级，对应生成最终的事件监听回调
  - dispatchDiscreteEvent: 处理离散事件
  - dispatchUserBlockingUpdate：处理用户阻塞事件
  - dispatchEvent：处理连续事件


### 事件触发




参考链接：
http://www.javashuo.com/article/p-hwpsfeac-vg.html

