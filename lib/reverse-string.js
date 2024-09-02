function reverseString(s) {
    if (!s) return s;
    return s.split('')
    .reverse()
    .join('');
}

module.exports = reverseString;