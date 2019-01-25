const tasks = [];

exports.all = (req, res, next) => {
  res.json(tasks);
};

exports.create = (req, res, next) => {
  const task = {
    id: tasks.length + 1,
    description: req.body.description,
    author: req.body.author,
    createdAt: new Date(),
    updateAt: '',
  };

  tasks.push(task);

  res.json({ message: 'Created task' });
};

exports.read = (req, res, next) => {
  const taskId = req.params.id;

  const result = tasks.filter(task => task.id === +taskId);

  res.json(result);
};

exports.update = (req, res, next) => {
  const taskId = req.params.id;
  const result = tasks.findIndex(task => task.id === +taskId); // no uso filter porque da error

  const task = {
    id: taskId,
    description: req.body.description,
    author: req.body.author,
    createdAt: tasks[result].createdAt,
    updateAt: new Date(),
  };

  tasks.splice(result, 1, task);

  res.json({ message: `Updated task ${taskId}` });
};

exports.delete = (req, res, next) => {
  const taskId = req.params.id;
  const result = tasks.filter(task => task.id === +taskId);

  tasks.splice(result, 1);

  res.json({ message: `Deleted task ${taskId}` });
};
