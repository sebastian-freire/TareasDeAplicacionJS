const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: "Const",
    yearOfBirth: 1912,
    yearOfDeath: 1990
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
];

function findTheOldest(people) {
  if (people instanceof Array) {
    let oldest = "";
    let maxAge = 0;
    for (const person of people) {
      let age = person.yearOfDeath - person.yearOfBirth;
      if (age > maxAge) {
        oldest = person.name;
        maxAge = age;
      }
    }
    console.log(oldest + " was the oldest. Died at the age of " + maxAge + ".");
  } else {
    console.log("Error en el tipo de dato ingresado.");
  }
}

findTheOldest(people);
