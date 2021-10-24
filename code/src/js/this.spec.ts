/**
 * @jest-environment jsdom
 */
describe('this', function () {
  // TODO: jsdom 中，顶层的 this 是 undefined 。也没法执行 document 中的js。
  // test('全局上下文中的 this 是 顶层对象(浏览器中是window)', function() {
  //   expect(this).toEqual(window)
  // })

  // test('全局函数中的的 this 是 顶层对象(浏览器中是window)', function() {
  //   function getThis () {
  //     return this
  //   }
  //   expect(getThis()).toEqual(window)
  // })

  test('做为对象上的方法被调用，方法中的 this 是调用者对象',() => {
    const obj1 = {
      name: 'Joel',
      getName: function() {
        return this.name
      },
      getName2() {
        return this.name
      }
    }
    expect(obj1.getName()).toBe('Joel')

    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    obj2.getName = obj1.getName
    obj2.getName2 = obj1.getName2
    expect(obj2.getName()).toBe('Jack')
    expect(obj2.getName2()).toBe('Jack')
  })

  test('bind 在函数创建时，改变 this 的指向', () => {
    const obj1 = {
      name: 'Joel',
      getName: function() {
        return this.name
      }
    }
    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    const obj3 = {
      name: 'Mary'
    }
    obj2.getName = obj1.getName.bind(obj3)
    expect(obj2.getName()).toBe('Mary')
  })

  test('apply, call 在函数调用时，改变 this 的指向', () => {
    const obj1 = {
      name: 'Joel',
      getName: function() {
        return this.name
      }
    }
    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    
    obj2.getName = obj1.getName
    expect(obj2.getName()).toBe('Jack')
    expect(obj2.getName.call(obj1)).toBe('Joel')
    expect(obj2.getName.apply(obj1)).toBe('Joel')
  })

  test('apply, call 能改变 bind 过的函数的 this 的指向', () => {
    const obj1 = {
      name: 'Joel',
      getName: function() {
        return this.name
      }
    }
    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    obj2.getName = obj1.getName.bind(obj1)
    expect(obj2.getName()).toBe('Joel')
    expect(obj2.getName.call(obj2)).toBe('Jack')
  })

  test('箭头函数，this 是最近一层非箭头函数的this', () => {
    const obj1 = {
      name: 'Joel',
      getName: function() {
        const arrowGetName = () => this.name
        return arrowGetName()
      }
    }
    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    obj2.getName = obj1.getName
    expect(obj2.getName()).toBe('Jack')

    expect(obj2.getName.call(obj1)).toBe('Joel')

    // bind 改不动 this
    obj2.getName2 = obj1.getName.bind(obj1)
    expect(obj2.getName()).toBe('Jack')
  })

})
