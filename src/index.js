module.exports = function reverse(n) {
    let str = Math.abs(n).toString(10);
    return str.split("").reverse().join("").replace(/$0+/, "");
}
