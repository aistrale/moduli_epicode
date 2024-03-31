function fx1(cb) {
  console.log("inside fx1");
  const result = cb(4, 2);
  return result;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// console.log(fx1(sum)); // ????
console.log(fx1(multiply)); // ????
