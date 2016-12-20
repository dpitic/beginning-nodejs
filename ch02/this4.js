/**
 * Created by dpitic on 20/12/16.
 * If you call a function with the new operator, it creates a new object and
 * this within the function refers to this newly created object.
 */
function foo() {
    this.foo = 123;
    console.log('Is this global?:', this === global);
}

// Without the new operator
foo();          // Is this global?: true
console.log(global.foo);    // 123

// With new operator
var newFoo = new  foo();        // Is this global?: false
console.log(newFoo.foo);        // 123