const capitalize = require('../lib/capitalize');

test('Capitalize first char of string: Lowercase Example 1', () => {
    expect(capitalize('foo')).toEqual('Foo');
});

test('Capitalize first char of string: Lowercase Example 2', () => {
    expect(capitalize('bar')).toEqual('Bar');
});

test('Capitalize first char of string: Lowercase Single Char', () => {
    expect(capitalize('b')).toEqual('B');
});

test('Capitalize first char of string: Uppercase Single Char', () => {
    expect(capitalize('B')).toEqual('B');
});

test('Capitalize first char of string: Already First char capitalized', () => {
    expect(capitalize('Baz')).toEqual('Baz');
});

test('Capitalize first char of string: Uppercase string', () => {
    expect(capitalize('FOO')).toEqual('FOO');
});

test('Capitalize first char of string: Empty String', () => {
    expect(capitalize('')).toEqual('');
});

test('Capitalize first char of string: undefined', () => {
    expect(capitalize(undefined)).toEqual(undefined);
});

test('Capitalize first char of string: null', () => {
    expect(capitalize(null)).toEqual(null);
});
