function caesarCipher(s, factor) {
    if (!s) return s;
    
    const shiftedString = new Array(s.length);
    s.split('').forEach(char => {
        if (!isAlpha(char)) {
            shiftedString.push(char);
        } else {
            // get ascii value of next char
            const newCharCode = char.charCodeAt(0) + factor;
            const alphaCase = (char === char.toUpperCase()) ? 'UPPER' : 'LOWER';
            shiftedString.push(getShiftedCharCode(newCharCode, alphaCase));
        }
    });   

    return shiftedString.join('');
}

function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
}

function getShiftedCharCode(charCode, alphaCase) {
    let diff = 0;
    if (alphaCase === 'UPPER') {
        if (charCode > 'Z'.charCodeAt(0)) {
            diff = charCode - 'Z'.charCodeAt(0);
            return String.fromCharCode('A'.charCodeAt(0) + diff - 1);
        }
        return String.fromCharCode(charCode);
    } else {
        if (charCode > 'z'.charCodeAt(0)) {
            diff = charCode - 'z'.charCodeAt(0);
            return String.fromCharCode('a'.charCodeAt(0) + diff - 1);
        }
        return String.fromCharCode(charCode);
    }
}

module.exports = caesarCipher;
