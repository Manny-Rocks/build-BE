
exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      chef_name: "Colin",
      recipe_title: "Pizza",
      item_photo:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      chef_location: "Boston, Massachusetts",
      item_ingredients: "Pizza Dough, Pizza Sauce, Cheese, Basil",
      instructions:"whip it up and down until dough is fluffy",
      user_id: 1
    },
    {
      chef_name: "Naruto Uzumaki",
      recipe_title: " Ramen Soup",
      item_photo:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      chef_location: "Austin, TX",
      item_ingredients: "Water, Tomatoes, Cream, Basil",
      instructions:"boi a chicken and use the wayter as soup",

      user_id: 2
    },
    {
      chef_name: "Sam Smith",
      recipe_title: "Steak",
      item_photo:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      chef_location: "Colonie, NY",
      item_ingredients: "Cut of Steak",
      instructions:"fry that joint nitl its brown mane",

      user_id: 3
    }
  ]);
};