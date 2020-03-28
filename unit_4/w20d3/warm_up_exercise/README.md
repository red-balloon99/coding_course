# Introduction to Regular Expressions

<!-SEI1 8:03 -->

"Some people, when confronted with a problem, think 'I know, I'll use regular expressions.' Now they have two problems." - Jamie Zawinski

"Regular expressions are both terribly awkward and extremely useful. Their syntax is cryptic..." - Marijn Haverbeke

A Regular Expression is just a fancy term for **matching patterns** in strings.

Early in your coding journey, you likely encountered a problem to write a function that returns true if a word contains a vowel, and false if it does not. When you try to find words with a vowel, you are trying to **match** a **pattern**: words with vowels.

It is likely that you had a solution where you looped over your word and checked each letter to see if there was a match. Probably some variation of this:

```ruby
def pattern_match? word
  word.each_char do |l|
    if (l == 'a' || l== 'e' || l == 'i'|| l == 'o' || l == 'u' )
      return true
    end
  end
  false
end

# Try these examples:
# Note: we'll use these over and over again
# So don't delete them
p pattern_match? 'hello.' # true
p pattern_match? '.hi!' # true
p pattern_match? '?howdy' # true
p pattern_match? 'aloha' # true
p pattern_match? 'pffft' # false
```

It's kind of hard to figure out which true or false belongs to which word, so let's add a little more code to our function:

```ruby
def pattern_match? word
  word.each_char do |l|
    if (l == 'a' || l== 'e' || l == 'i'|| l == 'o' || l == 'u' )
      return "#{word}: true"
    end
  end
  "#{word}: false"
end
```

Expected Output:

![some output for vowel matching](https://i.imgur.com/l3qx9Yk.png)

This is a pretty academic question, and no clear real-world use-case easily comes to mind for checking for just words with vowels.

However, there are many real-world use cases for pattern matching:
- checking for a valid email address
  - valid letters/characters followed by
  - `@` then
  - some more valid letters/characters followed by
  - `.` and
  - the final bit of valid letters/characters
- checking for a valid password
  - Here is a fine specimen of requirements
 ![ridiculous password requirements](https://kottke.org/plus/misc/images/password-req.gif)
  [courtesy of Kottke.org](https://kottke.org/12/06/the-worlds-worst-password-requirements-list)
- finding valid phone numbers in a document
  - 867-5309
  - 555 - 867 -5309
  - 5558675309
  - +1 (555)-867-5309
  - etc.
- using a search bar to find something on a web page
- the find and replace feature in atom or another text editor


Take ~1 minute to start thinking about pseudo-coding one of the above examples. The complexity should have escalated quickly compared to just finding a vowel.

<!--SEI1 8:19 -->

If your mind went to 'hey these are such common problems, let me just google for an answer', you likely encountered something like this for email validation:

```ruby
/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
```

or maybe this one

```js
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

[Both examples are from here](http://emailregex.com/).

And you might have thought, 'what is this awkward cryptic stuff?'

Those letters and symbols are Regular Expressions or `regex` or `regexp`.

Many coding languages have regular expressions, including: JavaScript, Ruby, Python, PHP, HMTL5 and even in a much more limited way, [CSS](https://www.w3schools.com/cssref/sel_attr_begin.asp).

Patterns can be very simple (like looking for a vowel), or much more complex (see above email validation examples).

### Writing our First Regular Expression

Let's revisit our example of searching for the words with vowels. We can rewrite our code to use regular expressions. First, let's just check if it has the letter `a` in it.

A regular expression (in both Ruby and JavaScript) starts and ends with a forward slash `/` (the one shared with the question mark `?`, not the one above the enter key that is shared with pipe `|` - that one is a _back slash_ `\`).

It's really important to distinguish forward and back slashes with regular expressions as they are both required in many/most cases to build out a regular expression.

Forward : `/`

Back    : `\`

![thanks Dana!](https://i.imgur.com/gh9GAAm.jpg)

So our regular expression to check for an "a" in a word will be `/a/`

Let's see it in action by refactoring our code

```ruby
def pattern_match? word

    regexp = /a/

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

What's happening here?

- We are setting a variable, `regexp` to a `regular expression` - the variable name can be anything, like `foo`, `bar`, `baz`, `batman` etc. What makes it a regular expression are the two forward slashes: `//`.
- We are then using a Ruby method `match` that looks for Regular Expression matches.
- This method returns an object that looks like `#<MatchData "a">` if there is a match and `nil`, if there isn't a match.

In Ruby, there are a few methods for regular expressions. For this lesson, we'll just use `.match`.

### Test for Multiple letters

Now, let's say we want to also test for the other letters:

```ruby
def pattern_match? word

    regexp = /aeiou/

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

All our test cases come out false.

The way we wrote our regular expression, it is looking for the pattern `aeiou`, rather than `a` or `e` or `i` or `o` or `u`.

We can fix that by adding square brackets, which will denote 'any of these characters are a match':

```ruby
def pattern_match? word

    regexp = /[aeiou]/

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

<!--SEI1 8:29 -->

We can also choose a range of letters. We could say we are looking for words with one of the letters in the range `a-d`:

```ruby
def pattern_match? word

    regexp = /[a-d]/

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

### Test for Upper or Lower case (use options/flags with your regular expression)

Currently our pattern is case-sensitive. Let's test it out:

```ruby
def pattern_match? word

    regexp = /[A-D]/

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

This should return false for any lower-case word.

Let's add a flag to make it case insensitive:

```ruby
def pattern_match? word

    regexp = /[A-D]/i

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

### Exploring Some Other Options for Matching

We can look for patterns that start a certain way by using `^`.

First, let's look for words that have an `h`:

```ruby
def pattern_match? word

    regexp = /h/

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

All of our examples should return true, except for `pffft`.

Next, we can limit our matches to the words that start with `h`:

```ruby
def pattern_match? word

    regexp = /^h/

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

<!--SEI1 8:33 -->

### Special Characters and How to Use or Escape Them

Finally, we will examine a few special characters, which may or may not have a back slash in front of them:
- `.` matches any character
- `?` is for an optional character
- `\d` matches any digit
- `\D` matches any NON digit

A period is a `wildcard` that can represent any character.

```ruby
def pattern_match? word

    regexp = /./

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

The only thing that won't match this is the empty string.

But what if we want to just match a period? Enter our friend backslash: `\`. Any special character in a regular expression can be searched for by "escaping" it with a backslash:

```ruby
def pattern_match? word

    regexp = /\./

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

This will only match strings with a period in them.

We can also just match for when the `.` is at the end

```ruby
def pattern_match? word

    regexp = /\.$/

    p regexp.match(word)

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end
```

Note that the `$` (end of string) is the opposite of `^` (beginning of string).

Let's look at one more example.

We can test for words that EITHER do or do not have a `u`.

We'll also add a couple new test cases:

```ruby
def pattern_match? word

    regexp = /colou?r/

    if regexp.match(word)
      return "#{word}: true"
    end

  "#{word}: false"
end

# Try these examples:
p pattern_match? ('color') # true

p pattern_match? ('colours') # true

p pattern_match? ('aloha') # false
```

Here is a quick regex reference from the site Rubular, but there are plenty more out there.

![rubular quick reference](https://i.imgur.com/kHo97zk.png)

---

<!--SEI1 8:43 -->

### Writing A More Complex Regular Expression

Let's check for a valid date in the form of `mm-dd-yyyy`, where the date is represented with `digits` (numbers 0-9):

```ruby
def  valid_date? word
  exp = /\d\d-\d\d-\d\d\d\d/
  if exp.match(word)
    true
  else
    false
  end
end

# Try these examples:
valid_date?('12-12-2112')

valid_date?('12122112')

valid_date?('12/12/2112')
```

It would be nice if the `-` were optional:

```ruby
def  valid_date? word
  exp = /\d\d-?\d\d-?\d\d\d\d/
  if exp.match(word)
    true
  else
    false
  end
end

# Try these examples:
valid_date?('12-12-2112')

valid_date?('12122112')

valid_date?('12/12/2112')
```

And it would be nice to be able to use `/` as an alternative

```ruby
def  valid_date? word
  exp = /\d\d(-?|\/)\d\d(-?|\/)\d\d\d\d/
  if exp.match(word)
    true
  else
    false
  end
end

# Try these examples:
valid_date?('12-12-2112')

valid_date?('12122112')

valid_date?('12/12/2112')
```

And it would be nice if the month could be (sort of) limited to 01-12. Note how preventing people from putting 13-19 would add even more complexity to our regular expression. If you feel up to it, think of a way to truly limit it to 01-12. Otherwise, the take away is that it's easy for these expressions to get complex quickly.

```ruby
def  valid_date? word
  exp = /[01]\d(-?|\/)\d\d(-?|\/)\d\d\d\d/
  if exp.match(word)
    true
  else
    false
  end
end

# Try these examples:
valid_date?('12-12-2112')

valid_date?('12122112')

valid_date?('12/12/2112')
```

Lastly, let's clean up the year portion to be 2-4 digits:

```ruby
def  valid_date? word
  exp = /[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/
  if exp.match(word)
    true
  else
    false
  end
end

# Try these examples:
valid_date?('12-12-2112')

valid_date?('121212')

valid_date?('12/12/2112')
```

Whoa! We just wrote:

```ruby
/[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/
```

And we know what it means!

Let's break it down one more time:

- `/` start regular expression
- `[01]` can be `0` or `1`
- `\d` can be 0-9
- `(-?|\/)` either a `?` or nothing or a `/`
- `\d\d` two more digits
- `(-?|\/)` either a `?` or nothing or a `/`
- `\d{2,4}`
- `/` end regular expression

Wow! So fun! We could keep going all day with this, but this is just a morning exercise and we have so many other things to learn. There is so much more to regular expressions, we didn't even get to half of the options or flags and more!

## Onwards

The next important step is to memorize all the special characters and flags for each language you'll be coding in. Kidding! Once you have a basic understanding, all you need is a good reference to look things up as you need them.

Writing Regular Expressions can get challenging. There are a number of free online tools that can help you visualize and write your expressions.

If you will be doing some reg ex in Ruby, check out [rubular](http://rubular.com/).

If you're working with JavaScript, try [RegExr](https://regexr.com/).

Both allow you to write and test regular expressions and both have nice references.

There are some nuanced/esoteric differences with regular expressions across languages and there are often more optimal ways to write regular expressions (look into greedy, nongreedy).

The best way to learn is to practice, start small, and work your way up to more complexity. Don't worry if you can't learn it all in a day, or a week or a month.

You are near the end of your time in a bootcamp and soon you'll be tasked with learning things on your own. Hopefully, by now you feel confident in knowing how you learn to code. So feel free to work on any of the following, according to how you learn best.

- A sleek code-along tutorial that'll start you learning regular expressions from the beginning:
  - [regexone](https://regexone.com/)
- Try your hand at some code golf on these simple examples (all the way at the end of the chapter - feel free to do them with Ruby for an extra challenge)
  - [Eloquent JavaScript Regular Expressions](http://eloquentjavascript.net/09_regexp.html)
- You can use your `pattern_match?` function or you can try either regex site to try to match the following
  - car and cat
  - pop and prop
  - ferret, ferry and ferrari
  - Any word ending in ious
  - A whitespace character followed by a dot, comma, colon or semicolon
  - A word longer than six letters
  - A word without the letter e
- You can check out Ruby's method `.scan` that will let you scan some text and will put the matches into an array:

```
text = "Hi! Hello. Howdy? Aloha...pffft"

p text.scan(/\w*[aeiou]\w*/i)
```

- Write a method that would extract phone numbers from resumes

- Another method is `.gsub` which will match a pattern and then replace it with something. The Oxford Dictonary states that these are the most commonly misspelled words and how they are misspelled:

|Correct spelling	|Common misspelling|
|:-:|:-:|
|disappear	|	dissapear|
|disappoint	|	dissapoint|

- Write a method that would correct these two words

<!--SEI1 9:13 -->
