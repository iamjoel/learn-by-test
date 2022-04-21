import { CookCabbage, CookFrenchBean } from './index'

describe('template', () => {
  test('cook', () => {
    const cookCabbage = new CookCabbage()
    expect(cookCabbage.cook()).toEqual([
      'Pick cabbage',
      'Wash cabbage',
      'Cut cabbage into pieces',
      'Fry cabbage 20 minutes',
      'Put cabbage in dish'
    ])

    const cookFrenchBean = new CookFrenchBean()
    expect(cookFrenchBean.cook()).toEqual([
      'Pick french bean',
      'Wash french bean',
      'Cut french bean',
      'Fry french bean 25 minutes',
      'Put french bean in dish'
    ])
  })
})
