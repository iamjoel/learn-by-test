import { RSS, User } from './index'

describe('observer', () => {
  test('observer rss info', () => {
    const msgBox = []
    const rss = new RSS()
    const Joel = new User('Joel', msgBox)
    const Jack = new User('Jack', msgBox)

    rss.subscribe(Joel)
    rss.subscribe(Jack)
    rss.notify('hello')
    expect(msgBox).toEqual(['Joel received hello', 'Jack received hello'])

    rss.unsubscribe(Jack)
    rss.notify('hi')
    expect(msgBox).toEqual(['Joel received hello', 'Jack received hello', 'Joel received hi'])
  })
})
