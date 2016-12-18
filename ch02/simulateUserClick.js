/**
 * Created by dpitic on 18/12/16.
 * This code simulates a long-running operation using the setTimeout() function.
 * There is a single execution thread in JavaScript. If you have a long-running
 * operation (such as waiting for a timer to complete or a database query to
 * return), you must continue operation using a callback.
 */
function longRunningOperation(callback) {
    // simulate a 3 second operation
    setTimeout(callback, 3000);
}

function userClicked() {
    console.log('starting a long operation');
    longRunningOperation(function () {
        console.log('ending a long operation');
    });
}

// simulate a user action
userClicked();
