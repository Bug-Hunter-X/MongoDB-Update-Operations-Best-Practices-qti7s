# Incorrect use of $inc operator in MongoDB update operation
This example demonstrates an incorrect use of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is used to increment a numeric field by a specified value. However, if you provide a string value instead of a number, the operation may fail or produce unexpected results. 

The `bug.js` file shows an example of the error, while `bugSolution.js` provides the correct solution. 

## Bug Description:
Using a string value ("10") instead of a numeric value (10) with the `$inc` operator will lead to incorrect behavior. The update operation might fail silently or not increment the field as expected. 

## Solution:
Ensure that the value used with the `$inc` operator is a number. 