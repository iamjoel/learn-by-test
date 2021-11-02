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
    const width3 = await (page.$('#tar') as any).clientWidth
    expect(width3).toBe(undefined) // 返回的 DOM 只有部分属性。主要用来做 click 之类操作的，而不是获得属性的

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
    const checkboxElem = await page.$('[type=checkbox]')
    const isChecked = await page.$eval('[type=checkbox]', elem => (elem as HTMLInputElement).checked)
    expect(isChecked).toBe(false)
    await checkboxElem.click()
    const isChecked2 = await page.$eval('[type=checkbox]', elem => (elem as HTMLInputElement).checked)
    expect(isChecked2).toBe(true)

    // radio
    const radioElem = await page.$('[type=radio]')
    const isChecked3 = await page.$eval('[type=radio]', elem => (elem as HTMLInputElement).checked)
    expect(isChecked3).toBe(false)
    await radioElem.click()
    const isChecked4 = await page.$eval('[type=radio]', elem => (elem as HTMLInputElement).checked)
    expect(isChecked4).toBe(true)
  })

  test('等待页面跳转', async () => {
    setTimeout(async () => {
      const linkElem = await page.$('#link')
      linkElem.click()
    }, 3000)
    await page.waitForNavigation()
    const hasElem = await page.$$eval('#abcabc', elems => elems.length === 1)
    expect(hasElem).toBe(true)
  })
})