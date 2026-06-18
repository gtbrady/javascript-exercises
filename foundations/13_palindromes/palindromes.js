const palindromes = function (word) {
    const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";


    
    const cleanedString = word
                    .toLowerCase()
                    .split("")
                    .filter((char) => alphaNumeric.includes(char))
                    .join("");
    //'acaramanamaraca'
    const reversedString =  cleanedString
                            .split("")
                            .reverse()
                            .join("");
    return cleanedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
