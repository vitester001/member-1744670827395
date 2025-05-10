import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
    it('should return default greeting with name when no greeting provided', () => {
        expect(greet('John')).toBe('Hello, John!');
    });

    it('should return custom greeting with name when greeting provided', () => {
        expect(greet('John', 'Hi')).toBe('Hi, John!');
    });

    it('should work with empty string name', () => {
        expect(greet('')).toBe('Hello, !');
    });

    it('should work with empty string greeting', () => {
        expect(greet('John', '')).toBe('Hello, John!');
    });

    it('should handle special characters in name', () => {
        expect(greet('John & Jane')).toBe('Hello, John & Jane!');
    });

    it('should handle special characters in greeting', () => {
        expect(greet('John', 'Hey & Hi')).toBe('Hey & Hi, John!');
    });

    it('should handle whitespace in name', () => {
        expect(greet('   John   ')).toBe('Hello,    John   !');
    });

    it('should handle whitespace in greeting', () => {
        expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
    });

    it('should handle numbers in name', () => {
        expect(greet('John123')).toBe('Hello, John123!');
    });

    it('should handle numbers in greeting', () => {
        expect(greet('John', 'Hi123')).toBe('Hi123, John!');
    });
});
