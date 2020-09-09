var newActivityCard = document.querySelector('.new-activity-card');

var currentActivity;

newActivityCard.addEventListener('click', selectActivity);

function selectActivity(event) {
  if (event.target.closest('.study-button')) {
    console.log("Hello");
  } else if (event.target.closest('.meditate-button')) {
    console.log("hi");
  } else if (event.target.closest('.exercise-button')) {
    console.log("hey");
  }
}
