const operations = {};

operations.add = (a, b) => {
  return a + b;
};

operations.multiply = (a, b) => {
  return a * b;
}
/* %Tape */

/* ~dab(add: add two numbers correctly, equal(operations.add(1|2), 3, Add numbers)) ; */

/* ~dab(Multiple numbers, equal(operations.multiply(1|2), 3, Multiple numbers));
*/

// dab hello

module.exports = operations;
