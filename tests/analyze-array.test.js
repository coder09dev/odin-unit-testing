const analyzeArray = require('../lib/analyze-array');

// AnalyzeArray currently only supports ints
test('analyze array returns object: with array of positive integers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})

test('analyze array returns object: with array of negative integers', () => {
    expect(analyzeArray([-1,8,-3,4,-2,6])).toEqual({
        average: 2,
        min: -3,
        max: 8,
        length: 6
    });
})

test('analyze array returns object: single element', () => {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
})

test('analyze array returns object: empty array', () => {
    expect(analyzeArray([])).toEqual({});
})

test('analyze array returns object: undefined', () => {
    expect(analyzeArray(undefined)).toBeUndefined();
})

test('analyze array returns object: null', () => {
    expect(analyzeArray(null)).toBeNull();
})
