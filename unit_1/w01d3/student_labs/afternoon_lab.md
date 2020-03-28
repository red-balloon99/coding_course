# Afternoon lab

<!--SEI1 5:25 -->

## Setup

1. Create a file called `loops_and_boolean_practice.js` in your `student_examples` folder for today.
2. Open your file in your text editor using your terminal commands.
3. Run your code in terminal by running `node loops_and_boolean_practice.js` to see anything that you log from your file as output in your terminal.

<hr>

## Practice using Spectacle
Adjust your windows *using Spectacle hot keys* to have your view look like this:

![split screen](https://i.imgur.com/AwCLw6A.png)

Notice that they're not split evenly (my text editor is taking up 2/3 of the screen).

<hr>

## Loops & Booleans

### Loop it!

1. Create a loop that will print "hi" 15 times.
1. Create a loop that will print "YEP!" 30 times.

### Booleans & Loops - Part 1

1. Create a variable called `some_num` and assign a random number to it.
1. Create a loop that will run ten times (`while` or `for` loop, your choice!)
1. Inside the loop, print "that's a small number" if `some_num` is less than 10.
1. Create another loop that will print "that's a big number" if the value of `some_num` is greater than 20.
1. Take these two loops and adjust them so that they can be used together. Write some code to deal with what happens if `some_num` is a value in between between 10 - 20.

>**Note:** How can you generate a random number in JS? Google it!

**BONUS**
- Inside the loop, after your `if`/`else` statements, update your `some_num` variable to a new random number

## Intro to Pseudo-coding

You'll be learning more about [pseudo-coding](https://en.wikipedia.org/wiki/Pseudocode) soon, but as a quick introduction:

<!--Minimum of 3 steps, preferably 5 or more -->

Pseudo-coding is writing out what you think the question is asking or structuring your answer in **human language** rather than *computer language*. Before you create a variable or write out a loop, write down what you're thinking (like you're explaining it to another person) before you solve the problem.

Let's take some time to practice a bit of pseudo-coding! Read the problems below and try to write out some // commented out pseudo-code for them without writing any actual code. Try to see past any convoluted language, redundancy, or complexity to get to the core of the problem. Remember, we're not trying to solve the problem, but write out how to solve the problem.

<details><summary>:earth_americas: EQUATOR DRIVE</summary>

How much would it cost to drive around the world at the equator if:
1. the earth is rotating at 1000 mph
2. gas costs $3 per gallon
3. your car gets 15 miles to the gallon

</details>

<br>
<details><summary>:bread: Hungry for More? SANDWICH</summary>

Write out the pseudocode for making a peanut butter and jelly sandwich.  

</details>
<br>

<details><summary>:sunny: Hungry for even More? SARCOPHAGUS</summary>

Rick has ordered Morty to send a sarcophagus into the sun. The sarcophagus can fly for only one second before it disintegrates, and it must be set at minimum speed. Before he can make it fly, Morty has to set the speed on the sarcophagus. Rick mentioned offhandedly, "*burp*, uh, the sun is 0.00001581 light years away, Morty, plan accordingly." The only problem is, the speed on the sarcophagus can only be set in miles per hour.

How can Morty work out what minimum speed to set the sarcophagus to get it into the sun?

</details>
<br>
Now try to pseudo-code the next section **before** you write any computer code.

### Booleans & Loops - Part 2

1. Create a variable called `faveDay` and assign it to your favorite day of the week.
1. Create a loop or loops that uses the variable `faveDay` that you created and will check all possible days, then print `I like the weekend` if `faveDay` equals Saturday or Sunday, or print `Give me a good 'ol weekday` if `faveDay` is equal to Monday, Tuesday, Wednesday, Thursday, or Friday.
1. Think about outliers: What if I had entered "September" in `faveDay`? What would happen? Add something to your code to handle that situation.

<hr>

<!--SEI1 6:17  -->

# Hungry for More?

Try out some [Project Euler](https://projecteuler.net/archives) problems. Specifically try out numbers 1 & 2.

[How about Kaprekars Constant?](https://coderbyte.com/editor/guest:Kaprekars%20Constant:JavaScript)
