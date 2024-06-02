document.getElementById('js-basic').innerHTML = "BASICS JAVASCRIPT";

/*JavaScript Statements*/

document.getElementById('js-statement').innerHTML = "JavaScript Statements";

document.querySelector('.js-statement-p').innerHTML = "JavasScript programs consist of statements with appropriate syntax.<br> A single JavaScript statement may span single or multiple lines. <br> JavaScript statements should be ended or seperated by semicolons (;).";

const codeSample = document.getElementsByClassName('code-sample');

for (let i = 0; i < codeSample.length; i++) {
    const result = codeSample[i];
    result.innerHTML = "Code Samples";
}

document.querySelector('.single-line').innerHTML = "Below is a program that consist of <b>two single-line statements</b>.";

document.querySelector('.basicEx').innerHTML = ` document.getElementById("firstElem").innerHTML = "Hello World!";
document.getElementById("secondElem").innerHTML = "Hello Everyone!";`;

document.querySelector('.multi-line-span').innerHTML = 'Below is a program that contains a single statement that <b>spans multiple-lines</b>.';

document.querySelector('.basicEx1').innerHTML = `document.getElementById('elem').innerHTML = <br>
'Hello world!';`;



document.querySelector('.grouping-js-statement').innerHTML = "Grouping JavaScript Statements";

document.querySelector('.g-js-statement-p').innerHTML = "JavaScript statements can be grouped inside curly brackets <b>{...}</b>. <br> These are called <b>code blocks</b>. <br> Code blocks are used to make statement extecute together. <br> These are commonly used in <b>functions</b>.";

document.querySelector('.basicEx2').innerHTML = `function myFunc() <b>{</b> <br>
document.getElementById("demo").innerHTML = "Hello World!"; <br>
<b>}</b>
`;

document.querySelector('#js-keywords').innerHTML = "JavaScript Keywords";
document.querySelector('.js-keywords-p').innerHTML = "JavaScript statements usually start with a keyword. <br> Each keyword in JavaScript has its own special meaning. <br> <em>For example</em>: <b>var</b>, <b>const</b> and <b>let</b> keywords are used to declare a <b>variable</b> name.";
document.querySelector('.basicEx3').innerHTML = `function myFunc() { <br>
<b>var</b> text = "Hello World!";<br>
document.getElementById("demo").innerHTML = text; <br>
}`;

/*JavaScript Syntax*/

document.querySelector('.js-syntax').innerHTML = "JavaScript Syntax";
document.querySelector('.js-syntax-p').innerHTML = 'JavaScript follows a set of rules call <b>syntax</b>. <br> JavaScript syntax should be followed to create correctly-constructed programs.';

document.querySelector('.variable-declaration').innerHTML = "Variable Declaration";
document.querySelector('.v-d-p').innerHTML = 'In Math, we use variables to hold the values. <br> It works the same way in JavaScript, a value can be assigned to a variable. <br> This is called the declaring variables. <br> To declare a variable, use the <b>var</b> keyword to create it, an then an equal sign <b>=</b> to assign a value.';
document.querySelector('.basicEx4').innerHTML = `var num = 5; <span class="code-comment">// assigns number 5 to the variable named num</span>
<br> document.write(num); <span class="code-comment">// prints the output</span>
`;
document.querySelector('.v-d-p1').innerHTML = "The <b>num</b> in the example above, is called identifier. <br> JavaScript identifiers are used to name variable.";

document.querySelector('.js-case-sensitive').innerHTML = "JavaScript is Case-Sensitive";
document.querySelector('.js-case-sensitive-p').innerHTML = 'JavaScript identifiers are sensitively cased. <br> In this example, the variables <b>num</b> and <b>Num</b> are quite different.';
document.querySelector('.basicEx5').innerHTML = ` var num = 5; <br>
var Num = 6;
<br>
var sum = num + Num; <span class="code-comment">// adds the value of num and Num </span><br>
document.write(sum); <span class="code-comment">// prints the value of the variable sum</span>
`;

/*JavaScript Comments*/

document.querySelector('.js-comment').innerHTML = 'JavaScript Comments';
document.querySelector('.js-comment-p').innerHTML = "JavaScript <b>comments</b> used to make programming easier to read and understand. <br> Comments are not executed by the browser. <br> Comments can be used to add notes, suggestions and hints to a JavaScript code. <br> There are two types of comments in JavaScript, the <b>single-line</b> and <b>multi-line</b>.";

document.querySelector('.single-line-comment').innerHTML = "Single-Line Comment";
document.querySelector('.single-line-comment-p').innerHTML = "To make a single-line comment, add two forward slash <b>//</b> at the beginning of the line. <br>This make all text fowlling it to be a comment.";
document.querySelector('.basicEx6').innerHTML = `<span class="code-comment"> // this function changes the content of the paragraph element</span><br>
function myFunc() { <br>
var text = "Hello World!"; <br>
document.getElementById("demo").innerHTML = text;<br>
}`;
document.querySelector('.single-line-comment-p1').innerHTML = 'Another way is to use the <b>/*...*/</b>, the comment goes between asterisks. <br> This technique is much more flexable.';
document.querySelector('.basicEx7').innerHTML = `<span class="code-comment">/* this function changes the content of the paragraph element */</span> <br>
function myFunc() {<br>
var text = "Hello World!";<br>
document.getElementById("demo").innerHTML = text;<br>
} <br> <span class="code-comment> It can also be used in the middle of a line</span>`;

document.querySelector('.multi-line-comment').innerHTML = 'Multi-Line Comment';
document.querySelector('.multi-line-comment-p').innerHTML = 'To make multi-line-comment use this syntax. <br> <span class="code-comment">/* <br> your multi line comment <br>your multi line comment <br>your multi line comment <br>*/</span>';
document.querySelector('.basicEx8').innerHTML = `function myFunc() { <br>
var x = 6;<br>
var y = 9;<br>
var sum = x + y;<br>
<span class="code-comment"> /* let's add the value of y to x
and then print the sum */<br>

/*<br>
you can also comment like this<br>
sometimes it's more convenient<br>
and easier to see<br>
*/</span><br>
document.getElementById("demo").innerHTML = sum;<br>
}`;

/*JavaScript Variables*/
document.querySelector('.js-variable').innerHTML = 'JavaScript Variables';
document.querySelector('.js-variable-p').innerHTML = 'In programming or even in algebra, we use variables to <b> hold values</b>. <br> In JavaScript variables are used to <b>store data</b>. <br> The data stored could be a <b>Number</b>, a <b>text</b> or others. Making use of variables in JavaScript is very easy. Here is how.';
document.querySelector('.basicEx9').innerHTML = `var firstName = "John";<br>
var lastName = "Doe";<br>
var age = 30;
<br>
<span class='code-comment'> // printing values</span><br>
document.write(firstName + " " + lastName + "<br>");<br>
document.write(age);`;

document.querySelector('.js-variable-p1')
.innerHTML = 'As you can expect:';
document.querySelector('.js-variable-list')
.innerHTML = "<li>The text \"John\" is stored/assigned to <b>firstName</b></li> <li>The \"Doe\" is stored/assigned to the \"lastName\".</li> <li>The number \"30\" is stored/assigned to \"age\".</li>";

document.querySelector('.declaring-variable').innerHTML = 'Declaring a Variable';
document.querySelector('.declaring-variable-p')
.innerHTML = 'The <b>var</b> statement creates or <em>declare</em> a variable.';
document.querySelector('.declaring-variable-p1').innerHTML = 'In the example below, the variable <b>x</b> is declared, and is <em>initialized to the value 24.';
document.querySelector('.basicEx10').innerHTML = `  var x = 24; <br>
document.write(x); <span class='code-comment'>// prints the value of x </span>`;
document.querySelector('.declaring-variable-p2').innerHTML = 'We can also declare or create a variable first, then assign a value (<b>initialize</b>) later.';
document.querySelector('.basicEx11').innerHTML = ` var x; <span class='code-comment'>// declares or creates variable x</span> <br>
x = 5; <span class='code-comment'>// assigns a value to variable x</span><br>
document.write(x); <span class='code-comment'>// prints the value of x</span>`;
document.querySelector('.declaring-variable-p3').innerHTML = '<b>Note</b>: If you don\'t assign a value to the variable, the value will be undefined.';

document.querySelector('.declare-multi-variable').innerHTML = 'Declaring Multiple Variables in One Statement';
document.querySelector('.declare-multi-variable-p').innerHTML = 'It is possible to declare multiple variables at once, using a single statement. <br> Simply seperate the variables with a comma (<b>,</b>).';
document.querySelector('.basicEx12').innerHTML = ` var firstName = "John", lastName = "Doe", age = 30; <span class='code-comment'>// declares three variables at once</span>`;

document.querySelector('.equal-sign').innerHTML = 'The Equal Sign ( = )';
document.querySelector('.equal-sign-p').innerHTML = 'You may notice, that we used the equal sign <b>=</b> to assign values or data to the variables.<br> The equal sign (<b>=</b>) is called the <b>assignment operator</b>.';

document.querySelector('.naming-variable').innerHTML = 'Naming Variables';
document.querySelector('.naming-variable-p').innerHTML = 'JavaScript variables should be identified with <b>unique name</b>. <br> These are called <b>identifiers</b>. <br>Identifiers can be as short as single letters like a, b, x, y or z. <br> They could also be descriptive like <b>firstName</b> or <b>lastName</b>';

document.querySelector('.rule-of-naming-variable').innerHTML = 'Rules for Naming Variables';
document.querySelector('.rule-of-naming-variable-list').innerHTML = '<li>A name should start with a letter, an underscore or a dollar sign.</li><li>A name cannot start with a number.</li><li>A name is case-sensitive.</li><li>A name can only contains letters, digits, underscores and dollar signs</li><li>JavaScript reserved keyword like ( var, const, function, if, else, do, ...etc) cannot be used as variables names.</li>';

/* JavaScript data types */
document.querySelector('.js-data-type').innerHTML = 'JavaScript Data Types';
document.querySelector('.js-data-type-p').innerHTML = 'In JavaScript or any programming language, the concept ot data type is important';

document.querySelector('.what-are-d-type').innerHTML = 'What are Data Types?';
document.querySelector('.what-are-d-type-p').innerHTML = '<b>Data types</b> are different kinds of data that can be stored or used in JavaScript progrm.';

document.querySelector('.string-data-type').innerHTML = "String Data Type";
document.querySelector('.string-data-type-p').innerHTML = 'The <em>string</em> data type is a sequence of characters that used to represent text. <br> String can be written within either <b>double</b> or <b>single quotes</b>.';
document.querySelector('.basicEx13').innerHTML = `var name = "John Doe"; <span class="code-comment"> // double quotes</span></br>
var name1 = 'John Doe'; <span class='code-comment'>// single quotes</span>`;
document.querySelector('.string-data-type-p1').innerHTML = '<em>Should you use single or double quotes?</em> <br> You can use which one you like.<br> But if the <b>string</b> containes <b>single quotes</b> use <b>double quotes</b>. Or if the <b>string</b> containes <b>double quotes</b> use <b>single quotes</b>.';
document.querySelector('.basicEx14').innerHTML = `var sentence = "Her name is 'Rachell'"; <span class='code-comment'> // use double quotes when the string contains single quotes</span><br/>
var sentence1 = 'Her name is "Rachell"'; <span class='code-comment'> // use single quotes when the string contains double quotes</span>`;

document.querySelector('.number-data-type').innerHTML = "Number Data Type";
document.querySelector('.number-data-type-p').innerHTML = "The <em>number</em> data type is an <b>integer</b> or a <b>floating-point</b> number (number with decimal).";
document.querySelector('.basicEx15').innerHTML = `  var x = 4;   <span class='code-comment'>// an integer</span><br>
var y = 5.5; <span class='code-comment'>// a floating point number</span>`;
document.querySelector('.number-data-type-p1').innerHTML = 'Here is an example of adding two numbers';
document.querySelector('.basicEx16').innerHTML = `var x = 4;    <span class='code-comment'>   // an integer</span></span><br>
var y = 5.5;   <span class='code-comment'>  // a floating point number</span><br>
var sum = x + y; <span class='code-comment'>// adds the two numbers</span>`;
document.querySelector('.combining-str-num').innerHTML = 'Combining Strings and Numbers';
document.querySelector('.combining-str-num-p').innerHTML = 'Combining a string and a string returns a <b>string</b>. <br> Combining a number and a number returns a <b>number</b>. <br> Combining a string and a number returns a <b>string</b>.';
document.querySelector('.basicEx17').innerHTML = ` var text = 21 + "Rachell";   <span class='code-comment'>/ returns "21Rachell"</span><br>
var text1 = "Rachell" + 21;  <span class='code-comment'>// returns "Rachell21"</span>`;
document.querySelector('.combining-str-num-p1').innerHTML = 'Since JavaScript evaluates from <b>left</b>to <b>right</b>, different sequences produce different results.';
document.querySelector('.basicEx18').innerHTML = `var text = 10 + 11 + "Rachell";  <span class='code-comment'> // returns "21Rachell"</span><br>
var text1 = "Rachell" + 10 + 11;  <span class='code-comment'>// returns "Rachell1011"</span>`;

document.querySelector('.boolean-data-type').innerHTML = 'Boolean Data Type';
document.querySelector('.boolean-data-type-p').innerHTML = 'Boolean data type is a logical data type, that can only have <b>true</b> or <b>false</b> as values. <br>Booleans are mainly used for conditional testing. <br><em><b>Don\'t worry!</b> You will learn about conditional testing later</em>. Booleans are output of <b>comparison operators</b>. <br>The <b>==</b> comparison operator tests if <b>two values</b> are equal or the same. <br> The <b>===</b> comparison operator tests if two values and data types are equal or the same.';
document.querySelector('.basicEx19').innerHTML = `var a = 3;<br>
var b = '3'; <span class='code-comment'>//string</span><br>
console.log(a == b); <span class='code-comment'>//returns true </span><br>
var x = 3;<br>
var y = '3'; <span class='code-comment'>// string</span><br>
console.log(x === y); <span class='code-comment'>//returns false</span>`;

document.querySelector('.undefined-data-type').innerHTML = 'Undefined Data Type';
document.querySelector('.undefined-data-type-p').innerHTML = 'If a variable has no assigned value, the value is <b>undefined</b>. <br> In the example below, the <em>title</em> is declared but is not assigned to any value. <br> Therefor, the value is <b>undefined</b>.';
document.querySelector('.basicEx20').innerHTML = `var title; <br> console.log(title); <span class='code-comment'> // returns undefined`;
document.querySelector('.undefined-data-type-p').innerHTML = 'If a variable is not declared, it also returns <em>undefined</em>.';

document.querySelector('.null-data-type').innerHTML = 'The <b>null</b> Data Type';
document.querySelector('.null-data-type-p').innerHTML = 'The <b>null</b> data type is a special data type denoting a null value <s>&nbsp;&nbsp;&nbsp;</s> meaning it\'s not an empty string <b>" "</b> or <b>0</b>. <br>It simply means nothing. <br> We can use it to empty a variable by setting it to <b>null</b>.';
document.querySelector('.basicEx21').innerHTML = `var fruit = "apple"; <br>
fruit = null; <span class='code-comment'>// sets the value to null</span>`;

document.querySelector('.object-data-type').innerHTML = 'Object Data Type';
document.querySelector('.object-data-type-p').innerHTML = 'In this lesson, we will only learn most basic concept of JavaScript <b>Objects</b>. <br> <em>There is a designated lesson for <b>Objects</b>, that will teach it in depth</em>. <br>The object data type is a collection of related data. <br> Objects contain properties written in <b>key: value</b> pairs. <br> Each pair is seperated by a comma (<b>,</b>). <br> Objects are written inside curly braces <em>{ }</em>.';
document.querySelector('.basicEx22').innerHTML = `
var banana = {<br>
color: "yellow",<br>
size: "long",<br>
quantity: 3,<br>
isSweet: true,<br>
};`;
document.querySelector('.object-data-type-p1').innerHTML = 'In the example above, the <b>banana</b> object has 4 properties: <b>color</b>, <b>size</b>, <b>quantity</b> and <b>isSweet</b>.';

document.querySelector('.bjavascript-array').innerHTML = 'JavasScript Array';
document.querySelector('.bjavascript-array-p').innerHTML = 'JavasScript array is a collection values, each value is seperated with a comma ( , ). <br> It is written with square brackets <b>[</b> <b>]</b>.<br> The data type of array is <em>object</em>.';
document.querySelector('.basicEx23').innerHTML = `var fruits = ["apple", "oranges", "bananas"]; <br>
document.getElementById("demo").innerHTML =
fruits[0] + " " + fruits[1] + " " + fruits[2];`;
document.querySelector('.bjavascript-array-p1').innerHTML = 'In the example above, the <b>fruits</b> variable contains three string values: <b>apple</b>, <b>oranges</b> and <b>bananas';

document.querySelector('.javascript-dynamic').innerHTML = 'JavasScript is Dynamic';
document.querySelector('.javascript-dynamic-p').innerHTML = "JavaScript is a dynamic language. <br>Variables are not accosiated with a single data type, unlike in other programming languages.<br> Any variable in JavaScriipt can be <b>reassigned</b> to values of all types.";
document.querySelector('.basicEx24').innerHTML = `var x = "Hello"; <span class="code-comment">// x is a string</span> <br>
x = 24; <span class="code-comment">// x is a number</span> <br>
x = true; <span class="code-comment">// x is a boolean</span>`;

document.querySelector('.typeof-operator').innerHTML = 'The <b>typeof</b> Operator';
document.querySelector('.typeof-operator-p').innerHTML = 'The <b>typeof</b> returns a string idicating the data type of evaluated operand';
document.querySelector('.basicEx25').innerHTML = `<span class='fushcia'>typeof</span> 'my name is Mohammed Ismail'; <span class="code-comment">// returns "String"</span> <br>
<span class='fushcia'>typeof</span> 21; <span class="code-comment">// returns "Number" </span> <br>
<span class='fushcia'>typeof</span> true; <span class="code-comment">// returns "Boolean"</span> <br>
<span class='fushcia'>typeof</span> undefined; <span class="code-comment">// returns "Undefined"</span>`;

document.querySelector('.primitive-data').innerHTML = 'Primitive Data';
document.querySelector('.primitive-data-p').innerHTML = 'Primitive data are data that are not <b>object</b> and has no methods. <br>Ther are 4 basic primitive data types:';
document.querySelector('.primitive-data-list').innerHTML = '<li>String</li> <li>Number</li> <li>Boolean</li> <li>Undefined</li>';
document.querySelector('.primitive-data-p1').innerHTML = 'All the primitive data types are returned by the <b>typeof</b> operator. Just like in the previous example.';

document.querySelector('.complex-data').innerHTML = "Complex Data";
document.querySelector('.complex-data-p').innerHTML = 'There are two complex data types, both can be returned by the <b>typeof</b> operator.'
document.querySelector('.primitive-data-list').innerHTML = '<li>object</b> <li>function</li>';
document.querySelector('.basicEx26').innerHTML = `<span class='fushcia'>typeof</span>  {firstName: "John", lastName: "Doe", age: 30} + <span class="code-comment">// returns "object" </span> <br>
<span class='fushcia'>typeof</span> ["apples", "oranges", "bananas"] + <span class="code-comment">// returns "object" </span> <br>
<span class='fushcia'>typeof</span> null + <span class="code-comment">// returns "object" </span> <br>
<span class='fushcia'>typeof</span> function myFunction(){}; // returns<span class="code-comment">// returns "function" </span>`;
document.querySelector('.complex-data-p1').innerHTML = 'You may notice, typeof operator returns <b>"object"</b> when the operand is an <b>objext</b>, <b>array</b> or <b>null</b>. <br>And typeof operator retruns <b>"function"</b> when the operand is a <em>function</em>';


/*JavaScriipt operators*/
document.querySelector('.javascript-operator').innerHTML = 'JavaScript Operators';
document.querySelector('.javascript-operator-p').innerHTML = 'JavaScript <b>operators</b> are used to perform particular actions. <br> They can be used to <em>assign values</em>, <em>compare values</em>, <em>combine values</em>,  <em>perform arithmetic</em> operations and more.<br> JavaScript operators are symbols (or set of symbols) or keywords. <br>There are different types of operators.';

document.querySelector('.assignment-operator').innerHTML = 'Assignment Operators';
document.querySelector('.assignment-operator-p').innerHTML = 'The <b>assignment operator</b> is used to assign a value to a variable.<br> It uses the equal <b> = </b> symbol.';
document.querySelector('.basicEx27').innerHTML = ` <span class='fushcia'>var</span> x = 3; <span class='code-comment'>// assigns number 3 to x</span> <br>
<span class='fushcia'>var</span> y = 5; <span class='code-comment'>// assigns number 4 to x</span> <br>
<span class='fushcia'>var</span> sum = x + y; <span class='code-comment'>// assigns the sum of x and y to sum</span>`;
document.querySelector('.assignment-operator-p1').innerHTML = 'The <b>addition assignment</b> operator adds the value of the right operand to the value of variable. <ul><li>Operator: x += y;</li> <li>Equivalent: x = x + y;</li></ul> Hera is an example:';
document.querySelector('.basicEx28').innerHTML = `<span class='fushcia'>var</span> x = 3;<br>
<span class='fushcia'>var</span> y = 2;<br>

x += y; <span class='code-comment'>// adds the value of y to x and then assigns the result to x</span>`;

document.querySelector('.arithmetic-operator').innerHTML = 'Arithmetic Operators';
document.querySelector('.arithmetic-operator-p').innerHTML = 'The <b>arithmetic operators</b> are used to perform arithmetic operations <em>like addition, subtraction, multiplication and division)</em> between values. <br><br> Here are the symbols used for the arithmetic operators:';
document.querySelector('.arithmetic-operator-list').innerHTML = '<li>Addition <b>+</b></li> <li>Subtraction <b>-</b></li> <li>Multiplication <b>*</b></li> <li>Division <b>/</b></li>';

document.querySelector('.addition-example').innerHTML = 'Addition Example:';
document.querySelector('.basicEx29').innerHTML = `<span class='fushcia'>var</span> num1 = 8; <br>
<span class='fushcia'>var</span> num2 = 2; <br>
<span class='fushcia'>var</span> sum = num1 + num2; <span class='code-comment'>// adds num1 and num2</span>`;

document.querySelector('.subtraction-example').innerHTML = 'Subtraction Example:';
document.querySelector('.basicEx30').innerHTML = `<span class='fushcia'>var</span> num1 = 8; <br>
<span class='fushcia'>var</span> num2 = 2; <br>
<span class='fushcia'>var</span> sum = num1 - num2; <span class='code-comment'>// deducts num1 and num2</span>`;

document.querySelector('.multiplication-example').innerHTML = 'Multiplication Example:';
document.querySelector('.basicEx31').innerHTML = `<span class='fushcia'>var</span> num1 = 8; <br>
<span class='fushcia'>var</span> num2 = 2; <br>
<span class='fushcia'>var</span> sum = num1 * num2; <span class='code-comment'>// multiplies num1 and num2</span>`;

document.querySelector('.division-example').innerHTML = 'Division Example:';
document.querySelector('.basicEx32').innerHTML = `<span class='fushcia'>var</span> num1 = 8; <br>
<span class='fushcia'>var</span> num2 = 2; <br>
<span class='fushcia'>var</span> sum = num1 / num2; <span class='code-comment'>// devides num1 and num2</span>`;

document.querySelector('.string-operator').innerHTML = 'String Operators';
document.querySelector('.string-operator-p').innerHTML = 'String operators are used to concatenate the strings. <br> The <b>addition</b> operator <em>+</em> and the <b>addition assignment</b> operator <em>+=</em> are the string operators.';
document.querySelector('.string-addition-example').innerHTML = 'Example of using the <b>addition</b> operator:';
document.querySelector('.basicEx33').innerHTML = `var firstName = "John ";<br>
var lastName = "Doe";<br>
var fullName = firstName + lastName;`;
document.querySelector('.string-addition-assignment-example').innerHTML = 'Example of using the <b>addition assignment</b> operator:'
document.querySelector('.basicEx34').innerHTML = `var fullName = "John "; <br>
var lastName = "Doe";
<br>
fullName += lastName;`;
document.querySelector('.additional-example').innerHTML = 'We can also concatenate three or more strings:';
document.querySelector('.basicEx35').innerHTML = `var text = "Lorem ipsum ";<br>
var text1 = "dolor sit amet, ";<br>
var text2 = "consectetur adipiscing elit";<br>

var sentence = text + text1 + text2; <span class='code-comment'>// concatenates the three strings</span><br>
text += text1 + text2;`;

document.querySelector('.comparison-operator').innerHTML = 'comparison Operator';
document.querySelector('.comparison-operator-p').innerHTML = 'comparison operator compare its operands and returns a <b>Boolean</b> based on whether the comparison is <em>true</em> or <em>false</em>. <br> In the example below, the <b>equality</b> comparison operator is used to compare two numbers';
document.querySelector('.basicEx36').innerHTML = `var x = 5; <br>
var y = 5; <br>
var test = x == y; <span class='code-comment'>// prints true because x and y are equal</span>`;

document.querySelector('.logical-operator').innerHTML = 'Logical Operators';
document.querySelector('.logical-operator-p').innerHTML = '<b>Logical operators</b> are typically use with <b>boolean</b> values. <br> They are used to determine the logic between its operands. <br><br> You will learn about ligical operator later in the course.';

document.querySelector('.bitwise-operator').innerHTML = 'Bitwise Opetators';
document.querySelector('.bitwise-operator-p').innerHTML = 'A <b>bitwise operator</b> treats its operands as a set of <b>32 bits</b> or zero and one. <br> It performs its operarion with <b>binary</b> representation. <br> It returns numerical values. <br> <br> You will learn about bitwise opeatators later in the course.';

//Javascript arithmetic operator
document.querySelector('.javascript-arithmetic-operator').innerHTML = "JavaScript Arithmetic Operators";
document.querySelector('.js-arithmetic-operator-p').innerHTML = '<b>Arithmetic operators</b> take numerical operands as their values and return a single numerical value. <br><br> In JavaScript, there are 8 basic arithmetic operators.';

document.querySelector('.js-arithmetic-operator-table').innerHTML = `<thead>
<th>Opeatator</th>
<th>Description</th>
</thead>
<tbody>

<tr>
<td><b> + </b></td>
<td>Addition</td>
</tr>
<tr>
<td><b> - </b></td>
<td>Subtraction</td>
</tr>
<tr>
<td><b> * </b></td>
<td>Multiplication</td>
</tr>
<tr>
<td><b> / </b></td>
<td>Division</td>
</tr>
<tr>
<td><b> ** </b></td>
<td>Exponentiation</td>
</tr>
<tr>
<td><b> % </b></td>
<td>Remainder</td>
</tr>
<tr>
<td><b> ++ </b></td>
<td>Increment</td>
</tr>
<tr>
<td><b> -- </b></td>
<td>Decrement</td>
</tr>
</tbody>`;

document.querySelector('.addition-operator').innerHTML = 'Addition Operator (<b>+</b>)';
document.querySelector('.addition-operator-p').innerHTML = 'The <b>addition operator</b> (<em>+</em>) returns the sum of its numerical operands.';
document.querySelector('.basicEx37').innerHTML = `var x = 3 + 5 + 13; <span class='code-comment'> // retuns 21</span> <br>
<p>The addition operator can also be used to concatenate or add strings together.</p>
var text = "Lorem ipsum"; <br>
var text1 = "dolor sit amet."; <br>

var sentence = text + " " + text1;`;

document.querySelector('.subtraction-operator').innerHTML = 'Subtraction Operator (<b>-</b>)';
document.querySelector('.subtraction-operator-p').innerHTML = 'A subtraction operator (<b>-</b>) rturns different of its numerical operands.';
document.querySelector('.basicEx38').innerHTML = `var x = 5 - 3; <span class='code-comment'>// returns 2</span>`;

document.querySelector('.multiplication-operator').innerHTML = 'Multiplication Operator (<b>*</b>)';
document.querySelector('.multiplication-operator-p').innerHTML = 'Multiplication operator (<b>*</b>) returns the product of its numerical operands';
document.querySelector('.basicEx39').innerHTML = `var x = 5 * 3; // returns 15`;

document.querySelector('.division-operator').innerHTML = 'Division Operator (<b>/</b>)';
document.querySelector('.division-operator-p').innerHTML = 'Division operator (<b>/</b>) retuns the quotient of its numerical operands. <br> Where the left operand is dividend and right operand is divisor.';
document.querySelector('.basicEx40').innerHTML = `var x = 10 / 2; <spand class='code-comment'>// retuns 5`;

document.querySelector('.exponentiation-operator').innerHTML = 'Exponetiation Operator (<b>**</b>)';
document.querySelector('.exponentiation-operator-p').innerHTML = 'Exponetiation operator <b>**</b> returns the result of raising its first operand the power of second operand.';
document.querySelector('.basicEx41').innerHTML = `var x = 2 ** 4; <spand class='code-comment'>// it's the same with 2 * 2 * 2 * 2</span>`;

document.querySelector('.remainder-operator').innerHTML = 'Remainder Operator (<b>%</b>)';
document.querySelector('.remainder-operator-p').innerHTML = 'Remainder operator (<b>%</b>) returns remainder left when the first operand is divided by the second operand.';
document.querySelector('.basicEx42').innerHTML = ` var x = 5 % 2; <span class='code-comment'>// 5 divided by 2 is 2 remainder 1</span>`;

document.querySelector('.increment-operator').innerHTML = 'Increment Operator (<b>++</b>)';
document.querySelector('.increment-operator-p').innerHTML = 'Increment operator (<b>++</b>) adds to its operand and returns a value.';
document.querySelector('.basicEx43').innerHTML = `var x = 1; <br>
x++; <span class='code-comment'>// adds 1 to x</span>`;

document.querySelector('.decrement-operator').innerHTML = 'Decrement Operator (<b>--</b>)';
document.querySelector('.decrement-operator-p').innerHTML = 'Decrement operator (<b>--</b>) deduct <b>1</b> from its operand and returns a value.';
document.querySelector('.basicEx44').innerHTML = `var x = 1; <br>
x--; <span class='code-comment'>// deducts 1 from x</span>`;

document.querySelector('.operator-sequence').innerHTML = 'Operator Sequence';
document.querySelector('.operator-sequence-p').innerHTML = 'Operator sequence describes the orders performed operations in an arithmetic expression.';
document.querySelector('.basicEx45').innerHTML = ` var x = 10 + 3 * 5; <span class='code-comment'>// returns 25</span>`;
document.querySelector('.operator-sequence-p1').innerHTML = 'As you may notice the result of the expression above is 25. <br> It is because multiplication is performed first before addition. <br> JavaScript follows the <b>MDAS</b> pattern in Maths, where <b>multiplication</b> is performed first, <b>division</b> is second, <b>addition</b> is third and <b>subtraction</b> is fourth or last. <br> But what if we need a certain operation to be performed first? <br> For example, what if we want <b>addition</b> to be performed first in our previous example? <br> We can use <b>grouping</b> to do that, grouped expression is performed first before the others. <br> Use parentheses <b>(</b> <b>)</b> to group expressions.';
document.querySelector('.basicEx46').innerHTML = `var x = (10 + 3) * 5; <span class='code-comment'>// returns 65 because 10 + 3 = 13, then 13 * 5 is 65</span>`;

/*javascript assignmetn operator*/
document.querySelector('.javascript-assignment-operator').innerHTML = 'JavaScript Assignment Operators';
document.querySelector('.js-assignment-operator-p').innerHTML = 'An <b>assignment</b> operator assigns value to its left operand based on the value of its right operand. <br> In the JavaScript there are <b>7 basic assignment operators</b>.';
document.querySelector('.js-assignment-operator-table').innerHTML = `<thead>
<th>Name</th>
<th>Operator</th>
<th>Meaning</th>
</thead>
<tbody>
<tr>
<td>Assignment</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>Addition assignment</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>Subtraction assignment</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>Multiplication assignment</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>Division assignment</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
<tr>
<td>Remainder assignment</td>
<td>x %= y</td>
<td>x = x % y</td>
</tr>
<tr>
<td>Exponetiation assignment</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
</tbody>`;

document.querySelector('.assignment').innerHTML = 'Assignment (<b> - </b>)';
document.querySelector('.assignment-p').innerHTML = 'The simple assignment operator or the assignment operator assigns a value to a variable.';
document.querySelector('.basicEx47').innerHTML = `var x = 4; <span class='code-comment'> // assigns 4 to x </span>`;

document.querySelector('.addition-assignment').innerHTML = 'Addition Assignment (<b> += </b>)';
document.querySelector('.addition-assignment-p').innerHTML = 'The addition assignment operator <b>adds</b> the of the value the left and right operand then assigns the <b>sum</b> to the left operand.';
document.querySelector('.basicEx48').innerHTML = `var x = 4; <br>
var y = 3;<br>
x += y <span class='code-comment'>// same as x = x + y;`;

document.querySelector('.addition-assignment-p1').innerHTML = 'It can be used to concatenate the strings together.';
document.querySelector('.basicEx49').innerHTML = `var string = 'Lorem ipsum';<br>
var string1 = dolor sit amet.' <br>
string += string1; <span class='code-comment'>// same as string = string + string1`;

document.querySelector('.subtraction-assignment').innerHTML = 'Subtraction Assignment (<b> -= </b>)';
document.querySelector('.subtraction-assignment-p').innerHTML = 'The subtraction assignment operator <b>subtracts</b> value of the right operand from the left operand and then assigns the <b>differece</b> to the variable.';
document.querySelector('.basicEx50').innerHTML = ` var x = 4; <br>
var y = 3; <br>
x -= y; <span class='code-comment'>// same as x = x - y</span>`;

document.querySelector('.multiplication-assignment').innerHTML = 'Multiplication Assignment (<b>*=</b>)';
document.querySelector('.multiplication-assignment-p').innerHTML = 'The multiplication assignemt operator <b>multiplies</b> the value of the left and right operands then assigns the <b>product</b> to the variable.';
document.querySelector('.basicEx51').innerHTML = `var x = 4; <br>
var y = 3; <br>
x *= y; <span class='code-comment'>// same as x = x * y</span>`;

document.querySelector('.division-assignment').innerHTML = 'Division Assignment (<b>/=</b>)';
document.querySelector('.division-assignment-p').innerHTML = 'The division assignment operator <b>divides</b> the value of the left operand by the right operand and then assigns the <b>quotient</b> to the variable.';
document.querySelector('.basicEx52').innerHTML = `var x = 12; <br>
var y = 3; <br>
x /= y; <span class='code-comment'>// same as x = x / y</span>`;

document.querySelector('.remainder-assignment').innerHTML = 'Remainder Assignment (<b>%=</b>)';
document.querySelector('.remainder-assignment-p').innerHTML = 'The remainder assignment operator <b>divides</b> a variable by the value of the right operand and then assigns the <b>remainder</b> to the variable.';
document.querySelector('.basicEx53').innerHTML = `var x = 7; <br>
var y = 3; <br>
x %= y; <span class='code-comment'>// same with x = x % y<br>
// 7 divided by 3 is 2 remainder 1<br>
// 1 is then assigned to variable x</span>`;

document.querySelector('.exponentiation-assignment').innerHTML = 'Exponentiation Assignment (<b>**=</b>)';
document.querySelector('.exponentiation-assignment-p').innerHTML = 'The exponentiation assignment operator <b>raises</b> the value of the left operand to the power of the right operand and assigns the value to the variable.';
document.querySelector('.basicEx54').innerHTML = `var x = 2; <br>
var y = 4; <br>
x **= y; <span class='code-comment'> // same with x = x ** y <br>
// 2 raised to 4 is 2 * 2 * 2 * 2 = 16 </span>`;

document.querySelector('.advanced-assignment').innerHTML = 'Advanced Assignment Operators';
document.querySelector('.advanced-assignment-p').innerHTML = 'Here are the other assignment operators:';
document.querySelector('.advanced-assignment-table').innerHTML = `<thead>
<tr>
<th>Name</th>
<th>Operator</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Left shift assignment</td>
<td>x <<= y</td>
<td>x = x << y</td>
</tr>
<tr>
<td>Right shift assigmnent</td>
<td>x >>= y</td>
<td>x = x >> y</td>
</tr>
<tr>
<td>Unsigned right shift assignment</td>
<td>x >>>= y</td>
<td>x = x >>>y </td>
</tr>
<tr>
<td>Bitwise AND assignment</td>
<td>x &= y </td>
<td>x = x & y</td>
</tr>
<tr>
<td>Bitwise XOR assignment</td>
<td>x ^= y</td>
<td>x = x ^ y</td>
</tr>
<tr>
<td>Bitwise OR assignment</td>
<td>x |= y</td>
<td>x = x | y</td>
</tr>
</tbody>`;

/* javascript comparison operators */
document.querySelector('.js-comparison-operator').innerHTML = 'Javascript Comparison Operators';
document.querySelector('.js-comparison-operator-p').innerHTML = 'A comparison operator compares its operands and retuns a <b>Boolean</b> based on whether the comparison is <em>true</em> or <em>false</em>. <br> It can be used to compare strings, numbers, Booleans(logical), or object values. <br> <br> In Javascript, there are <b> 8 comparison operators</b>:';
document.querySelector('.js-comparison-operator-table').innerHTML = `<thead>
<tr>
<th>Name</th>
<th>Operator</th>
</tr>
</thead>
<tbody>
<tr>
<td>Equality operator</td>
<td>==</td>
</tr>
<tr>
<td>Inequality operator</td>
<td>!=</td>
</tr>
<tr>
<td>Identity operator</td>
<td>===</td>
</tr>
<tr>
<td>Non-identity operator</td>
<td>!==</td>
</tr>
<tr>
<td>Greater than operator</td>
<td>></td>
</tr>
<tr>
<td>Graeter than or equal operator</td>
<td> >= </td>
</tr>
<tr>
<td>Less than operator</td>
<td> < </td>
</tr>
<tr>
<td>Less than or equal operator</td>
<td> <= </td>
</tr>
</tbody>`;

document.querySelector('.equality-operator').innerHTML = 'The Equality Operator (<b>==</b>)';
document.querySelector('.equality-operator-p').innerHTML = 'The equality operator ( == ) returns <em>true</em> if its operands are <b>equal</b>, otherwise false.';
document.querySelector('.basicEx55').innerHTML = `document.getElementById("demo").innerHTML =
(2 == 2)  //returns true   <br>
(2 == 4)   // returns false   <br>
("2" == 2) // returns true   <br>
("Hello world" == "Hello world")     // returns true <br>
("Hello world" == "Hello everyone"); // returns false `;

document.querySelector('.inequality-operator').innerHTML = 'Inequality Operator ( <b>!=</b> )';
document.querySelector('.inequality-operator-p').innerHTML = 'The inequality operator ( != ) returns <b>true</b> if its operands are <b>not equal</b>, otherwise false.';
document.querySelector('.basicEx56').innerHTML = `
document.getElementById("demo").innerHTML =
(2 != 2)  <span class='code-comment'> /* returns false */ </span><br>
(2 != 4)   /* returns true */ <br>
("2" != 2) /* returns false */ <br>
("Hello world" != "Hello world")     /* returns false */ <br>
("Hello world" != "Hello everyone"); /* returns true */`;

document.querySelector('.identity-operator').innerHTML = "Identity Operator (<b> === </b>)";
document.querySelector('.identity-operator-p').innerHTML = 'The identity operator (===), also known as <b>strict operator</b> operator, retuns true if its operands are <b>equal</b> and of the <b>same type</b>.';
document.querySelector('.basicEx57').innerHTML = `console.log(2===2);  <span class='code-comment'> // returns true </span><br>
console.log(2==="2"); <span class='code-comment'> // returns false because types are not the same </span><br>`;

document.querySelector('.non-identity-operator').innerHTML = 'Non-Identity Operator (<b> !==</b>)';
document.querySelector('.non-identity-operator-p').innerHTML = 'The non-identity operator ( !== ), also known as <b>strict inequality</b> operator, return true if its operands are of the <b>not of the same type</b> and/or <b>not equal</b>.';
document.querySelector('.basicEx58').innerHTML = `<p>The example below, returns ture because the two operands are <b>equal</b> and are <b>not of the same type</b>.</p><br>
console.log(4 !== "4"); /*returns true*/ <br>
<p>The example below returns false because two of the operands are <b>equal</b> and are <b>of the same type</b>.</p> <br>
console.log(4 !== 4); /*returns false*/`;

document.querySelector('.greater-than-operator').innerHTML = 'Greater Than Operator (<b> > </b>)';
document.querySelector('.greater-than-operator-p').innerHTML = 'The greater than operator ( > ) retuns true if the <b>left</b> operand is greater than the <b>right</b> operand.';
document.querySelector('.basicEx59').innerText = `document.getElementById("demo").innerHTML =
(4 > 2)        /* returns true */
(2 > 4)        /* returns false */
(2.25 > 2.24)  /* returns true */
(2.24 > 2.25); /* returns false */`;

document.querySelector('.greater-than-or-equal-operater').innerHTML = 'Greater Than or Equal (<b> >= </b>)';
document.querySelector('.greater-than-or-equal-operator-p').innerHTML = 'The greater than or equal operator ( >= ) returns true, if the left operand is <b>greater than</b> or <b>equal</b> to the left operand.';
document.querySelector('.basicEx60').innerText = `document.getElementById("demo").innerHTML =
(4 >= 2)        /* returns true */
(2 >= 4)        /* returns false */
(2.25 >= 2.24)  /* returns true */
(2.24 >= 2.25)  /* returns false */
(4 >= 4)        /* returns true */
(2.25 >= 2.25); /* returns true */`;

document.querySelector('.less-than-operator').innerHTML = 'Less Than Operator (<b> < </b>)';
document.querySelector('.less-than-operator-p').innerHTML = 'The less than operator ( < ) returns true if the left operand is <b>less than</b> the right operand.';
document.querySelector('.basicEx61').innerText = `document.getElementById("demo").innerHTML =
(4 < 2)        /* returns false */ + "<br>" +
(2 < 4)        /* returns true */ + "<br>" +
(2.25 < 2.24)  /* returns false */ + "<br>" +
(2.24 < 2.25); /* returns true */`;

document.querySelector('.less-than-or-equal-operator').innerHTML = 'Less Than or Equal Operator (<b> <= </b>)';
document.querySelector('.less-than-or-equal-operator-p').innerHTML = 'The less than or equal operator ( <= ) returns true if the left operand is <b>less than</b> or <b>equal</b> to the right operand.';
document.querySelector('.basicEx62').innerText = `document.getElementById("demo").innerHTML =
(2 <= 4)        /* returns true */ + "<br>" +
(4 <= 2)        /* returns false */ + "<br>" +
(2.24 <= 2.25)  /* returns true */ + "<br>" +
(2.25 <= 2.24)  /* returns false */ + "<br>" +
(4 <= 4)        /* returns true */ + "<br>" +
(2.25 <= 2.25); /* returns true */`;

document.querySelector('.less-than-or-equal-operator-p1').innerHTML = 'As you may notice, I have only used the returned Booleans of the comparison oprerators. And I have not yet make any use of them.';
document.querySelector('.how-can-it-be-used').innerText = 'How Can It Be Used?';
document.querySelector('.how-can-it-be-used-p').innerText = `Comparison operators are mostly used in conditional statements.
The most basic conditional statement is if statement.`;
document.querySelector('.basicEx63').innerText = `if (5 == 5) {
console.log('Hello World!');
}`;
document.querySelector('.how-can-it-be-used-p1').innerHTML = 'As you may notice, the example above printed <em>Hello World!</em>, It because the condition (which is <b> 5 == 5 </b>) is <em>true</em>.<br> If the condition is false, <em>Hello World!</em> will not be printed.';

const jsLogicalAndConditionalOperator = () => {
        const container = document.getElementById('logical-and-conditional-operator');
    const head2Func = () => {
        const head2 = document.createElement("h2");
        head2.className = "head2";
        head2.textContent = "Javascript Logical and Conditional Operator";
        container.appendChild(head2);
        return container;
    }
    head2Func();

    const textFunc = () => {
        const createTextEl = document.createElement("p");
        createTextEl.className = "textBox";
        createTextEl.innerHTML = `<b>Logical operators</b> are commonly used with <b>Booleans</b>. When they are used with <b>Booleans</b> (logical) values, they returns a boolean value.`;
        container.appendChild(createTextEl);
        return container;
    }
    textFunc();
}

jsLogicalAndConditionalOperator();

const fetchingData = fetch("https://mdaleardc.github.io/ismail/index.html").then(res => res.text()).then(data => console.log(data)).catch(err => console.error(err));