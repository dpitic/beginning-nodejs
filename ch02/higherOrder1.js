/**
 * Created by dpitic on 18/12/16.
 * Since JavaScript allows us to assign functions to variables, we can pass
 * functions to other functions. Functions that take functions as arguments are
 * called higher-order functions.
 */
setTimeout(function () {
    console.log('2000 milliseconds have passed since this demo started');
}, 2000);