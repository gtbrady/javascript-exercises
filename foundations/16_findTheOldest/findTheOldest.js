function findAge(birth, death) {
    return (!death ? new Date().getFullYear() : death) - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge > currentAge ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
