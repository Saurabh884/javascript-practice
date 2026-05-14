//Create a new promise and resolve it using .then and by using async and await
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      res("Promise handled successfully");
    } else {
      rej("Promise rejected");
    }
  }, 1000);
});

//Resolving promise by using .then

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//Resolving it by using async and await

const executePromise = async () => {
  const res = await myPromise;
  console.log(res);
};
executePromise();
