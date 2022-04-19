# 设计模式
23 个设计模式 (GoF)。

## 创建型(Creational Patterns)
将创建对象的过程与业务逻辑解藕。

* [抽象工厂](./creational/abstract-factory/index.spec.js) 工厂来管理相似的类。这些类的构造函数的参数是相同的。实例根据传入的类的名字和参数，由工厂来生产。将创建不同类型的实例的过程解藕了。
* [工厂方法](./creational/factory-method/index.spec.js) 实例由工厂来生产。将创建实例和参数解藕了。
* [建造者](./creational/builder/index.spec.js) 一个对象很复杂。给其设置不同的特征呈现。
* [原型](./creational/prototype/index.spec.js)
* [单例](./creational/singleton/index.spec.js)

## 结构模式(Structural Patterns)
在不改变原对象的情况下，给对象新增功能。

* [适配器](structural/adapt/index.spec.js) 用适配器来匹配原来不匹配的输入输出。
* [桥接模式](structural/bridge/index.spec.js) 把抽象和实现化接耦。
* [组合模式](structural/composite/index.spec.js) 将多个类似的对象放在一起，做为一个对象。
* [装饰器模式](structural/decorate/index.spec.js) 动态改变原有对象的行为： 可以是覆盖，也可以是新增函数。
* [外观模式](structural/facade/index.spec.js) 给大(复杂)的对象提供简单的接口，以此来隐藏系统的复杂性。
* [享元模式](structural/flyweight/index.spec.js) 尝试重用现有的同类对象，如果未找到匹配的对象，则创建新对象。主要用于减少创建对象的数量，以减少内存占用和提高性能。
* [代理模式](structural/proxy/index.spec.js) 代理对象代理了内部对象的访问和修改。

## 行为模式(Behavioral Patterns)
对象之间的通信

* 链
* 命令模式
* 解释？
* 迭代器
* 策略模式
* 模板模式
* 访问者模式


## 资源 & 参考
* [Design Patterns JS](https://github.com/fbeline/design-patterns-JS)
* [设计模式 - 菜鸟教程](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)
