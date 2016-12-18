/**
 * Created by dpitic on 18/12/16.
 * Demonstration of copying an object.
 */
var foo = { bas: 123 };
var bar = { bas: foo.bas };     // copy by defining a new object bar

bar.bas = 456;          // change copy
console.log(foo.bas);   // 123; original is unchanged