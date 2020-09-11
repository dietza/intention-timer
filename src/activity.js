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
    console.log('yoyo');
  }

  markComplete() {

  }

  saveToStorage() {

  }
}
