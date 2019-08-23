const express = require('express');

const Resources = require('./resources-model.js');

const errorHandler = require('../errorHandler.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.getResource();
        res.status(200).json(resources);
    } catch (error) {
        errorHandler(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [ resource ] = await Resources.getResource(id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ message: `Couldn't find the resource with ID ${id}` });
        }
    } catch (error) {
        errorHandler(error);
    }
});

router.post('/', async (req, res) => {
    const resourceData = req.body;
    try {
        const [ id ] = await Resources.addResource(resourceData);
        const [ resource ] = await Resources.getResource(id);
        res.status(201).json(resource);
    } catch (error) {
        errorHandler(error);
    }
});

module.exports = router;