var $ = require('jquery');
var Person = require('./modules/Person');

//alert("webpack automationdgegg");

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Person("Jane Smith", "Green");
jane.greet();
