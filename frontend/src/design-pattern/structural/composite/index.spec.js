import { Computer, CPU, Memory} from './'

describe('composite', () => {
  test('composite cpu', () => {
    const computer = new Computer()
    computer.addPart(new CPU(900))
    computer.addPart(new Memory(100))
    expect(computer.getPrice()).toBe(1000)
  })
})