type BaseType = string | number

export const remove = <T extends BaseType>(arr: T[], removeItem: T): T[] => {
  return arr.filter(item => item !== removeItem)
}

export const removeUgly = <T extends BaseType>(arr: T[], removeItem: T): T[] => {
  const removeIndex = arr.findIndex(item => item === removeItem)
  if(removeIndex !== -1) {
    arr.splice(removeIndex, 1)
  }
  return arr
}