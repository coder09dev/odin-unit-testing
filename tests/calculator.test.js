const Calculator = require('../lib/calculator');

test('adds 5 + 3 to 8', () => {
    expect(Calculator.add(5, 3)).toEqual(8);
})

test('adds 0.1 + 0.2 to be close to 0.3', () => {
    expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('subtracts 3 from 5 to equal 2', () => {
    expect(Calculator.subtract(5, 3)).toEqual(2);  
})

test('subtracts 0.1 from 0.2 to be close to 0.1', () => {
    expect(Calculator.subtract(0.2, 0.1)).toBeCloseTo(0.1);
})

test('multiply 5 and 3 to equal 15', () => {
    expect(Calculator.multiply(5, 3)).toEqual(15);
})

test('multiply 0.1 and 0.2 to be close to 0.02', () => {
    expect(Calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
})

test('divide 15 by 5 to equal 3', () => {
    expect(Calculator.divide(15, 5)).toEqual(3);
})

test('divide 15 by 0 to throw Error', () => {
    expect(() => {Calculator.divide(15, 0)}).toThrow('Cannot divide by 0');
})

test('divide 15.5 by 0.0 to throw Error', () => {
    expect(() => {Calculator.divide(15.5, 0.0)}).toThrow('Cannot divide by 0');
})


test('divide 15.5 by 5 to be close to 3.1', () => {
    expect(Calculator.divide(15.5, 5)).toBeCloseTo(3.1);
})
