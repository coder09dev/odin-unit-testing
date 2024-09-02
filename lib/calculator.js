const Calculator = (function() {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => {
        if (b === 0) throw new Error('Cannot divide by 0');
        return a / b;
    }

    return { 
        add,
        subtract,
        multiply,
        divide
    }
})();

module.exports = Calculator;
