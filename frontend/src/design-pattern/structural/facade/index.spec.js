import { Clothes } from './'

describe('facade', () => {
    test('facade cloth price', () => {
        const coat = new Clothes('大衣', 500)
        expect(coat.getSalePrice()).toBe(445)

        const underwear = new Clothes('内裤', 50)
        expect(underwear.getSalePrice()).toBe(50)
    })
})