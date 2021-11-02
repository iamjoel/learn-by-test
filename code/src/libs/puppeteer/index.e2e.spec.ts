import serverAndBrowser, {Page, StopFn} from '../../utils/e2e-setup'
// https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v10.0.0&show=api-class-puppeteer

describe('DOM', () => {
  let stop: StopFn
  let page: Page

  beforeAll(async () => {
    const res = await serverAndBrowser({
      rootPath: `${__dirname}/code`,
      port: 3006
    })
    stop = res.stop
    page = res.page
  })

  afterAll(async () => {
    await stop()
  })

  test('获取 DOM 信息', async () => {
    const {
      width,
    } = await page.evaluate(() => {
      const dom = document.querySelector('#tar')
      return {
        width: dom.clientWidth,
      }
    })
    expect(width).toBe(100)

    // 单个
    const width2 = await page.$eval('#tar', elem => elem.clientWidth)
    expect(width2).toBe(100)

    // 多个
    const itemLens = await page.$$eval('.item', elems => elems.length)
    expect(itemLens).toBe(3)
  
  })

  test('填写表单', async () => {
    await page.type('#input', 'abc')
    const inputValue = await page.$eval('#input', elem => (elem as HTMLInputElement).value)
    expect(inputValue).toBe('abc')


    await page.select('#select', 'joel')
    const selectValue = await page.$eval('#select', elem => (elem as HTMLInputElement).value)
    expect(selectValue).toBe('joel')

    // checkbox 用 click 的方式。

    // radio
  })
  // page.$()
  // page.waitForNavigation
})