
import EventEmitter from 'events'

describe('EventEmitter', () => {
  test('emit and handler', () => {
    const handler = jest.fn()
    const emitter = new EventEmitter()
    emitter.on('sth-happen', handler)
    emitter.emit('sth-happen', 'abc')
    expect(handler).toBeCalledWith('abc')
    emitter.emit('sth-happen')
    expect(handler).toHaveBeenCalledTimes(2)

    const handler2 = jest.fn()
    emitter.once('sth-happen2', handler2)
    emitter.emit('sth-happen2')
    emitter.emit('sth-happen2')
    emitter.emit('sth-happen2')
    emitter.emit('sth-happen2')
    expect(handler2).toHaveBeenCalledTimes(1)
  })

  test('extend EventEmitter', () => {
    class MyEmitter extends EventEmitter {
      constructor(msg: string) {
        super()
        this.msg = msg
      }
      msg: string
      fire() {
        this.emit('fire', this.msg)
      }
    }
    const handler = jest.fn()
    const emitter = new MyEmitter('aaa')
    emitter.on('fire', handler)
    emitter.fire()
    expect(handler).toBeCalledWith('aaa')
  })
})