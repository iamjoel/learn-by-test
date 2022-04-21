export class User {
  constructor (name) {
    this.name = name
  }
}

export class UserProxy {
  constructor (user) {
    this.user = user
  }

  getUserName (role) {
    if (role === 'admin' || role === 'staff') {
      return this.user.name
    }
    throw new Error('no permission')
  }

  setUserName (role, name) {
    if (role === 'admin') {
      this.user.name = name
      return
    }
    throw new Error('no permission')
  }
}
