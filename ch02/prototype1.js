/**
 * Created by dpitic on 20/12/16.
 * When you read a property on an object (eg. foo.bar), JavaScript checks that
 * this property exists on foo. If not, it checks if the property exits on
 * foo.__proto__ and so on until __proto__ itself is not present. If a value is
 * found at any level, it is returned, otherwise undefined is returned.
 *
 * Conventionally the __ prefix is used to define private properties, which
 * should not be used by user code.
 */
var foo = {}
foo.__proto__.bar = 123;
console.log(foo.bar);       // 123