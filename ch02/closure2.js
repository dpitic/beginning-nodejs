/**
 * Created by dpitic on 18/12/16.
 * The inner function can access the variables from the outer scope even after
 * the outer function has returned. This is because the variables are still
 * bound in the inner function and not dependent on the outer function.
 */
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction('hello closure!');

// Note the outerFunction has returned
innerFunction();    // logs hello closure!