/**
 * Created by dpitic on 18/12/16.
 * Combination of first-class functions with closures. This code simulates
 * handling a web request which has a long-running operation such as a database
 * query. This code demonstrates handling two request on a single thread.
 */
function longRunningOperation(callback) {
    // simulate a 3 second operation
    setTimeout(callback, 3000);
}

function webRequest(request) {
    // Closures provide access to the correct user request after the
    // long-running operation completes.
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function () {
        console.log('ending a long running operation for request:', request.id);
    });
}

// simulate a web request
webRequest({ id: 1});
// simulate a second web request
webRequest({ id: 2});