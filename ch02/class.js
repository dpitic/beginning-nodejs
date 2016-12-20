/**
 * Created by dpitic on 20/12/16.
 * Within the member function we can access the current instance using this,
 * even though the same function body is shared between instances. This is
 * because we call a function on some instance, and this inside the function
 * refers to the instance used.
 *
 * The main difference with the revealing module pattern is that functions are
 * shared between instances and don't take up memory for each new instance. This
 * is because functions are only on .prototype and not on this. Most classes
 * inside core Node.js are written using this pattern.
 */
// Class definition
function someClass() {
    // Properties go here
    this.someProperty = 'some initial value';
}
// Member functions go here
someClass.prototype.someMemberFunction = function () {
    /* Do something using this */
    this.someProperty = 'modified value';
}

// Creation
var instance = new someClass();

// Usage
console.log(instance.someProperty);     // some initial value
instance.someMemberFunction();
console.log(instance.someProperty);     // modified value