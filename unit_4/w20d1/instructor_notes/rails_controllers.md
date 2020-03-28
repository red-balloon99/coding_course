<hr>
Title: Rails Controllers<br>
Type: Lesson<br>
Creator: Thom Page<br>
Topics: Rails controllers and routing<br>
<hr>

<!--SEI1 4:34 -->
<!--I am going to start this lesson by quoting an instructor on Khan Academy that, funnily enough was teaching me Ruby. He said, "For now, don't worry about all these details. You'll pick them up eventually, but it's not worth your time to sweat the small stuff." -->

# RAILS CONTROLLERS

### Lesson Objectives
_After this lesson, students will be able to:_

- Set up a Rails project
- Generate and run migrations
- Use the Faker gem to seed data
- Configure RESTFul routes with the Rails router
- Explain what `rails routes` returns
- Write controller methods for _index_ and _show_

<br>
<hr>

### Setup

**We are going to make an app called `songs_app_api`.**

This will be a single-model app that serves json data for songs.

* Initialize an app called `songs_app_api`

```bash
rails new songs_app_api --api --skip-git -d postgresql
```

* Change into the new directory:

```bash
cd songs_app_api
```

**Start the server:**

* Run `rails s` to start the server on port 3000
* `rails s` is short for `rails server`
* Go to [localhost:3000](http://localhost:3000) in the browser.

We should all get an error in the browser.

```bash
FATAL: database \"____________\" does not exist
```

JSON response:

![](https://i.imgur.com/Ru5nXsI.png)

[To format JSON nicely, use JSON Formatter Chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

* Quit the server: `ctrl + c`

* Create the database: `rails db:create`

* Run the server again: `rails s`. We should see this:

![](https://i.imgur.com/8hhBtp8.png)

<br>
<hr>

<!--SEI1 4:49-->

## Make a Song model

> Our app will serve a JSON catalog of songs

* Generate the migration for the songs table: `rails g migration CreateSongs`

* In the migration file, the song table should have columns for title, artist_name, and artwork (all strings):

```ruby
class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist_name
      t.string :artwork
    end
  end
end
```

![](https://i.imgur.com/Mzz6Lfo.png)

* Run the migration: `rails db:migrate`

* Check `schema.rb`

* Create the model file: `app/models/song.rb`

* Add in the class Song

```ruby
class Song < ApplicationRecord

end
```

![](https://i.imgur.com/WYWFOVZ.png)

<br>
<hr>

<!--SEI1 4:57 -->

## SEED

#### Install Faker

We will seed a little differently this time using a gem called `Faker` to give us a bunch of random results. With `Faker` we won't have to invent any seed data.

* Add `gem faker` to the `Gemfile`. (It can go anywhere but let's put it around line 18/19)

![](https://i.imgur.com/0P8Z3eB.png)

* Run `bundle` to install all your gems

![](https://i.imgur.com/ZLvXOOc.png)

#### Use Faker

In `seeds.rb` let's write some Ruby to use the Faker gem in a loop:

```ruby
10.times do
  Song.create(
    title: Faker::Hipster.sentence(3),
    artist_name: Faker::Team.name,
    artwork: Faker::Placeholdit.image("50x50")
  )
end
```

![](https://i.imgur.com/igRXhsc.png)

[Faker documentation](https://github.com/stympy/faker)

[What is the double colon - ::](http://stackoverflow.com/questions/3009477/what-is-rubys-double-colon)

* Run the seed file: `rails db:seed`

* Check in rails console `rails c`:

```ruby
Song.all
```

```ruby
Song.find(1)
```

![](https://i.imgur.com/oRZePW1.png)

<!--SEI1 5:05 -->

<br>
<hr>

## ROUTES

#### Establish the routes

Routing works differently in Rails than in Node/Express. There is a separate file that will provide a **convention** for our routes. We can't just make them willy-nilly.

* Open `config/routes.rb`

* If we add the line `resources :songs`, Rails will route to the five JSON RESTFul routes for the resource `songs`.

```ruby
Rails.application.routes.draw do
  resources :songs
end
```

![](https://i.imgur.com/MztPxix.png)

* Run `rails routes`

This will show us the routes that have been baked-in for us:

```bash
$ rails routes
Prefix Verb   URI Pattern          Controller#Action
 songs GET    /songs(.:format)     songs#index
       POST   /songs(.:format)     songs#create
  song GET    /songs/:id(.:format) songs#show
       PATCH  /songs/:id(.:format) songs#update
       PUT    /songs/:id(.:format) songs#update
       DELETE /songs/:id(.:format) songs#destroy
```

![](https://i.imgur.com/4yARg46.png)

## RAILS ROUTES: What is this stuff?

This is a list of all the routes that Rails knows about given what we put in `config/routes.rb`. We could change that file and `rails routes` would give us different results. For now, this is what we have.

**Let's look at the first line from the command line output**

Verb is `GET` and URI Pattern is `/songs`, so we can assume we have a GET route for songs.

The Controller#Action is `songs#index`. This means that for this route, we will have to make a method called `index` within the controller (coming soon). That method will handle requests to `GET /songs`.

So, for our index route, there will be a uri of `/songs` (that has no params or anything) according to the usual RESTFul conventions.

`.:format` can be ignored, but [here is an explanation if you want one](https://stackoverflow.com/a/20320286).

**Let's look at the other lines**

As for the rest of the routes, they have the same pattern we have seen for RESTFul routing of `create`, `show`, `update`, and `destroy` routes.

For **show, update, and destroy**, Rails tells us that the first param will be called `:id`. We don't have a choice of what it will be called. But at least `rails routes` tells us what is expected. ;)

[Rails routes docs](http://api.rubyonrails.org/classes/ActionDispatch/Routing.html)

<br>
<hr>

# CONTROLLERS

#### Make a controller file

**convention over configuration**

Rails is expecting your controller file to conform to its convention. The convention is _model-name-pluralized_ _underscore_ _controller_.

Put this new controller in the `app/controllers` folder:

`app/controllers/songs_controller.rb`

![](https://i.imgur.com/KBoqaRR.png)

#### Make the controller class

See that `application_controller.rb` file? We want our controller to inherit from that thing.

```ruby
class SongsController < ApplicationController
end
```

![](https://i.imgur.com/9WYGtpo.png)

<br>
<hr>

# &#x1F449; INDEX

Our controller is going to have a method for each route. If we run `rails routes`, what method would we use for an **index route**?

The answer is: `index`.

> songs_controller.rb

```ruby
def index
end
```

This is similar to what we did in Express for our `index` route:

```javascript
router.get('/songs', function(req, res) {

});
```

It's much shorter in Rails.

### `render()` method

To render JSON we use the `render` method and pass it a hash: `render json: some_value`

```ruby
  def index
    render json: "hi"
  end
```

The render method takes a hash. To make more visual sense of this, you could write it this way, but this seems like a lot of extra typing:

```ruby
  def index
    render({ :json => "hi" })
  end
```

Now, let's verify this route in the browser (i.e. go to `http://localhost:3000/songs`).

To get our songs data, we could just write raw SQL into the controller:

```ruby
def index
  query_string = "SELECT * FROM songs;"
  results = ActiveRecord::Base.connection.execute(query_string)
  render json: results
end
```

Or we could write it in a much shorter format:

```ruby
  def index
    render json: ActiveRecord::Base.connection.execute('SELECT * FROM songs;')
  end
```

_But_ what we want is to use the convenient Ruby shorthand provided by `ActiveRecord`: `Song.all`. For this, we can use the same query we have been using in the rails console:

Putting it together:

```ruby
class SongsController < ApplicationController
  def index
	   render json: Song.all
  end
end
```

![](https://i.imgur.com/1hEnlFH.png)

If all goes according to plan, we have successfully established our API:

![](https://i.imgur.com/7OXzwcU.png)

## Status Codes

If we are going to deliver our API to some end-user, we should provide a **status code**.

Change the code to deliver a 200 OK status code:

```ruby
  def index
    songs = Song.all
    render json: {status: 200, songs: songs}
  end
```

![](https://i.imgur.com/OKlEjsM.png)

![](https://i.imgur.com/ZEqJ2RH.png)

[200 Status Code](https://httpstatuses.com/200)

[HTTP Status Codes](https://httpstatuses.com/)

Finally, let's visit the index route in the browser one more time.

<br>
<hr>

<!--SEI1 5:35 -->

# &#x1F449; SHOW

Looking at `rails routes`, what method would we use for a _show_ route?

The answer is `show`.

Show routes always come with an id attached -- The purpose of a show route is to display one instance of a given resource, which we get by id.

Looking at `rails routes`, the param will be called `:id`.

In Express, we got the id through `req.params.id`.

In Rails, the URL params are stored in a globally existing **hash** called `params`. We can access params inside the params hash like so:

```ruby
params[:id]
```

What ActiveRecord query could we use to get a particular song using the id?

Answer: `.find()` will do.

```ruby
  def show
    render json: Song.find(params[:id])
  end
```

![](https://i.imgur.com/pOAEnv0.png)

Looking at `rails routes`, what URI do we visit to see the show page?

<!-- Slack quiz
```
localhost:3000/songs/1
```
-->

![](https://i.imgur.com/hgu8B1p.png)

<br>

## Status Code

To wrap things up, let's include the status code, `200 OK`:

```ruby
  def show
    song = Song.find(params[:id])
    render json: {status: 200, song: song}
  end
```

![](https://i.imgur.com/xHqdaxf.png)

* This is what we should see when we visit it in the browser:

![](https://i.imgur.com/AnURYhT.png)

<br>
<hr>

## Params hash

In Express, the params came through in an **object**, `req.params`.

In Rails, the request object also has params, and those params are also stored as key-value pairs (just in a **hash** this time).

There is not much difference.

To see the params, try `puts`ing them in the controller, and seeing the output in Terminal:

![](https://i.imgur.com/S2D2bxv.png)

Terminal:

![](https://i.imgur.com/hZuSztD.png)

![](https://i.imgur.com/mS4bLMs.png)

<!--SEI1 5:47 -->
