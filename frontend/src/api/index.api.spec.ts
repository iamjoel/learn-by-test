import axios from 'axios'
import FormData from 'form-data'
import path from 'path'
import fs from 'fs'
const API_PREFIX = 'http://127.0.0.1:3000/pet'

describe('接口测试', () => {
  test('get', async () => {
    const { data: list } = await axios.get(API_PREFIX)
    expect(list).toEqual([
      {
        id: 1,
        name: 'WangWang'
      },
      {
        id: 2,
        name: 'MiMi'
      }
    ])

    const { data: item } = await axios.get(`${API_PREFIX}/1`)
    expect(item).toEqual({
      id: 1,
      name: 'WangWang'
    })
  })

  test('post', async () => {
    // json 类型的
    const { data: id } = await axios.post(API_PREFIX, {
      name: 'Lala'
    })
    const { data: item } = await axios.get(`${API_PREFIX}/${id}`)
    expect((item as any).name).toBe('Lala')

    // form Data 类型的
    // const bodyFormData = new FormData()
    // bodyFormData.append('name', 'xx')
    // const {data: formDataRes} = await axios.post(`${API_PREFIX}/byFormData`,{
    //   data: bodyFormData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // })

    // 上传文件
    const fileFormData = new FormData()
    const formHeaders = fileFormData.getHeaders()
    fileFormData.append('image', fs.createReadStream(path.resolve(__dirname, './demo.jpeg')))
    // console.log(fileFormData)
    const { data: uploadRes } = await axios.post(`${API_PREFIX}/upload`, {
      data: fileFormData,
      headers: {
        ...formHeaders
      }
    })
    expect(uploadRes).toBe('success')
  })
})
