function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      fn.apply(this, args);
    }
  };
}

function handleSearch(event) {
  console.log("Searching:", event.target.value);
}

const inputBox = document.getElementById("searchInput");

const throttledSearch = throttle(handleSearch, 3000);

inputBox.addEventListener("input", throttledSearch);

//Polyfill
Function.prototype.myThrottle = function (delay) {
  let lastCall = 0;

  let fn = this;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      fn.apply(this, args);
    }
  };
};
