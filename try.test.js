import { describe, expect, test } from 'vitest';
import { mult, pow } from './calc.js';

describe('mult function', () => {
    test('multiply 10 * 5 to equal 50', () => {
        expect(mult(10, 5)).toBe(50);
    });
    test('multiply one parameter to equal itself', () => {
        expect(mult(10)).toBe(10);
    });
});
describe('pow function', () => {
    test('25 ^ 0.5 to equal 5', () => {
        expect(pow(25, 0.5)).toBe(5);
        expect(pow(25, 0.5)).not.toBe(-5);
    });
});