import Server from 'static-server'
import puppeteer, { Browser, Page } from 'puppeteer';
describe('Flex 布局', () => {
  let server:any;
  let browser: Browser;
  let page: Page;
  beforeAll(() => {
    return new Promise<void>(resolve => {
      server = new Server({
        rootPath: `${__dirname}/code`,
        host: '127.0.0.1',
        port: 3001,
      })

      server.start(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
        await page.goto('http://localhost:3001', {
          waitUntil: 'networkidle2',
        })
        resolve()
      })
    })
  }, 10 * 1000)

  afterAll(async () => {
      await browser.close()
      server.stop()
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