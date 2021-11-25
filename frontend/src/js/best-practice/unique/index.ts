type BaseType = string | number
export const unique = <T extends BaseType>(arr: T[]):T[] => {
  const cache: Record<BaseType, boolean> = {}
  const res: T[] = []
  arr.forEach(item => {
    if(!cache[item]) {
      res.push(item)
      cache[item] = true
    }
  })
  return res
}

export const uniqueObj = <T extends BaseType, K>(arr: K[], mapToUniqValueArr: (item: K) => T):K[] => {
  const cache: Record<BaseType, boolean> = {}
  const uniqIndex: number[] = []
  arr
    .map(item => mapToUniqValueArr(item))
    .forEach((key, index) => {
      if(!cache[key]) {
        cache[key] = true
        uniqIndex.push(index)
      }
    })
  
  const res: K[] = uniqIndex.map(index => arr[index])
  return res
}

export const uniqUseSet = <T extends BaseType>(arr: T[]):T[] => {
  return Array.from(new Set(arr))
}

// 性能比较差
export const uniqUgly = <T extends BaseType>(arr: T[]):T[] => {
  const res: T[] = []
  arr.forEach(item => {
    if(!res.includes(item)) {
      res.push(item)
    }
  })
  return res
}