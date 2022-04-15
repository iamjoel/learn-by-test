import BrowserFactory from './index'

describe('factory method', () => {
  test('create different browser instance', () => {
    const b2 = BrowserFactory.create(2)
    expect(b2.supportFeature1).toBe(true)
    expect(b2.supportFeature2).toBe(true)

    const b1 = BrowserFactory.create(1)
    expect(b1.supportFeature1).toBe(true)
    expect(b1.supportFeature2).toBe(false)
  })
})
