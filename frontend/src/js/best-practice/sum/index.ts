export const sum = (arr: number[]) => {
  return arr.reduce((prev, curr) => {
    if (isNaN(curr)) {
      return prev
    }
    return prev + parseFloat(curr as unknown as string)
  }, 0)
}

export const sumSimple = (arr: number[]) => {
  let sum = 0
  arr.forEach(item => {
    if (isNaN(item)) {
      return
    }
    sum = sum + parseFloat(item as unknown as string)
  })
  return sum
}
