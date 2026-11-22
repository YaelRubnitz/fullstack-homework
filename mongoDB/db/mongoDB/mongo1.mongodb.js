

mongodb_restaurants_exercises
// Exercise 1
db.restaurants.find();

// Exercise 2
db.restaurants.find(
  {},
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 3
db.restaurants.find(
  {},
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 4
db.restaurants.find(
  {},
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 }
);

// Exercise 5
db.restaurants.find(
  { borough: "Bronx" }
);

// Exercise 6
db.restaurants.find(
  { borough: "Bronx" }
).limit(5);

// Exercise 7
db.restaurants.find(
  { borough: "Bronx" }
).skip(5).limit(5);

// Exercise 8
db.restaurants.find(
  { "grades.score": { $gt: 90 } }
);

// Exercise 9
db.restaurants.find(
  { grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } }
);

// Exercise 10
db.restaurants.find(
  { "address.coord.0": { $lt: -95.754168 } }
);

// Exercise 11
db.restaurants.find(
  {
    $and: [
      { cuisine: { $ne: "American " } },
      { "grades.score": { $gt: 70 } },
      { "address.coord.0": { $lt: -65.754168 } }
    ]
  }
);

// Exercise 12
db.restaurants.find(
  {
    cuisine: { $ne: "American " },
    "grades.score": { $gt: 70 },
    "address.coord.1": { $lt: -65.754168 }
  }
);

// Exercise 13
db.restaurants.find(
  {
    cuisine: { $ne: "American " },
    "grades.grade": "A",
    borough: { $ne: "Brooklyn" }
  }
).sort({ cuisine: -1 });

// Exercise 14
db.restaurants.find(
  { name: /^Wil/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 15
db.restaurants.find(
  { name: /ces$/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 16
db.restaurants.find(
  { name: /Reg/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 17
db.restaurants.find(
  {
    borough: "Bronx",
    $or: [
      { cuisine: "American " },
      { cuisine: "Chinese" }
    ]
  }
);

// Exercise 18
db.restaurants.find(
  { borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 19
db.restaurants.find(
  { borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 20
db.restaurants.find(
  { "grades.score": { $not: { $gt: 10 } } },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 21
db.restaurants.find(
  {
    $or: [
      { name: /^Wil/ },
      {
        $and: [
          { cuisine: { $ne: "American " } },
          { cuisine: { $ne: "Chinees" } }
        ]
      }
    ]
  },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// Exercise 22
db.restaurants.find(
  {grades:{$elemMatch : {
    "grades.date": ISODate("2014-08-11T00:00:00Z"),
    "grades.grade": "A",
    "grades.score": 11
  }}},
  { _id: 0, restaurant_id: 1, name: 1, grades: 1 }
);

// Exercise 23
db.restaurants.find(
    {"grades.1":{
    "date": ISODate("2014-08-11T00:00:00Z"),
    "grade": "A",
    "score": 9}
  },
  { _id: 0, restaurant_id: 1, name: 1, grades: 1 }
);

// Exercise 24
db.restaurants.find(
  { "address.coord.1": { $gt: 42, $lte: 52 } },
  { _id: 0, restaurant_id: 1, name: 1, address: 1, coord: 1 }
);

// Exercise 25
db.restaurants.find().sort({ name: 1 });

// Exercise 26
db.restaurants.find().sort({ name: -1 });

// Exercise 27
db.restaurants.find().sort({ cuisine: 1, borough: -1 });

// Exercise 28
db.restaurants.find(
  { "address.street": { $exists: true } }
);

// Exercise 29
db.restaurants.find(
  { "address.coord": { $type: 1 } }
);

// Exercise 30
db.restaurants.find(
  { "grades.score": { $mod: [7, 0] } },
  { _id: 0, restaurant_id: 1, name: 1, grades: 1 }
);

// Exercise 31
db.restaurants.find(
  { name: /mon/ },
  { _id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1 }
);

// Exercise 32
db.restaurants.find(
  { name: /^Mad/ },
  { _id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1 }
);

