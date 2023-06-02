const findTheOldest = function (a) {
  let edadAlta = 0;
  let indexBueno = 0;

  a.forEach((people, index) => {
    if (people.yearOfDeath === undefined) {
      people.yearOfDeath = new Date().getFullYear();
    }
    let edad = people.yearOfDeath - people.yearOfBirth;

    if (edad > edadAlta) {
      edadAlta = edad;
      indexBueno = index;
    }
  });
  return a[indexBueno];
};

// Do not edit below this line
module.exports = findTheOldest;
