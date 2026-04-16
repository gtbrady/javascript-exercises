const sumAll = function(first,last) {
    if(!(first >= 0 && Number.isInteger(first) && last >= 0 && Number.isInteger(last))) {
        return "ERROR";
    }
    const min = first <= last ? first : last;
    const max = first >= last ? first : last;
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
