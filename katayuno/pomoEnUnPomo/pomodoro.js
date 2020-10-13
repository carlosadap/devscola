class Pomodoro {
  constructor(duration) {
    this.defaultDuration = 25;
    this.duration = duration;
  }

  getTime() {
    return this.duration > 0 ? this.duration : this.defaultDuration;
  }
}