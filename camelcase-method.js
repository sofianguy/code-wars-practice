// Write simple .camelcase method (camel_case function in PHP) for strings. All
// words must have their first letter capitalized without spaces.

// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  var splitArr = this.split(' ');
  var output = '';
  for (var i=0; i<splitArr.length; i++) {
    if (splitArr[i].match(/^[A-Z]+$/i)) {
      output = output + splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
    }
  }
  return output;
};
console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
