const db = require('../data/db-config.js');

module.exports = {
    
    getResource: id => {
        if (id) {
            return db('resources').where({ id });
        } else {
            return db('resources');
        }
    },

    addResource: resource => {
        return db.insert(resource).into('resources');
    },

}