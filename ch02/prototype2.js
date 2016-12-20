/**
 * Created by dpitic on 20/12/16.
 * The new operator creates a new object and sets the __proto__ property to
 * the function's .prototype member. Prototypes are shared between all of the
 * objects created from the same function.
 */
// Lets create a test function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;

// Lets create a object using new
// foo.prototype will be copied to bas.__proto__
var bas = new foo();

// Verify the prototype has been copied
console.log(bas.__proto__ === foo.prototype);   // true
console.log(bas.bar);                           // 123