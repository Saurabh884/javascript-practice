//Write a simple closure function

const outerFunction = () => {
  const outerVar = "I am inside outer function scope";

  const innerFunction = () => {
    console.log(outerVar);
  };
  return innerFunction;
};
const output = outerFunction();
output();

// Write a closure function with setTimeout

const printOneToFive = () => {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
};

printOneToFive();
