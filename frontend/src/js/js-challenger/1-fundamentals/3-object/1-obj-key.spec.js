// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
// function myFunction(obj){
//   return 
// }

function myFunction(obj){
  return obj.country
}

describe('obj key', () => {
  test('obj key', () => {
    expect(myFunction({ continent: 'Asia', country: 'Japan' })).toBe('Japan')
    expect(myFunction({ country: 'Sweden', continent: 'Europe' })).toBe('Sweden')
  })
})