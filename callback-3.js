/**
 * * 24.06.30 (Sun) 정호연
 * * classroom  programming-8 ex
 * @param {number} a
 * @param {number} b
 * @returns a + b
 */
const exampleCallback = (a, b) => {
  return a + b;
};
/**
 *
 * @param {number} a
 * @param {number} b
 * @param {function} callback
 * @returns exampleCallback (a, b)
 */
const one = (a, b, callback) => {
  return callback(a, b);
};
const testOne = one(1, 2, exampleCallback);
console.log(testOne);

const two = (a, b, callback) => {
  return callback(a, b);
};

const testTwo = two(2, 3, (a, b) => {
  return a - b;
});
console.log(testTwo);

const anotherFunc = (a, b) => {
  return a + b;
};

const three = (a, b) => {
  return anotherFunc(a, b);
};
const testThree = three(3, 4);
console.log(testThree);
