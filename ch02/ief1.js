/**
 * Created by dpitic on 18/12/16.
 * Immediately Executing Function. Wrap the function in parentheses () and
 * invoke it. The reason for having an immediately executing function is to
 * create a new variable scope. An if, else or while does not create a new
 * variable scope in JavaScript.
 */
(function foo() {
    console.log('foo was executed!');
})();
