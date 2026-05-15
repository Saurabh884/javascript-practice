// #region 1. Basic Promise Structure

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

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const executePromise = async () => {
  const res = await myPromise;
  console.log(res);
};
executePromise();

// #endregion

// #region 2. Callback hell and refactoring with promises

const Operation1 = (cb) => {
  setTimeout(() => {
    console.log("Operation 1 handled successfully");
    cb();
  }, 1000);
};

const Operation2 = (cb) => {
  setTimeout(() => {
    console.log("Operation 2 handled successfully");
    cb();
  }, 2000);
};

const Operation3 = (cb) => {
  setTimeout(() => {
    console.log("Operation 3 handled successfully");
    cb();
  }, 3000);
};

Operation1(() => {
  console.log("Operation 1 done");
  Operation2(() => {
    console.log("Operation 2 done");
    Operation3(() => {
      console.log("Operation 3 done");
    });
  });
});

const Operation1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Operation 1 handled successfully");
    }, 1000);
  });
};

const Operation2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Operation 2 handled successfully");
    }, 2000);
  });
};

const Operation3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Operation 3 handled successfully");
    }, 3000);
  });
};

Operation1()
  .then((res) => {
    console.log(res);
    return Operation2();
  })
  .then((res) => {
    console.log(res);
    return Operation3();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const executePromises = async () => {
  const res1 = await Operation1();
  console.log(res1);

  const res2 = await Operation2();
  console.log(res2);

  const res3 = await Operation3();
  console.log(res3);
};
executePromises();

// #endregion

// #region 3. Promise.all , Promise.allSettled , Promise.race , Promise.any

Promise.all([Promise.resolve("A"), Promise.resolve("B"), Promise.resolve("C")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any([Promise.reject("A"), Promise.resolve("B"), Promise.reject("C")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([Promise.reject("A"), Promise.reject("B"), Promise.resolve("C")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// #endregion
