/**
 * @jest-environment jsdom
 */
describe('this', function () {
  test('做为对象上的方法被调用，方法中的 this 是调用者对象', () => {
    const obj1 = {
      name: 'Joel',
      getName: function () {
        return this.name
      },
      getName2 () {
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
      getName: function () {
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
      getName: function () {
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

  test('apply, call 不能改变 bind 过的函数的 this 的指向', () => {
    const obj1 = {
      name: 'Joel',
      getName: function () {
        return this.name
      }
    }
    const obj2: Record<string, any> = {
      name: 'Jack'
    }
    obj2.getName = obj1.getName.bind(obj1)
    expect(obj2.getName()).toBe('Joel')
    // eslint-disable-next-line no-useless-call
    expect(obj2.getName.call(obj2)).toBe('Joel')
  })

  test('箭头函数，this 是最近一层非箭头函数的this', () => {
    const obj1 = {
      name: 'Joel',
      getName: function () {
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
