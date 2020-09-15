class Activity {
  constructor(categoryName, categoryColor, description, minutes, seconds) {
    this.categoryName = categoryName;
    this.categoryColor = categoryColor;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.countdownMinutes = minutes;
    this.countdownSeconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    var totalSeconds = (this.countdownMinutes * 60) + this.countdownSeconds;
    var counter = 0;
    counter++;
    totalSeconds -= counter;
    this.countdownSeconds = totalSeconds % 60;
    if (this.countdownSeconds === 59) {
      this.countdownMinutes--;
    }
    return `${this.countdownMinutes}:${this.countdownSeconds}`;
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {

  }
}
