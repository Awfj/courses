function sumFirstHalf(arr) {
    let halfLength = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, halfLength);

    return firstHalf.reduce((sum, n) => sum + n, 0);
}