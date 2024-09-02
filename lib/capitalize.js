function capitalize(s) {
    if (!s || s.length === 0) return s;
    return s[0].toUpperCase() + s.substring(1);
}

module.exports = capitalize;