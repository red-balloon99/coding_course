<hr>
Title: Books app lab<br>
Duration: 1-1.5 hrs<br>
Creator: Thom Page<br>
Topics: Rails controllers and routing<br>
<hr>

![](https://i.imgur.com/mS4bLMs.png)

# BOOKS LAB

In this lab you will:

* **generate** a model instead of making it from scratch
* **use Faker** to seed data
* **create a controller** manually
* make API endpoints for **index** and **show**
* include status codes in your endpoints

## Make a Books App

In `student_labs`, make a Rails app called `books_app_api`.

Remember the `--api` and `--skip-git` flags. Set `postgresql` as the database.

```bash
rails new books_app_api --api -d postgresql --skip-git
```

Change into your project directory:

```bash
cd books_app_api
```

Create your database in your project directory:

```bash
rails db:create
```

## Generate model

Instead of generating a migration, generate a **model** (see below). Generating a model will generate a migration for you automatically.

```bash
rails generate model book
```

The model generator made **both** the `book.rb` file and the table migration file:

![](https://i.imgur.com/1pgQ2dL.png)

If you look in those files, you'll see that the generator has also provided boilerplate code.

`t.timestamps` in the migration file will make handy timestamp columns in your db. It appends columns of type `:datetime` called `:created_at` and `:updated_at` to the table. You won't need to provide any data for these, they'll work automatically. Let's leave timestamps in for now.

[Rails column types](http://stackoverflow.com/questions/11889048/is-there-documentation-for-the-rails-column-types)

## Migration

Fill out the migration file. A `book` should have:

```ruby
t.string :title
t.string :author
t.string :genre
t.string :publisher
t.date :publish_date

t.timestamps
```

Run the migration with `rails db:migrate`.

**If** you get this:

![](https://i.imgur.com/ZBqnXGd.png)

There is a simple fix: `rails db:create`.

After the migration has run, your schema should look like this:

![](https://i.imgur.com/eg0R5e0.png)

<br>

## Seed

Add `faker` to the Gemfile.

[More about the Faker Gem here](https://github.com/stympy/faker), if you're interested.

![](https://i.imgur.com/Vxqxcgs.png)

What command do you use to install the gems in the Gemfile? Run that command now.

In `db/seeds.rb` we will add seed data. We want to create 100 books.

Let's make a loop that runs 100 times:

```ruby
100.times do
end
```

![](https://i.imgur.com/8YEIS0H.png)

Add in the model and column names we know we want to populate:

![](https://i.imgur.com/FUWN5ng.png)

And use **Faker** to fill out the seed data:

[Faker documentation](https://github.com/stympy/faker)

```ruby
100.times do
  Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    publisher: Faker::Book.publisher,
    publish_date: Faker::Date.backward
  )
end
```

What command do we use to run a seed file? Run that. [Rails db: commands, substitute rake for rails](https://gist.github.com/stevenyap/7038932)

Open Rails console and check the seed data.

`Book.find(1)`

A book should appear.

![](https://i.imgur.com/kLw62xz.png)

## Make Controller

In `app/controllers` make a file for our book controller.

* What is the convention for a controller file? Plural? With an underscore? Lowercase?

* When you have the file made, add some code to the file.

* A controller is a Class.

* The class inherits from another (built-in) class, what class is that?

## Make index

An index route is a method in the controller.

Add it in, and make an ActiveRecord query to get `.all` books and render them as JSON.

<!--
```ruby
  def index
    render json: Book.all
  end
```
-->

**RUN THE SERVER with `rails s`**

Go to the `/books` URI at [localhost:3000](http://localhost:3000)

You should get an error:

![](https://i.imgur.com/IL3bjRs.png)

> No route matches [GET] \"/books\">"

We need to make our routes available.

## ROUTES

In `config/routes.rb`

* add a method `resources`
* provide `:books` as an argument to the `resources` method.

Check out all your routes with `rails routes`

Open up `/books` again in the browser.

Your **index** API endpoint is almost ready for consumption.

All that's left is to provide a status code.

If everything is "OK", what status code should you send?

[HTTP Status Codes](https://httpstatuses.com/)

API endpoint example:

![](https://i.imgur.com/ESjb4SE.png)

## SHOW

In `rails routes` in Terminal, there is a name for the first `show` param.  What is it?

In your show action, `.find` the desired book using that param.

Remember, there is a `params hash` that comes through in the request. You can access the params using the syntax for accessing hash values.

Go to `/books/5` and a variety of other routes to check that it's all working.
<br>

## bonus - MEMBER ROUTES

[Member routes](https://gist.github.com/dideler/10020345#member-routes)

When you use `resources` in `routes.rb`, it generates a bunch of boilerplate routes you can use. What if you want more than just those five? Look into using **member** routes to add other actions. Remember to run `rails routes` to check the pathing and URI for your member routes.
