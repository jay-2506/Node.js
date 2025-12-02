function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched from server!");
    }, 2000);
  });
}

getData().then((result) => {
  console.log("Using Promise:", result);
});

async function showData() {
  const result = await getData();
  console.log("Using async/await:", result);
}

showData();
