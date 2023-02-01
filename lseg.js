function fn(P1, P2) {
    var num = [];
    var result = [];
    for (let i = 0; i<=P1; i++) {
        num.push(i)
    }

    for (let i = 0; i<num.length; i++) {
        if (P2 === 'even' && i%2 == 0) {
            result.push(num[i])
        }
        else if (P2 === 'odd' && i%2 != 0) {
            result.push(num[i])
        }
    }
    return result
}
console.log(fn(5, 'even'))
