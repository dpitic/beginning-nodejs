/**
 * Created by dpitic on 18/12/16.
 * Demonstration that an if statement does not create a new variable scope in
 * JavaScript (same for else and while). The only recommended way of creating
 * a new variable scope in JavaScript is using a function. So, in order to
 * create a new variable scope, we can use an immediately executing function.
 */
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);       // 456
