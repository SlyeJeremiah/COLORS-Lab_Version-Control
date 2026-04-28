const { formatColor, isValidColor } = require('./code');

describe('formatColor', () => {

    test('removes spaces and lowercases', () => {
        expect(formatColor('  RED ')).toBe('red');
    });

    test('removes non-letter characters', () => {
        expect(formatColor('Blue123!!')).toBe('blue');
    });

    test('handles empty input', () => {
        expect(formatColor('')).toBe('');
    });

});

describe('isValidColor', () => {

    test('valid color returns true', () => {
        expect(isValidColor('Green')).toBe(true);
    });

    test('invalid color returns false', () => {
        expect(isValidColor('123!!!')).toBe(false);
    });

});