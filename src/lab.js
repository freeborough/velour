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

function doStuff() {
  process.stdout.write("+");
}

// Create a new Ticker to call doStuff with default properties (10 ticks per second) and start it.
const ticker = new Ticker({ functionToCall: doStuff });
ticker.start();

// Set a timer to quadruple the ticker rate after 1 second (1000 milliseconds).
setTimeout(() => {
  ticker.rate = 40;
}, 1000);

// Set a timer to stop the ticker after 2 seconds.
setTimeout(() => {
  ticker.stop();
}, 2000);
