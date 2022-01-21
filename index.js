// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true; //= true;
    },
    logState: function() {
      console.log(`${this.title} is ${this.comlete ? '' : 'not'} complete`);
    }
  }
  return task;
}
// function logState(task) {
//   console.log(`${task.title} is ${task.comlete ? '' : 'not'} complete`);
// }
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "clean your dirty clothes"); // task 1
const tasks =[task1, task2];

//console.log(task1);
task1.logState();
task1.completeTask();
task1.logState();
console.log(tasks);
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
