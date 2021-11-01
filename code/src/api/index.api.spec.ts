import axios from "axios"
const API_PREFIX = 'http://127.0.0.1:3000/pet'
import FormData from 'form-data'
// import fs from 'fs'

describe('接口测试', ()=> {
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

    const {data: item} = await axios.get(`${API_PREFIX}/1`)
    expect(item).toEqual({
      id: 1,
      name: 'WangWang'
    })
  })

  test('post', async () => {
    // json 类型的
    // const {data: id} = await axios.post(API_PREFIX, {
    //   name: 'Lala'
    // })
    // const {data: item} = await axios.get(`${API_PREFIX}/${id}`)
    // expect((item as any).name).toBe('Lala')
    // form-data
    try {
      const bodyFormData = new FormData()
      bodyFormData.append('name', 'xx')
      const res = axios.post(`${API_PREFIX}`,{
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log(res)
      // form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
    } catch(e) {
      console.log(e)
    }
    
  })
})