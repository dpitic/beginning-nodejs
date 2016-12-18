/**
 * Created by dpitic on 18/12/16.
 * A nonexistent property on a variable returns undefined.
 */
var foo = { bar: 123 };
console.log(foo.bar);       // 123
console.log(foo.bas);       // undefined