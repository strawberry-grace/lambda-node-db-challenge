
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Graduate school",
          description:
            "Get that degree so you can get that paper.",
          completed: true
        },
        {
          name: "Travel to every country in the world (that I legally can)",
          description: "Try a food you've never tried, and take a selfie in the sunset.",
          completed: false
        },
      ]);
    });
};
