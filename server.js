const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/router.js');
const resourcesRouter = require('./resources/router.js');
const tasksRouter = require('./tasks/router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);

module.exports = server;