/**
 * Created by dpitic on 18/12/16.
 * In JavaScript, everything is a reference. When one variable is assigned to
 * another, JavaScript copies a reference to the variable.
 */
var foo = { bas: 123 };
var bar = foo;          // bar is a reference (alias) to foo
bar.bas = 456;          // updates foo.bas
console.log(foo.bas);   // 456
