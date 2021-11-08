import queue from 'queue'
const doThing = (msg: string, interval: number = 10):() => Promise<string> => {
  return () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(msg)
      }, interval)
    })
  }
}


describe('queue', () => {
  test('success', cb => {
    const fn = jest.fn()
    const q = queue({
      results: [] // 一定要有这个。用这个来接受返回
    })

    q.push(doThing('1'))
    q.push(doThing('2'))
    q.push(doThing('3'))
    q.push(done => {// 同步执行
      done(null, '4')
    })

    q.on('success', (msg) => {
      fn(msg)
    })

    q.on('end', () => {
      expect(fn).toBeCalledTimes(4)
      expect(q.results).toEqual([['1'], ['2'], ['3'], ['4']])
      cb()
    })

    q.start()
  })

  test('并发数: concurrency', cb => {
    const q = queue({
      concurrency: 10 // b
    })

    for(let i = 0; i < 20; i++) {
      q.push(doThing(i + '', 2000))
    }

    q.on('success', (msg) => {
      console.log(q.length) // 未执行任务长度
    })

    q.on('end', () => {
      cb()
    })

    q.start()
  })
})