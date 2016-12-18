/**
 * Created by dpitic on 18/12/16.
 * A function without a name is called an anonymous function. You can assign a
 * function to a variable. If you are going to use a function as a variable, you
 * don't need to name the function. The code below demonstrates two ways of
 * defining a function inline. Both of these methods are equivalent.
 */
var foo1 = function namedFunction() {   // no use of name, just wasted space
    console.log('foo1');
}
foo1();

var foo2 = function () {                // no function name; anonymous function
    console.log('foo2');
}
foo2();