use("DatabaseName");

db.createCollection("new_collection");

db.new_collection.drop();

db.new_collection.insertOne({
  key1: "value1",
  key2: "value2",
});

db.new_collection.deleteOne({
  key1: "value1",
});
