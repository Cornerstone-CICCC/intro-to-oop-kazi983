// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  return {
    title,
    description,
    complete: false,

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function (task) {
      this.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logState: function (task) {
      console.log(
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`,
      );
    },
  };
}

// DRIVER CODE BELOW
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box',
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

/* 
newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
 */
