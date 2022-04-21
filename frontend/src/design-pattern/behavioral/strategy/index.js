export function guestStrategy (amount) {
  return amount
}

export function memberStrategy (amount) {
  return amount * 0.9
}

export function superMemberStrategy (amount) {
  return amount * 0.8
}
