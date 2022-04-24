import serverAndBrowser, { Page, StopFn } from '../../utils/e2e-setup'
import path from 'path'

describe('DOM', () => {
  let stop: StopFn
  let page: Page

  beforeAll(async () => {
    const res = await serverAndBrowser({
      rootPath: path.join(__dirname, 'code'),
      port: 3003
    })
    stop = res.stop
    page = res.page
  })

  afterAll(async () => {
    await stop()
  })

  test('宽高', async () => {
    await page.setViewport({
      width: 600,
      height: 600
    })

    const {
      width,
      height,
      scrollWidth,
      scrollHeight,
      windowWidth,
      windowHeight
    } = await page.evaluate(() => {
      const dom = document.querySelector('#tar-size')
      return {
        width: dom.clientWidth,
        height: dom.clientHeight,
        scrollWidth: dom.scrollWidth,
        scrollHeight: dom.scrollHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      }
    })

    expect(width).toBe(300)
    expect(height).toBe(300)
    expect(scrollWidth > 300).toBe(true) // 滚动宽度
    expect(scrollHeight > 300).toBe(true) // 滚动高度
    expect(windowWidth).toBe(600)
    expect(windowHeight).toBe(600)
  })

  test('位置', async () => {
    const {
      left,
      right,
      top,
      bottom,
      width,
      height
    } = await page.evaluate(() => {
      const { left, right, top, bottom, width, height } = document.querySelector('#tar-pos').getBoundingClientRect()
      return {
        left,
        right,
        top,
        bottom,
        width,
        height
      }
    })

    expect(left).toBe(20)
    expect(right).toBe(left + width)
    expect(top).toBe(20)
    expect(bottom).toBe(top + height)
  })

  test('样式', async () => {
    const {
      styleBackground,
      styleWidth,
      computedFontSize
    } = await page.evaluate(() => {
      const dom: HTMLElement = document.querySelector('#tar-style')
      dom.style.width = '400px'
      return {
        styleBackground: dom.style.background,
        styleWidth: dom.style.width,
        computedFontSize: window.getComputedStyle(dom).fontSize
      }
    })

    expect(styleBackground).toBe('red')
    expect(styleWidth).toBe('400px')
    expect(computedFontSize).toBe('20px')
  })

  test('事件绑定', async () => {
    const {
      output
    } = await page.evaluate(() => {
      const dom: HTMLElement = document.querySelector('#tar-click')
      const outputDom = document.querySelector('#output')
      const clickHandler = () => {
        outputDom.textContent = 'clicked'
      }
      dom.addEventListener('click', clickHandler)
      dom.click()
      dom.removeEventListener('click', clickHandler)
      return {
        output: outputDom.textContent
      }
    })

    expect(output).toBe('clicked')
  })
})
