
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: "Finish homework",
          notes: "It's a film essay about Brannigan's Camera Lens",
          completed: true
        },
        {
          project_id: 2,
          description: "Make an itinerary for Hong Kong",
          notes: "Sort it by island",
          completed: true
        },
        {
          project_id: 1,
          description: "Get an internship",
          notes: "Start with Production Assistant Intern positions around Atlanta",
          completed: false
        },
      ]);
    });
};
