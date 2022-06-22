# HR Web Site

## Story

ACME corporation wants to transition from pen and paper for keeping track of it's employees data and go digital. Currently a lot of mockups are being produced by the product team and they asked you to add some logic to manipulate the sample data so that the mockups are more realistic for the demo.

## What are you going to learn?

- for loops
- if statements
- working with variables

## Tasks

1. Implement the function `calculateNetSalary` so that it returns 45% of the  given `grossSalary` parameter.
    - Entering `7892` in the input box with the placeholder `gross salary` and pressing the button  with the label `Calculate Net` displays `3551`.

2. Implement the function `sumSalaries` so that it returns the sum of all the elements in the  parameter `salaries`
    - Entering `100` in the input box with the placeholder `salary 1`, `200` in the input box  with the placeholder `salary 2`, `300` in the input box with the placeholder `salary 3`,  `400` in the input box with the placeholder `salary 4`, `500` in the input box with the  placeholder `salary 5` and the pressing the button with the text `Sum salaries` displayes `1500`

3. Implement the function `sumSubsetSalaries` so that it returns the sum of the all the elements in  the parameter `allSalaries` which are bettween `start` and `end` parameter.
    - Entering `1` in the input box with the label `Starting from` and `10` in the input box with the label `Up to`  and pressing the buttong `Sum salaries` displays `68680`
    - Entering `4` in the input box with the label `Starting from` and `7` in the input box with the label `Up to`  and pressing the buttong `Sum salaries` displays `25055`

4. Implement the function `capitalizeFirstLastName` which receives 2 parameters with the values entered in  the input boxes with the placeholder `first name` and `last name` and returns a concatenated string with  each first letter capitalized.
    - Writing in the input box with the placeholder `first name` the value `john` and in the input box with  the placeholder `last name` the value `doe` and pressing  the button with the label `Capitalize` displays  `John Doe`
    - Writing in the input box with the placeholder `first name` the value `James` and in the input box with  the placeholder `last name` the value `Smith` and pressing  the button with the label `concatenate` displays  `James Smith`
    - Writing in the input box with the placeholder `first name` the value `234` and in the input box with  the placeholder `last name` the value `NUMber` and pressing  the button with the label `concatenate` displays  `234 NUMber`

5. Implement the function `getHighestSalary` which receives 5 number parameters and returns the highest number.
    - Writing the value `100` in the input box with the placeholder `salary-1`, the value `22` in the input box with  the placeholder `salary-2`, the value `114` in the input box with the placeholder `salary-3`, the value `1` in  the input box with the placeholder `salary-4`, the value `37` in the input box with the placeholder `salary-5`  and pressing the button `Calculate highest salary` displays the value `114`

6. Implement the function `getMatchingPersons` which receives the `employees` parameter which is a list of strings and  the `find` parameter which is a string and returns a list with all the strings which contain the string inside  the parameter `find`.
    - Writing the value `John` in the input box with the placeholder `find` and pressing the button with the text  `Find all matching inputs` displays in the second table the rows `John Smith` and `Andrew Johnson`

7. Implement the function `isValideNumber` so that it returns `true` or `false` depending if the parameter `input` is  a valid number or not (do not use built in funciton `isNaN`).
    - Entering the value `1234` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Valid number`.
    - Entering the value `-1234` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Valid number`.
    - Entering the value `1-234` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Not a number`.
    - Entering the value `+1234` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Valid number`.
    - Entering the value `+123.4` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Valid number`.
    - Entering the value `1234.` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Not a number`.
    - Entering the value `123e4` in the input box with the placeholder `possible number` and pressing the button with  the label `Is it a number?` displays the value `Not a number`.

8. Implement the function `isValideEmail` so that it returns a message with valid information regarding the  correctness of the email format inside the parameter `input`.
    - Entering the value `helloworld.com` in the input box with the placeholder `possible email` displays the value `Valid email`.
    - Entering the value `world.com` in the input box with the placeholder `possible email` displays the value `Missing username`.
    - Entering the value `helloworld.com` in the input box with the placeholder `possible email` displays the value `Can only have 1 '@' symbol`.
    - Entering the value `hello@.com` in the input box with the placeholder `possible email` displays the value `Missing domain name before '.'`.
    - Entering the value `helloworld.` in the input box with the placeholder `possible email` displays the value `Missing domain after '.'`.
    - Entering the value `helloworld` in the input box with the placeholder `possible email` displays the value `Missing '.' symbol`.
    - Entering the value `hellow.orld.com` in the input box with the placeholder `possible email` displays the value `Can only have 1 '.' symbol`.

## General requirements

None

## Hints



## Background materials

- <i class="far fa-book-open"></i> [Strings](https://javascript.info/string)
- <i class="far fa-book-open"></i> [Slicing strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
Global_Objects/String/split)
- <i class="far fa-book-open"></i> [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- <i class="far fa-book-open"></i> [Variables](https://htmldog.com/guides/javascript/beginner/variables/)
- <i class="far fa-book-open"></i> [Arrays](https://www.htmldog.com/guides/javascript/beginner/arrays/)
- <i class="far fa-book-open"></i> [js tutorial](http://jsforcats.com/)
- <i class="far fa-book-open"></i> [js video tutorial](https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
