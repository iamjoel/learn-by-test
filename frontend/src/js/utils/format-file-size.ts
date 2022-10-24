export const formatFileSize = (fileSize: number | string): string => {
  if (!fileSize) {
    return '0'
  }
  const units = ['B', 'KB', 'MB', 'GB']
  let res: number | string  = parseFloat(fileSize as string)
  let unitIndex = 0
  while (res > 1024 && unitIndex < units.length - 1) {
    res = res / 1024
    unitIndex++
  }
  const fractionalPartLen = (res + '').split('.')[1] ? (res + '').split('.')[1].length : 0
  if (fractionalPartLen > 2) {
    res = res.toFixed(2)
  }
  return `${res}${units[unitIndex]}`
}