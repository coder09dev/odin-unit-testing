const caesarCipher = require('../lib/caesar-cipher');

test('shift string "abc" by 1', () => {
    expect(caesarCipher('abc', 1)).toEqual('bcd');
})

test('shift string "abc" by 3', () => {
    expect(caesarCipher('abc', 3)).toEqual('def');
})

test('shift string "xyz" by 1', () => {
    expect(caesarCipher('xyz', 1)).toEqual('yza');
})

test('shift string "xyz" by 3', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc');
})

test('return empty string for empty string with a factor of 3', () => {
    expect(caesarCipher('', 3)).toEqual('');
})

test('Preserve Case: shift string "HeLLo" by 3', () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
})

test('Preserve Case: shift string "XyZ" by 3', () => {
    expect(caesarCipher('XyZ', 3)).toEqual('AbC');
})

test('Skip punctuations: shift string "XyZ" by 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
})

test('Skip punctuations: shift string "!$#*&^%" by 1', () => {
    expect(caesarCipher('!$#*&^%', 1)).toEqual('!$#*&^%');
})

test('Shift undefined by 1', () => {
    expect(caesarCipher(undefined, 1)).toEqual(undefined);
})

test('Shift null by 1', () => {
    expect(caesarCipher(null, 1)).toEqual(null);
})
