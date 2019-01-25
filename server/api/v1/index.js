const router = require('express').Router();
const tasks = require('./tasks/routes');

router.use('/tasks', tasks);
router.use('/messages', tasks);

module.exports = router;
