let tasks = [];

const tarefas = {
  id: 0,
  name: "nome",
  completed: "completed",
};

const getTask = () => tasks;

const addTask = (taskName) => {
  const novaTarefa = {
    id: tarefas.id + 1,
    name: taskName,
    completed: false,
  };

  tasks.push(novaTarefa);
  tarefas.id++;
};

const removeTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
};

const updateTask = (taskId, updateObjeto) => {
    const mudarTarefa = tasks.find(task => task.id === taskId);

    if (updateObjeto){
        Object.assign(mudarTarefa, updateObjeto);
    }
}
