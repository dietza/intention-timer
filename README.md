# Intention Timer Group Project

## Project Description

In this project we built an application that allows the user to create new activities within three specific categories, an intention and time limit. The application then allows the user to start a countdown timer for their custom activity. Upon completion, the user can log their activity where it will be documented and saved to session and localStorage. The user can create as many of these activities as they wish and delete all of them with just a click of a button.

- [Project Brief and Rubric](https://frontend.turing.io/projects/module-1/intention-timer-group.html)
- [Deployed Github Page](https://dietza.github.io/intention-timer/)

## Learning Goals

Complete 6 iterations that match the provided comp from the project description.

- Building an entire web app from scratch using the three primary Frontend languages, accomplishing:
  - semantic HTML
  - clean and organized CSS styles
  - DRY  JavaScript with a focus on SRP
- Working between two different JavaScript files and using a class to structure the Data Model.
- Using Event Delegation and Event Propagation to make features on the application dynamic.
- Utilizing LocalStorage to save Activities and persist on refresh.

## Functionality

- Build a form that represents an activity where each activity category represents a different color and the user is able to enter custom intention and time.
- When the Start Activity button is clicked, a timer is created based on the user's inputs. When the user clicks starts, the timer will countdown the specified amount of time and stop at 0.
- The user can log the completed activity by clicking the button and a mini activity card will show up on the right hand side of the screen.
- Once the activity is logged, it is saved to localStorage and will persist on page refresh.
- The user can log additional activities by returning to the main page and continue to add to their past activities. 
- These activities can be cleared from session and localStorage by clicking the Remove Activities button.

![gif of website functionality](https://media.giphy.com/media/3esbWhwSqI0hBvCcc1/giphy.gif)

## Programming Languages Used

- HTML in `index.html`
- CSS in `styles.css`
- Vanilla JavaScript
  - in `main.js`
  - an Actvity Class in `activity.js`

## Planning

Contributors communicated mostly over Slack and collaborated over Tuple where we pair-programmed each iteration. Our DTR can be [found here](https://docs.google.com/document/d/1eViwBoq7kedJ0B0w-qlkOXThaszUpHE-Mm5BNhd_KJo/edit).

### Challenges

- Timer Clock 
  - Connecting the countdown with the data model and understanding how data types can change using `setInterval()`
  - Stopping the timer with `clearInterval()`
- Refactoring for event delegation
  - Accessing  'grandchildren' elements using the `event.target`.
  - Styling blocks of HTML that are inserted via JavaScript.
- Working within multiple .js files
  - Understanding how responsibility is delegated for each file
- Working in a group of three and alternating drivers and navigators.

### Wins

- Using event delegation on all pieces of the web app besides the original form.
- Manipulating a timer clock that aligned both the data model and the DOM.
- Effectively refactoring for functionality and readability after each iteration with the next step in mind.
- Utilizing localStorage to make unique activities persist on page load.
- Adding extra functionality that allows users to delete all past activities on button click.

## Set Up Instructions

1. Fork [this repository](https://github.com/dietza/intention-timer) and clone it down to your local machine.
2. Move into that directory: `cd intention-timer`.
3. Run `open index.html` to run the app!
4. To see the code itself run `(your text editor) . `

## Contributors

* [Allison Dietz](https://github.com/dietza)
* [Alyssa Bull](https://github.com/alyssabull)
* [JP Carey](https://github.com/jaypeasee)
* [Heather Faerber](https://github.com/hfaerber) - Code Reviewer (Allison's Mentor)

* [Will Mitchell](https://github.com/wvmitchell) - Project Manager
