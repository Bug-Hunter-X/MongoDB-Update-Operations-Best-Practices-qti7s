```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("651e9e7987654321")}, {"$inc": {"count": 10}});
```