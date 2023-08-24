import { getTasks, addTask, removeTask, updateTask } from "./tasks";

getTasks().forEach((element) => {
  const { id, name, completed } = element;

  console.log(element);
});

addTask("estudar react native");

removeTask(2);

updateTask(1, { name: "estudar react", completed: true });

getTasks().forEach((element) => {
  const { id, name, completed } = element;

  console.log(element);
});
