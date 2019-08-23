const express = require('express');

const Tasks = require('./tasks-model.js');

const errorHandler = require('../errorHandler.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getTask();
        tasks.map(task => {
            if (task.completed) {
                task.completed = true;
                return task;
            } else {
                task.completed = false;
                return task;
            }
        })
        res.status(200).json(tasks);
    } catch (error) {
        errorHandler(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [ task ] = await Tasks.getTask(id);
        if (task) {
            if (task.completed) {
                task.completed = true;
            } else {
                task.completed = false;
            }
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: `Couldn't find the task with ID ${id}` });
        }
    } catch (error) {
        errorHandler(error);
    }
});

router.post('/', async (req, res) => {
    const taskData = req.body;
    try {
        const [ id ] = await Tasks.addTask(taskData);
        const [ task ] = await Tasks.getTask(id);
        res.status(201).json(task);
    } catch (error) {
        errorHandler(error);
    }
});

module.exports = router;