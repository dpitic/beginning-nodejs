/**
 * Created by dpitic on 20/12/16.
 * Demonstrate the calling context if a function is called without any prefix.
 */
function foo() {
    console.log('is this called from globals? :', this === global);     // true
}
foo();
