const reverseString = require('../lib/reverse-string');

test('reverse a given string: lowercase', () => {
    expect(reverseString('foo')).toEqual('oof');
})

test('reverse a given string: uppercase', () => {
    expect(reverseString('FOO')).toEqual('OOF');
})

test('reverse a given string: string with numbers', () => {
    expect(reverseString('foo123')).toEqual('321oof');
})

test('reverse a given string: string with symbols', () => {
    expect(reverseString('!foo$#')).toEqual('#$oof!');
})

test('reverse a given string: empty string', () => {
    expect(reverseString('')).toEqual('');
})

test('reverse a given string: a single char', () => {
    expect(reverseString('a')).toEqual('a');
})

test('reverse a given string: undefined', () => {
    expect(reverseString(undefined)).toBeUndefined();
})

test('reverse a given string: null', () => {
    expect(reverseString(null)).toBeNull();
})
