import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const DIR = path.join(__dirname, '.')

const walkThrough = async (dirName: string , res = []) => {
  const list = await fs.readdir(dirName, { withFileTypes: true })
  await Promise.all(list.map(item => {
    return (async () => {
      res.push({
        name: item.name,
        dir: dirName,
        isDirectory: item.isDirectory()
      })
      if(item.isDirectory()) {
        await walkThrough(path.join(dirName, item.name), res)
      }
    })()
  }))
  return res
}

export default walkThrough