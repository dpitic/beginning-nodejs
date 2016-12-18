/**
 * Created by dpitic on 18/12/16.
 * Whenever a function is defined inside another function, the inner function
 * has access to the variables defined in the outer function. The variables in
 * the outer function have been closed by (or bounded in) the inner function.
 */
function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);   // access variable from outer
    }

    // Call the local function to demonstrate that it as access to arg
    bar();
}

outerFunction('hello closure!');
