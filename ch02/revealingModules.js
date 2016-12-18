/**
 * Created by dpitic on 18/12/16.
 * The revealing module pattern is based on JavaScript's support for closures
 * and the ability to return arbitrary (function + data) object literals.
 */
function printableMessage() {
    var message = 'hello';
    function setMessage(newMessage) {
        if (!newMessage) throw new Error('cannot set empty message');
        message = newMessage;
    }
    function getMessage() {
        return message;
    }
    function printMessage() {
        console.log(message);
    }

    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };
}

// Pattern in use
var awsome1 = printableMessage();
awsome1.printMessage();     // hello

var awsome2 = printableMessage();
awsome2.setMessage('hi');
awsome2.printMessage();     // hi

// Since we get a new object every time we call the module function,
// awsome1 is unaffected by awsome2
awsome1.printMessage();     // hello