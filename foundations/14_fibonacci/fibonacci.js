const fibonacci = function(num) {

    //check if num is int; parse int if not
    let seq;
    if(typeof(num) !== "number") {
        seq = Number.parseInt(num);
    } else {
        seq = num;
    }

    //check for negative
    if(seq < 0) return "OOPS";
    //check for 0; return 0
    if(seq === 0) return seq;

    //left being the leftmost # in the fib sequence, when adding the number pairs
    let left = 0;
    let right = 1;

    for(let i = 2; i <= seq; i++) {
        let current = left + right;
        left = right;
        right = current;
    }
    return right;

};

// Do not edit below this line
module.exports = fibonacci;
