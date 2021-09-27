export default class DeltaLoop {
  running = false;

  constructor(callback) {
    this.callback = callback;
  }

  start() {
    this.running = true;
    this.loop();
  }

  stop() {
    this.running = false;
  }

  loop() {
    if(this.running) {
      setImmediate(() => {
        this.callback();
        this.loop();
      })
    }
  }
}