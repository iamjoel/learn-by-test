import EventEmitter from 'events'

interface IOptions {
  concurrency?: number
}

type JobFn = () => Promise<any>

class Queue extends EventEmitter {
  constructor (options: IOptions = {}) {
    super()
    this.options = {
      concurrency: Number.POSITIVE_INFINITY,
      ...options
    }
    this._jobs = []
    this._isEnd = false
    this._result = []
    this._runningNum = 0
  }

  options: IOptions
  _jobs: JobFn[]
  _runningNum: 0
  _isEnd: boolean
  _result: any[]

  push (fn: JobFn) {
    this._jobs.push(fn)
  }

  start () {
    if (this._jobs.length === 0) {
      return
    }

    const jobsFn = this._jobs.splice(0, this.options.concurrency)
    jobsFn.forEach(fn => this.runJob(fn))
  }

  runJob (fn: JobFn) {
    if (this._runningNum >= this.options.concurrency || this._isEnd) {
      return
    }
    this._runningNum++
    fn().then(msg => {
      this.emit('success', msg)
      this._result.push(msg)
    }).catch(e => {
      this.emit('error', e)
    }).finally(() => {
      this._runningNum--
      if (this._isEnd) {
        return
      }
      if (this._jobs.length === 0 && this._runningNum === 0) {
        this.emit('end', this._result)
        this._isEnd = true
        return
      }

      if (this._jobs.length > 0) {
        this.runJob(this._jobs.shift())
      }
    })
  }
}

export default Queue
