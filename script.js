function Duplicates(str) {
    let enChars = {};
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!enChars[char]) {
            result += char;
            enChars[char] = true;
        }
    }
    return result;
}
// Example usage
let iptString = "abcadeecfb";
let String = Duplicates(iptString);
console.log(String);



let str = "abcadeecfb";
let map = new Map();
for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        let value = map.get(str[i]);
        map.set(str[i], value + 1);
    } else {
        map.set(str[i], 1);
    }
}
for (let [m, n] of map) {
    console.log(m + "=" + n);
}