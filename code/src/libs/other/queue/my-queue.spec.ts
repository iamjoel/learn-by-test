import Queue from "./my-queue";
const doThing = (msg: string, interval: number = 10):() => Promise<string> => {
  return () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(msg)
      }, interval)
    })
  }
}

describe('my queue', () => {
  test('success', cb => {
    const fn = jest.fn()

    const q = new Queue()
    q.push(doThing('1'))
    q.push(doThing('2'))
    q.push(doThing('3'))

    q.on('success', (msg) => {
      fn(msg)
    })

    q.on('end', (results) => {
      expect(fn).toBeCalledTimes(3)
      expect(results).toEqual(['1', '2', '3'])
      cb()
    })

    q.start()
  })

  // test('并发数: concurrency', cb => {
  //   const q = new Queue({
  //     concurrency: 10 
  //   })

  //   for(let i = 0; i < 20; i++) {
  //     q.push(doThing(i + '', 2000))
  //   }

  //   q.on('success', (msg) => {
  //     console.log(msg)
  //   })

  //   q.on('end', () => {
  //     cb()
  //   })

  //   q.start()
  // })
})
