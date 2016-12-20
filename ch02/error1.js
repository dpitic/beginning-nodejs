/**
 * Created by dpitic on 20/12/16.
 * Demonstration of try...catch...finally error handling. This method of
 * exception handling is suitable for synchronous execution, but it will not
 * work for asynchronous execution.
 */
try {
    console.log('About to throw an error');
    throw new Error('Error thrown');
}
catch (e) {
    // Executes only if an error was thrown in the try block
    console.log('I will only execute if an error is thrown');
    console.log('Error caught:', e.message);
}
finally {
    // Always executes
    console.log('I will execute irrespective of an error thrown');
}