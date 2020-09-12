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
    var counter = 0;
    counter++;
    return this.seconds -= counter;
  }

  markComplete() {

  }

  saveToStorage() {

  }
}
