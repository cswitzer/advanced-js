// if left side is truthy, return original value
// if left side is falsy, set to right side
const todo = { priority: "", task: "do something" };

// old way
// todo.priority || (todo.priority = "LOW");

// new way
todo.priority ||= "LOW";
console.log(todo.priority); // LOW
