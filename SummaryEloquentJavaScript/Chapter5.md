# Summary of Eloquent JavaScript Chapter 5
A large program is a costly program.

## Abstractions
Levels of abstraction gives us the possibillity to talk about problems different abstract levels. There are several ways to to make a soup for instance. 

## Abstracting Repetition
Taken from the book:
Plain functions, as we’ve seen them so far, are a good way to build abstractions. But sometimes they fall short.

It is common for a program to do something a given number of times. You can write a for loop for that, like this:

for (let i = 0; i < 10; i++) {
  console.log(i);
}
Can we abstract “doing something N times” as a function? Well, it’s easy to write a function that calls console.log N times.

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
But what if we want to do something other than logging the numbers? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2
We don’t have to pass a predefined function to repeat. Often, it is easier to create a function value on the spot instead.

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
This is structured a little like a for loop—it first describes the kind of loop and then provides a body. However, the body is now written as a function value, which is wrapped in the parentheses of the call to repeat. This is why it has to be closed with the closing brace and closing parenthesis. In cases like this example, where the body is a single small expression, you could also omit the braces and write the loop on a single line.

## Higher-Order Functions
Higher-Order functions are functions the operate on other functions by taking them as arguments or returning them. 

These functions allow us to abstract over values and actions.

## Script Data Set
Characters are defined by scripts in Unicode.
A lot of different scripts exist to make up for different alphabets and ways of writing. Such as:

{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
Such an object tells us the name of the script, the Unicode ranges assigned to it, the direction in which it is written, the (approximate) origin time, whether it is still in use, and a link to more information. The direction may be "ltr" for left to right, "rtl" for right to left (the way Arabic and Hebrew text are written), or "ttb" for top to bottom (as with Mongolian writing).

The ranges property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound. Any character codes within these ranges are assigned to the script. The lower bound is inclusive (code 994 is a Coptic character), and the upper bound is non-inclusive (code 1008 isn’t).

## Filtering Arrays
we can use the `.filter` function to filter arguments in an array that wont pass a test. The functions builds up a new array instead of deleting the arguments

## Transforming with Map
`.map` is a function that transforms an array by applying a function to all its elements and it then builds a new array from the returned values.

The new array is of equal length to the old one. But its content will have been mapped to a new form by the function.

## Summarizing with Reduce
`.reduce` takes a single element from the array and combines it with the current value. this is a way to make a sum from an array. 

## Composability
Taken from the book:

Consider how we would have written the previous example (finding the biggest script) without higher-order functions. The code is not that much worse.

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);
// → {name: "Han", …}
There are a few more bindings, and the program is four lines longer. But it is still very readable.

Higher-order functions start to shine when you need to compose operations. As an example, let’s write code that finds the average year of origin for living and dead scripts in the data set.

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1188
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 188
So the dead scripts in Unicode are, on average, older than the living ones. This is not a terribly meaningful or surprising statistic. But I hope you’ll agree that the code used to compute it isn’t hard to read. You can see it as a pipeline: we start with all scripts, filter out the living (or dead) ones, take the years from those, average them, and round the result.

You could definitely also write this computation as one big loop.

let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188
But it is harder to see what was being computed and how. And because intermediate results aren’t represented as coherent values, it’d be a lot more work to extract something like average into a separate function.

In terms of what the computer is actually doing, these two approaches are also quite different. The first will build up new arrays when running filter and map, whereas the second computes only some numbers, doing less work. You can usually afford the readable approach, but if you’re processing huge arrays, and doing so many times, the less abstract style might be worth the extra speed.

## Strings and Character codes
With `charChodeAt` method we can get a code unit. To get the full unicode character we need to use `codePointAt`.

## Recognizing Text
Taken from the book:

We have a characterScript function and a way to correctly loop over characters. The next step is to count the characters that belong to each script. The following counting abstraction will be useful there:

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
The countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

It uses another array method—findIndex. This method is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.

Using countBy, we can write the function that tells us which scripts are used in a piece of text.

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
The function first counts the characters by name, using characterScript to assign them a name and falling back to the string "none" for characters that aren’t part of any script. The filter call drops the entry for "none" from the resulting array since we aren’t interested in those characters.

To be able to compute percentages, we first need the total number of characters that belong to a script, which we can compute with reduce. If no such characters are found, the function returns a specific string. Otherwise, it transforms the counting entries into readable strings with map and then combines them with join.

