/**
 * Created by dpitic on 18/12/16.
 * Demonstration of thread starvation.
 */
// Utility function
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

// set up the timer
console.time('timer');
setTimeout(function () {
    console.timeEnd('timer');   // prints much more than 1000ms
}, 1000);

// Start the long-running operation
fibonacci(44);