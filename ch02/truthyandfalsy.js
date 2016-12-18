/**
 * Created by dpitic on 18/12/16.
 * Truthy values are those that behave like tru in boolean operations. Falsy
 * values are those that behave like false in boolean operations. In general it
 * is easier to use if / else / ! for null / undefined instead of doing an
 * explicit check.
 */
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// Are these all falsy?
if (!false) {
    console.log('falsy');
}
if (!null) {
    console.log('falsy');
}
if (!undefined) {
    console.log('falsy');
}