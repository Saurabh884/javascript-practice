//Debounce

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const handleSearch = (e) => {
  console.log("Searching for", e.target.value);
};

const debouncedSearch = debounce(handleSearch, 1000);

const inputbox = document.getElementById("searchInput");

inputbox.addEventListener("input", debouncedSearch);

//Polyfill

Function.prototype.myDebounce = function (delay) {
  let timer;
  let fn = this;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

function print(name) {
  console.log(name);
}

const result = print.myDebounce(1000);

result("Saurabh");
