import DeltaLoop from "./DeltaLoop.js";

var count = 0;
function doCount() {
  count++;
}

const deltaLoop = new DeltaLoop(doCount);

setTimeout(() => {
  deltaLoop.stop();
  console.log(`We completed ${count} iterations.`);
  process.exit(0);
}, 1000);

deltaLoop.start();