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