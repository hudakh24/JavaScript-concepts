const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Date());
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Date());
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Date());
  }, 3000);
});
const main = async () => {
  try {
    await promise1.then((res) => {
      console.log(res);
    });

    await promise2.then((res) => {
      console.log(res);
    });

    await promise3.then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
