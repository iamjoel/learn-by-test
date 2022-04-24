import serverAndBrowser, { Page, StopFn } from '../../utils/e2e-setup'
import path from 'path'

describe('this', () => {
  let stop: StopFn
  let page: Page

  beforeAll(async () => {
    const res = await serverAndBrowser({
      rootPath: path.join(__dirname, 'code'),
      port: 3001
    })
    stop = res.stop
    page = res.page
  })

  afterAll(async () => {
    await stop()
  })

  test('全局上下文中的 this 是 顶层对象(浏览器中是window)', async () => {
    const {
      isSame
    } = await page.evaluate(() => {
      return {
        isSame: (window as any).getThis() === window
      }
    })
    expect(isSame).toBe(true)
  })

  test('全局函数中的的 this 是 顶层对象(浏览器中是window)', async () => {
    const {
      isSame
    } = await page.evaluate(() => {
      return {
        isSame: (window as any).globalFn() === window
      }
    })
    expect(isSame).toBe(true)
  })
})
