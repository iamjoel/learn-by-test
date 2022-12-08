import update from 'immutability-helper'
// https://github.com/kolodny/immutability-helper
describe('immutability helper', () => {
    describe('object', () => {
        test('replace obj key value', () => {
            const obj = {
                a: 1,
                b: {
                    c: {
                        d: 2
                    }
                }
            }

            const obj2 = update(obj, {
                b: {
                    c: {
                        d: {
                            $set: 3
                        }
                    }
                }
            })

            expect(obj2).toEqual({
                a: 1,
                b: {
                    c: {
                        d: 3
                    }
                }
            })
        })

        test('update obj key value', () => {
            const obj = {
                a: 1,
                b: 2,
                c: 3
            }

            const obj2 = update(obj, {
                $merge: {
                    b: 6,
                    c: 8
                }
            })

            expect(obj2).toEqual({
                a: 1,
                b: 6,
                c: 8
            })
        })

        test('merge attr into obj', () => {
            const obj = {a: 1, b: 2}
            const obj2 = update(obj, {
                $merge: {
                    c: 3,
                    d: 4
                } as any
            })

            expect(obj2).toEqual({
                a: 1,
                b: 2,
                c: 3,
                d: 4
            })
        })

    })

    describe('array', () => {
        test('array add item', () => {
            const arr = [1, 2]

            let arrPushed = update(arr, {
                $push: [3]
            })
            expect(arrPushed).toEqual([1, 2, 3])
            arrPushed = update(arr, {
                $push: [5, 6]
            })
            expect(arrPushed).toEqual([1, 2, 5, 6])

            const arrUnshift = update(arr, {
                $unshift: [3]
            })
            expect(arrUnshift).toEqual([3, 1, 2])

            // 和数组的 splice 一样
            const arrInsertIndex = update(arr, {
                $splice: [[1, 0, 100, 200]] // [[插入位置，删除格式，插入值...]]
            })
            expect(arrInsertIndex).toEqual([1, 100, 200, 2])
        })

        test('array remove item', () => {
            const arr = [1, 2, 3, 4, 5]

            let arrPushed = update(arr, {
                $splice: [[1, 3]]
            })
            expect(arrPushed).toEqual([1, 5])
        })

        test('replace item', () => {
            const arr = [1, 2, 3, 4, 5]

            let replacedArr = update(arr, {
                $splice: [[1, 1, 100]]
            })

            expect(replacedArr).toEqual([1, 100, 3, 4, 5])
        })
    })
})
