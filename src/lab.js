/*
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
*/

// Using the Ticker class to have code executed at specific, adjustable rates.

import Ticker from "./Ticker.js";


var count = 0;
function doStuff() {
  ++count;
}

// Create a new Ticker to call doStuff with default properties (10 ticks per second) and start it.
const ticker = new Ticker({
  toCall: doStuff,
  duration: 1,
  onStop: () => {
    console.log(`Done!  Ticked ${count} times, which is nice.`);
  }
});

ticker.start();
