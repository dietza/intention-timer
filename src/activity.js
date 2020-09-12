class Activity {
  constructor(categoryName, categoryColor, description, minutes, seconds) {
    this.categoryName = categoryName;
    this.categoryColor = categoryColor;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    var parsedSeconds = parseInt(this.seconds);
    var counter = 0;
    function timerFunction() {
      this.seconds = parsedSeconds;
      counter++;
      this.seconds -= counter;
    }
    setInterval(timerFunction,1000)
  }

  markComplete() {

  }

  saveToStorage() {

  }
}
