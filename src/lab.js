import fetch from "node-fetch";

// Illustrating the benefits of async operations.
const config = {
  url: "https://toychester.com/",
  count: 5
};

async function doTest(i) {
  console.log(`Starting request #${i}`);
  const response = await fetch(config.url);
  console.log(`Finished request #${i} with status ${response.status}`);
}

for (let i = 0; i < config.count; i++) {
  doTest(i);
}

console.log("Done... ?");
