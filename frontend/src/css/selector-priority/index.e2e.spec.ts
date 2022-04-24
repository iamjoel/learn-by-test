import serverAndBrowser, { Page, StopFn } from '../../utils/e2e-setup'
import path from 'path'

describe('选择器', () => {
  let stop: StopFn
  let page: Page

  beforeAll(async () => {
    const res = await serverAndBrowser({
      rootPath: path.join(__dirname, 'code'),
      port: 3002
    })
    stop = res.stop
    page = res.page
  })

  afterAll(async () => {
    await stop()
  })

  test('# 优先级高于 .', async () => {
    const height = await page.$eval('#tar', el => el.clientHeight)
    expect(height).toBe(100)
  })

  test('!import 优先级高于 # 和 style', async () => {
    const width = await page.$eval('#tar', el => el.clientWidth)
    expect(width).toBe(100)
  })
})
