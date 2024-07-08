import { twMerge, twJoin } from 'tailwind-merge'

describe('tailwind-merge', () => {
  // https://github.com/dcastil/tailwind-merge/tree/main/tests
  test('merges tailwind classes correctly', () => {
    expect(twMerge('text-right text-center text-left')).toBe('text-left')
    expect(twMerge('pl-4 p-8')).toBe('p-8')
    expect(twMerge('m-[2px] m-[4px]')).toBe('m-[4px]')
    expect(twMerge('m-1 m-[4px]')).toBe('m-[4px]')
    expect(twMerge('overflow-x-auto hover:overflow-x-hidden overflow-x-scroll')).toBe(
      'hover:overflow-x-hidden overflow-x-scroll'
    )
    expect(twMerge('h-10 h-min')).toBe('h-min')
    expect(twMerge('bg-grey-5 bg-hotpink')).toBe('bg-hotpink')
  })

  test('tw join', () => {
    expect(twJoin('')).toBe('')
    expect(twJoin('foo')).toBe('foo')
    expect(twJoin('foo', 'bar')).toBe('foo bar')
    expect(twJoin(true && 'foo')).toBe('foo')
    expect(twJoin(false && 'foo')).toBe('')

    expect(twJoin(['foo', 'bar'])).toBe('foo bar')
    expect(twJoin(['foo'], null, ['baz', ''], false, '', [])).toBe('foo baz')
  })
})