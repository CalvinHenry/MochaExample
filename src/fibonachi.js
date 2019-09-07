
/*
returns the ith fibonachi number
*/
function fibonachi(i) {
    if(i == 1 || i == 0) {
        return 1
    }
    return fibonachi(i - 1) + fibonachi(i - 2)
}

module.exports = {
    fibonachi: fibonachi
}