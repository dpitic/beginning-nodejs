/**
 * Created by dpitic on 20/12/16.
 * The keyword this provides access to the calling context.
 */
var foo = {
    bar: 123,
    bas: function () {
        console.log('inside this.bar is:', this.bar);
    }
}

console.log('foo.bar is:', foo.bar);       // foo.bar is: 123
foo.bas();                                  // inside this.bar is: 123
