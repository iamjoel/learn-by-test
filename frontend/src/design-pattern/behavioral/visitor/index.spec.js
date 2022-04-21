import {equipmentVisitor, CPU, Keyboard} from './index';

describe('visitor', () => {
    test('visitor equipment', () => {
        const cpu = new CPU();
        expect(equipmentVisitor(cpu)).toBe('CPU is calculate center');

        const keyboard = new Keyboard();
        expect(equipmentVisitor(keyboard)).toBe('Keyboard is input device');
    })
});