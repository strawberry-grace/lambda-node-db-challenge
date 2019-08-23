const db = require('../data/db-config.js');

module.exports = {
    
    getTask: id => {
        if (id) {
            return db('tasks as t').join('projects as p', 'p.id', 't.project_id').select('t.description', 't.notes', 't.project_id', 'p.name as project_name', 'p.description as project_description').where('t.id', id);
        } else {
            return db('tasks as t').join('projects as p', 'p.id', 't.project_id').select('t.description', 't.notes', 't.project_id', 'p.name as project_name', 'p.description as project_description');
        }
    },

    addTask: task => {
        return db.insert(task).into('tasks');
    },

}