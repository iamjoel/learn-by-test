export const max = (arr: number[]): number => {
  return Math.max(
    ...arr.filter(num => !isNaN(num))
  )
}

export const maxSimple = (arr: number[]): number => {
  const numArr = arr.filter(item => !isNaN(item)).map(item => parseFloat(item as unknown as string))
  let max = -Infinity
  numArr.forEach(num => {
    if (num > max) {
      max = num
    }
  })
  return max
}
