import { machineJapan, voltageChina, adaptChinaToJapanVoltage } from './'

describe('adapt', () => {
  test('adapt china voltage to japan machine', () => {
    expect(machineJapan(voltageChina())).toBe(false)
    expect(machineJapan(adaptChinaToJapanVoltage(voltageChina))).toBe(true)
  })
})
