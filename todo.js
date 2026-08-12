// Task object
// A new task will be created as incomplete
class Task {
  title;
  description;
  isComplete = false;

  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  // Mark a task as complete by setting the task's status
  markCompleted() {
    this.isComplete = true;
  }

  // Print the state of a task to the console in a nice readable way
  logState() {
    console.log(
      `${this.title} has${this.isComplete ? ' ' : ' not '}been completed`,
    );
  }
}

// DRIVER CODE BELOW
const task1 = new Task(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box',
);
const task2 = new Task('Do Laundry', '😨');
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
