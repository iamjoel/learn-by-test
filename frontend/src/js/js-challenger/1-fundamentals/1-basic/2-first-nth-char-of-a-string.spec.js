// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// function myFunction(a){
//   return 
// }

function myFunction(a){
  return a.slice(0, 3)
}

describe('Get first n characters of string', () => {
  test('Get first n characters of string', () => {
    expect(myFunction('abcdefg')).toBe('abc')
    expect(myFunction('1234')).toBe('123')
    expect(myFunction('fgedcba')).toBe('fge')
  })
})