class Activity {
  constructor(categoryName, categoryColor, description, minutes, seconds) {
    this.categoryName = categoryName;
    this.categoryColor = categoryColor;
    this.description = description;
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    var totalSeconds = (this.minutes * 60) + this.seconds;
    var counter = 0;
    counter++;
    totalSeconds -= counter;
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
    return `${this.minutes}:${this.seconds}`
    // 0 in seconds is showing up so we need to fix interval
    // seconds should be limited to 2 digits per fields
    // should always have at least 4 digits in the log.
    // is convertTime working at all? is it because of partseInt on property?
  }

  markComplete() {

  }

  saveToStorage() {

  }
}
