var sol = { '><^v': 2,
            '<<^<v>>': 6,
            '><><': 0,
            '><^v<': 3,
            '<^<v<>^>': 7,
            '^^><>': 3,
            'vv<v>v^v<': 8,
            '>><<><': 0,
            '<>>>': 2,
            '<<': 2,
            '>>>': 1,
            '>^<^<<': 5,
            '^^v<<>>': 6,
            '<^><v<': 4,
            'v<<<<<<<<<': 10,
            'v<<<^<<v<>': 10,
            '>>v<<': 3,
            '<<>': 3,
            '<vvv<><v': 6,
            'v>>^<>>': 4};
            
var temp = 0

for (var S in sol) {
    var result = 0;
    var valid = false;

    for (var i = 0; i < S.length; i++) {
        if (S[i] === '<') {
            if (i === 0) {
                result += 1;
                valid = true;
            }
            else if (S[i - 1] !== '>' && valid) {
                result += 1;
                valid = true;
            }
            else {
                valid = false;
            }
        }
        else if (S[i] === '^' || S[i] === 'v') {
            result += 1;
            valid = true;
        }
        else if (S[i] === '>') {
            if (i !== S.length - 1) {
                valid = false;
            }
            else {
                result += 1;
                valid = true;
            }
        }
        else {
            valid = false;
        }
    }
    temp += 1
    console.log(S);
    console.log(result);
    console.log('Should get', sol[S], ' || ', result === sol[S]);
    if (result !== sol[S]) {
        alert('!!!')
    }
}

console.log('Valid for all', temp, 'tests.')


// function solution(S) {
//     let result = '';
//     let count = 0;
//     for (let i = 0; i < S.length; i++) {
//         if (i === 0) {
//             result += S[i];
//             count = 1;
//         }
//         else {
//             if (S[i] !== S[i-1]) {
//                 count = 1;
//                 result += S[i];
//             }
//             else {
//                 if (count < 2) {
//                     count++;
//                     result += S[i];
//                 }
//             }
//         }
//     }
//     return result
// }