//Write a call, apply and bind function
function greetings(greeting, punctuation) {
  console.log(
    `${greeting} ${punctuation} My name is ${this.name}. I am from ${this.city}.`,
  );
}
const person = {
  name: "Saurabh",
  city: "Bangalore",
};
greetings.call(person, "Hi", "!");
greetings.apply(person, ["Hello", "guys"]);
const output = greetings.bind(person, "Hey", "everyone");
output();

//Polyfills of bind

Function.prototype.myBind = function (thisArgs, ...args) {
  let originalValue = this;

  return () => {
    originalValue = originalValue.apply(thisArgs, args);
  };

  return originalValue;
};

const person2 = {
  name: "Amit",
  city: "Hyderabad",
};

const res = greetings.myBind(person2, "Hey", "everyone");
res();
