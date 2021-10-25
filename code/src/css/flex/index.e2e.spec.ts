import serverAndBrowser, {Page, StopFn} from '../../utils/e2e-setup'
describe('Flex 布局', () => {
  let stop: StopFn
  let page: Page

  beforeAll(async () => {
    const res = await serverAndBrowser({
      rootPath: `${__dirname}/code`,
      port: 3000
    })
    stop = res.stop
    page = res.page
  })

  afterAll(async () => {
      await stop()
  })

  test('主轴是行方向的在一列',async () => {
      const posYArr = await page.evaluate(() => {
        const items = document.querySelectorAll('.ly>.item')
        return [
          items[0].getBoundingClientRect().top,
          items[1].getBoundingClientRect().top,
          items[2].getBoundingClientRect().top,
        ]
      })
      expect(posYArr[0]).toBe(posYArr[1])
      expect(posYArr[1]).toBe(posYArr[2])
  })

  test('flex grow 撑满剩余空间',async () => {
    const {
      flexGrowItemWidth,
      resetWidth,
    } = await page.evaluate(() => {
      const flexGrowItem = document.querySelector('.ly>.flex-grow-item')
      return {
        flexGrowItemWidth: flexGrowItem.clientWidth,
        resetWidth: document.body.clientWidth - 2 * 100 - 3 * 10
      }
    })
    expect(flexGrowItemWidth).toBe(resetWidth)
  })
})