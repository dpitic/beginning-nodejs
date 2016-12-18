/**
 * Created by dpitic on 18/12/16.
 * Demonstration of JavaScript's falsy (where something behaves like false). The
 * === operator performs strict (exact) equality checks.
 */
console.log('' == '0');     // false
console.log('' == 0);       // true because both are falsy

console.log('' === '0');    // false
console.log('' === 0);      // false