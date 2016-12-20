/**
 * Created by dpitic on 20/12/16.
 * Notifying callback functions of success and error. Node.js has a convention
 * of calling callbacks with the first argument of error, if there is an error.
 * If there is no error, we call back with the error set to null.
 */
function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed
        throw new Error('connection failed');

        // Notify callback that connection succeeded
        callback(null, connection);
    }
    catch (error) {
        // Notify callback about error
        callback(error, null);
    }
}

// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection);
    }
});
