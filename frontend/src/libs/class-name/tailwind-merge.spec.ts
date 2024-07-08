import { twMerge, twJoin, extendTailwindMerge } from 'tailwind-merge'

describe('tailwind-merge', () => {
  // https://github.com/dcastil/tailwind-merge/tree/main/tests
  test('merges tailwind classes correctly', () => {
    expect(twMerge('')).toBe('')
    expect(twMerge(null)).toBe('')
    expect(twMerge(undefined)).toBe('')
    expect(twMerge(false)).toBe('')

    expect(twMerge('p-0')).toBe('p-0')
    expect(twMerge('text-right text-center text-left')).toBe('text-left')
    expect(twMerge('pl-4 p-8')).toBe('p-8')
    expect(twMerge('m-[2px] m-[4px]')).toBe('m-[4px]')
    expect(twMerge('m-1 m-[4px]')).toBe('m-[4px]')
    expect(twMerge('overflow-x-auto hover:overflow-x-hidden overflow-x-scroll')).toBe(
      'hover:overflow-x-hidden overflow-x-scroll'
    )
    expect(twMerge('h-10 h-min')).toBe('h-min')
    expect(twMerge('bg-grey-5 bg-hotpink')).toBe('bg-hotpink')

    expect(twMerge('hover:block hover:inline')).toBe('hover:inline')

    expect(twMerge('font-medium !font-bold')).toBe('font-medium !font-bold')
    expect(twMerge('!font-medium !font-bold')).toBe('!font-bold')

    expect(twMerge('text-gray-100 text-primary-200')).toBe('text-primary-200')
    expect(twMerge('text-some-unknown-color text-components-input-bg-disabled text-primary-200')).toBe('text-primary-200')
    expect(twMerge('bg-some-unknown-color bg-components-input-bg-disabled bg-primary-200')).toBe('bg-primary-200')
  })

  test('merges non-conflicting classes correctly', () => {
    expect(twMerge('border-t border-white/10')).toBe('border-t border-white/10')
    expect(twMerge('border-t border-white')).toBe('border-t border-white')
    expect(twMerge('text-3.5xl text-black')).toBe('text-3.5xl text-black')
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

  test('extendTailwindMerge: add custom tailwind config', () => {
    const customTwMerge = extendTailwindMerge({
      extend: {
        classGroups: {
          shadow: [{ shadow: ['100', '200', '300'] }]
        }
      }
    })

    expect(twMerge('shadow-sm shadow-300')).toBe('shadow-sm shadow-300')
    expect(customTwMerge('shadow-sm shadow-300')).toBe('shadow-300')
  })
})
