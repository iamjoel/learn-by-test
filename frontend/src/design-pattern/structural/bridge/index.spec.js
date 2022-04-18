import { RedCircle, GreenCircle, Circle} from './'

describe('bridge', () => {
  test('bridge', () => {
    const redCircle = new Circle(1, 2, new RedCircle())
    expect(redCircle.draw()).toBe('(1,2): red circle')
    const greenCircle = new Circle(1, 2, new GreenCircle())
    expect(greenCircle.draw()).toBe('(1,2): green circle')
  })
})