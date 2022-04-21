import Server from 'static-server'
import puppeteer, { Browser, Page as IPage } from 'puppeteer'
export type Page = IPage

interface IParam {
  rootPath: string,
  host?: string,
  port?: number
}

const defaultParam = {
  host: 'localhost'
}

export type StopFn = () => Promise<void>

export interface IReturn {
  page: Page
  stop: StopFn
}

const serverAndBrowser = (param: IParam): Promise<IReturn> => {
  return new Promise(resolve => {
    const combinedParam = {
      ...defaultParam,
      ...param
    }
    const server = new Server(combinedParam)
    let browser: Browser
    let page: Page

    server.start(async () => {
      browser = await puppeteer.launch()
      page = await browser.newPage()
      await page.goto(`http://${combinedParam.host}:${combinedParam.port}`, {
        waitUntil: 'networkidle2'
      })
      resolve({
        page,
        stop: async () => {
          await browser.close()
          server.stop()
        }
      })
    })
  })
}

export default serverAndBrowser
