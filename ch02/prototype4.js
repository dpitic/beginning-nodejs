/**
 * Created by dpitic on 20/12/16.
 * Prototype is great for reading data off an object. However, if you set a
 * property on the object, you break the link with the prototype because the
 * prototype is only accessed if the property does not exist on the object.
 */
// Lets create a test function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;

// Lets create two instances
var bas = new foo();
var qux = new foo();

// Overwrite the prototype value for bas
bas.bar = 456;
console.log(bas.bar);       // 456; prototype not accessed

// Other objects remain unaffected
console.log(qux.bar);       // 123