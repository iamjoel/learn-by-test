import {formatFileSize} from './format-file-size'
describe('format-file-size', () => {
  test('normal', () => {
    expect(formatFileSize('9')).toBe('9B')
    expect(formatFileSize(9)).toBe('9B')
    expect(formatFileSize(12 * 1024)).toBe('12KB')
    expect(formatFileSize(12 * 1024 * 1024)).toBe('12MB')
    expect(formatFileSize(12 * 1024 * 1024 * 1024)).toBe('12GB')
    expect(formatFileSize(1025 * 1024 * 1024 * 1024)).toBe('1025GB')
  })

  test('fractionalPart', () => {
    expect(formatFileSize('')).toBe('0')
    expect(formatFileSize(0)).toBe('0')
    expect(formatFileSize('12.0')).toBe('12B')
    expect(formatFileSize('12.13')).toBe('12.13B')
    expect(formatFileSize('12.132')).toBe('12.13B')
  })
})
