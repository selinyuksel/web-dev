// alert('Hello World!');

console.log('Hello World!');

/////// VARIABLES AND CONSTANTS

//variables and constants
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log('Variables and Constants', '\n',
    global1, '\n',
    functionScoped, '\n',
    blockScoped, '\n',
    constant1, '\n');

//variable types
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log('Variable types', '\n',
    numberVariable, '\n',
    floatingPointNumber, '\n',
    stringVariable, '\n',
    booleanVariable, '\n',
    isNumber, '\n',
    isString, '\n',
    isBoolean, '\n');

//boolean variables
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log('Boolean Variables', '\n',
    true1, '\n',
    false1, '\n',
    false2, '\n',
    true2, '\n',
    true3, '\n',
    true4, '\n',
    true5, '\n',
    false3, '\n',);

/////// CONDITIONALS

//if else
console.log('If else');
if(true1) {console.log(true);}

if(!false1) {console.log('!false1');}
else {console.log('false1');}

//Ternary conditional operator
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log('Ternary Conditional Operator', '\n', greeting);

/////// FUNCTIONS

//Legacy ES5 function
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log('Legacy ES5 function', '\n',twoPlusFour);

//New ES6 function
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log('New ES6 function', '\n', threeMinusOne);

//implied return
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log('Implied Return', '\n', fourTimesFive);

//parenthesis and parameters
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log('Parenthesis and Paramteres', '\n',
    twoSquared, '\n',
    threePlusOne);

/////// ARRAYS

//arrays
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log('Arrays', '\n',
    numberArray1, '\n',
    stringArray1, '\n',
    variableArray1);

//array index and length
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log('Array index and length', '\n',
    length1, '\n',
    index1);

//adding and removing data to/from arrays
//adding new items
numberArray1.push(6);
stringArray1.push('string3');

//remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log('Add and remove data to arrays', '\n',
    numberArray1, '\n',
    stringArray1);


//for loops
console.log('For Loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

//map
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log('Map function', '\n',
    numberArray1, '\n',
    squares, '\n',
    cubes);

//find
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log('Find function', '\n',
    four, '\n',
    string3);

//find index
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log('Find index', '\n',
    fourIndex, '\n',
    string3Index);

//filter
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log('Filter function', '\n',
    numberArray1, '\n',
    numbersGreaterThan2, '\n',
    evenNumbers, '\n',
    oddNumbers);

/////// TEMPLATE STRINGS

//template strings
const five = 2 + 3;
const result1 = "2 + 3 = " + five;

const result2 = `2 + 3 = ${2 + 3}`;

const username = "alice";
const greeting1 = `Welcome home ${username}`;

const loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2 ? "Yes" : "No"}`;

console.log('Template strings', '\n',
    result1, '\n',
    result2, '\n',
    greeting1, '\n',
    greeting2);

/////// JQUERY
const init = () => {
    console.log('Hello world from jQuery');

    //binding to the DOM
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    //changing style programmatically
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    //getting and setting attributes
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    //adding and removing classes
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    const hideMe = $("#hide-me");
    hideMe.hide();

    const showMe = $("#show-me");
    showMe.show();

    //creating new elements
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    //appending new elements
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    //removing and emptying elements
    const removeThisLi = $("#remove-this");
    const emptyThisUl = $("#empty-this");
    removeThisLi.remove();
    emptyThisUl.empty();

    //changing content
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
    <li>Line item A</li>
    <li>Line item B</li>
    <li>Line item C</li>`);

    //navigating the dom
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');
    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    //handling click events
    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    //event target
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    //hide/show element
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);




}
$(init);
