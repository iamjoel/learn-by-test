export function machineJapan (voltage) {
  if (voltage !== 110) {
    return false
  }
  return true
}

export function voltageChina () {
  return 220
}

export function adaptChinaToJapanVoltage (voltageChina) {
  return voltageChina() - 110
}
