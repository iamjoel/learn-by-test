describe('Array', () => {
  describe('创建数组', () => {
    test('创建数组', () => {
      const arr = [1, 2, 3]
      expect(arr).toEqual([1, 2, 3])
    })
  })
  describe('增加元素', () => {
    describe('unshift：添加一个或多个元素到开头', () => {
      test('添加一个元素到开头', () => {
        const arr = [1, 2]
        arr.unshift(0)
        expect(arr).toEqual([0, 1, 2])
      })

      test('添加多个元素到开头', () => {
        const arr = [1, 2]
        arr.unshift(-2, -1, 0)
        expect(arr).toEqual([-2, -1, 0, 1, 2])
      })

      test('返回值是添加后的数组长度', () => {
        const arr = ['a', 'b']
        const res = arr.unshift('c')
        expect(res).toBe(3)
      })
    })

    describe('push：添加一个或多个元素到末尾', () => {
      test('添加一个元素到末尾', () => {
        const arr = [1, 2]
        arr.push(3)
        expect(arr).toEqual([1, 2, 3])
      })

      test('添加多个元素到末尾', () => {
        const arr = [1, 2]
        arr.push(3, 4, 5)
        expect(arr).toEqual([1, 2, 3, 4, 5])
      })

      test('返回值是添加后的数组长度', () => {
        const arr = ['a', 'b']
        const res = arr.push('c')
        expect(res).toBe(3)
      })
    })

    describe('...: 添加到中间', () => {
      test('添加一个元素到中间', () => {
        const arr = [1, 2, 3]
        const insertItem = 88
        const newArr = [...arr.slice(0, 2), insertItem, ...arr.slice(2)]
        expect(newArr).toEqual([1, 2, 88, 3])
      })

      test('添加多个元素到中间', () => {
        const arr = [1, 2, 3]
        const insertItems = [88, 99]
        const newArr = [...arr.slice(0, 2), ...insertItems, ...arr.slice(2)]
        expect(newArr).toEqual([1, 2, 88, 99, 3])
      })
    })
  })
  
  describe('删除元素', () => {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    describe('shift：删除第一个元素', () => {
      test('删除第一个元素', () => {
        const arr = [1, 2, 3]
        arr.shift()
        expect(arr).toEqual([2, 3])
      })

      test('返回值是删除的元素', () => {
        const arr = ['a', 'b', 'c']
        const removeItem = arr.shift()
        expect(removeItem).toBe('a')
      })

      test('空数组的返回值是删除的元素', () => {
        const removeItem = [].shift()
        expect(removeItem).toBe(undefined)
      })
    })

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    describe('pop：删除最后一个元素', () => {
      test('删除最后一个元素', () => {
        const arr = [1, 2, 3]
        arr.pop()
        expect(arr).toEqual([1, 2])
      })

      test('返回值是删除的元素', () => {
        const arr = ['a', 'b', 'c']
        const removeItem = arr.pop()
        expect(removeItem).toBe('c')
      })
    })

    // splice
  })

  describe('修改数组', () => {
    describe('map: 数组映射', () => {
      test('数组映射', () => {
        const arr = [1, 2, 3]
        const newArr = arr.map(item => item * 2)
        expect(newArr).toEqual([2, 4, 6])
      })

      test('不改变原数组值', () => {
        const arr = [1, 2, 3]
        arr.map(item => item * 2)
        expect(arr).toEqual([1, 2, 3])
      })
    })

    describe('filter: 过滤数组内容', () => {
      test('过滤数组内容', () => {
        const arr = [1, 2, 3, 4, 5, 6]
        const newArr = arr.filter(item => item > 4)
        expect(newArr).toEqual([5, 6])
      })

      test('不改变原数组值', () => {
        const arr = [1, 2, 3, 4, 5, 6]
        arr.filter(item => item > 4)
        expect(arr).toEqual([1, 2, 3, 4, 5, 6])
      })
    })

    describe('sort: 数组排序', () => {
      test('默认排序', () => {
        // 比较元素的 UTF-16 值。
        const arr = ['d', 1, 4, 7, -1, '1', '11',  'a']
        arr.sort();
        expect(arr).toEqual([-1, 1, "1", "11", 4, 7, "a", "d"])
      })

      test('自定义比较函数排序', () => {
        const arr = [1, 20, '15', '08']
        const compareFn = (a: number | string, b: number | string) => {
          return parseInt(a as string, 10) - parseInt(b as string, 10) 
        }
        arr.sort(compareFn)
        expect(arr).toEqual([1, '08', '15', 20])
      })
    })

    describe('reverse: 数组倒序', () => {
      test('数组倒序', () => {
        const arr1 = [1, 2, 3]
        arr1.reverse()
        expect(arr1).toEqual([3, 2, 1])
      })
    })


    describe('flat: 扁平化数组', () => {
      test('扁平一层', () => {
        expect([1, [2, 3]].flat()).toEqual([1, 2, 3])
        expect([1, [2, 3]].flat(1)).toEqual([1, 2, 3])
      })

      test('扁平指定层', () => {
        expect([1, [[2, 3]]].flat(1)).toEqual([1, [2, 3]])
        expect([1, [[2, 3]]].flat(2)).toEqual([1, 2, 3])
      })

      test('扁平化无限层', () => {
        expect([1, [[2, 3]], [[[[[[[[[[[[4]]]]]]]]]]]]].flat(Infinity)).toEqual([1, 2, 3, 4])
      })

      test('空项会被移除', () => {
        expect([1, , , 2].flat()).toEqual([1, 2])
        // 不会移除 null 和 undefined 项目
        expect([1, null, 2].flat()).toEqual([1, null, 2])
        expect([1, undefined, 2].flat()).toEqual([1, undefined, 2])
      })
    })
  })

  describe('查询数组信息', () => {
    describe('isArray: 值是否是数组', () => {
      test('值是否是数组', () => {
        expect(Array.isArray([1, 2, 3])).toBe(true)
        expect(Array.isArray({foo: 123})).toBe(false)
        expect(Array.isArray("foobar")).toBe(false)
        expect(Array.isArray(undefined)).toBe(false)
      })
    })
    describe('forEach: 遍历数组', () => {
      test('回调被执行', () => {
        const mockCallback = jest.fn();
        [1, 2, 3].forEach(mockCallback)
        expect(mockCallback.mock.calls.length).toBe(3)
      })
      test('回调参数检查', () => {
        const mockCallback = jest.fn();
        ['a', 'b', 'c'].forEach(mockCallback)
        expect(mockCallback.mock.calls[0]).toEqual(['a', 0, ['a', 'b', 'c']])
        expect(mockCallback.mock.calls[1]).toEqual(['b', 1, ['a', 'b', 'c']])
        expect(mockCallback.mock.calls[2]).toEqual(['c', 2, ['a', 'b', 'c']])
      })
    })

    describe('includes: 查找是否包含元素', () => {
      test('查找包含元素', () => {
        expect([1, 2].includes(1)).toBe(true)
        expect(['a', 'b'].includes('a')).toBe(true)
        expect(['a', 'b'].includes('c')).toBe(false)
      })

      test('不支持查找: 对象，数组类引用元素', () => {
        expect([{name: 'joel'}].includes({name: 'joel'})).toBe(false)
        expect([{name: 'joel'}].map(item => item.name).includes('joel')).toBe(true)
        expect([[1]].includes([1])).toBe(false)
      })
    })

    describe('indexOf: 查找包含元素下标', () => {
      test('查找包含元素', () => {
        expect([1, 2].indexOf(1)).toBe(0)
        expect(['a', 'b'].indexOf('b')).toBe(1)
      })

      test('找不到返回-1', () => {
        expect(['a', 'b'].indexOf('d')).toBe(-1)
      })

      test('不支持查找: 对象，数组类引用元素', () => {
        expect([{name: 'joel'}].indexOf({name: 'joel'})).toBe(-1)
        expect([[1]].indexOf([1])).toBe(-1)
      })
    })

    describe('find: 查找满足条件的第一个元素', () => {
      test('查找满足条件的第一个元素', () => {
        expect([1, 2, 3].find(item => item === 1)).toBe(1);
        expect([1, 2, 3].find(() => true)).toBe(1);
      })

      test('找不到返回 undefined', () => {
        expect([1, 2, 3].find(item => item < 0)).toBe(undefined);
      })
    })

    describe('findIndex: 查找满足条件的第一个元素的下标', () => {
      test('查找满足条件的第一个元素的下标', () => {
        expect([1, 2, 3].findIndex(item => item === 1)).toBe(0);
        expect([1, 2, 3].findIndex(() => true)).toBe(0);
      })

      test('找不到返回 -1', () => {
        expect([1, 2, 3].findIndex(item => item < 0)).toBe(-1);
      })
    })

    describe('every: 所有元素都满足条件', () => {
      test('所有元素都满足条件', () => {
        expect([1, 2, 3].every(item => item > 0)).toBe(true);
        expect([1, 2, 3].every(item => item === 1)).toBe(false);
      })
    })

    describe('some: 某个元素都满足条件', () => {
      test('某个元素都满足条件', () => {
        expect([1, 2, 3].some(item => item === 1)).toBe(true);
        expect([1, 2, 3].some(item => item < 0)).toBe(false);
      })
    })

    describe('slice: 取子字符串', () => {
      test('取子字符串： [开始索引，结束索引]', () => {
        expect([1, 2, 3].slice(0, 1)).toEqual([1]);
        expect([1, 2, 3].slice(0, 2)).toEqual([1, 2]);
      })

      test('开始索引默认是0', () => {
        expect([1, 2, 3].slice(undefined, 1)).toEqual([1]);
      })

      test('结束索引默认是数组长度', () => {
        expect([1, 2, 3].slice(0)).toEqual([1, 2, 3]);
        expect([1, 2, 3].slice()).toEqual([1, 2, 3]);
      })

      test('默认是浅拷贝', () => {
        const arr1 = [{name: 'Joel'}]
        const arr2 = arr1.slice()
        arr1[0].name = 'Jack'
        expect(arr2[0].name).toBe('Jack')
      })
    })

    describe('join: 数组转换成分隔符连接的字符串', () => {
      test('默认分隔符是","', () => {
        expect([1, 2, 3].join()).toBe('1,2,3')
      });

      test('不同的分隔符', () => {
        expect([1, 2, 3].join(',')).toBe('1,2,3')
        expect([1, 2, 3].join(';')).toBe('1;2;3')
        expect([1, 2, 3].join('')).toBe('123')
        expect([1, 2, 3].join('@@@')).toBe('1@@@2@@@3')
        // 非字符串类型的分隔符会转化成字符串
        expect([1, 2, 3].join(0 as unknown as string)).toBe('10203')
        expect([1, 2, 3].join(null)).toBe('1null2null3')
      })

      test('空数组返回空字符串', () => {
        expect([].join()).toBe('')
      })
    })

    describe('reduce: 将结果返回为单个值', () => {
      test('将结果返回为单个值', () => {
        const sum = [1, 2, 3].reduce((prev, curr) => prev + curr, 0)
        expect(sum).toBe(6)
      });
    })
  })

  test('类数组对象转换成数组: Array.from', () => {
    function getArgs(a: number, b: number) {
      return Array.from(arguments)
    }

    expect(getArgs(1, 2)).toEqual([1, 2])
  })
})