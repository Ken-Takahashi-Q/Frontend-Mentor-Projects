S = '^v><'
S = '<<^v<>>'
S = '><><'

function ans(S) {
    var result = 0;
    if (S[0] == '<' || S[-1] == '>') {
        result += 1
    }
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] == '^' || S[i] == 'v') {
            result += 1
        }
        else if (0 < i < S.length - 1) {
            if (S[i] == '<' && S[i-1] != '>') {
                result += 1
            }
        }
    }
    return result
}

console.log(ans(S))

//1
window.setInterval(cb, 1000)

//2
var text = ''
function write(s) {
    console.log(s)
}

write('a')
setTimeout(function() {
    write('b');
}, 0);
write('c');

//3
const z = [{x: 0}, {x: 1}];

z.push({y: 3})
console.log(z)
console.log(typeof z[0])

//5
function thisIsSyncFunction() {
    let result = 0;

    $http('https://mysite.com/data')
    .then((response) => {
        result = 10;//response.data;
    });
    
    return result;
}

const number1 = thisIsSyncFunction()
const calculation = number1 * 10;

console.log(calculation)

//7
class Foo {
    bar;
    run() {
        setTimeout(() => {
            this.bar = 5;
            console.log('second', this.bar);
        }, 0);

        setTimeout(function() {
            console.log('first', this.bar);
        }, 0);
    }
}

const foo = new Foo();
foo.run()

//8
