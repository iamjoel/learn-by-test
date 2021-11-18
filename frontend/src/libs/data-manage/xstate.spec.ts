// https://xstate.js.org/docs/
// 可视化： https://stately.ai/viz
import { createMachine, interpret } from 'xstate'
describe('XState', () => {
  test('状态切换: 当前状态 + 动作 => 新状态', () => {
    // 交通红绿灯
    const trafficLight = createMachine({
      id: 'trafficLight',
      initial: 'green',
      states: {
        green: { on: { NEXT: 'yellow', SKIP: 'red'}}, // 事件名为大写
        yellow: { on: { NEXT: 'red' } },
        red:  { on: { NEXT: 'green' } },
      }
    })


    // 算某个状态，执行某个操作后的下一个状态
    const currentState = 'green'
    let nextState = trafficLight.transition(currentState, 'NEXT').value
    expect(nextState).toBe('yellow')
    nextState = trafficLight.transition(nextState, 'NEXT').value
    expect(nextState).toBe('red')
    nextState = trafficLight.transition(nextState, 'NEXT').value
    expect(nextState).toBe('green')
    nextState = trafficLight.transition(nextState, 'SKIP').value
    expect(nextState).toBe('red')

    const trafficLightService = interpret(trafficLight)
      // .onTransition((state) => console.log(state.value)) // 过程变化时的回调
      .start()
    let nextStateObj = trafficLightService.send('NEXT')
    expect(nextStateObj.value).toBe('yellow')
    nextStateObj = trafficLightService.send('NEXT')
    expect(nextStateObj.value).toBe('red')
    nextStateObj = trafficLightService.send('NEXT')
    expect(nextStateObj.value).toBe('green')
    nextStateObj = trafficLightService.send('SKIP')
    expect(nextStateObj.value).toBe('red')
  })
})