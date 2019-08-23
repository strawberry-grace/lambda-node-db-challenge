
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "Books",
          description: "textbooks and junk"
        },
        {
          name: "CD-ROMs",
          description: "that stuff we used to use for software"
        },
        {
          name: "Public Libraries",
          description: "academic papers and published books and stuff",
        },
      ]);
    });
};
