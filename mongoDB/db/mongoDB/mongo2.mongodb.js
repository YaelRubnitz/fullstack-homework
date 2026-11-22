
mongodb_aggregation_exercises
// Exercise 1
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      borough: 1
    }
  }
]);

// Exercise 2
db.restaurants.aggregate([
  {
    $match: { borough: "Manhattan" }
  },
  {
    $count: "restaurantsInManhattan"
  }
]);

// Exercise 3
db.restaurants.aggregate([
  {
    $group: {
      _id: "$borough",
      count: { $sum: 1 }
    }
  }
]);

// Exercise 4
db.restaurants.aggregate([
  {
    $match: { borough: "Brooklyn" }
  },
  {
    $group: {
      _id: "$cuisine",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 5
  }
]);

// Exercise 5
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      borough: 1,
      avgScore: { $avg: "$grades.score" }
    }
  }
]);

// Exercise 6
db.restaurants.aggregate([
  {
    $match: { "grades.grade": "B" }
  },
  {
    $project: {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      borough: 1,
      grades: 1
    }
  }
]);

// Exercise 7
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      minScore: { $min: "$grades.score" },
      maxScore: { $max: "$grades.score" }
    }
  }
]);