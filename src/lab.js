import DeltaLoop from "./DeltaLoop.js";

var count = 0n;
var totalTime = 0n;

function doCount(dt) {
  count++;
  totalTime += dt;
}

const deltaLoop = new DeltaLoop(doCount);

setTimeout(() => {
  deltaLoop.stop();
  console.log(`We completed ${count} iterations in ${totalTime} nano seconds, averaging ${totalTime/count} nano seconds per iteration.`);
  process.exit(0);
}, 1000);

deltaLoop.start();