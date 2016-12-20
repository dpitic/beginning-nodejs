/**
 * Created by dpitic on 20/12/16.
 * The correct way to handle asynchronous errors is to handle them inside
 * the callback function.
 */
setTimeout(function () {
    try {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }
    catch (e) {
        console.log('Error caught!');
    }
}, 1000)

console.log('I am outside the try block');