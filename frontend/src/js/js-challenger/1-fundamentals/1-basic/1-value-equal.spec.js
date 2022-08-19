// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// function myFunction(a, b) {
//   return 
// }

function myFunction(a, b) {
  return a === b
}

describe('value equal', () => {
  test('value equal', () => {
    expect(myFunction(2, 3)).toBe(false)
    expect(myFunction(3, 3)).toBe(true)
    expect(myFunction(1, '1')).toBe(false)
    expect(myFunction('10', '10')).toBe(true)
  })
})
