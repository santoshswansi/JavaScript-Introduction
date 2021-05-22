// CHANGING HTML ELEMENT'S CONTENT USING JAVASCRIPT :
// ____________________________________________________
// document.getElementById("demo").innerHTML = "Hello";


// CHANGING HTML ELEMENT'S ATTRIBUTE USING JAVASCRIPT :
// ______________________________________________________
// document.getElementById("demo").src = "image.png";

// CHANGING STYLE (CSS) OF HTML ELEMENT :
// _________________________________________
// document.getElementById("demo").style.fontSize = "12px";


// HIDING ELEMENT USING JAVASCRIPT :
// ______________________________________
// document.getElementById("demo").style.display = "none"

// WHERE TO PUT JS SCRIPT :
// ___________________________

/*
  1.) INTERNAL JAVASCRIPT :(Inside body OR head section)
  _______________________________________________________
    <script> console.log("Internal JS");  </script>

  2.) EXTERNAL JAVASCRIPT:
  __________________________________________________________
      a.) <script src="index.js> </script>
      b.) <script src="https://www.w3schools.com/js/myScript1.js"></script>


  External JavaScript Advantages :
  ________________________________________
    -> It separates HTML and code
    -> It makes HTML and JavaScript easier to read and maintain
    -> Cached JavaScript files can speed up page loads
*/

// OUTPUT
/*
 -> innerHTML
 -> document.write() (Overrites existing HTML code)
 -> window.alert()  ('window' optional)
 -> console.log()

*/

// The alert() function is a property of browser window objects.
// It is not really part of JavaScript; it's just a facility available
// to JavaScript code in that environment.
// window.alert("Hello");
console.log("World");



// VARIABLES :
// _______________________

var a=5, b=6, c;   // 'c' has a value of 'undefined'
c= a+b;
console.log(c);

// Identifiers Naming Convention :
// ________________________________
// a.) Names can contain letters, digits, underscores,
//     and dollar signs.
// b.) Names must begin with letter, underscore or dollar sign

// NOTE : If you re-declare a JavaScript variable, it will not lose its value.


console.log("5" + 1 + 5);  // 515

// -> In the JavaScript library jQuery the main function $ is
//    used to select HTML elements.
// -> In jQuery $("p");
//         ->means "select all p elements".


// OPERATORS :
// ____________________

// ARITHMETIC :
// +, -, *, /, **, ++, --, %

// ASSIGNMENT:
// +=, -=, *=, /=, **=, %=, =

// STRING :
// +  console.log("hello" +" " + "world!")

// COMPARISON OPERATORS :
//  <, > , >=, <=, ?:(ternary operator)
// == (equal to and not necessary same type)
// != (Not equal to)
// === (equal and same type)


// LOGICAL OPERATORS :
// ||, &&, !

// TYPE OPERATORS:
// a.) typeof()
//      -> Type of the variable
// b.) instanceof()
//      -> 	Returns true if an object is an instance of an
//          object type.


// BITWISE OPERATORS  :
// ________________________________________________________
// -> Bit operators work on 32 bits numbers.
// -> Any numeric operand in the operation is converted into
//    a 32 bit number. The result is converted  back to a
//    JavaScript number.

//  -> &, | , ~(NOT), ^(XOR)
//  a.) << (ZERO FILL LEFT SHIFT)
//  b.) >> (SIGNED RIGHT SHIFT)
//  c.) >>> (ZERO FILL RIGHT SHIFT)

// OPERATOR PRECEDENCE :
// _____________________________________
// {*, /} have higher precedence than {-, +}



// DATA TYPES :
// _________________________________________
var length = 16;                               // number
lastName = "Johnson";                      // string
name = {firstName:"John", lastName:"Doe"};    // object

// boolean
var age = 14;
var is_valid = (age >= 18);

// Array  (It is also of type 'object')
var cars = ["Tata", "Volvo", "BMW"];

console.log(typeof(length));
console.log(typeof(lastName));
console.log(typeof(name));
console.log(typeof(is_valid));
console.log(typeof(cars));

// javascript types are dynamic\
x = 15;   // number
x = "Hello";  // string
x = {firstName: "Santosh", lastName:"Swansi"};  // object


// UNDEFINED :
// __________________________________________________________________
// In JavaScript, a variable without a value, has the value undefined.

//  NULL  :
// ___________
// In JavaScript null is "nothing"


// Difference Between Undefined and Null :
// ____________________________________________________________
// 'undefined' and 'null' are equal in value but different in type.


x = undefined; // variable is emptied

// BASIC DATA TYPES :
// ______________________
// string
// number
// boolean
// undefined

// COMPLEX DATA TYPES :
// _________________________
// object   (For  objects, arrays, null)
// function (For function)

// FUNCTIONS

function is_valid_age(age){
    return age >= 18;
}

console.log(is_valid_age(23));
console.log(is_valid_age);  // function object

// OBJECTS :
// ___________________________

// Defining object
var car = {
    name: 'Fiat',
    model: 500,

    // Both ways of defining methods
    // 'this' refers to the "owner" of the function.
    start: function start(){
        console.log(this.name + '-' + this.model + ' started!');
    },
    stop: function(){
        console.log(this.name + '-' + this.model + ' stoped!');
    }
};


// Adding properties and methods dynamically
car.weight = 415;
car.speed = 300;

car.drive = function drive(){
    console.log(car.name + '-' + car.model + ' is being driven!');
}
car.brake = function brake(){
    console.log(this.name + '-' + this.model + ' is slowd down!');
}

// Accessing methods and properties
console.log(car.weight);
console.log(car['start']);

// Running methods
car.stop();




// Do Not Declare Strings, Numbers, and Booleans as Objects!
// ___________________________________________________________
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object

// Avoid String, Number, and Boolean objects.
// They complicate your code and slow down execution speed.
console.log(x);


/*
                                     EVENTS :
  ________________________________________________________________________
   -> An HTML event can be something the browser does, or something a
      user does.

   -> EXAMPLES:
      --------------------------
      a.) An HTML web page has finished loading
      b.) An HTML input field was changed
      c.) An HTML button was clicked
   -> JavaScript allows us to do something when some event has occurred!

   -> Examples :
    _____________________________________________________________________
    # It changes the content of the element with id="demo".
    a.) <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

    # It changes the content of its own element ( Using this.innerHTML )
    b.) <button onclick="this.innerHTML = Date()">The time is?</button>

    # Using javascript function to run when we press the following button
    -----------------------------------------------------------------------
    c.) <button onclick="displayDate()">The time is?</button>


    COMMON HTML EVENTS  :
    ____________________________________________________________________

    Event	                                Description
    --------------------------------------------------------------------
    onchange	        An HTML element has been changed
    onclick	            The user clicks an HTML element
    onmouseover	        The user moves the mouse over an HTML element
    onmouseout	        The user moves the mouse away from an HTML element
    onkeydown	        The user pushes a keyboard key
    onload	            The browser has finished loading the page
 */


// JAVASCRIPT STRINGS
var firstName = "Santosh";
var lastName = 'Swansi';

var fullName = firstName + lastName;

// Length
console.log(fullName.length);

// Escape Characters :
/*

    \"      inserts a double quote in a string
    \'      inserts a single quote in a string
    \\      inserts a backslash
    \b	    Backspace
    \f	    Form Feed  ( To take control at starting of next page. )
    \n	    New Line
    \r	    Carriage Return   (To take control at starting of same line.)
    \t	    Horizontal Tabulator  (tab space)
    \v	    Vertical Tabulator    (vertical tab space)

 */

// Horizontal Tabulator
console.log('Hello\tWorld');

// Vertical Tabulator
// Hello
//      World
console.log('Hello\vWorld');


// Breaking long line codes:
// ________________________________
var x = "this is a long \
          line";

// Safer way
var x = "this is  a long"
          + "line";


// STRINGS CAN BE OBJECTS :
// ___________________________________
var firstName = new String("John");
var fName = "John";

console.log(firstName == fName); // true
console.log(firstName === fName); // false (Type is not same)


// NOTE : Don't create strings as objects. It slows down execution speed.


// STRINGS METHODS :
// _________________________________________________________________________
//  With JavaScript, methods and properties are also available to
//  primitive values, because JavaScript treats primitive values
//  as objects when executing methods and properties.

var name = "Santosh Swansi";

// length
console.log(name.length);

// Finding a String in a String

// First occurrence index
console.log(name.indexOf('s'));

// Last occurrence Index (lastIndexOf() starts searching from end)
console.log(name.lastIndexOf('s'));

// ( Returns -1 if not present)

// 'second' parameter : Start searching from that index!
console.log(name.indexOf('s', 7));

// start searching from 5-th index to 0-th index
console.log(name.lastIndexOf('s', 5));

// search()
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

// Differences between indexOf() & search() :
// --------------------------------------------------------------------
// -> The search() method cannot take a second start position argument.
// -> The indexOf() method cannot take powerful search values
//    (regular expressions).


// EXTRACTING STRING PARTS:
// ------------------------------------

// 1.) slice(start, end) : Extracts a part of a string and returns the
//               extracted part in a new string.
//    NOTE : end (exclusive)
// -----------------------------------------------------------------------
var res = name.slice(7, 11);
console.log(res);

res = name.slice(7);
console.log(res);

res = name.slice(-12, -6); // start from 12-th position from back
console.log(res);

// 2.) substring(start, end) :
//    -> Similar to slice().
//    -> substring() cannot accept -ve indexes.
// -----------------------------------------------------------------------
res = name.substring(0, 5);
console.log(res);


// 3.) substr() :substr(start, length)
// --------------------------------------------------------------------------
//  -> Similar to slice().
//  -> second parameter = length of the extracted part.
res = name.substr(0, 5);
console.log(res);


// REPLACE :
//    -> Using replace(searchValue, replaceValue) not-in-place method
//    -> Case-Sensitive
//    -> Only replaces the first match
// -----------------------------------------------------------------------
var str = "Please visit College!";
var changed_str= str.replace("visit College", "do internship");
console.log(changed_str);

// IGNORE CASE :
// ----------------------------
//  -> Use a regular expression with an /i flag (insensitive):
//  -> NOTE : Regular expressions are written without quotes (JavaScript)
var changed_str= str.replace(/VISIT COLLEGE/i, "do internship");
console.log(changed_str);

// REPLACES ALL MATCHES :
// --------------------------------------------
//  -> Use /g flag (global match)
str = "Please visit College and College!";
var changed_str = str.replace(/Collge/g, "internships");
console.log(changed_str);

// CASE CONVERSION :
// -------------------------------------------------------
console.log(name.toUpperCase());
console.log(name.toLocaleLowerCase());


// STRING CONCATENATION :
// ------------------------------------------------------
// Strings are immutable: Strings cannot be changed, only replaced.

//Both  are same
console.log("firstName" + ' ' + 'lastName');
console.log("firstName".concat(' ', 'lastName'));


// STRING TRIM :
// ------------------------
var str = "       Hello World!        ";
console.log(str.trim());

// -> Some browser does not support it :

// -> Use regex to do the same
str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')

// -> We can also modify the method by using 'regex' and 'prototype'
//    when it is not working.
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}


// EXTRACTING STRING CHARACTERS :
// -------------------------------------------------------------------------


// charAt() :
console.log(name.charAt(0));


// charCodeAt() :
// -> Returns the unicode of the character.
// -> Returns an UTF-16 code (an integer between 0 and 65535).
console.log(name.charCodeAt(0));


// PROPERTY ACCESS :
// ----------------------------
console.log(name[0])

/*
    Property access might be a little unpredictable:
    ---------------------------------------------------------
    -> It does not work in Internet Explorer 7 or earlier
    -> It makes strings look like arrays (but they are not)
    -> If no character is found, [ ] returns undefined,
       while charAt() returns an empty string.
    -> It is read only. str[0] = "A" gives no error (but does not work!)
 */

// CONVERTING STRING TO ARRAY :
// --------------------------------
var txt = "a,b,c,d,e";   // String
console.log(txt.split(","));          // Split on commas
console.log(txt.split(" "));          // Split on spaces
console.log(txt.split(''));           // Split in characters

// JAVASCRIPT NUMBERS :
// -----------------------------------

var a = 1;
a = 1.2233;
a = 123e4;  // [ 123 x pow(10, 4) ]
a = 123e-4; // [ 123 x pow(10, -4) ]


// JavaScript Numbers are Always 64-bit Floating Point  :
// --------------------------------------------------------
// Value (aka Fraction/Mantissa)	    Exponent	           Sign
// -----------------------------------------------------------------------
//    52 bits (0 - 51) 	            11 bits (52 - 62)	    1 bit (63)


// PRECISION :
// -----------------------------------------
// -> Integers (numbers without a period or exponent notation) are accurate
//    up to 15 digits.

var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000

// -> The maximum number of decimals is 17
// -> PROBLEM:  floating point arithmetic is not always 100% accurate:
console.log(0.1 + 0.2);

// SOLUTION (Multiply and divide by 10):
console.log((0.1 * 10 + 0.2 * 10 )/10);

// ADDING NUMBERS AND STRINGS   :
// -----------------------------------
// + : Numbers are added. Strings are concatenated.
var x = 10;
var y = 12;
console.log(x + y);

x = '10';
y = '12';
console.log(x + y);

// EXAMPLES (JavaScript interpreter works from left and right):
// '10' + 20 = '1020'
//  10 + '20' = '1020'
//  10 + 20 + '30' = '3030'
//  '10' + '20' + 30 = '102030'


// NUMERIC STRINGS :
// ----------------------------------------------

// -> JavaScript will try to convert strings to numbers in all
//    numeric operations

x = '100';
y = '10';
console.log(x / y);  // 10
console.log(x * y);  // 1000
console.log(x - y); // 90
console.log(x + y); // '10010'


// Not A Number (NaN) :
// ------------------------------------------
//  -> NaN is a JavaScript reserved word indicating that a number is not
//     a legal number.
//  -> Trying to do arithmetic with a non-numeric string will result
//     in NaN (Not a Number)

console.log(12/'Apple'); // NaN
console.log(100/ '10'); // 10

// CHECK FOR NaN
console.log(isNaN(12/'Apple')); // true

x = NaN;
y = 10;
console.log(x + y); // NaN

console.log(typeof(NaN)); // number


// INFINITY :
// -> Infinity (or -Infinity) is the value JavaScript will return
//    if you calculate a number outside the largest possible number.

x = 2;
while(x != Infinity){
    x = x * x;
}

// Division by 0 = Infinity
console.log(12/0);  // Infinity
console.log(-12/0); // Infinity

// Type of Infinity = number
console.log(typeof(Infinity));


// HEXADECIMAL NUMBERS :
// ----------------------------------------

// -> Numbers preceded by 0x is treated as hexadecimal
// -> Never write a number with a leading zero (like 07).
// -> Some JavaScript versions interpret numbers as octal if they
//     are written with a leading zero.

x =  0xFF;  // (FF, 16) = (1111 1111, 2)  =  (255, 10) = (377, 8)

console.log(x);
console.log(x.toString(2));   // binary
console.log(x.toString(10));  // decimal
console.log(x.toString(16));  // hexadecimal
console.log(x.toString(8));   // octal


// NUMBERS CAN BE OBJECTS :
// -------------------------------------------------
a = 100;
b = new Number(100);
var c = new Number(100)

console.log(a == b); // true
console.log(a === b); // false

console.log(b == c); // false (Objects cannot be compared)


// NUMBER METHODS AND PROPERTIES :
// --------------------------------------------------------------------
// -> JavaScript treats primitive values as objects when executing
//    methods and properties.

// 1.) toString()
x = 123;
x.toString();            //  123
(123).toString();        //  123
(100 + 23).toString();   //  123

// 2.) toExponential()
// -> Returns a string, with a number rounded and written using
//    exponential notation
x = 9.567;

console.log(x.toExponential());    // 9.567e+0
console.log(x.toExponential(2)); // 9.57e+0

// 3.) toFixed() :
// -> Returns a string, with the number written with a specified
//    number of decimals:

x = 2.34527;
console.log(x.toFixed(2));  // 2.35
console.log(x.toFixed(4));  // 2.3453


// 4.) toPrecision()
//  -> Returns a string, with a number written with a specified length

x = 2.34527;
console.log(x.toPrecision(2));  // 2.3
console.log(x.toPrecision(4));  // 2.345


// -> The valueOf() method is used internally in JavaScript to convert
//    Number objects to primitive values.
// -> All JavaScript data types have a valueOf() and a toString() method


// CONVERTING VARIABLES TO NUMBERS :
// -------------------------------------------------------------------

// -> These methods are not number methods, but global JavaScript methods.

// A.) Number() : Convert JavaScript variables to numbers
// -------------------------------------------------------------
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// The Number() Method Used on Dates :
//----------------------------------------------------
// returns the number of milliseconds since 1.1.1970.
console.log(Number(new Date("2017-09-30")));  // returns 1506729600000


// B.) parseInt()
// ---------------------------------------------
// -> It parses a string and returns a whole number.
//    Spaces are allowed. Only the first number is returned:
// -> If the number cannot be converted, NaN  is returned.

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN


// C.) parseFloat()
// -----------------------------------------------------------------------
//  -> Parses a string and returns a number. Spaces are allowed.
//     Only the first number is returned:
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


// Number Properties :
// ------------------------------------------------------------------------
// Property	                               Description
// ------------------------------------------------------------------------
// MAX_VALUE	        Returns the largest number possible in JavaScript
// MIN_VALUE	        Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	                      Represents a "Not-a-Number" value

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


// Number Properties Cannot be Used on Variables :
// ---------------------------------------------------------------------
//  -> Number properties belongs to the JavaScript's number object
//     wrapper called Number.
//  -> These properties can only be accessed as Number.MAX_VALUE.

var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined
console.log(y); // undefined


// ARRAYS :
// ------------------------------------------------------------

// Creating Array
var cars = ["Saab", "Volvo", "BMW"];
cars = new Array("Saab", "Volvo", "BMW");

// Access
console.log(cars[0]);

// Change
cars[0] = 'Tata';
console.log(cars[0]);

// Access full array
console.log(cars)

// Arrays are objects :
var person = ['Santosh', 'Swansi', 20];
console.log(typeof(person));


// ARRAY ELEMENTS CAN BE OBJECTS :
// -> You can have objects, functions and arrays in an Array.
var myArray = [];

myArray[0] = Date.now();
myArray[1] = function(){
    console.log('A  Function');
}
myArray[2] = [1, 2, 3, 4, 5];

console.log(myArray);
console.log(myArray.length); // length of the array


// Looping array elements :
// ---------------------------------------------------

// a.) Using for loop
for(var i=0; i<myArray.length; ++i){
    console.log(myArray[i]);
}

// b.) Using forEach loop
myArray.forEach(display);

function display(value){
    console.log(value);
}

// ADDING ARRAY ELEMENTS :
// ---------------------------

// a.) Using push()
myArray.push('Hello');

// b.) Using length()
myArray[myArray.length] = "World";

// NOTE: Adding elements with high indexes can create undefined "holes"
//       in an array:
console.log(myArray);


// ASSOCIATIVE ARRAYS :
// ------------------------------------------------------------
// -> Arrays with named indexes are called associative arrays (or hashes).
// -> JavaScript does not support arrays with named indexes.

//  WARNING :
//  -> If you use named indexes, JavaScript will redefine the array
//     to a standard object.
//  -> After that, some array methods and properties will produce
//     incorrect results.


// DIFFERENCE BETWEEN ARRAYS AND OBJECTS :
// ----------------------------------------------------------------------
//   -> Arrays use numbered indexes.
//   -> Objects use named indexes.
//   -> Arrays are a special kind of objects, with numbered indexes.


// RECOGNISING ARRAY :
// -----------------------------------------------------------------------

// a.) Using Array.isArray() (ES 5, not supported in older browsers)
console.log(Array.isArray(myArray))

// b.) Creating own isArray() :
//    -> Returns 'true' if the object prototype contains the word "Array".
function isArray(x){
    return x.constructor.toString().indexOf('Array') > -1;
}
console.log(isArray(myArray))

// c.) Using instanceof
//   -> Returns true if an object is created by a given constructor:
console.log(myArray instanceof Array);

// ARRAY METHODS :
// -------------------------------------------------------------------

// CONVERTING ARRAYS TO STRINGS :
var x = ['Hello', 'to', 'JavaScript', 'Project!'];

console.log(x.toString()); // String separated by comma
console.log(x.join('#'));  // String separated by specified character


// PUSH & POP :

// insert element at end and return new length
console.log(x.push('Everyone!'));

// remove the last element and return the removed element
console.log(x.pop());


// SHIFTING & UNSHIFTING :
// ---------------------------------------------------------------------

// Remove the first element and return it
console.log(x.shift())

// Add element to the first index and return length
console.log(x.unshift('Warm'))


// DELETING ARRAY ELEMENTS :
// ------------------------------------------------------------------------
// -> Since arrays are objects we can use 'delete' keyword to delete element
// -> It will leave undefined values inside array.
delete x[0];
console.log(x);

// SPLICING AN ARRAY :
// ----------------------------------------------------------------------
// -> It can be used to add new items to an array.

// start = start index
// deleteCount = number of elements to be deleted
// items : To be added

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// OUTPUT : [Banana", "Orange", "Lemon", "Kiwi",  "Apple", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi");


// Using Splice() to remove elements
fruits.splice(0, 1);


// Merging (Concatenating) Arrays
// ------------------------------------------------------------------------
//  -> It creates a new array by merging (concatenating) existing arrays

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // It can any number of arguments

// Also Valid
myChildren = myChildren.concat('Mark');


// SLICING AN ARRAY :
// -----------------------------------------------------------------------
// -> It slices out a piece of an array into a new array.

console.log(x.slice(0, 3));  // end (exclusive)
console.log(x.slice(3));
console.log(x.slice(-4, -2));


//  AUTOMATIC toString() :
// ------------------------------------------------------------------------
//  -> JavaScript automatically converts an array to a comma separated
//      string when a primitive value is expected.

//  EXAMPLE :
// -------------------------------------------------------------------
//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;


// SORTING ARRAY :
// ----------------------------------------------------------------------

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // sorts values as strings.
console.log(fruits.reverse());

// NUMERIC SORT (Use compare function)
// ----------------------------------------------------------------------
// COMPARE FUNCTION :
// ----------------------------------------------------------------------
//    -> It compares two values at a time
//    -> If(result = -ve): a is placed before b.
//    -> If(result = +ve): b is placed before a.

var points = [40, 100, 1, 5, 25, 10];

// Ascending Order Sort
console.log(points.sort(function(a, b){return a - b}));

// Descending Order Sort
console.log(points.sort(function(a, b){return b - a}));


// RANDOM SORTING :
// ----------------------------------------------------------------------
// Math.random() returns 0 - 1(Exclusive)
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});


// FISHER YATES METHOD OF RANDOM SORTING :
// -----------------------------------------------------------------------
//  -> Previous method favours one numbers over other

var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i);  // implicit declaration of j

    // swap them
    k = points[i];                      // implicit declaration of k
    points[i] = points[j];
    points[j] = k;
}

// MAX AND MIN VALUES IN AN ARRAY :
// -------------------------------------------------------

// Math.max.apply()
console.log(Math.max.apply(null, points));

// Math.min.apply()
console.log(Math.min.apply(null, points));

// We can also use our own JS code to find the min/max values of an array

// NOTE: JavaScript semicolon are optional.
//       When it needs one it adds it behind the scenes.



// SORTING OBJECT ARRAYS :
// ----------------------------------------------------------------------
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

// sorting on year
console.log(cars.sort(
    function(a, b)
                      {
                          return a.year - b.year
                      }));


// ARRAY ITERATION METHODS :
// ------------------------------------------------

// a.) Array.forEach(function)
// --------------------------------------------------------------------
// -> It calls a function (a callback function) once for each array element.
// -> Callback Function :
//           Arguments : value,
//                       index(Optional),
//                       array(Optional)

var brands =  ['BMW', 'Harley Davidson', 'Ferrari'];
brands.forEach(display);

function display(value, index, brands){
    console.log(value + ' at index-' + index + '.');
}


// b.) Array.map(function)
// -------------------------------------------------------------------
//  -> It returns a new array after applying function to each elements

// Eg.
var naturals = [1, 2, 3, 4, 5, 6];
var cubes = naturals.map(cube);

function cube(value){
    return value*value*value;
}

console.log(cubes);


// c.) Array.filter(function)
// ----------------------------------------------------------------------
// -> It creates a new array with array elements that passes a test.

var ages = [12, 13, 19, 43, 21, 98];
var valid_ages = ages.filter(is_legal_age);

function is_legal_age(value){
    return value >= 18;
}

console.log(valid_ages);


// d.) Array.reduce(function, initialValue(Optional))
// --------------------------------------------------------------------
//  -> Runs a function on each array element to produce (reduce it to)
//     a single value.
var marks = [78, 89, 98, 67, 87];
var total = marks.reduce(sum, 0);  // initial value = 0

// Here first argument = initial value OR previously returned value
function sum(total, value){
    return total + value;
}

console.log(total);


// e.) Array.reduceRight(function)
// ----------------------------------------------------------------------
//  -> It runs a function on each array element to produce (reduce it to)
//     a single value.

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduceRight(myFunction, 0);

function myFunction(total, value, index, array) {
    return total + value;
}


// f.) Array.every()
// ----------------------------------------------------------------------
//  -> It check if all array values pass a test.

// Is everyone have valid age
var ages = [45, 4, 9, 16, 25];

var is_all_valid = ages.every(is_above18);

function is_above18(value){
    return value >= 18;
}

console.log(is_all_valid);


// g.) Array.some()
// ---------------------------------------------------------------------
//   -> It check if some array values pass a test.

var is_any_valid = ages.some(is_above18);
console.log(is_any_valid);


// GETTING INDEX OF ARRAY ELEMENT
// ----------------------------------------------------------------------

// h.) Array.indexOf(element, startIndex(Optional))
// ---------------------------------------------------------------------
fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple", 2));

// i.) Array.lastIndexOf(element, startIndex(Optional))
// ---------------------------------------------------------------------
console.log(fruits.lastIndexOf("Apple"));

// NOTE : Returns -1 if not present
//        Returns index  of 1st occurrence


// j.) Array.find()
// -----------------------------------------------------------------------
// -> It returns the value of the first array element that passes a
//    test function.
numbers = [4, 9, 16, 25, 29];
first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(first);

// k.) Array.findIndex()
// -----------------------------------------------------------------------
// -> It returns the index of the first array element that passes a
//    test function.
first_index = numbers.findIndex(myFunction);
console.log(first_index);


// JAVASCRIPT DATES:
// ----------------------------------------------------------------------

// JavaScript Date Output :
// ---------------------------------
//  -> By default, JavaScript will use the browser's time zone and
//     display a date as a full text string:

// CREATING DATE OBJECTS :
// -------------------------------------------------------------

console.log(new Date()); // creates date with current date and time

// new Date(year, month, ...)
//  -> It creates a new date object with a specified date and time.
//  -> 7 numbers specify year, month, day, hour, minute, second,
//     and millisecond (in that order).
//  -> NOTE : month = 0-11
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d)

// 6 numbers specify year, month, day, hour, minute, second
// 5    "       "     "      "     "     "     "
// ...................
// 2 numbers specify year and month
// NOTE: 1 number denotes milli-seconds


// NOTE: 1 OR 2 digits year will be interpreted as 19XX
console.log(new Date(12, 3, 5));


// new Date(dateString)
// ----------------------------------------------------------------
//  -> It creates a new date object from a date string
console.log(new Date('October 13, 2014 11:13:00'));


// JavaScript Stores Dates as Milliseconds
// --------------------------------------------------------------------
//  -> JavaScript stores dates as number of milliseconds since
//     January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

// -> 0 milliseconds after  { January 01, 1970, 00:00:00 UTC }
// -> We can put +ve or -ve values of milliseconds to denote after or
//    before  { January 01, 1970, 00:00:00 UTC }

// 1 day = 24 * 60 * 60 * 1000 = 8,64,00,000
d = new Date(0)
console.log(d);

// DISPLAYING DATES :
// --------------------------------------------------------------------

//  -> JavaScript will (by default) output dates in full text string
//     format.
//  -> When you display a date object in HTML, it is automatically
//     converted to a string, with the toString() method.

// a.) toUTCString()
//   -> It converts a date to a UTC string (A Date Display Standard).
console.log(d.toUTCString());

// b.) toDateString()
//   -> It converts a date to a more readable format.
console.log(d.toDateString());

// c.) toISOString()
//   -> It converts a date to a string, using the ISO standard format.
console.log(d.toISOString());


// JS DATE FORMAT :
// --------------------------------------------

// JavaScript Date Input

//  -> Generally there are 3 types of date input  :-
//  Type	                            Example
// -----------------------------------------------------------------------
//  ISO Date	                "2015-03-25" (The International Standard)
//  Short Date	                "03/25/2015"
//  Long Date	                "Mar 25 2015" or "25 Mar 2015"


//  ISO Dates :
// ----------------------------------------------------------------------
// -> ISO 8601 is the international standard for the representation
//    of dates and times.
// -> The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript
//    date format.

// NOTE: The computed date will be relative to your time zone.

// ISO Complete Date
d = new Date("2015-03-25");
console.log(d);

// ISO Date (Year & Month)
d = new Date("2015-03");
console.log(d);

// ISO Date (Year)
d = new Date("2015");
console.log(d);


// ISO Date(Date-Time)
d = new Date("2015-03-01T12:45:34Z");  // Z = UTC OR GMT
console.log(d);

// NOTE: To modify the time relative to UTC:-
// ----------------------------------------------------------------------
//         a.) remove the Z
//         b.) add +HH:MM or -HH:MM instead
// -----------------------------------------------------------------------
// "2015-03-01T12:45:34"  -->   Represents Date-Time in GMT.
//  "+05:30"   -->    Represents Date-Time in time relative to GMT.
d =  new Date("2015-03-01T12:45:34+05:30");
console.log(d);


//  TIME ZONES :
// ----------------------------------------------------------------------
//  -> When setting a date, without specifying the time zone,
//     JavaScript will use the browser's time zone.
//  -> When getting a date, without specifying the time zone, the result
//     is converted to the browser's time zone.


//  SHORT DATES:
// -----------------------------------------------------------------------
// SYNTAX : MM/DD/YYYY
d = new Date("12/23/2020Z"); // Z = UTC or GMT
console.log(d);

// WARNINGS :
// -> Some browsers, months or days with no leading zeroes may produce
//    an error.
// -> Behavior of "YYYY/MM/DD" is undefined
// -> Behavior of  "DD-MM-YYYY" is also undefined.


// JS LONG DATES:
// ----------------------------------------------------------------------
// syntax : MMM DD YYYY

d = new Date("Mar 25 2020");
d = new Date("25 Mar 2020");    // month and date can be in any order
d = new Date("25 March 2020");  // Full name
d = new Date("25, Mar, 2020");  // commas are ignored
d = new Date("25 MARCH 2020");  // names are case-sensitive


// PARSING DATES :
// ---------------------------------------------------------------------
// Date.parse()
// ---------------------------------------------------------------------
// -> It returns the number of milliseconds between the date and
//    January 1, 1970:
var msec = Date.parse("March 21, 2012Z");

// convert it to date object
console.log(new Date(msec));


//  JS SET DATE METHODS:
// -----------------------------------------------------------------------

// Method	                                Description
// -----------------------------------------------------------------------
// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours()	        Get the hour (0-23)
// getMinutes()	        Get the minute (0-59)
// getSeconds()	        Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	    Get the time (milliseconds since January 1, 1970)
// getDay()	            Get the weekday as a number (0-6)
// Date.now()	        Get the time. ECMAScript 5.

var d = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[d.getMonth()]);
console.log(d.getHours());
console.log(d.getMilliseconds());


//                         UTC DATE METHODS
// -----------------------------------------------------------------------
// UTC date methods are used for working with UTC dates (UTC dates):
//
// Method	                    Description
// -----------------------------------------------------------------------
// getUTCDate()                  UTC date
// getUTCDay()	                 UTC day
// getUTCFullYear() 	         UTC year
// getUTCHours()	             UTC hour
// getUTCMilliseconds()          UTC milliseconds
// getUTCMinutes()	             UTC minutes
// getUTCMonth()	             UTC month
// getUTCSeconds()	             UTC seconds


console.log(months[d.getUTCMonth()]);
console.log(d.getUTCHours());
console.log(d.getUTCMilliseconds());


// SET DATE METHODS
// ------------------------------------------------------------------------
// Set Date methods are used for setting a part of a date:
//
// Method	                             Description
// -------------------------------------------------------------------------
// setDate()	        Set the day as a number (1-31)
// setFullYear()        Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)

// date after 20 months and 50 days
var  d = new Date();
d.setDate(d.getDate() + 50);
d.setMonth(d.getMonth() + 20);

console.log(d.toUTCString());


// COMPARE DATES :
// ----------------------------------------------------------------------
var today, someday;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}

console.log(text);


// MATH OBJECTS :
// ----------------------------------------------------------------------

// PI
console.log(Math.PI);

// round()
console.log(Math.round(1.5345));  // 2

// pow()
console.log(Math.pow(2, 4));  // 16

// sqrt()
console.log(Math.sqrt(4));  // 2

// abs()
console.log(Math.abs(-4.2)); // 4

// ceil()
console.log(Math.ceil(1.45));  //2

// floor()
console.log(Math.floor(1.3)); //1


//     sin()  & cos()
// -----------------------------------------------------------------------
// -> It returns the sine (a value between -1 and 1) of the
//    angle x (given in radians).
// ----------------------------------------------------------------------
// -> Convert degrees to radians:
//  ---------------------------------------------------------------------
//         360 degree = 2*PI radian
//       => 1 degree = (PI/180) degree
//       => Angle in radians = Angle in degrees x PI / 180.

console.log(Math.sin(90 * Math.PI / 180));  // sin(90) = 1
console.log(Math.cos(0));                   // cos(0) = 1
console.log(Math.sin(30 * Math.PI/180));    // sin(30) = 1/2


// MIN & MAX
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));


// RANDOM
console.log(Math.random()); // 0 to 1(exclusive)


// Math Properties (Constants)
// ----------------------------------------------------------------------
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


//               MATH OBJECT METHODS
// -----------------------------------------------------------------------
// Method	                         Description
// -----------------------------------------------------------------------
// abs(x)	        Returns the absolute value of x
// acos(x)	        Returns the arccosine of x, in radians
// acosh(x)	        Returns the hyperbolic arccosine of x
// asin(x)	        Returns the arcsine of x, in radians
// asinh(x)	        Returns the hyperbolic arcsine of x
// atan(x)	        Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	    Returns the arctangent of the quotient of its arguments
// atanh(x)	        Returns the hyperbolic arctangent of x
// cbrt(x)	        Returns the cubic root of x
// ceil(x)	        Returns x, rounded upwards to the nearest integer
// cos(x)	        Returns the cosine of x (x is in radians)
// cosh(x)	        Returns the hyperbolic cosine of x
// exp(x)	        Returns the value of Ex
// floor(x)	        Returns x, rounded downwards to the nearest integer
// log(x)	        Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	    Returns the value of x to the power of y
// random()	        Returns a random number between 0 and 1
// round(x)	        Rounds x to the nearest integer
// sin(x)	        Returns the sine of x (x is in radians)
// sinh(x)	        Returns the hyperbolic sine of x
// sqrt(x)	        Returns the square root of x
// tan(x)	        Returns the tangent of an angle
// tanh(x)	        Returns the hyperbolic tangent of a number
// trunc(x)	        Returns the integer part of a number (x)


//  JS RANDOM
// -----------------------------------------------------------------------

// 1-10
console.log(Math.floor(Math.random()*10 + 1));

// proper custom random function
function random(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}


// JS BOOLEANS
// ----------------------------------------------------------------------

// { "", NaN, undefined, -0, 0, null }  is equivalent to 'false'
console.log(Boolean(NaN));

// Boolean can be objects
x = new Boolean(false);   // = {Boolean: false}
console.log(x);


// TERNARY OPERATOR
age = 18
var is_valid = (age >= 18)?true:false;
console.log(is_valid);


// CONDITIONAL STATEMENTS :
// ----------------------------------------------------------------------

var marks = 40;
if(marks < 40){
    console.log('Failed!')
}
else if(marks >= 40 && marks < 75){
    console.log('Can do better!')
}
else if(marks >= 75 && marks < 90)
{
    console.log('Very Good!');
}
else{
    console.log('Excellent!');
}

//      SWITCH STATEMENTS
// -----------------------------------------------------------------------

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = 1;

switch(day){
    case 0:
       console.log(days[0]);
       break;
    case 1:
        console.log(days[1]);
        break;
    case 2:
        console.log(days[2]);
        break;
    case 3:
        console.log(days[3]);
        break;
    case 4:
        console.log(days[4]);
        break;
    case 5:
        console.log(days[5]);
        break;
    case 6:
        console.log(days[6]);
        break;
    default:
        console.log('Invalid day');
        break;
}

// break :  It breaks out of the switch block
// default :  specifies the code to run if there is no case match


// Common Code Blocks
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 0:
    case 6:
        console.log(text = "Weekend");
        break;
    default:
        console.log("Invalid day");
}

// NOTE: multiple cases matches a case value, the first case is selected.
// NOTE: Switch cases use strict comparison (===).


// LOOP
// ------------------------------------------------------------------------

//Different Kinds of Loops
// JavaScript supports different kinds of loops:
//
// 1.) for    -   loops through a block of code a number of times
// 2.) for/in -   loops through the properties of an object
// 3.) for/of -   loops through the values of an iterable object
// 4.) while -    loops through a block of code while a specified
//                condition is true
// 5.) do/while - loops through a block of code while a specified
//                condition is true

// For Loop
// ----------------------------------------------------------------------

// Variant-1
var sum = 0;
for(x=1; x<=10; ++x){
    sum += x;
}
console.log(sum);

// Variant-2
x = 1;
sum = 0;
for(; x<=10; ){
    sum += (x++);
}
console.log(sum);


// Variant-3
x = 1;
sum = 0;
for(; ; ){
    sum += (x++);
    if(x == 11)
        break;
}
console.log(sum);


//  For/In Loop
// -----------------------------------------------------------------------
// -> loops through the properties of an object
var person = {fname:"John", lname:"Doe", age:25};

for(x in person){
    console.log(x);   // fname, lname, age;
}


// For/Of Loop
// ------------------------------------------------------------------------
// -> loops through the values of an iterable objects
// ------------------------------------------------------------------------
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
    console.log(x);
}

// looping string
var str = 'Hello';

for(x in str){
    console.log(x);
}


// WHILE LOOP   & DO-WHILE LOOP
// -----------------------------------------------------------------------

// while
n = 5;
sum = 0;
while(n){
    sum += n;
    --n;
}
console.log(sum);

// do-while
n = 5;
sum = 0;
do{
    sum += n;
}
while(n--);
console.log(sum);

// while loop is much the same as a for loop, with statement 1 and statement 3 omitted.


// JS BREAK & CONTINUE :
// -------------------------------------------------------------------

// -> break statement "jumps out" of a loop.
// -> continue statement "jumps over" one iteration in the loop.

// break
for(var i=1; i<=5; ++i){
    if(i == 2)
        break;       // move out of loop
    console.log(i);  // 1
}

// continue
for(var i=1; i<=5; ++i){
    if(i == 2)
        continue;    // continue with the next iteration
    console.log(i);  // 1 3 4 5
}

// JavaScript Labels
// -----------------------------------------------------------------------

// skipping multiple lines

var cars = ["BMW", "Mahindra & Mahindra", "Tata", "Mercedes"];
list: {
    text += cars[0];
    text += cars[1];
    break list;  // move out of list code block
    text += cars[2];
    text += cars[3];
}

// Example
outer_loop: for(var i=0; i<5; ++i){
    inner_loop1:for(var j=0; j<10; ++j)
    {
       if(j == 5)
           break outer_loop;   // moving out of both loops
       if(j == 2)
           continue outer_loop; // continue with next iteration of outer-loop
    }
}


//  JS TYPE CONVERSION
// -----------------------------------------------------------------------

// JavaScript Data Types :
// ----------------------------------------------------------------------
// In JavaScript there are 5 different data types that can contain values:
// a.) string   c.) boolean
// b.) number  d.) object
// e.) function

// There are 6 types of objects:
// a.) Object  b.) Date
// c.) Array   d.) String
// e.) Number  f.) Boolean

// And 2 data types that cannot contain values:
// a.) null  b.) undefined

// NOTE: 'typeof' is an operator.


// CONSTRUCTOR PROPERTY :
// -----------------------------------------------------------------------
// -> constructor property returns the constructor function for all
//    JavaScript variables

console.log("John".constructor);                // String()  {[native code]}
console.log((3.14).constructor);                // Number()  {[native code]}
console.log(false.constructor);                 // Boolean() {[native code]}
console.log([1,2,3,4].constructor);             // Array()   {[native code]}
console.log({name:'John', age:34}.constructor); // Object()  {[native code]}
console.log(new Date().constructor);            // Date()    {[native code]}
console.log(function () {}.constructor);        // Function(){[native code]}


// Checking for object to be Array
// -------------------------------------------------
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

// OR

// if the object is an Array function
function  isArray(myArray) {
    return myArray.constructor == Array;
}


// CONVERTING NUMBERS TO STRING :
// ------------------------------------------------------------------------

var x = 12
String(x);
String(23);
String(123 + 23);

// OR

x.toString();
(23).toString();
(123 +23).toString();


// CONVERTING BOOLEANS TO STRINGS :
// -----------------------------------------------------------------------
String(false);  // "false"
(false).toString();  // "false"


// CONVERTING DATES TO STRINGS :
// -----------------------------------------------------------------------
console.log(String(Date()));
console.log(Date().toString());


// CONVERTING STRINGS TO NUMBERS :
// ------------------------------------------------------------------------
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN


// The Unary + Operator
// ------------------------------------------------------------------------
// -> unary + operator can be used to convert a variable to a number:/

var x = '5';     // string
console.log(+x); //number

x = 'Hello';      // string
console.log(+x);  // NaN

// Booleans to Numbers :
// -----------------------------------------------------------------------
Number(false); // 0


// Dates to Numbers :
// -----------------------------------------------------------------------

// Number()
var d = new Date();
console.log(Number(d));   // number like 1596777747902

// getTime()
console.log(d.getTime());  // number like 1596777747902


// AUTOMATIC TYPE CONVERSION :
// ------------------------------------------------------------------------

console.log(5 + null)  // returns 5         because null is converted to 0
console.log("5" + null)  // returns "5null"   because null is converted to "null"
console.log("5" + 2)  // returns "52"      because 2 is converted to "2"
console.log("5" - 2)  // returns 3         because "5" is converted to 5
console.log("5" * "2")  // returns 10        because "5" and "2" are converted to 5 and 2

// Automatic String Conversion
// -------------------------------------------------------------------------
// -> JavaScript automatically calls the variable's toString() function
//    when you try to "output" an object or a variable.

var myVar = {
    name: 'Santosh',
    age: 20
};

console.log(myVar.toString());


// JS REGULAR EXPRESSIONS
// -----------------------------------------------------------------------
// -> A regular expression is a sequence of characters that forms a
//    search pattern.
// -> The search pattern can be used for text search and text replace
//    operations.

// SYNTAX
// /pattern/modifiers;

// EXAMPLE
var patt = /w3schools/i;


// EXPLANATION
// -> /w3schools/i  is a regular expression.
// ->  w3schools  is a pattern (to be used in a search).
// -> i  is a modifier (modifies the search to be case-insensitive).

// Using String Methods
// -----------------------------------------------------------------------
// -> search() method uses an expression to search for a match,
//    and returns the position of the match.
// -> replace() method returns a modified string where the pattern
//    is replaced.

// Using String search() With a Regular Expression:
// ----------------------------------------------------------------------
var str = "Visit Internships!";
console.log(str.search(/internships/i));

// Use String replace() With a Regular Expression
// ----------------------------------------------------------------------
str = "Visit School!";
console.log(str.replace(/school/i, "Internships"));

// Modifiers
// ----------------------------------------------------------------------

// Modifier	                                Description
// -----------------------------------------------------------------------
// g	Perform a global match (find all matches rather than stopping after the first match)
// i	                    Perform case-insensitive matching
// m	                    Perform multiline matching


// Brackets
// ----------------------------------------------------------------------
// Brackets are used to find a range of characters:
//
// Expression	Description
// ----------------------------------------------------------------------
// [abc]	Find any character between the brackets
// [^abc]	Find any character NOT between the brackets
// [0-9]	Find any character between the brackets (any digit)
// [^0-9]	Find any character NOT between the brackets (any non-digit)
// (x|y)	Find any of the alternatives specified


// Metacharacters
// Metacharacters are characters with a special meaning:

// Metacharacter	                Description
// -----------------------------------------------------------------------
// .	        Find a single character, except newline or line terminator
// \w	        Find a word character
// \W	        Find a non-word character
// \d	        Find a digit
// \D	        Find a non-digit character
// \s	        Find a whitespace character
// \S	        Find a non-whitespace character
// \b	        Find a match at the beginning/end of a word,
//                beginning like this: \bHI, end like this: HI\b
// \B	        Find a match, but not at the beginning/end of a word
// \0	        Find a NULL character
// \n	        Find a new line character
// \f	        Find a form feed character
// \r	        Find a carriage return character
// \t	        Find a tab character
// \v	        Find a vertical tab character
// \xxx	        Find the character specified by an octal number xxx
// \xdd	        Find the character specified by a hexadecimal number dd
// \udddd	Find the Unicode character specified by a hexadecimal number dddd


// Quantifiers
// -----------------------------------------------------------------------
// Quantifier	                        Description
// -----------------------------------------------------------------------
// n+	    Matches any string that contains at least one n
// n*	    Matches any string that contains zero or more occurrences of n
// n?	    Matches any string that contains zero or one occurrences of n
// n{X}	    Matches any string that contains a sequence of X n's
// n{X,Y}	Matches any string that contains a sequence of X to Y n's
// n{X,}	Matches any string that contains a sequence of at least X n's
// n$	    Matches any string with n at the end of it
// ^n	    Matches any string with n at the beginning of it
// ?=n	    Matches any string that is followed by a specific string n
// ?!n	    Matches any string that is not followed by a specific string n



// RegExp Object Properties
// -----------------------------------------------------------------------
// Property	                        Description
// -----------------------------------------------------------------------
// constructor	Returns the function that created the RegExp object's prototype
// global	    Checks whether the "g" modifier is set
// ignoreCase	Checks whether the "i" modifier is set
// lastIndex	Specifies the index at which to start the next match
// multiline	Checks whether the "m" modifier is set
// source	    Returns the text of the RegExp pattern


// RegExp Object Methods
// ----------------------------------------------------------------------
// Method	                        Description
// ----------------------------------------------------------------------
// compile()	Deprecated in version 1.5. Compiles a regular expression
// exec()	    Tests for a match in a string. Returns the first match
// test()	    Tests for a match in a string. Returns true or false
// toString()	Returns the string value of the regular expression

// test()
var patt = /e/;
console.log(patt.test("The best things in life are free!"));

// OR

console.log(/e/.test("The best things in life are free!"));

// exec()
console.log(/e/.exec("The best things in life are free!"));


console.log(patt.ignoreCase); // false (not specified 'i' modifier in patt)
console.log(patt.global);  // false (not specified 'g' modifier in patt)


// ERROR HANDLING IN JS:
// -----------------------------------------------------------------------
// -> try: lets you test a block of code for errors.
// -> catch: lets you handle the error.
// -> throw: lets you create custom errors.
// -> finally: lets you execute code, after try and catch, regardless of the result.


// Example
var  x = '4';
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
}
catch(err) {
    console.log("Input is " + err);
}
finally {
  console.log('Finally statement!');
}


// HTML Validation
// ------------------------------

// -> Modern browsers will often use a combination of JavaScript and
//    built-in HTML validation, using predefined validation rules defined
//    in HTML attributes:

// EXAMPLE
// <input id="demo" type="number" min="5" max="10" step="1">

// EXAMPLE (Equivalent of calling this function for validation)
/*
function myFunction(){
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
}
 */


// The Error Object
// ------------------------------------------------------------------------
// -> JavaScript has a built in error object that provides error
//    information when an error occurs.
// -> The error object provides two useful properties: name and message.
//
// Error Object Properties
// -----------------------------------------------------------------------
// Property                 	Description
// ------------------------------------------------------------------------
// name	                  Sets or returns an error name
// message          	Sets or returns an error message (a string)


// Error Name Values
// ----------------------------------------------------------------------
// Six different values can be returned by the error name property:
//
// Error Name	                Description
// -----------------------------------------------------------------------
// EvalError	        An error has occurred in the eval() function
// RangeError	        A number "out of range" has occurred
// ReferenceError	    An illegal reference has occurred
// SyntaxError	        A syntax error has occurred
// TypeError	        A type error has occurred
// URIError	            An error in encodeURI() has occurred


// Eval Error
// ----------------------------------------------------------------------
// -> An EvalError indicates an error in the eval() function.
// -> Newer versions of JavaScript do not throw EvalError.
//     Use SyntaxError instead.

// Range Error
// ------------------------------------------------------------------------

// Example
var num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
    console.log(err.name); // RangeError
}


// Reference Error
// -----------------------------------------------------------------------
// -> A ReferenceError is thrown if you use (reference) a variable
//    that has not been declared:
//
// Example
var x;
try {
  x = maple + 1;   // maple cannot be referenced (used)
}
catch(err) {
    console.log(err.name);  // ReferenceError
}


// Syntax Error
// -------------------------
// Example
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
    console.log(err.name); // SyntaxError
}


// Type Error
// -------------------------------------------------------------------------
//  -> A TypeError is thrown if you use a value that is outside the range
//     of expected types.

// Example
var num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err.name); // TypeError
}


// URI (Uniform Resource Identifier) Error
// -----------------------------------------------------------------------
// -> A URIError is thrown if you use illegal characters in a URI function

// Example
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
    console.log(err.name); // URI Error
}



// JS SCOPE :
// ---------------------

// Global Scope :
// ---------------
// -> Variables declared outside function are global and can be accessed
//    from any part off the program
// -> LIFETIME: They get deleted when  we close the tab

// NOTE: In JavaScript, objects and functions are also variables.


// Local Variables :
// -----------------
// -> Variables declared inside function or passed to function are local
//    variables.
// -> LIFETIME: deleted when function has just finished execution

// Automatically Global  :
// -------------------------
// ->  If you assign a value to a variable that has not been declared,
//     it will automatically become a GLOBAL variable.


// code here can use carName
function testScope() {
    name_of_car = "Volvo";
    var model = 123;
}

testScope();
console.log(name_of_car); // name_of_car is global
try{
    console.log(model); // not local (therefore throws ReferenceError)
}
catch(err){
    console.log(err.name + ' ' + err.message)
}



// Global Variables in HTML   :
// ----------------------------------
//  -> With JavaScript, the global scope is the complete JavaScript
//       environment.
//  -> In HTML, the global scope is the window object. All global
//     variables belong to the window object.

// Example
// ---------
// var carName = "Volvo";
// code here can use window.carName


// JS HOISTING
// -----------------------------------------------------------------------


// JavaScript Declarations are Hoisted
// -----------------------------------------------------------------------
//  -> a variable can be declared after it has been used.
//  -> or, a variable can be used before it has been declared.


x = 5;
console.log(x);
var x; // Declare x


// NOTE :
// -> Hoisting is JavaScript's default behavior of moving all declarations
//    to the top of the current scope (to the top of the current script
//    or the current function).

// -> 'let' & 'const' variables are not hoisted.

// -> JavaScript only hoists declarations, not initializations.

console.log(teddyName); // undefined
var teddyName = 'Tiddo';


// Declare Your Variables At the Top !
// -------------------------------------------------------------------------
//  -> Hoisting is an unknown or overlooked behavior of JavaScript.
//  -> To avoid bugs always declare variables at the beginning of every
//      scope


// JS USE STRICT
// ------------------------------------------------------------------------

// -> The "use strict" directive was new in ECMAScript version 5 (ES-5).
// -> It is not a statement, but a literal expression, ignored by
//    earlier versions of JavaScript.
// -> The purpose of "use strict" is to indicate that the code should
//    be executed in "strict mode".


// -> "use strict"; does not allow to access undeclared variable
// -> press 'F12' to open debugger

"use strict";
try{
    console.log(brandName) // will raise an error
    myBrandNewFunction(); // will raise an error
}
catch(err){
    console.log(err.name + ": " + err.message);
}

// NOT ALLOWED IN STRICT MODE
// --------------------------------------------------------------------
// a.) Using variable without declaring it

// b.) Using object without declaring it

// c.) Deleting a variable(or object) is not allowed.

// d.) Deleting a function is not allowed.
delete function(p1, p2){};


// e.) Duplicating a parameter name is not  allowed
'use strict';
function myFunc(p1, p1) {

};


// f.) Octal numeric literals are not allowed:
"use strict";
var x = 010;


// g.) Octal escape characters are not allowed:
"use strict";
var x = "\010";            // This will cause an error


// h.) Writing to a read-only property is not allowed:
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error


// i.) Writing to a get-only property is not allowed:
"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error


// j.) Deleting an un-deletable property is not allowed:
"use strict";
delete Object.prototype; // This will cause an error


// k.) The word 'eval', 'arguments' cannot be used as a variable:
"use strict";
var eval = 3.14;         // This will cause an error
var arguments = 'hello';


// l.) 'with' statements are not allowed.
"use strict";
with (Math){x = cos(2)}; // This will cause an error


// m.) For security reasons, eval() is not allowed to create variables
//     in the scope from which it was called:
/*
"use strict";
eval("var x = 2");
console.log(x);             // This will cause an error
*/


// The this keyword in functions behaves differently in strict mode.
// ----------------------------------------------------------------------
// -> 'this' keyword refers to the object that called the function.
// -> If the object is not specified, functions in strict mode will
//    return undefined and functions in normal mode will return
//    the global object (window):

/*
"use strict";
function myTestFunc() {
  console.log(this);  // will log "undefined"
}
myTestFunc();
*/


// Future Proof!
// -----------------------------------------------------------------------
// -> Keywords reserved for future JavaScript versions can NOT be used as
//    variable names in strict mode.

// These are:

// i) implements  ii) interface
// iii) let       iv) package
// v) private     vi) protected
// vii) public    viii) static
// ix) yield

"use strict";
var public = 123;


// NOTE:  The "use strict" directive is only recognized at the beginning
//         of a script or a function.


// 'this' KEYWORD
// -----------------------------------------------------------------------

// It has different values depending on where it is used:

//  WHAT IS 'this' KEYWORD ?
// -----------------------------------------------------------------------
// 1.) In a method, this = owner object.
// 2.) Alone, this = global object.
// 3.) In a function, this = global object.
// 4.) In a function, in strict mode, this = undefined.
// 5.) In an event, this = element that received the event.
// 6.) Methods like call() and apply() can refer this = any object.


// 1.) 'this' in a Method
// -----------------------------------------------------------------------
var person = {
    firstName: 'Santosh',
    lastName: 'Swansi',
    fullName : function() {
        console.log(this);
        return this.firstName + " " + this.lastName; // this= person object
    }
}


// 2.) ALONE 'this'
// -----------------------------------------------------------------------
// refers to global  object, browser refers to 'window object'
console.log(this);


// 3.)
// a.) this IN A FUNCTION(Default)
// -----------------------------------------------------------------------
function test1() {
    console.log(this);  // global object(window)
}

// b.)  this IN A FUNCTION(Strict)
// -----------------------------------------------------------------------
'use strict';
function test2() {
    console.log(this);  // undefined
}


// 4.) this in Event Handlers
// --------------------------------------------------------------------------
// -> In HTML event handlers, this refers to the HTML element that
//    received the event:

// Example
/*
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
*/


// Object Method Binding

// Example
// --------
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// Explicit Function Binding
// ---------------------------------------------------------------------
//  -> The call() and apply() methods are predefined JavaScript methods.
//  -> They can both be used to call an object method with another object
//     as argument.

// Example :
// -------------
//  -> when calling person1.fullName with person2 as argument, 'this' will
//     refer to person2, even if it is a method of person1:
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"



//  JS LET
// ---------------------------------------------------------------------

// ECMAScript 2015
// -----------------------------------------------------------------------
// -> ES2015 introduced two important new JavaScript keywords: let and
//    const.
// -> These two keywords provide "Block Scope" variables (and constants)
//    in JavaScript.

// NOTE: Before ES2015, JavaScript had only two types of scope: Global
//       Scope and Function Scope.
//       ES2015 introduced 'Block Scope'


// JavaScript Block Scope
// -----------------------------------------------------------------------

// -> Variables declared with the var keyword cannot have Block Scope.
// -> Variables declared inside a block {} can be accessed from outside
//    the block.

// -> Variables declared with the let keyword can have Block Scope.
// -> Variables declared inside a block {} cannot be accessed from
//    outside the block.

{
    let x = 2;
}
// x can NOT be used here


// RE-DECLARING VARIABLES
// --------------------------------------------------------------------
// -> Re-declaring a variable using the var keyword can impose problems
// -> Re-declaring a variable inside a block will also redeclare the
//    variable outside the block

/*
var x = 10;  // x = 10
{
    var x = 2; // x = 2
}

// x = 2
console.log(x);
 */


// Redeclaring a variable using the let keyword can solve this problem
/*
let x = 10;  // x = 10
{
    let x = 2; // x = 2
}

// x = 10
console.log(x);
*/

// LOOP SCOPE
// --------------------------

// Example (with var)
var it = 5;
for (var it = 0; it < 10; it++) {
  // some statements
}
// Here i is 10


// Example (with let)
let it2 = 5;
for (let it2 = 0; it2 < 10; it2++) {
  // some statements
}
// Here i is 5


// Function Scope
// ----------------------------
// -> Variables declared with var and let are quite similar when
//    declared inside a function.
// -> They will both have Function Scope

// Global Scope
// ---------------------------
// -> Variables declared with var and let are quite similar when declared
//    outside a block.
// -> They will both have Global Scope


// NOTES:
//    -> Global variables defined with the 'let' keyword do not belong to
//       the window object whereas 'var' variables does
//    -> Re-declaring a 'var' variable with 'let', in the same scope, or
//       in the same block, is not allowed.
//    -> Re-declaring a 'let' variable with 'let', in the same scope, or
//       in the same block, is not allowed
//    -> Re-declaring a 'let' variable with 'var', in the same scope, or
//       in the same block, is not allowed
//    -> Re-declaring a variable with 'let', in another scope, or in
//       another block, is allowed


// HOISTING WITH LET:
// ----------------------------
// -> Variables defined with 'let' are hoisted to the top of the block,
//    but not initialized.

// -> Using a let variable before it is declared will result in a
//    ReferenceError.
// -> The variable is in a "temporal dead zone" from the start of
//    the block until it is declared



// JS CONST
// ----------------------------------------------------------------------
// -> Variables defined with const behave like let variables, except they
//    cannot be reassigned
// -> JavaScript const variables must be assigned a value when they are
//    declared.


// Not Real Constants
// -----------------------------------------------------------------------
// -> 'const' is a little misleading.
// -> It does NOT define a constant value.
// -> It defines a constant reference to a value.
// -> Because of this, we cannot change constant primitive values,
//    but we can change the properties of constant objects.


// primitive values cannot change
const PI = 3.14;
// PI = 3.1412; -> not allowed


// const objects properties can change
// But we cannot reassign other values to the same object
const new_person = {
    firstName: 'Santosh',
    secondName: 'Swansi',
    age: 20
};

new_person.age = 19;  // allowed
console.log(new_person);


// We can change array elements of const Array
// But we are not allowed reassign new Array of values
var random_numbers = [1, 2, 3, 4, 5, 11];

random_numbers[4] = 24;
console.log(random_numbers);



// RE-DECLARING :
// -----------------------------------------------------------------------
// -> Re-declaring or reassigning an existing var or let variable to
//    const, in the same scope, or in the same block, is not allowed
// -> Re-declaring or reassigning an existing const variable, in the
//    same scope, or in the same block, is not allowed
// -> Re-declaring a variable with const, in another scope, or in
//    another block, is allowed
// -> A const variable cannot be used before it is declared



// ARROW FUNCTION
// ----------------------------------------------------------------------
// -> Arrow functions allow us to write shorter function syntax:
square = (val) => {
    return val*val;
}

// -> For One Statement Function
square = (val) =>  val*val;

// -> For One Parameter
square = val => val*val;


// WHAT ABOUT 'this' ?
// -------------------------
// -> In regular functions 'this' keyword represented the object that
//    called the function, which could be the window, the document,
//    a button or whatever.
// -> With arrow functions 'this' keyword always represents the object
//    that defined the arrow function.



// DEBUGGING
// -----------------------------------------------------------------------
// The debugger Keyword
// _______________________________________________________________________
// -> The debugger keyword stops the execution of JavaScript, and
//    calls (if available) the debugging function.
// -> This has the same function as setting a breakpoint in the debugger.
// -> If no debugging is available, the debugger statement has no effect.
// -> With the debugger turned on, this code will stop executing before
//    it executes the third line



// JS JSON
// ------------------------------------------------------------------------
// -> JSON is a format of storing and transporting data
// -> It is often used when data is sent from server to web pages

// What is JSON?
// -----------------------------------------------------------------------
// -> JSON stands for JavaScript Object Notation
// -> JSON is a lightweight data interchange format
// -> JSON is language independent ( The JSON syntax is derived from
//    JavaScript object notation syntax, but the JSON format is text only.)
// -> JSON is text, written with JavaScript object notation
// -> JSON is "self-describing" and easy to understand

// Example
// -----------------------------------------------------------------------
/*
{
    "employees":
    [
    {"firstName": "Santosh", "lastName": "Swansi"},
    {"firstName": "Subhash", "lastName": "Swansi"},
    {"firstName": "Sangeeta", "lastName": "Swansi"}
    ]
}
*/


// NOTE: The JSON format is syntactically identical to the code for
//       creating JavaScript objects.


// JSON Data - A Name and a Value
// -----------------------------------------------------------------------
// -> JSON data is written as name/value pairs, just like JavaScript
//    object properties.
// -> A name/value pair consists of a field name (in double quotes),
//    followed by a colon, followed by a value

// Example
// ---------------------------
// "firstName": "Santosh"


// NOTE: JSON names require double quotes. JavaScript names do not.


// JSON Objects
// ----------------------------------------------------------------------
// -> JSON objects are written inside curly braces.
// -> Just like in JavaScript, objects can contain multiple name/value
//    pairs

// Example (JSON Objects)
// ---------------------------------------
// {"firstName":"John", "lastName":"Doe"}



// JSON Arrays
// -----------------------------------------------------------------------
// -> JSON arrays are written inside square brackets.
// -> Just like in JavaScript, an array can contain objects

// Example (JSON Array)
// -----------------------------------------------------------------------
// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]


// CONVERTING JSON TEXT TO JS OBJECT :
// -----------------------------------------------------------------------

// -> First create a JavaScript string containing JSON syntax
var jsonText = '{"employees": [' +
        '{"firstName": "John", "lastName": "Doe"},' +
        '{"firstName": "Anna", "lastName": "Smith"},' +
        '{"firstName": "Peter", "lastName": "Jones"}]}';

var jsObject = JSON.parse(jsonText);

console.log(jsObject.employees[1].firstName); // Anna
console.log(jsObject.employees[2].lastName); // Jones


// EXCHANGING DATA
// -----------------------------------------------------------------------
// -> When exchanging data between a browser and a server, the data can
//    only be text
// -> JSON is text, and we can convert any JavaScript object into JSON,
//    and send JSON to the server
// -> We can also convert any JSON received from the server into
//    JavaScript objects


// SENDING DATA
// -----------------------------------------------------------------------
// -> Convert JS object into JSON text using JSON.stringify()

var myObj= {fName: 'Santosh', lName: 'Swansi', age:20};
var myJSON = JSON.stringify(myObj);
console.log(myJSON);


// RECEIVING DATA
// ------------------------------------------------------------------------
// -> If we receive a JSON file from server we can convert it to JS
//    object using JSON.parse() method
var parsedObj = JSON.parse(myJSON);
console.log(parsedObj);


// STORING DATA
// ------------------------------------------------------------------------
// -> When storing data, the data has to be a certain format, and
//    regardless of where you choose to store it, text is always one
//    of the legal formats
// -> JSON makes it posible to store JS objects as text

//  Storing JSON text (Obtained by converting JS object to JSON)
/* localStorage.setItem('testJSON', myJSON); */

//  Retrieving
/*
var retrievedText = localStorage.getItem('testJSON');
var convertedObj = JSON.parse(retrievedText);
console.log(convertedObj);
*/


// JSON VALUES
// -----------------------------------------------------------------------
// -> In JSON, values must be one of the following data types:
//      a string
//      a number
//      an object (JSON object)
//      an array
//      a boolean
//      null

// -> JSON cannot have the following :-
//      a function
//      a date
//      undefined

// NOTE: In JSON, string values must be written with double quotes:



// JSON v/s XML
// ------------------------------------------------------------------------
// -> Both JSON and XML can be used to receive data from a web server

// XML File
// -----------------------------------------------------------------------
/*
    <employees>
        <employee>
            <firstName>John</firstName>
            <lastName>Doe</lastName>
        </employee>
        <employee>
            <firstName>Anna</firstName>
            <lastName>Smith</lastName>
        </employee>
        <employee>
            <firstName>Peter</firstName>
            <lastName>Jones</lastName>
        </employee>
    </employees>
*/


// JSON TEXT (Equivalent to above XML File)
// ------------------------------------------------------------------------
/*
   {"employees":[
      {"firstName": "John", "lastName": "Doe"},
      {"firstName": "Anna", "lastName": "Smith"},
      {"firstName": "Peter", "lastName": "Jones"}
   ]}
*/


// SIMILARITIES BETWEEN JSON & XML
// -------------------------------------------------------------------------
// -> Both are :-
// a.) Self Describing (Human Readable)
// b.) Hierarchical (Values within values)
// c.) parsed and used by lots of programming languages
// d.) fetched with an XMLHttpRequest


// DIFFERENCES BETWEEN JSON & XML
// -----------------------------------------------------------------------
// -> JSON does not use end tag
// -> JSON is shorter
// -> JSON is quicker to read and write
// -> JSON can use arrays

// BIGGEST DIFFERENCE:
// -----------------------------------------------------------------------
//   -> XML has to be parsed with an XML parser, but JSON can be parsed
//      by a standard JavaScript function


// For AJAX applications, JSON is faster and easier than XML:
// ----------------------------------------------------------------------
// a.) Using XML
//      -> Fetch an XML document
//      -> Use the XML DOM to loop through the document
//      -> Extract values and store in variables

// b.) Using JSON
//      -> Fetch a JSON string
//      -> JSON.Parse the JSON string


// JSON PARSING ( json text to js object)
// ----------------------------------------------------------------------
// -> Use JSON.parse() to parse JSON text


// JSON FROM SERVER
// ------------------------------------------------------------------------
/*
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.name;
        }
    };

    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send();
*/


// PARSING EXCEPTIONS
// ------------------------------------------------------------------------
// PARSING DATES
// ------------------------------------------------------------------------
// -> Date objects are not allowed in JSON
// -> If we want to include date in JSON, convert it to string and when
//    we need it we can convert back to date

// Example
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);

// convert the date string to date object
obj.birth = new Date(obj.birth);
console.log(obj);


// USING SECOND PARAMETER OF JSON.parse() METHOD  (revivor)
// ----------------------------------------------------------------------
// -> 'reviver' parameter is a function that checks each property,
//     before returning the value

// Convert date string into date object using 'revivor' parameter of
// JSON.parse()
// ------------------------------------------------------------------------
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function(key, value){
    if(key == "birth")
        return new Date(value);
    else
        return value;
});

console.log(obj);


// PARSING FUNCTIONS
// ------------------------------------------------------------------------
// -> functions are not allowed JSON
// -> If we want a function in JSON, write it as string and convert it to
//    to function when you convert it to JavaScript object
var json = '{"name": "Santosh Swansi", "age":"function() { return 20;}", "city": "Bundu"}';
var obj = JSON.parse(json); // convert JSON to JS object

// Change value of 'age' key to function
obj.age = new Function('(' + obj.age + ')');

console.log(obj);




// STRINGIFY-ING (CONVERT JS OBJECT TO JSON TEXT)
// -------------------------------------------------------------------------
// -> We can convert JS object, Array to JSON text


// EXCEPTIONS
// ------------------------------------------------------------------------

// STRINGIFY DATES
// ------------------------------------------------------------------------
// -> In JSON date object is not allowed
// -> JSON.stringify() will convert any date into string
var obj = { name: "John", today: new Date(), city : "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON);


// STRINGIFY FUNCTIONS
// ------------------------------------------------------------------------
// -> In JSON, functions are not allowed as object values
// -> JSON.stringify() will remove any functions conatined in javascript
//    object

var personObj = { name: "John", age: function () {return 30;}, city: "New York"};
var myJSON = JSON.stringify(personObj);
console.log(myJSON);


// -> To avoid removing function from JS object while converting it to
//    JSON text :
//            Convert the function to string before converting
personObj.age = personObj.age.toString();
var myJSON = JSON.stringify(personObj);
console.log(myJSON);



// JSON OBJECTS
// -------------------------------------------------------------------------
var personCarJSON = '{' +
    '"name":"John",' +
    '"age":30,'  +
    '"cars": {' +
        '"car1":"Ford",' +
        '"car2":"BMW",' +
        '"car3":"Fiat"' +
    '}' +
'}';

var myObj = JSON.parse(personCarJSON);
console.log(myObj.cars.car1)       // Access
console.log(myObj.cars['car2']);   // Access

myObj.cars['car3'] = 'Tata';   // Modify
console.log(myObj.cars.car3);

delete myObj.cars.car3;  // delete


// JSON ARRAYS
// ------------------------------------------------------------------------
var myJSON = '{"name":"John", "age":30,' +
    '"cars": [' +
        '{ "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },' +
        '{ "name":"BMW", "models":[ "320", "X3", "X5" ] },' +
        '{ "name":"Fiat", "models":[ "500", "Panda" ] }' +
    ']' +
'}';

var myObj = JSON.parse(myJSON);

console.log(myObj.cars[0].models[1]); // 'Focus'
myObj.cars[0].models[0] = 'Duster';   // Modify
delete myObj.cars[0].models[2];  // delete



// JSON & HTML
// -----------------------------------------------------------------------

// HTML TABLE (Make a HTML table using the data received as JSON)
// ------------------------------------------------------------------------

/*
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table border='1'>"
            for (x in myObj) {
                txt += "<tr><td>" + myObj[x].name + "</td></tr>";
            }
            txt += "</table>"
            document.getElementById("demo").innerHTML = txt;
        }
    }
    xmlhttp.open("POST", "json_demo_db_post.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
*/


// DYNAMIC HTML TABLE
// ----------------------------------------------------------------------
/*
    <select id="myselect" onchange="change_myselect(this.value)">
        <option value="">Choose an option:</option>
        <option value="customers">Customers</option>
        <option value="products">Products</option>
        <option value="suppliers">Suppliers</option>
    </select>

    <script>
        function change_myselect(sel) {
          var obj, dbParam, xmlhttp, myObj, x, txt = "";
          obj = { table: sel, limit: 20 };
          dbParam = JSON.stringify(obj);
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              myObj = JSON.parse(this.responseText);
              txt += "<table border='1'>"
              for (x in myObj) {
                txt += "<tr><td>" + myObj[x].name + "</td></tr>";
              }
              txt += "</table>"
              document.getElementById("demo").innerHTML = txt;
            }
          };
          xmlhttp.open("POST", "json_demo_html_table.php", true);
          xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xmlhttp.send("x=" + dbParam);
        }
    </script>

 */


// HTML DROP-DOWN LIST
// ------------------------------------------------------------------------
/*
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<select>"
        for (x in myObj) {
          txt += "<option>" + myObj[x].name;
        }
        txt += "</select>"
        document.getElementById("demo").innerHTML = txt;
      }
    }
    xmlhttp.open("POST", "json_demo_html_table.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

 */







console.log('\n\n\n\n')



// JAVASCRIPT FORMS
// -----------------------------------------------------------------------

// JAVASCRIPT FORM VALIDATION
// ------------------------------------------------------------------------
function validateForm(){
    var x = '', message='';

    // get the value entered by the user
    // x = document.forms['myForm']['fname'].value;
    x.trim();

    if(x == ''){
         message = 'This field cannot be empty!';
         return false;
    }

    // document.getElementById('message-paragraph').innerHTML = text;
}

// HTML
/*
    <p id="message-paragraph"> </p>
    <form name="myForm" action="/action_page.php" onSubmit="return validateForm()"
          method="post">
    Name: <input type="text" name="fname">
    <input type="submit" value="Submit">
    </form>
*/


// VALIDATE NUMERIC INPUT
// -----------------------------------------------------------------------
function validateNumericInput(){
    var x="", message="";

    // get the entered value
    x = document.forms['myForm']['roll'].value;
    x.trim();

    if(x == "" || x < 700 || x >= 800){
        message="Invalid Input!";
        return false;
    }

    // display the message in paragraph element
    document.getElementById('message-paragraph').innerHTML = message;
}


// HTML
/*
   <p id="message-paragraph"> </p>
   <form name="myForm" action="/action_page.php"
         onsubmit="return validateNumericInput()" method="post">
   Roll: <input type="number" name="roll">
   <input type="submit" value="Submit">
   </form>
*/


// AUTOMATIC FORM VALIDATION
// -----------------------------------------------------------------------
// -> If a form field is empty 'required' attribute prevents this form
//    from being submitted.

// HTML
/*
    <form action="/action_page.php" method="post">
        <label>First Name: </label>
        <input type="text" name="fname" required>
        <input type="submit" value="Submit">
    </form>
*/


// DATA VALIDATION
// ------------------------------------------------------------------------

// -> Data validation is the process of ensuring that user input is
//    clean, correct, and useful.

// TYPES
// ----------------------------------------------------------------------
// -> 1.) Server side validation: It is performed by a web server, after
//                                 input has been sent to the server.
// -> 2.) Client side validation: It is performed by a web browser, before
//                                 input is sent to a web server.


// HTML Constraint Validation
// ------------------------------------------------------------------------
// -> HTML5 introduced a new HTML validation concept called constraint
//    validation.
//
// HTML constraint validation is based on:
//    => HTML Input Attributes
//    => CSS Pseudo Selectors
//    => DOM Properties and Methods


// Constraint Validation HTML Input Attributes
// ----------------------------------------------------------------------
// Attribute	                            Description
// -----------------------------------------------------------------------
// required	          Specifies that the input field requires an element
// disabled	          Specifies that the input element should be disabled
// max	              Specifies the maximum value of an input element
// min	              Specifies the minimum value of an input element
// pattern	          Specifies the value pattern of an input element
// type 	          Specifies the type of an input element

// EXAMPLE :
// ------------------
/*
    <form action="/action_page.php" method:"post">
       <label>Roll No: </label>

       <!-- Taking required number input in range= [700, 800) -->
       <input type="number" min="700" max="799" required>
       <input type="submit" value="Submit">
    </form>
*/



// Constraint Validation CSS Pseudo Selectors
// -----------------------------------------------------------------------
// Selector	                                Description
// -----------------------------------------------------------------------
// :disabled	Selects input elements with the "disabled" attribute specified
// :invalid	    Selects input elements with invalid values
// :optional	Selects input elements with no "required" attribute specified
// :required	Selects input elements with the "required" attribute specified
// :valid	    Selects input elements with valid values


// CSS
/*
  // Select all input elements  which are required
  input:required{

  }
*/



// Constraint Validation DOM Methods
// -----------------------------------------------------------------------
// Property	                            Description
// -----------------------------------------------------------------------
// checkValidity()	    Returns true if an input element contains valid
//                      data.
// setCustomValidity()	Sets the validationMessage property of an input
//                      element.


// Constraint Validation DOM Properties
// -----------------------------------------------------------------------
// Property	                            Description
// -----------------------------------------------------------------------
// validity	            Contains boolean properties related to the
//                      validity of an input element.
// validationMessage	Contains the message a browser will display
//                      when the validity is false.
// willValidate	        Indicates if an input element will be validated.


// CODE : Display a message in paragraph element if input contains invalid
//        data
/*
  <input id="roll" min="700" max="799" required>
  <button onclick="validate">OK</button>

  <p id="message"> </p>

  <script>
      function validate(){
          var obj = "";
          obj = document.getElementById('roll');
          if(!obj.checkValidity()){
             document.getElementById("message").innerHTML = obj.validationMessage;
          }
      }
  </script>
*/



// Validity Properties
// -----------------------------------------------------------------------
// -> The validity property of an input element contains a number of
//    properties related to the validity of data:
//
// Property	                            Description
// -----------------------------------------------------------------------
// customError	    Set to true, if a custom validity message is set.
// patternMismatch	Set to true, if an element's value does not match
//                  its pattern attribute.
// rangeOverflow	Set to true, if an element's value is greater than
//                  its max attribute.
// rangeUnderflow	Set to true, if an element's value is less than
//                  its min attribute.
// stepMismatch	    Set to true, if an element's value is invalid per
//                  its step attribute.
// tooLong	        Set to true, if an element's value exceeds its
//                  maxLength attribute.
// typeMismatch	    Set to true, if an element's value is invalid per
//                  its type attribute.
// valueMissing	    Set to true, if an element (with a required attribute)
//                  has no value.
// valid	        Set to true, if an element's value is valid.


// Examples
// -----------------------------------------------------------------------

// Example: 1
// -----------------------------------------------------------------------
// -> If the number in an input field is greater than 100 (the input's
//    max attribute), display a message

// CODE
/*
   <input id="num" max="100" type="number">
   <button onclick="myFunction"> OK </button>

   <p id="message"> </p>

   <script>
        function myFunction(){
            var text="";
            if(document.getElementById("num").validity.rangeOverflow){
               text = "Value too large!";
            }
            document.getElementById("message").innerHTML = text;
        }
   </script>

 */


// Example :
// ----------------------------------------------------------------------
// -> If the number in an input field is less than 100 (the input's min
//    attribute), display a message

// CODE
/*

 <input id="num" min="100" type="number">
   <button onclick="myFunction"> OK </button>

   <p id="message"> </p>

   <script>
        function myFunction(){
            var text="";
            if(document.getElementById("num").validity.rangeUnderflow){
               text = "Value too small!";
            }
            document.getElementById("message").innerHTML = text;
        }
   </script>

*/


// JAVASCRIPT OBJECTS
// ------------------------------------------------------------------------
// In JavaScript, almost "everything" is an object.

// -> Booleans can be objects (if defined with the new keyword)
// -> Numbers can be objects (if defined with the new keyword)
// -> Strings can be objects (if defined with the new keyword)
// -> Dates are always objects
// -> Maths are always objects
// -> Regular expressions are always objects
// -> Arrays are always objects
// -> Functions are always objects
// -> Objects are always objects

// All JavaScript values, except primitives, are objects.


// JAVASCRIPT PRIMITIVES
// -----------------------------------------------------------------------

// Primitive Variable
// -> It is a variable that has no properties and methods

// Primitive Data Types
// -> They are the data types that have primitive value
// -> Examples: boolean, string, number, null, undefined

// NOTES:
// -----------------------------------------------------------------------
//      -> Primitive values are immutable (they are hardcoded and
//         therefore cannot be changed).
//      -> If x = 3.14, you can change the value of x. But you cannot
//         change the value of 3.14.


// OBJECTS ARE VARIABLES
// -----------------------------------------------------------------------
// -> JS variables can contain single values
// -> Object are variables to but can contain multiple values

// -> Values are written in name:value pairs
// -> JS objects are the collections of named values
var store={
    name:'Gen Store',
    year: 2012,
    owner: 'Samuel Williams'
};


// Similarity with other languages
// ----------------------------------------------------------------------
// Dictionaries in Python (dict)
// Hash tables in C   (unordered_map, unordered_set in CPP)
// Hash maps in Java



// CREATING JS OBJECTS
// -------------------------------------------------------------------------

// -> In ES-5, an object can also be created with the function
//     Object.create().

// 1.) Using Object Literal (Recommended)
var House = {
    name:"My Sweet Home",
    year:2012
}

// 2.) Using new Keyword
var House =  new Object();
House.name = "My Sweet Home";
House.year = 2012;


// JS OBJECTS ARE MUTABLE
// ----------------------------------------------------------------------
// -> i.e. They are addressed by reference, not by value.
// -> If we change HouseCopy Properties it will also change same
//    properties of House

// This is not a copy of House but a reference to House
var HouseCopy = House;


HouseCopy.year = 2013;
console.log(House.year); // not 2012 but 2013


// JS OBJECT PROPERTIES
// -----------------------------------------------------------------------
// -> Properties are the values associated with a JavaScript object.
// -> Properties can usually be changed, added, and deleted, but some
//    are read only.

// Accessing JS Properties
// -----------------------------------------------------------------------\
console.log(House['year']);
console.log(House.name);

var prop = 'year';
console.log(House[prop]);

// Using for...in loop
for(var x in House){
    console.log(x + ": " + House[x]);
}

// Adding new properties
// -----------------------------------------------------------------------
House.owner = 'Michael Phelps';


// Deleting Properties
// -------------------------------------------------------------------------
// -> 'delete' keyword deletes both the value of the property and the
//     property itself.

// NOTES:
// -> 'delete' operator is designed to be used on object properties.
//     It has no effect on variables or functions.
// -> 'delete' operator should not be used on predefined JavaScript
//     object properties. It can crash your application.

delete House.owner;

// OR
// delete House['owner'];

console.log(House.owner);  // undefined


// PROPERTY'S ATTRIBUTES
// -----------------------------------------------------------------------
// -> All properties have a name: value pair
// -> 'value' is one of property's attribute
// -> Other attributes of properties of objects :
//       a.) enumerable
//       b.) configurable
//       c.) writable

// -> In JavaScript, all attributes can be read, but only the value
//    attribute can be changed (if the property is writable).
// -> ES-5 has methods for both getting and setting all property
//    attributes.


// Prototype Properties
// -----------------------------------------------------------------------
// -> JavaScript objects inherit the properties of their prototype.
// -> 'delete' keyword does not delete inherited properties, but if
//    you delete a prototype property, it will affect all objects
//    inherited from the prototype.


// JS METHODS
// -----------------------------------------------------------------------
// -> Methods are functions stored as object properties.

// Accessing Objects Methods
// -----------------------------------------------------------------------
var person={
    fName: 'Santosh',
    lName: 'Swansi',

    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.fullName());  // log return values
console.log(person.fullName);  // log Function


// USING BUILT-IN METHODS
// -----------------------------------------------------------------------
var name = "Santosh swansi";

console.log(name.toUpperCase());


// Adding method dynamically
// -----------------------------------------------------------------------
person.email = function(){
    return this.fName.toLowerCase() + '.' + this.lName.toLowerCase() + '@email.com';
}

console.log(person.email());


// JS DISPLAY OBJECTS
// -----------------------------------------------------------------------

// 1.) Using loop
for(var x in person){
    console.log(person[x]);
}

// 2.) Using Object.values(object_name) method
var array = Object.values(person);

var size = array.length;
for(x=0 ; x<size; ++x){
    console.log(array[x]);
}


// 3.) Using JSON.stringify()
// -> Any JS object can be string-ifi-ed (converted to a string)
//     with the JS function JSON.stringify()

var personString = JSON.stringify(person);
console.log(personString);

// Convert person's object string to a JSON object
var res =  JSON.parse(personString);
console.log(res);


// CONVERTING OBJECT C0NTAINING DATES INTO STRING
// ------------------------------------------------------------------------
var person={
    name: "Santosh",
    created: new Date()
}
console.log(JSON.stringify(person));


// STRINGIFYING OBJECTS CONTAINING FUNCTIONS
// -----------------------------------------------------------------------
// -> JSON.stringify() will not stringify functions.
// -> SOLUTION: Convert the function to string and then JSON.stringify()
//              the object which contains function

var pet={
    type:'dog',
    year:2018,
    age: function (){
        return Date().getFullYear() - this.year;
    }
};

// convert function to string
pet.age = pet.age.toString();

// Now apply JSON.stringify()
console.log(JSON.stringify(pet));


// STRINGIFY-ING ARRAYS
// -----------------------------------------------------------------------
var marks = [100, 90, 44, 61, 88, 55, 98, 88, "hello"];
console.log(JSON.stringify(marks));



// JAVASCRIPT OBJECT ACCESSORS
// -----------------------------------------------------------------------

// JS GETTER
// -----------------------------------------------------------------------
var store1={
    name:"GEN Store",
    year: 2010,
    get age(){
        return new Date().getFullYear() - this.year;
    }
}

// Now we can access the age getter with simpler syntax without parenthesis
console.log(store1.age);


// JS SETTER
// -----------------------------------------------------------------------
var store2={
    name:"GEN Store",
    set setYear(y){
        this.year = y;
    }
}

// Setting year with a simpler syntax
store2.setYear = 2010;


// FUNCTIONS VS GETTER AND SETTER
// ------------------------------------------------------------------------


// Object.defineProperty()
// ------------------------------------------------------------------------
// -> Object.defineProperty() method can also be used to add Getters
//    and Setters

var obj = {counter: 0};

// Define setters
Object.defineProperty(obj, "reset", {
   get : function() {this.counter = 0;}
});

// Increment
Object.defineProperty(obj, "increment", {
   get : function () {this.counter++;}
});

// Decrement
Object.defineProperty(obj, "decrement", {
   get : function() {this.counter--;}
});

// Add
Object.defineProperty(obj, "add", {
   set: function (value) { this.counter += value;}
});

// Subtract
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value;}
});

// get counter
Object.defineProperty(obj, 'getCounter', {
   get: function () { return this.counter; }
});

// use getters and setters
obj.reset;
obj.add = 10;
obj.subtract = 2;
obj.decrement;
obj.decrement;
console.log(obj.getCounter);



// JAVASCRIPT CONSTRUCTORS
// -----------------------------------------------------------------------
// -> Previous examples of object creates single object
// -> Sometimes we need a "blueprint" for creating many objects of the
//    same "type".
// -> Creating Object Type: Use Object Constructor Function.
// -> Objects of the same type are created by calling the constructor
//    function with the new keyword

// Example (Object Constructor Function)
function Person(fName, lName, age, married){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.married = married;
}

var myBrother = Person('Subhash', 'Swansi', 21, false);
var mySister = Person('Sangeeta', 'Swansi', 25, false);


// this keyword in Object Constructor Function
// ------------------------------------------------------------------------
// -> 'this' is the object that "owns" the code
// -> value of 'this' when used inside object is the object itself.
// -> In a constructor function 'this' does not have a value.
//    It is a substitute for the new object. The value of this
//    will become the new object when a new object is created.


// NOTE:
//     -> To add a new property to a constructor, you must add it to the
//        constructor function
//     -> This way object properties can have default values


// ADDING METHODS TO CONSTRUCTOR
// ----------------------------------------------------------------------
// e.g.
function Student(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.name = function() {return this.firstName + " " + this.lastName;};
    this.changeName = function (newFName, newLName){
          this.firstName = newFName;
          this.lastName = newLName;
    };
}

//     -> You cannot add a new method to an object constructor the same
//        way you add a new method to an existing object


var Stud1 = new Student("Aman", "Bansal", 23, "blue");
var Stud2 = new Student("Ashish", "Jaiswal", 21, "brown");

Stud1.changeName('Karthik', 'Bansal');
console.log(Stud1.name());
console.log(Stud2.name());


// BUILT-IN CONSTRUCTORS
// ----------------------------------------------------------------------
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object



// JAVASCRIPT OBJECT PROTOTYPES
// ----------------------------------------------------------------------
// -> All JavaScript objects inherit properties and methods from a
//    prototype :-
//    a.) Date objects inherit from Date.prototype
//    b.) Array objects inherit from Array.prototype
//    c.) Person objects inherit from Person.prototype

// -> The Object.prototype is on the top of the prototype inheritance
//    chain
// -> Date objects, Array objects, and Person objects inherit from
//    Object.prototype


// ADDING METHODS & PROPERTIES TO OBJECTS
// -----------------------------------------------------------------------

// 1.) Using prototype property
// -----------------------------------------------------------------------
function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
}

// Adding 'nationality' property to 'Person' Object Constructor Function
Person.prototype.nationality = "English";

// Adding 'name' method to 'Person' Object Constructor Function
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}


// JS ES-5 OBJECT METHODS
// -----------------------------------------------------------------------


// ADDING AND CHANGING OBJECT PROPERTIES
// -----------------------------------------------------------------------

// Adding or changing an object property
/* Object.defineProperty(object, property, descriptor) */

// Adding or changing many object properties
/* Object.defineProperties(object, descriptors) */


// ACCESSING PROPERTIES
//------------------------------------------------------------------------

// Accessing property
/* Object.getOwnPropertyDescriptor(object, property) */

// Returns all properties as an array
/* Object.getOwnPropertyNames(object) */

// Returns enumerable properties as an array
/* Object.keys(object) */

// Accessing the prototype
/* Object.getPrototypeOf(object) */


// AVOID EXTENSION
// -----------------------------------------------------------------------

// Prevents adding properties to an object
/* Object.preventExtensions(object)  */
// Returns true if properties can be added to an object
/* Object.isExtensible(object)  */

// PREVENT ANY CHANGE TO PROPERTIES
// -----------------------------------------------------------------------

// Prevents changes of object properties (not values)
/* Object.seal(object) */
// Returns true if object is sealed
/* Object.isSealed(object) */


// PREVENT ANY CHANGE TO PROPERTIES AND THEIR VALUES
// -----------------------------------------------------------------------

// Prevents any changes to an object
/* Object.freeze(object)  */
// Returns true if object is frozen
/* Object.isFrozen(object) */



// EXAMPLES:
// -----------------------------------------------------------------------

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};

// CHANGING A PROPERTY'S VALUE
// -----------------------------------------------------------------------
Object.defineProperty(person, 'language', {
    value: "HI"
});

console.log(person.language);



// CHANGING META-DATA
// ------------------------------------------------------------------------
/*
    writable : true      // Property value can be changed
    enumerable : true    // Property can be enumerated
    configurable : true  // Property can be reconfigured
*/


// ES5 allows getters and setters to be changed:
// -----------------------------------------------------------------------
// Defining a getter
/* get: function() { return language }  */

// Defining a setter
/* set: function(value) { language = value } */

// Read-only Property:
// -----------------------------------------------------------------------
// Object.defineProperty(person, "language", {writable:false});

// Non-enumerable Property:
// -----------------------------------------------------------------------
// Object.defineProperty(person, "language", {enumerable:false});


// LISTING ALL PROPERTIES WHICH ARE ENUMERABLE
// -----------------------------------------------------------------------
var CSStudent={
    firstName: 'Santosh',
    lastName: 'Swansi',
    age: 20
};

// listing all properties
console.log(Object.getOwnPropertyNames(CSStudent));

// make age enumerable
Object.defineProperty(CSStudent, 'age', {enumerable:false});

// Returns an array of enumerable
console.log(Object.keys(CSStudent));

// ADDING PROPERTY
// -----------------------------------------------------------------------
Object.defineProperty(CSStudent, 'College', {value:"St. Xavier's Colleeg"})


// ADDING GETTERS & SETTERS
// ------------------------------------------------------------------------
Object.defineProperty(CSStudent, "fullName", {
    get : function() {return this.firstName + " " + this.lastName;}
});

Object.defineProperty(CSStudent, 'email', {
    get : function() {return this.firstName.toLowerCase() + '.' +
                             this.lastName.toLowerCase() + '@gmail.com'}
});


console.log(CSStudent);
console.log('Email: ' + CSStudent.email);
console.log('Full Name: ' + CSStudent.fullName);


// JAVASCRIPT CLASSES
// ----------------------------------------------------------------------
// -> ES6 or ECMAScript2015, introduced classes.
// -> A class is a type of function, but instead of using the keyword
//    function to initiate it, we use the keyword class, and the
//    properties are assigned inside a constructor() method

// Class Definition
// -------------------------------------------------------------------------
// -> Use the keyword class to create a class, and always add the
//    constructor() method
// -> The constructor method is called each time the class object is
//    initialized


// METHODS
// ---------
// -> The constructor method is special, it is where you initialize
//    properties, it is called automatically when a class is initiated
// -> If you do not have a constructor method, JavaScript will add an
//    invisible and empty constructor method.

// STATIC METHODS
// -----------------------------------------------------------------------
// -> Static methods are defined on the class itself, and not on the
//    prototype.
// -> That means you cannot call a static method on the object (mycar),
//    but on the class (Car)


// Example
// ---------------------
class Car{
    constructor(carName, year) {
        this.carName = carName;
        this.year = year;
    }

     age(){
        return new Date().getFullYear() - this.year;
    }

    // static method passed with Car object to print name of the car
    // It has no access to object
    static name(myCar){
        return myCar.name;
    }
}

// Creating objects using Class name
var myCar = new Car('BMW', 2002);

// Note: The constructor method is called automatically when the object
//       is initialized.


// Access class methods
console.log(myCar.age());

// Access static methods (Using class name not prototype name)
console.log(Car.name(myCar));


// INHERITANCE
// ----------------------------------------------------------------------
// Use extends keyword

// // GETTERS AND SETTERS IN CLASS
// // -----------------------------------------------------------------------
// // -> The name of the getter/setter method cannot be the same as the
// //    name of the property.
// // -> Many programmers use an underscore character _ before the
// //    property name to separate the getter/setter from the actual
// //    property

// Example
class CarBrand {
    constructor(brand) {
        this._carname = brand;
    }
    present() {
        return 'I have a ' + this._carname;
    }
}

class CarModel extends CarBrand {
    constructor(brand, mod) {
        super(brand); // It will call  constructor() of parent class
        this._model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this._model;
    }

    // getters and setters
    set CarModel(x){
        this._model = x;
    }

    get CarModel(){
        return this._model;
    }
}

var myCar = new CarModel("Ford", "Mustang");
console.log(myCar.show());


// NOTE: Inheritance is useful for code reusability: reuse properties
//       and methods of an existing class when you create a new class.

// getters and setters in class
myCar.CarModel = 'Duster';
console.log(myCar.CarModel);
console.log(myCar.show());


// NOTE:
//   -> Unlike functions, and other JavaScript declarations, class
//      declarations are not hoisted
//   -> That means that you must declare a class before you can use it

// -> For other declarations, like functions, you will NOT get an error
//    when you try to use it before it is declared, because the default
//    behavior of JavaScript declarations are hoisting (moving the
//    declaration to the top).


// STRICT MODE & CLASSES
// ------------------------------------------------------------------------
// -> The syntax in classes must be written in "strict mode".
// -> You will get an error if you do not follow the "strict mode" rules.



// JAVASCRIPT FUNCTIONS
// -----------------------------------------------------------------------
// -> Defined using 'function' keyword
// -> We can use :-
//                a.) Function Declaration
//                b.) Function Expression

// FUNCTION DECLARATION
// -----------------------------------------------------------------------
// Syntax :
// function functionName(parameterList){
//    ...Function Body...
// }


// FUNCTION EXPRESSION {ANONYMOUS FUNCTION (A function without a name)}
// ------------------------------------------------------------------------
// -> A Function expression can be stored in a variable
// -> This function ends with a semi-colon because it is a part of
//    executable statement.

// Syntax:
// var variableName = function(parameterList){ ...Function Body... }

var SI = function(principal, rate, time){
    return (principal*rate*time)/100;
};

console.log(SI(1000000, 6, 2));


// FUNCTION CONSTRUCTOR  (Not Recommended)
// ----------------------------------------------------------------------
var hypotenuse = Function("perpendicular", "base",
                           "return Math.sqrt(Math.pow(perpendicular, 2) + Math.pow(base,2))");

console.log(hypotenuse(6, 8));


// FUNCTION HOISTING
// -----------------------------------------------------------------------
// -> Function declarations are hoisted


// SELF-INVOKING FUNCTION EXPRESSIONS (Anonymous Self-Invoking Functions)
// -----------------------------------------------------------------------
// -> Function declarations cannot be made "self-invoking"
// -> Function expressions can be made "self-invoking" if the expression
//    is followed by ().

// NOTE: We need to add () around the function expression to indicate it
//       a function expression.

// Example
(function(){
    console.log("Self-Invoking Functions");
})();


// FUNCTIONS ARE OBJECTS
// -----------------------------------------------------------------------
console.log(typeof(hypotenuse));  // type of functions = 'function'


// -> JavaScript functions can be best described as objects which have
//    both properties and methods
// -> 'arguments.length' returns the length of parameters passed to
//     a function

function func(a, b, c){
    var  x = a+b+c;
    console.log(arguments.length);
}

func(1, 2, 3);


// Converting function to string (functionName.toString())
console.log(func.toString());


// NOTES
// -----------------------------------------------------------------------
// -> METHODS: Functions part of object
// -> OBJECT CONSTRUCTOR FUNCTION: Function used to create new objects


// ARROW FUNCTIONS
// -----------------------------------------------------------------------
// -> For multiple parameters and function statements use () and {}
// -> Arrow functions do not have their own this. They are not well
//    suited for defining object methods.
// -> Using const is safer than using var, because a function expression
//    is always constant value
const sayHI = name => console.log('Hi ' + name + '!');
sayHI('Santosh');


// JAVASCRIPT FUNCTION PARAMETERS
// -----------------------------------------------------------------------

// -> PARAMETERS: They are the names listed in function definition
// -> ARGUMENTS: They are the real values passed to function

// PARAMETER RULES
// -------------------------------------------------------------------------
// -> Its definitions do not specify data types for parameters
// -> It do not do type-checking on the passed arguments
// -> It do not check the number of arguments received


// PARAMETERS DEFAULT
// -----------------------------------------------------------------------
// -> If a function is called with MISSING ARGUMENTS(less than declared)
//    the missing values are set to: undefined

function add1(x, y){
    if(y == undefined)
        y = 0;
    console.log(x+y);
}
add1(7);


// ES-6 allows default parameter value
function add2(a=0, b=0){
    console.log(a+b);
}
add2(3);



// 'arguments' OBJECT OF FUNCTION
// -----------------------------------------------------------------------
// -> Every function has built-in object: 'arguments'

function mul(){
    let res = 1;  // has a block scope
    for(let i=0; i<arguments.length; ++i){
        res *= arguments[i];
    }
    return res;
}

console.log(mul(1, 2, 3, 4, 5));

// Advantage of 'arguments' object of functions:
// ------------------------------------------------------------------------
// -> If there are too many arguments, these arguments can be reached
//    using 'arguments' object


// ARGUMENTS ARE PASSED BY VALUE
// ------------------------------------------------------------------------
// -> It means function only get to know the values, not the  argument's
//    location(address)
// -> Also change of arguments' value does not reflect outside the
//    function


// OBJECTS ARE PASSED BY REFERENCE
// -----------------------------------------------------------------------
// -> It means changes to object properties are visible outside the
//    function
// -> In JS primitive values (Number, String, Boolean, undefined,
//     null, Symbol) are assigned-by-value and compound values
//     (Object, Array) are assigned-by-reference


// INVOKING A FUNCTION
// ----------------------------------------------------------------------
// -> HTML:  Default global object is the HTML page itself
// -> BROWSER: Page object is the browser window.

function addTwo(a, b) {
    return this.res = a + b;
}

console.log(addTwo(10, 2));           // Will return 20
// window.addTwo(10, 2);     // Both are same function


// Function invocation using object
// -----------------------------------------------------------------------
var person={
    fullName: function(fName, lName) { return fName + ' ' + lName;}
}

console.log(person.fullName('Santosh', 'Swansi'));

// Function invocation using Function Constructor
// -------------------------------------------------------------------------
var x = new addTwo(12, 5); //  creates new obbject
console.log(x.res);


// FUNCTION CALL ( call() method )
// -----------------------------------------------------------------------

// ALL FUNCTIONS ARE METHODS
// ------------------------------------------------------------------------
// -> If a function is not a part of JS object then it is a part of
//    global object


// call() METHOD
// ------------------------------------------------------------------------
// -> With call(), an object can use a method belonging to another object

// Example:
var person = {
    // This method can be used on different objects like person1, person2
    // defined below
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe"
}

console.log(person.fullName.call(person1));  // Will return "John Doe"
console.log(person.fullName.call(person2));  // Will return "Mary Doe"


// call() METHOD WITH ARGUMENTS
// ------------------------------------------------------------------------
var person={
    fullDetails: function(city, country){
        return this.fName + ' ' + this.lName + ' resides in ' + city + ', ' + country;
    }
}

var person1 = {
    fName: 'Santosh',
    lName: 'Swansi'
}

console.log(person.fullDetails.call(person1, 'Bundu', 'India'));

// NOTE: With call() we can define a method (function in object)that can
//       be used on different objects
// ----------------------------------------------------------------------


// apply() METHOD
// ------------------------------------------------------------------------
// -> It is similar to call() but it accepts arguments as array

// -> With the apply() method, you can define a method(function in object)
//    that can be used on different objects.


console.log(person.fullDetails.apply(person1, ['Bundu', 'India']));


// SIMULATE Math.max() using apply()
// ------------------------------------------------------------------------

console.log(Math.max(1, 2, 3)); // 3

// -> Since JS Arrays does not have a max() method , we can apply
//    Math.max() method instead
var numbers = [1, 2, 3];
console.log(Math.max.apply(null, numbers));
console.log(Math.max.apply(Math, numbers));
console.log(Math.max.apply(0, numbers));
console.log(Math.max.apply(" ", numbers));

// NOTE: Strict mode
// -> If the first argument of the apply() method is not an object,
//    it becomes the owner (object) of the invoked function
// -> In "non-strict" mode, it becomes the global object


// NESTED FUNCTIONS
// ------------------------------------------------------------------------
function outerFunc(){
    var x = 1;
    function innerFunc(){
        return ++x;
    }
    return innerFunc();
}

console.log(outerFunc());



// JAVASCRIPT CLOSURES
// ------------------------------------------------------------------------
// -> It makes it possible for a function to have "private" variables
// -> A closure is a function having access to the parent scope, even
//    after the parent function has closed

// Example: Counter function
// ------------------------------------
// -> The variable 'add' is assigned the return value of a self-invoking
//    function
// -> The self-invoking function only runs once. It sets the counter to
//    zero (0), and returns a function expression
// -> This way add becomes a function. The "wonderful" part is that it
//    can access the counter in the parent scope
// -> The counter is protected by the scope of the anonymous function,
//    and can only be changed using the add function

var add = (function () {
    var counter = 0;

    // This will be stored in add
    return function () {
        counter += 1;
        return counter;
    }
})();

console.log(add.toString());  // closure function
console.log(add());  // 1
console.log(add());  // 2



// JAVASCRIPT HTML DOM ( DOCUMENT OBJECT MODEL)
// ------------------------------------------------------------------------
// -> With the HTML DOM, JavaScript can access and change all of the
//    elements of a HTML document


// HTML DOM
// -----------------------------------------------------------------------
// -> When web page is loaded, the browser creates a DOM of the page
// -> HTML DOM model is created as tree of objects


// WHAT IS DOM?
// -----------------------------------------------------------------------
// -> DOM is a W3C (World Wide Wed Consortium) standard
// -> DOM defines a standard for accessing documents :
//        "The W3C Document Object Model (DOM) is a platform and
//         language-neutral interface that allows programs and scripts
//         to dynamically access and update the content, structure, and
//         style of a document."

// -> The W3C DOM standard is separated into 3 different parts:
// -----------------------------------------------------------------------
// 1.) Core DOM - standard model for all document types
// 2.) XML DOM - standard model for XML documents
// 3.) HTML DOM - standard model for HTML documents


// WHAT IS HTML DOM?
// -----------------------------------------------------------------------
// -> The HTML DOM is a standard object model and programming interface
//    for HTML. It defines:
//      - The HTML elements as objects
//      - The properties of all HTML elements
//      - The methods to access all HTML elements
//      - The events for all HTML elements

// IN OTHER WORDS: The HTML DOM is a standard for how to get, change,
//                 add, or delete HTML elements



// HTML DOM METHODS
// ------------------------------------------------------------------------
// -> HTML DOM methods are actions you can perform (on HTML Elements)
// -> HTML DOM properties are values (of HTML Elements) that you can set
//    or change


// DOM PROGRAMMING INTERFACE
// -----------------------------------------------------------------------
//  -> HTML DOM can be accessed with JavaScript (and with other
//     programming languages)
//  -> In HTML DOM all HTML elements are objects
//  -> Programming interface is the properties and methods of each object


// EXAMPLE
// ------------------------------------------------------------------------
/*
  <html>
     <body>
        <p id="demo"> </p>

        <script>

           // Here getElementById() & innerHTML are corresponding method
           // & property of the HTML DOM Interface

           document.getElementById("demo").innerHTML = 'Welcome to HTML DOM';

        </script>
     </body>
  </html>

 */

// NOTE
// -> 'innerHTML' property can be used to get or change any HTML element,
//     including <html> and <body>
// -> 'getElementById' method is the most common way to access an HTML
//     element using id


// HTML DOM 'document' object
// ------------------------------------------------------------------------
// -> HTML DOM 'document' object is the owner of all other objects in
//    our web page
// -> It represents the web page
// -> If we want to access the HTML element, we always start accessing
//    'document' object


// FINDING HTML ELEMENTS
// -----------------------------------------------------------------------
//          Method	                               Description
// -----------------------------------------------------------------------
// document.getElementById(id)	            Find an element by element id
// document.getElementsByTagName(name)	    Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name


// CHANGING HTML ELEMENTS
// ------------------------------------------------------------------------
//       Property	                                  Description
// ------------------------------------------------------------------------
// -> element.innerHTML = new html content	Change the inner HTML of an
//                                           element
// -> element.attribute = new value	        Change the attribute value of
//                                           an HTML element
// -> element.style.property = new style	Change the style of an HTML
//                                           element

//            Method	                                Description
// -------------------------------------------------------------------------
// -> element.setAttribute(attribute, value) 	Change the attribute
//                                              value of an HTML element



// ADDING & DELETING HTML ELEMENTS
// ------------------------------------------------------------------------
//           Method	                             Description
// ------------------------------------------------------------------------
// document.createElement(element)	         Create an HTML element
// document.removeChild(element)	         Remove an HTML element
// document.appendChild(element)	         Add an HTML element
// document.replaceChild(new, old)	         Replace an HTML element
// document.write(text)	                Write into the HTML output stream



//                       ADDING EVENT HANDLERS
// --------------------------------------------------------------------------------------------------------------
//    Method	                                                                 Description
// --------------------------------------------------------------------------------------------------------------
// -> document.getElementById(id).onclick = function(){code}      Adding event handler code to an onclick event



// FINDING HTML ELEMENTS
// -----------------------------------------------------------------------
// -> The first HTML DOM Level 1 (1998), defined 11 HTML objects,
//    object collections, and properties
// -> These are still valid in HTML5
// -> Later, in HTML DOM Level 3, more objects, collections, and
//    properties were added


//     Property	                           Description                       	                     DOM
// -----------------------------------------------------------------------------------------------------------------
// document.anchors                 Returns all <a> elements that have a name attribute             	1
// document.applets                 Returns all <applet> elements (Deprecated in HTML5)	                1
// document.baseURI                 Returns the absolute base URI of the document	                    3
// document.body                    Returns the <body> element	                                        1
// document.cookie                  Returns the document's cookie	                                    1
// document.doctype                 Returns the document's doctype	                                    3
// document.documentElement	        Returns the <html> element	                                        3
// document.documentMode	        Returns the mode used by the browser	                            3
// document.documentURI	            Returns the URI of the document	                                    3
// document.domain	                Returns the domain name of the document server	                    1
// document.domConfig               Obsolete. Returns the DOM configuration	                            3
// document.embeds	                Returns all <embed> elements	                                    3
// document.forms	                Returns all <form> elements	                                        1
// document.head	                Returns the <head> element	                                        3
// document.images	                Returns all <img> elements	                                        1
// document.implementation	        Returns the DOM implementation	                                    3
// document.inputEncoding	        Returns the document's encoding (character set)	                    3
// document.lastModified	        Returns the date and time the document was updated	                3
// document.links	                Returns all <area> and <a> elements that have a href attribute	    1
// document.readyState	            Returns the (loading) status of the document	                    3
// document.referrer	            Returns the URI of the referrer (the linking document)	            1
// document.scripts	                Returns all <script> elements	                                    3
// document.strictErrorChecking	    Returns if error checking is enforced	                            3
// document.title	                Returns the <title> element	                                        1
// document.URL	                    Returns the complete URL of the document	                        1



// JAVASCRIPT HTML DOM ELEMENTS
// -----------------------------------------------------------------------
// FINDING HTML ELEMENTS
// -----------------------------------------------------------------------
// -> Different ways :-
//      a.) Finding HTML elements by id
//      b.) Finding HTML elements by tag name
//      c.) Finding HTML elements by class name
//      d.) Finding HTML elements by CSS selectors
//      e.) Finding HTML elements by HTML object collections


// a.) Finding HTML elements by id
// b.) Finding HTML elements by tag name
// c.) Finding HTML elements by class name
/*
    var elementById = document.getElementById("demo");
    var elementByTagName = document.getElementByTagName("P");
    var elementByClassName = document.getElementByClassName("para");
*/


// d.) Finding HTML elements by CSS Selectors
// -------------------------------------------------------------------------
// -> If we want to find all HTML elements that match a specified CSS
//    selector (id, class names, types, attributes, values of attributes,
//    etc), we can use querySelectorAll() method

// It returns a list of all <p> elements with class = "intro"
/* var x = document.querySelectorAll("p.intro"); */



// e.) Finding HTML elements by HTML object collections
// -----------------------------------------------------------------------

//  -> Finds the form element with id="frm"
/*
    var x = document.forms["frm"]

    var text = "";
    for(var i=0; i<x.length; ++i){
        text += x.elements[i].value + "<br>";
    }
*/


// List of accessible HTML object collections :-
//      document.anchors
//      document.body
//      document.documentElement
//      document.embeds
//      document.forms
//      document.head
//      document.images
//      document.links
//      document.scripts
//      document.title


//  CHANGING HTML USING HTML DOM
// ------------------------------------------------------------------------


// Changing the HTML Output Stream
// -----------------------------------------------------------------------
// -> JS can create dynamic HTML content
// -> document.write() can be used to write directly to HTML output stream


/* document.write(Date()); */

// NOTES:
//      -> Never use document.write() after the document is loaded
//      -> It will overwrite the document


// CHANGING HTML CONTENT
// -----------------------------------------------------------------------

// Change inner HTML of element with id = "he" to "hello"
/* document.getElementById("he").innerHTML = "hello" */

// Change source of image
/* document.getElementById("myImage").src = "newImag.png" */



// CHANGING CSS USING HTML DOM
// -----------------------------------------------------------------------

// Changing HTML Style
// ------------------------------------------------------------------------

// change the color of element with id  = "p2" to "blue"
/* document.getElementById("p2").style.color = "blue"; */


// Change HTML Style when some event occurred
// -----------------------------------------------------------------------

// On clicking button with id = "id1" change it color = "red"
/*
    <button type="button"
    onclick="document.getElementById('id1').style.color = 'red'">
    Click Me!</button>
*/



// JAVASCRIPT HTML DOM ANIMATION
// -----------------------------------------------------------------------

// Create an animation container
/*
    <div id="container">
        <div id="animation">Animation will go here </div>
    </div
*/

// Style the elements
/*
    #container {
        width: 400px;
        height: 400px;
        position: relative;
        background: yellow;
    }
    #animate {
        width: 50px;
        height: 50px;
        position: absolute;
        background: red;
    }
*/


// ANIMATION CODE
// -----------------------------------------------------------------------
// -> JavaScript animations are done by programming gradual changes
//    in an element's style
// -> The changes are called by a timer. When the timer interval is
//    small, the animation looks continuous

// BASIC CODE
// ------------------------------------------------------------------------
/*
    // -> frame() will run every 5 milli-seconds
    // -> It returns a number, representing the ID value of the timer that
    //     is set

    var id = setInterval(frame, 5);

    function frame() {
        if (// test for finished  ) {

            // clearInterval() method clears a timer set with setInterval()
            clearInterval(id);
        } else {
            // code to change the element style
        }
    }

*/

// Create Animation Using JavaScript
// ----------------------------------------------------------------------
/*
    function myMove() {
      var elem = document.getElementById("animate");

      // stopping varible
      var pos = 0;

      var id = setInterval(frame, 5);

      function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
        }
      }
    }
*/


// JAVASCRIPT HTML DOM EVENTS
// ------------------------------------------------------------------------
// -> JavaScript can react to HTML events :-
//                           :- When a user clicks the mouse
//                           :- When a web page has loaded
//                           :- When an image has been loaded
//                           :- When the mouse moves over an element
//                           :- When an input field is changed
//                           :- When an HTML form is submitted
//                           :- When a user strokes a key


// HTML event attributes
// -----------------------------------------------------------------------

// Runs displayDate() function when we click this button
/* <button onclick="displayDate()">Try it</button> */


// Assign events using HTML DOM
// ------------------------------------------------------------------------

// On clicking element with id = "myBtn", run displayDate() function
/*
    <script>
        document.getElementById("myBtn").onclick = displayDate;
    </script>
 */


// 'onload' and 'onunload' Events
// -----------------------------------------------------------------------
// -> 'onload' & 'onunload' events occur when user enters & exits the
//     web page
// -> 'onload' event can be used to check the visitor's browser type
//     and browser version, and load the proper version of the web
//     page based on the information
// -> 'onload' and 'onunload' events can be used to deal with cookies

/* <body onload="checkCookies()"> */



// 'onchange' EVENT
// -----------------------------------------------------------------------
// -> 'onchange' event is often used in combination with validation of
//     input fields

// upperCase() function will be called when a user changes the content
//  of an input field
/* <input type="text" id="fname" onchange="upperCase()"> */



// 'onmouseover' & 'onmouseout' Events
// -----------------------------------------------------------------------
// -> 'onmouseover' & 'onmouseout' events can be used to trigger a
//     function when the user's mouse is over, or out of, an HTML element


// Tonmousedown, onmouseup and onclick Events
// -----------------------------------------------------------------------
// -> 'onmousedown' , 'onmouseup' , and 'onclick' events are all parts of a
//     mouse-click
// -> First
//    when a mouse-button is clicked, the onmousedown event is triggered,
//    then,
//    when the mouse-button is released, the onmouseup event is triggered,
//    finally,
//    when the mouse-click is completed, the onclick event is triggered.



// 'onfocus' EVENT
//------------------------------------------------------------------------

// Execute a JavaScript when an input field gets focus
/* <input type="text" onfocus="myFunction()"> */


// 'onload' EVENT
// -----------------------------------------------------------------------

// Execute a JavaScript immediately after a page has been loaded:
/* <body onload="myFunction()"> */




// HTML DOM EVENT LISTENER
// ------------------------------------------------------------------------

// addEventListener() Method
// -----------------------------------------------------------------------
// -> It attaches an event handler to the specified element without
//    overwriting existing event handlers.
// -> We can add many (of same or different types) event handlers to one
//    element.
// -> We can add event listeners to any DOM object not only HTML
//    elements. i.e the window object.
// -> When using the addEventListener() method, the JavaScript is
//    separated from the HTML markup, for better readability and allows
//    you to add event listeners even when you do not control the HTML
//    markup.
// -> We can easily remove an event listener by using the
//    removeEventListener() method



// SYNTAX
// -----------------------------------------------------------------------

/*
     element.addEventListener(event, function, useCapture(optional));

     event:      type of event (like 'click' , 'onmouseover' etc.)
     function :  Function we want to call when event occurred
     usCapture:  Boolean value specifying whether to use event bubbling
                 or event capturing
*/

// NOTE: -> We don't use the "on" prefix for the event
//       -> use "click" instead of "onclick".


// ADDING EVENT HANDLER TO AN ELEMENT
// -----------------------------------------------------------------------

// Alert "Hello World!" when the user clicks on an element:
/*
 element.addEventListener("click", function(){ alert("Hello World!"); });
*/

// OR

/*
 element.addEventListener("click", myFunction);

 function myFunction(){
     alert("Hello World!");
 }
*/



// ADDING MULTIPLE EVENT HANDLERS TO AN ELEMENT
// ------------------------------------------------------------------------
// -> addEventListener() method allows you to add many events to the same
//    element, without overwriting existing events

// Example (Same type of event)
// ------------------------------------------------------------------------
/*
    element.addEventListener("click", myFunction);
    element.addEventListener("click", mySecondFunction);
*/

// Example (Different type of events to same element)
/*

    element.addEventListener("mouseover", myFunction);
    element.addEventListener("click", mySecondFunction);
    element.addEventListener("mouseout", myThirdFunction);

*/



// ADDING EVENT HANDLERS TO THE  'window'  OBJECT
// -----------------------------------------------------------------------
// -> addEventListener() method allows you to add event listeners on any
//    HTML DOM object such as HTML elements, the HTML document, the
//    'window' object, or other objects that support events, like the
//    'xmlHttpRequest' object.


// Example
// -----------------------------------------------------------------------
// -> Add an event listener that responds when a user resizes the window

/*
    window.addEventListener("resize", function(){
        document.getElementById("demo").innerHTML = someText;
    });
*/


// Passing Parameters
// ------------------------------------------------------------------------
// -> When passing parameter values, use an "anonymous function" that
//   calls the specified function with the parameters

/*
  element.addEventListener("click", function(){ myFunction(p1, p2); });
*/



// EVENT CAPTURING V/S EVENT BUBBLING
// ------------------------------------------------------------------------
// -> Event propagation is a way of defining the element order when an
//    event occurs.

// QUESTION: If you have a <p> element inside a <div> element, and the
//           user clicks on the <p> element, which element's "click"
//           event should be handled first?

// A.) In BUBBLING:
//    -> inner most then the outer
//    -> <p> element's click event is handled first, then the <div>
//       element's click event.

// B.) In capturing:
//    -> outer most and then the inner
//    -> <div> element's click event will be handled first, then the
//       <p> element's click event.


// Example
// -----------------------
/*
    DEFAULT VALUE: (false) OR (bubbling) OR (inner most then outer)

    document.getElementById("myP").addEventListener("click", myFunction, true);
    document.getElementById("myDiv").addEventListener("click", myFunction, true);
*/

// removeEventListener() METHOD
// ------------------------------------------------------------------------
// -> removeEventListener() method removes event handlers that have been
//    attached with the addEventListener() method



// NOTE: attachEvent() & detachEvent() can be used when addEventListener()
//        & removeEventListener() do not work

/*

    element.attachEvent(event, function);
    element.detachEvent(event, function);

*/



// HTML DOM NAVIGATION
// ------------------------------------------------------------------------
// -> With the HTML DOM, you can navigate the node tree using node
//    relationships

// DOM NODES
// ------------------------------------------------------------------------
// -> According to the W3C HTML DOM standard, everything in an HTML
//    document is a node:
//      - The entire document is a document node
//      - Every HTML element is an element node
//      - The text inside HTML elements are text nodes
//      - Every HTML attribute is an attribute node (deprecated)
//      - All comments are comment nodes


// NOTES :-
// -----------------------------------------------------------------------
// -> With the HTML DOM, all nodes in the node tree can be accessed by
//    JavaScript
// -> New nodes can be created, and all nodes can be modified or deleted



// NODE RELATIONSHIPS
// ------------------------------------------------------------------------
// -> The nodes in the node tree have a hierarchical relationship to each
//    other.
// -> The terms parent, child, and sibling are used to describe the
//    relationships.
// -> In a node tree, the top node is called the root (or root node)
// -> Every node has exactly one parent, except the root
// -> A node can have a number of children
// -> Siblings (brothers or sisters) are nodes with the same parent


/*
    <html>    <!-- ROOT NODE + PARENT OF HEAD AND BODY -->

      <head>   <!- FIRST CHILD + SIBLING OF BODY -->
        <title>DOM Tutorial</title>    <!-- CHILD OF HEAD -->
                                 <!-- TITLE'S  TEXT IS CHILD OF TITLE -->
      </head>

      <body>                          <!- LAST CHILD -->
        <h1>DOM Lesson one</h1>   <!-- CHILD OF BODY + SIBLING OF P -->
        <p>Hello world!</p>       <!-- CHILD OF BODY + SIBLING OF H1 -->
      </body>

    </html>
*/


//                      NAVIGATING BETWEEN NODES
// -----------------------------------------------------------------------
// -> We can use the following node properties to navigate between nodes
//    with JavaScript:
//      :- parentNode
//      :- childNodes[nodenumber]
//      :- firstChild
//      :- lastChild
//      :- nextSibling
//      :- previousSibling


// CHILD NODES AND NODE VALUES
// -----------------------------------------------------------------------

/* <title id="demo">DOM Tutorial</title> */

// -> The element node <title> does not contain text
// -> It contains text node (child of <title> element node) with the value
//    "DOM Tutorial"

// Accessing value of text node
// -------------------------------------------------------------------------

// Method-1
/* var myTitle = document.getElementById("demo").innerHTML; */


// Method-2
/* var myTitle = document.getElementById("demo").firstChild.nodeValue; */


// Method-3
/* var myTitle = document.getElementById("demo").childNodes[0].nodeValue; */



// DOM ROOT NODES
// ------------------------------------------------------------------------
// -> There are two special properties that allow access to the full
//    document:
//      :- document.body                -   The body of the document
//      :- document.documentElement     -   The full document


// document.body.innerHTML
/*
    <script>
    alert(document.body.innerHTML);   <!-- Gives us full body of the HTML -->
    </script>
*/


// document.documentElement.innerHTML
/*

    <script>
    alert(document.documentElement.innerHTML);  <!-- Gives us full HTML document -->
    </script>

 */



// THE 'nodeName' PROPERTY
// -----------------------------------------------------------------------
// -> The nodeName property specifies the name of a node.
//      :- nodeName is read-only
//      :- nodeName of an element node = tag name
//      :- nodeName of an attribute node = attribute name
//      :- nodeName of a text node = #text
//      :- nodeName of the document node = #document

// Example
/*
    <h1 id="id01">My First Page</h1>
    <p id="id02"></p>

    <script>
        document.getElementById("id02").innerHTML = document.
                                getElementById("id01").nodeName;  // H1
    </script>
*/

// NOTE: 'nodeName' gives us uppercase tag name of a HTML element



// THE 'nodeValue' PROPERTY
// ------------------------------------------------------------------------
// -> 'nodeValue' property specifies the value of a node.
//      :- nodeValue for element nodes = null
//      :- nodeValue for text nodes = text itself
//      :- nodeValue for attribute nodes = attribute value


// 'nodeType' PROPERTY
// ------------------------------------------------------------------------
// -> 'nodeType' property is read only.
// -> It returns the type of a node.

// The most important 'nodeType' properties are:
// -----------------------------------------------------------------------
//  Node                Type	                Example
// -----------------------------------------------------------------------
// ELEMENT_NODE	        1	<h1 class="heading">W3Schools</h1>
// ATTRIBUTE_NODE	    2	 class = "heading" (deprecated)
// TEXT_NODE	        3	 W3Schools
// COMMENT_NODE	        8	<!-- This is a comment -->
// DOCUMENT_NODE	    9	The HTML document itself (the parent of <html>)
// DOCUMENT_TYPE_NODE	10	<!Doctype html>


// Example
/*
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
   document.getElementById("id02").innerHTML = document.
                        getElementById("id01").nodeType; <!-- 1 -->
</script>
*/



// JAVASCRIPT HTML DOM ELEMENTS (NODES)
// ------------------------------------------------------------------------


// CREATING NEW HTML ELEMENTS (NODES)
// ------------------------------------------------------------------------
// -> To add a new element to the HTML DOM, you must create the element
//    (element node) first, and then append it to an existing element

/*

    <script>
        var para = document.createElement("p");
        var node = document.createTextNode("This is new.");
        para.appendChild(node);

        var element = document.getElementById("div1");

        <!-- appendChild() appended the new element as the last child
             of the parent -->
        element.appendChild(para);
    </script>
*/


// CREATING NEW HTML ELEMENTS -  insertBefore()
// -----------------------------------------------------------------------
// -> If we do not want to append child element to last

/*
    <script>
        var para = document.createElement("p");
        var node = document.createTextNode("This is new.");
        para.appendChild(node);

        var element = document.getElementById("div1");
        var child = document.getElementById("p1");
        element.insertBefore(para, child);  // insert before child element
    </script>
*/


// REMOVING HTML ELEMENTS
// ------------------------------------------------------------------------
// -> For new browser use : element.remove()
// -> For older non-supported browser use :
//              parentElement.removeChild(childElement)

/*
<script>
    var element = document.getElementById("p1");
    element.remove();
</script>
*/


// REMOVING A CHILD NODE
// ------------------------------------------------------------------------
// -> For browsers that does not support the remove() method, you have
//    to find the parent node to remove an element

/*
<script>
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
</script>
*/


// NOTE: If we does not parentNode of the childNode use
//              childNode.parentNode to get parent node



// REPLACING HTML ELEMENTS
// --------------------------------------------------------------------------
// -> To replace an element to the HTML DOM, use the replaceChild()
//    method

/*
<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para, child);
</script>
*/



// JAVASCRIPT HTML DOM COLLECTIONS
// ------------------------------------------------------------------------

// THE HTMLCollection OBJECT
// ------------------------------------------------------------------------
// -> getElementsByTagName() method returns an HTMLCollection object.
// -> An HTMLCollection object is an array-like list (collection) of
//    HTML elements.
// -> It is not an array though you can access using index but we cannot
//    use Array methods  like valueOf(), pop(), push(), etc.


// Example:
// Get all <p> elements and change their color to blue
/*
    var x = document.getElementsByTagName("p");

    for(var i=0; i<x.length; ++i){
         x[i].style.color = "blue";
    }
*/



// JAVASCRIPT HTML DOM NODE LISTS
// -----------------------------------------------------------------------

//  The HTML DOM NodeList Object
// -----------------------------------------------------------------------
// -> A NodeList object is a list (collection) of nodes extracted from
//    a document.
// -> A NodeList object is almost the same as an HTMLCollection object.
// -> Some (older) browsers return a NodeList object instead of an
//    HTMLCollection for methods like getElementsByClassName().
// -> All browsers return a NodeList object for the property childNodes.
// -> Most browsers return a NodeList object for the method
//    querySelectorAll().


// Example
// Select all <p> elements and change color to "red"
/*
    <!-- It returns NodeList object -->
    var myNodeList = document.querySelectorAll("p");

    for (i = 0; i < myNodelist.length; i++) {
       myNodelist[i].style.color = "red";
    }
*/


// The Difference Between an HTMLCollection and a NodeList
// --------------------------------------------------------------------------
// -> An HTMLCollection is a collection of HTML elements.
// -> A NodeList is a collection of document nodes.
// -> Only the NodeList object can contain attribute nodes and text nodes.


// NOTE:  A node list is not an array!



// AJAX ( Asynchronous JavaScript And XML )
// -------------------------------------------------------------------------
// -> AJAX is a developer's dream, because you can:
//      :- Read data from a web server - after the page has loaded
//      :- Update a web page without reloading the page
//      :- Send data to a web server - in the background

// -> AJAX is not a programming language.
// -> AJAX just uses a combination of:
//      :- A browser built-in XMLHttpRequest object (to request data from
//         a web server)
//      :- JavaScript and HTML DOM (to display or use the data)


// AJAX Example
// -----------------------------------------------------------------------
// HTML Page
/*
    <!DOCTYPE html>
    <html>
    <body>

    <div id="demo">
      <h2>Let AJAX change this text</h2>
      <button type="button" onclick="loadDoc()">Change Content</button>
    </div>

    </body>
    </html>
*/


// -> The <div> section is used to display information from a server.
// -> The <button> calls a function (if it is clicked).
// -> The function requests data from a web server and displays it.


// FUNCTION loadDec()
/*
    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("demo").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
    }
*/



// AJAX IS A MISLEADING NAME
// -------------------------------------------------------------------------
// -> AJAX applications might use XML to transport data, but it is
//    equally common to transport data as plain text or JSON text.


// NOTES:
// -> AJAX allows web pages to be updated asynchronously by exchanging
//    data.
// -> with a web server behind the scenes. This means that it is possible
//    to update parts of a web page, without reloading the whole page.



// HOW AJAX WORKS ?
// ------------------------------------------------------------------------
// 1. An event occurs in a web page (the page is loaded, a button is
//    clicked)
// 2. An XMLHttpRequest object is created by JavaScript
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript



// The XMLHttpRequest Object
// ------------------------------------------------------------------------
// -> The XMLHttpRequest object can be used to exchange data with a web
//    server behind the scenes. This means that it is possible to update
//    parts of a web page, without reloading the whole page.

// Creating XMLHttpRequest
/*   var xhttp = new XMLHttpRequest();   */



// ACCESS ACROSS DOMAINS
// ------------------------------------------------------------------------
// -> For security reasons, modern browsers do not allow access across
//    domains.
// -> This means that both the web page and the XML file it tries to
//    load, must be located on the same server.



// FOR OLDER BROWSERS
// ------------------------------------------------------------------------
// -> Old versions of Internet Explorer (5/6) use an 'ActiveXObject'
//    instead of the XMLHttpRequest object

/*
if (window.XMLHttpRequest) {
   // code for modern browsers
   xmlhttp = new XMLHttpRequest();
 } else {
   // code for old IE browsers
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
*/



//               XMLHttpRequest OBJECT METHODS
// ------------------------------------------------------------------------
//       Method	                         Description
// -------------------------------------------------------------------------
// -> new XMLHttpRequest()	                Creates a new XMLHttpRequest
//                                          object
// -> abort()	                            Cancels the current request
// -> getAllResponseHeaders()	            Returns header information
// -> getResponseHeader()	                Returns specific header
//                                          information
// -> open(method, url, async, user, psw)	Specifies the request

//                    method: the request type GET or POST
//                    url: the file location
//                    async: true (asynchronous) or false (synchronous)
//                    user: optional user name
//                    psw: optional password

// -> send()	                Sends the request to the server
//                              ( Used for GET requests )
// -> send(string)	            Sends the request to the server.
//                              ( Used for POST requests )
// -> setRequestHeader()	    Adds a label/value pair to the header to
//                              be sent



//              XMLHttpRequest Object Properties
// ------------------------------------------------------------------------
//      Property	                     Description
// ------------------------------------------------------------------------
// -> onreadystatechange	Defines a function to be called when the
//                          readyState property changes
// -> readyState          	Holds the status of the XMLHttpRequest.
//                           0: request not initialized
//                           1: server connection established
//                           2: request received
//                           3: processing request
//                           4: request finished and response is ready

// -> responseText	        Returns the response data as a string
// -> responseXML	        Returns the response data as XML data
// -> status	            Returns the status-number of a request
//                           200: "OK"
//                           403: "Forbidden"
//                           404: "Not Found"
// -> statusText	        Returns the status-text (e.g. "OK" or "Not
//                           Found")



// AJAX REQUEST
// ------------------------------------------------------------------------

// Send a Request To a Server
// ------------------------------------------------------------------------
// -> To send a request to a server, we use the open() and send() methods
//    of the XMLHttpRequest object

/*
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
*/


// GET or POST?
// ------------------------------------------------------------------------
// -> GET is simpler and faster than POST, and can be used in most cases.
//
// However, always use POST requests when:
//   -> A cached file is not an option (update a file or database on the
//      server).
//   -> Sending a large amount of data to the server (POST has no size
//      limitations).
//   -> Sending user input (which can contain unknown characters), POST
//      is more robust and secure than GET.



// GET REQUESTS
// ------------------------------------------------------------------------
/*
    xhttp.open('GET', 'demo_get.asp', true);
    xhttp.send();
*/

// -> If we want to send information with the GET method, add the
//    information to the URL
/*
   // send data of person having first name = "Henry", last name = "Ford"
   xhttp.open('GET' 'demo_get.asp?fname=Henry&lname=Ford', true);
   xhttp.send();
*/



// POST REQUESTS
// ------------------------------------------------------------------------

/*
    xhttp.open("POST", "demo_post.asp", true);
    xhttp.send();
*/

// -> To POST data like an HTML form, add an HTTP header with
//    setRequestHeader(). Specify the data you want to send in
//    the send() method:

// setRequestHeader(header, value)	  Adds HTTP headers to the request
//                                    header: specifies the header name
//                                    value: specifies the header value

/*
   xhttp.open("POST", "demo_post_asp", true);
   xhttp.setRequestHeader("Content-type",
                                   "application/x-www-form-urlencoded");
   xhttp.send("fname=Henry&lname=Ford");
*/


// URL parameter of  open()  -> File on a server
// ------------------------------------------------------------------------
// -> It is an address to a file on a server
// -> The file can be any kind of file, like .txt and .xml, or server
//    scripting files like .asp and .php (which can perform actions on
//    the server before sending the response back).


// Asynchronous parameter of open()
// ------------------------------------------------------------------------
// -> Server requests should be sent asynchronously.  ( True / False )

// -> By sending asynchronously, the JavaScript does not have to wait
//    for the server response, but can instead:
//         :- execute other scripts while waiting for server response
//         :- deal with the response after the response is ready




// THE 'onreadystatechange' PROPERTY
// ------------------------------------------------------------------------
// -> With the XMLHttpRequest object you can define a function to be
//    executed when the request receives an answer.

/*
    // this function will be executed when request receives an answer
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
*/




// SYNCHRONOUS REQUEST
// ------------------------------------------------------------------------
// -> To execute a synchronous request, change the third parameter in the
//    open() method to false
// -> Sometimes async = false are used for quick testing.
// -> Since the code will wait for server completion, there is no need
//    for an onreadystatechange function

// Example
/*

    // It will wait for the response before proceeding further
    xhttp.open("GET", "ajax_info.txt", false);
    xhttp.send();
    document.getElementById("demo").innerHTML = xhttp.responseText;
*/



// NOTE: Synchronous XMLHttpRequest (async = false) is not recommended
//       because the JavaScript will stop executing until the server
//       response is ready. If the server is busy or slow, the
//       application will hang or stop.



// AJAX SERVER RESPONSE
// ------------------------------------------------------------------------
// -> The readyState property holds the status of the XMLHttpRequest.
// -> The onreadystatechange property defines a function to be executed
//    when the readyState changes.
// -> The status property and the statusText property holds the status
//    of the XMLHttpRequest object.


// NOTES:
//   -> The onreadystatechange function is called every time the
//      readyState changes.
//   -> The onreadystatechange event is triggered four times (1-4),
//      one time for each change in the readyState.
//   -> When readyState is 4 and status is 200, the response is ready.


/*
    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
    }
*/



// USING A CALLBACK FUNCTION
// ------------------------------------------------------------------------
// -> A callback function is a function passed as a parameter to
//    another function
// -> If you have more than one AJAX task in a website, you should
//    create one function for executing the XMLHttpRequest object,
//    and one callback function for each AJAX task.


//  Example
// ----------------------------------------------------------------------
/*
    loadDoc("url-1", myFunction1);
    loadDoc("url-2", myFunction2);

    function loadDoc(url, cFunction) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          cFunction(this);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    }


    function myFunction1(xhttp) {
      // action goes here
    }

    function myFunction2(xhttp) {
      // action goes here
    }
*/



// 'responseText' PROPERTY
// -----------------------------------------------------------------------
// -> The 'responseText' property returns the server response as a
//    JavaScript string, and you can use it accordingly

/*
  document.getElementById("demo").innerHTML = xhttp.responseText;
*/



// 'responseXML' PROPERTY
// -------------------------------------------------------------------------
// -> The XMLHttpRequest object has an in-built XML parser.
// -> The responseXML property returns the server response as an XML DOM
//    object.

/*
    xmlDoc = xhttp.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("ARTIST");

    for (i = 0; i < x.length; i++) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }

    document.getElementById("demo").innerHTML = txt;
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
*/



// The getAllResponseHeaders() Method
// ------------------------------------------------------------------------
// -> The getAllResponseHeaders() method returns all header information
//    from the server response.

/*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
                                         this.getAllResponseHeaders();
      }
    };
*/



// The getResponseHeader() Method
// ------------------------------------------------------------------------
// -> The getResponseHeader() method returns specific header information
//    from the server response.

// Example
/*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                                this.getResponseHeader("Last-Modified");
          }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
*/

