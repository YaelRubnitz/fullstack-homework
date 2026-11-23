db.customers.aggregate([
  {
    $project: {
      _id: 0,
      first_name: 1,
      last_name: 1,
      country: 1
    }
  }
]);

db.customers.find()

db.customers.aggregate([
    {$match: { country : "Israel", age: {$gt : 40}
    }},
  {
    $project: {
      _id: 0,
      first_name: 1,
      last_name: 1,
      country: 1,
      age: 1
    }
  }
]);

db.purchases.find()

db.purchases.aggregate([
    {$match: { status : "shipped"
    }},
  {
    $count: "total shipped"
  }
]);

db.purchases.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "result"
    }
  },
  { $unwind: "$result" },
  {
    $project: {
      _id: 0,
      item: 1,
      first_name: "$result.first_name"
    }
  }
]);

db.customers.aggregate([
    { $match : {membership : "Gold"} },
    {
    $lookup: {
      from: "purchases",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "result"
    }
  },
  { $unwind: "$result" },
  {
    $project: {
      _id: 0,
      item: "$result.item",
      amount : "$result.amount",
      membership : 1

    }
  }
]);

db.stores.find()

db.purchases.aggregate([
  {
    $lookup: {
      from: "stores",
      localField: "store_id",
      foreignField: "store_id",
      as: "result"
    }
  },
  { $unwind: "$result" },
  {
    $project: {
      _id: 0,
      item: 1,
      store_name: "$result.store_name"
    }
  }
]);



db.purchases.aggregate([
  {
    $lookup: {
      from: "stores",
      localField: "store_id",
      foreignField: "store_id",
      as: "store"
    }
  },
  { $unwind: "$store" },
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $project: {
      _id: 0,
      first_name: "$customer.first_name",
      item: 1,
      city: "$store.city"
    }
  }
]);


db.purchases.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $group: {
      _id: "$customer.country",
      total_spent: { $sum: "$amount" }
    }
  }
]);



db.purchases.aggregate([
  {
    $lookup: {
      from: "stores",
      localField: "store_id",
      foreignField: "store_id",
      as: "store"
    }
  },
  { $unwind: "$store" },
  { $sort: { amount: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      item: 1,
      amount: 1,
      manager: "$store.manager"
    }
  }
]);


db.purchases.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $group: {
      _id: "$customer.membership",
      avg_amount: { $avg: "$amount" }
    }
  },
  {
    $project: {
      _id: 0,
      membership: "$_id",
      avg_amount: 1
    }
  }
]);



db.purchases.aggregate([
  { $match: { category: "Tech" } },
  {
    $lookup: {
      from: "stores",
      localField: "store_id",
      foreignField: "store_id",
      as: "store"
    }
  },
  { $unwind: "$store" },
  {
    $match: {
      "store.city": "London"
    }
  }
]);


db.purchases.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $group: {
      _id: "$customer.country",
      total_amount: { $sum: "$amount" }
    }
  },
  {
    $match: {
      total_amount: { $gt: 5000 }
    }
  },
  {
    $project: {
      _id: 0,
      country: "$_id",
      total_amount: 1
    }
  }
]);

db.stores.aggregate([
  {
    $project: {
      _id: 0,
      store_name: { $toUpper: "$store_name" },
      manager: "$manager"
    }
  }
]);


db.purchases.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $match: {
      "customer.country": "Canada"
    }
  },
  {
    $group: {
      _id: null,
      unique_items: { $addToSet: "$item" }
    }
  },
  {
    $project: {
      _id: 0,
      unique_items_count: { $size: "$unique_items" }
    }
  }
]);

db.purchases.aggregate([
  {
    $lookup: {
      from: "stores",
      localField: "store_id",
      foreignField: "store_id",
      as: "store"
    }
  },
  { $unwind: "$store" },
  {
    $group: {
      _id: "$store.city",
      total_revenue: { $sum: "$amount" },
      max_purchase: { $max: "$amount" }
    }
  },
  {
    $project: {
      _id: 0,
      city: "$_id",
      total_revenue: 1,
      max_purchase: 1
    }
  }
]);










