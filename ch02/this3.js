/**
 * Created by dpitic on 20/12/16.
 * JavaScript's first-class support for functions enables us to attach a
 * function to any object and change the calling context.
 */
var foo = {
    bar: 123
};

function bas() {
    if (this === global)
        console.log('called from global');
    if (this === foo)
        console.log('called from foo');
}

// global context
bas();          // called from global

// from foo
foo.bas = bas;
foo.bas();      // called from foo