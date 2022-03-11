const wakeUp = () => `Acordando!!`;
const coffe = () => `Bora tomar café!!`;
const sleep = () => `Partiu dormir!!`;
const doThings = (callback) => callback();

console.log(doThings(wakeUp));
console.log(doThings(coffe));
console.log(doThings(sleep));
