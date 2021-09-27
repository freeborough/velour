import Ticker from "./Ticker.js";

var count = 0;
var deltaTime = 0n;
function doStuff(dt) {
  ++count;
  deltaTime += dt;
}

// Create a new Ticker to call doStuff with default properties (10 ticks per second) and start it.
const ticker = new Ticker({
  toCall: doStuff,
  duration: 5,
  onStop: () => {
    console.log(`Done!  Ticked ${count} times, averaging ${deltaTime/BigInt(count)} nanoseconds per tick, which is nice.`);
  }
});

ticker.start();
