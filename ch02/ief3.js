/**
 * Created by dpitic on 18/12/16.
 * The only recommended way of creating a new variable scope in JavaScript is
 * using a function. So in order to create a new variable scope, we can use an
 * immediately executing function, as shown here.
 */
var foo = 123;
if (true) {
    (function () {      // create a new scope; anonymous function
        var foo = 456;
        console.log('In the immediately executing function foo =', foo)
    })();
}
console.log(foo);       // 123