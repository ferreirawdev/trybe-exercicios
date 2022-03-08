const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNewKey = (object, key, value) => {
  object[key] = value;
};

const listKeys = (object) => Object.keys(object);

const sizeOfObject = (object) => Object.keys(object).length;

const listValues = (object) => Object.values(object);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const totalNumberOfStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);

  for (let i = 0; i < array.length; i += 1) {
    total += object[array[i]].numeroEstudantes;
  }

  return total;
};

addNewKey(lesson2, "turno", "noite");
console.log(listKeys(lesson2));
console.log(sizeOfObject(lesson2));
console.log(listValues(lesson2));
console.log(allLessons);
console.log(totalNumberOfStudents(allLessons));
