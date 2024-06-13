function safeAccess(obj, property) {
    try {
        return obj[property];
    } catch (e) {
        switch (e.name) {
            case "TypeError":
                console.error("TypeError: Cannot read property of undefined");
                return undefined;
            default:
                throw e;
        }
    }
}

let obj1 = { a: 1, b: 2 };
let obj2;

console.log(safeAccess(obj1, 'a')); // 1
console.log(safeAccess(obj1, 'b')); // 2
console.log(safeAccess(obj1, 'c')); // undefined
console.log(safeAccess(obj2, 'a')); // TypeError: Cannot read property of undefined; undefined