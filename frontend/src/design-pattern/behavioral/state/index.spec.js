import { RedLight } from ".";

describe('state', () => {
    test('traffic light state change', () => {
        let light = new RedLight();
        expect(light.getName()).toBe('red');
        expect(light.getAction()).toBe('stop');

        light = light.next()
        expect(light.getName()).toBe('green');
        expect(light.getAction()).toBe('go');

        light = light.next()
        expect(light.getName()).toBe('yellow');
        expect(light.getAction()).toBe('wait');
    })
})