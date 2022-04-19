import { User, UserProxy } from './'

describe('proxy', () => {
    test('proxy user', () => {
        const user = new User('Joel')
        const userProxy = new UserProxy(user)

        expect(userProxy.getUserName('admin')).toBe('Joel')
        expect(userProxy.getUserName('staff')).toBe('Joel')
        expect(() => userProxy.getUserName('other')).toThrow('no permission')

        expect(() => userProxy.setUserName('staff', 'Jack')).toThrow('no permission')
        userProxy.setUserName('admin', 'Jack')
        expect(userProxy.getUserName('admin')).toBe('Jack')
    })
})