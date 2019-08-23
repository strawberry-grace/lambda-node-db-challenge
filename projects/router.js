const express = require('express');

const Projects = require('./projects-model.js');

const errorHandler = require('../errorHandler.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProject();
        projects.map(project => {
            if (project.completed) {
                project.completed = true;
                return project;
            } else {
                project.completed = false;
                return project;
            }
        })
        res.status(200).json(projects);
    } catch (error) {
        errorHandler(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [ project ] = await Projects.getProject(id);
        if (project) {
            if (project.completed) {
                project.completed = true;
            } else {
                project.completed = false;
            }
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: `Couldn't find the project with ID ${id}` });
        }
    } catch (error) {
        errorHandler(error);
    }
});

router.post('/', async (req, res) => {
    const projectData = req.body;
    try {
        const [ id ] = await Projects.addProject(projectData);
        const [ project ] = await Projects.getProject(id);
        res.status(201).json(project);
    } catch (error) {
        errorHandler(error);
    }
});

module.exports = router;