import { Rubbish, RubbishHandler } from '.'

describe('chain of resp', () => {
  test('rubbish handler', () => {
    const handler = new RubbishHandler()
    const usedPaper = new Rubbish('used paper', true)
    const plastic = new Rubbish('plastic', false)

    expect(handler.handle(usedPaper)).toBe('RecycleRubbishHandler handled')
    expect(handler.handle(plastic)).toBe('NoRecycleRubbishHandler handled')
  })
})
