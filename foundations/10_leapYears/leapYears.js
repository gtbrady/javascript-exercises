/* Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

divisible by 4
if divisible by 100, must also be divisible by 400
 */
const leapYears = function(year) {
    const divisibleFour = year % 4 === 0;
    const divisibleCentury = year % 100 === 0;
    const divisibleFourCentury = year % 400 === 0;

    return (divisibleFour && !divisibleCentury) || divisibleFourCentury;

};

// Do not edit below this line
module.exports = leapYears;
