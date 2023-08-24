const tasks = [
  {
    id: 1,
    name: "nome",
    completed: false,
  },
  {
    id: 2,
    name: "gabriel",
    completed: false,
  },
];

const getTasks = () => tasks;

const addTask = (taskName) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    name: taskName,
    completed: false,
  };

  tasks.push(novaTarefa);
};

const removeTask = (taskId) => {
  const index = tasks.findIndex((task) => task.id === taskId);

  tasks.splice(index, 1);
};

const updateTask = (taskId, props) => {
  const index = tasks.findIndex((task) => task.id === taskId);

  tasks[index] = { id: taskId, ...props };
};

export { getTasks, removeTask, addTask, updateTasks };
