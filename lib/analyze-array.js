function analyzeArray(arr) {
    if (!arr) return arr;
    if (arr.length === 0) return {};

    const obj = {};
    obj.average = (arr.reduce((total, item) => total + item, 0) / arr.length);
    obj.min = Math.min(...arr);
    obj.max = Math.max(...arr);
    obj.length = arr.length;
    
    return obj;
}

module.exports = analyzeArray;
