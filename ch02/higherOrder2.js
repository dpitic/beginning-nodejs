/**
 * Created by dpitic on 18/12/16.
 * Explicit demonstration of higher-order functions accepting other functions
 * as arguments.
 */
function foo() {
    console.log('2000 milliseconds have passed since this demo started');
}
setTimeout(foo, 2000);