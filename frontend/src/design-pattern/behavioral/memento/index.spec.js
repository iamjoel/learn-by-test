import {Originator, History} from '.'

describe('momento', () => {
    test('history', () => {
        const history = new History();
        history.add(new Originator('hello'));
        history.add(new Originator('hello world'));
        history.add(new Originator('hello joel'));

        expect(history.go(0).restore()).toEqual('hello');
        expect(history.go(1).restore()).toEqual('hello world');
        expect(history.go(2).restore()).toEqual('hello joel');
    })
})