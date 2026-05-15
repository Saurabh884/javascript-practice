//Write a simple currying function

const sum = (a) => {
  return (b) => {
    return a + b;
  };
};
const output = sum(2)(3);
console.log(output);

// Write an infinite currying function

const add = (a) => {
  return (b) => {
    if (b) return add(a + b);
    return a;
  };
};
const result = add(6)(3)(9)();
console.log(result);

//Write a reusable currying function

const evaluate = (operation) => {
  return (a) => {
    return (b) => {
      if (operation == "sum") {
        return a + b;
      } else if (operation == "substract") {
        return a - b;
      } else if (operation == "mul") {
        return a * b;
      }
    };
  };
};

const res = evaluate("mul")(2)(12);
console.log(res);
