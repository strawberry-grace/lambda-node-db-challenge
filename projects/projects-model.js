const db = require('../data/db-config.js');

module.exports = {
    
    getProject: id => {
        if (id) {
            return db.select().from('projects').where({ id });
        } else {
            return db.select().from('projects');
        }
    },

    addProject: project => {
        return db.insert(project).into('projects');
    },

}