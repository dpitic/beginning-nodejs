/**
 * Created by dpitic on 20/12/16.
 * The try...catch...finally error handling won't work for asynchronous
 * execution.
 */
try {
    setTimeout(function () {
        // By the time this callback function executes, the thread of execution
        // is already outside of the try/catch block.
        console.log('About to throw an error');
        // This exception will not be caught in this try/catch block
        // (The correct way to handle this situation is to handle the error
        // inside the function).
        throw new Error('Error thrown');
    }, 1000);
}
catch (e) {
    console.log('I will never execute!');
}

console.log('I am outside the try block');