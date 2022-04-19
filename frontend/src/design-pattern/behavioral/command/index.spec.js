import { Light, CommandOn, CommandOff } from './';

describe('command', () => {
    test('control light status', () => {
        const light = new Light();
        const commandOn = new CommandOn(light);
        const commandOff = new CommandOff(light);

        commandOn.execute();
        expect(light.isOn).toBe(true);
        commandOff.execute();
        expect(light.isOn).toBe(false);
        commandOn.execute();
        expect(light.isOn).toBe(true);
    })
})