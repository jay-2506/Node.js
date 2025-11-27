function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Database error"), 1000);
  });
}

async function main() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Handled error:", error);
  }
}

main();