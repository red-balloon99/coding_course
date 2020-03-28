Title: Rails One-To-Many: Products and Reviews<br>
Type: Homework<br>
Duration: **15 Hours** straight <br>
Creator: Thom Page <br>
Topics: Rails 5 API, CORS, One-to-many associations, React

# &#x1F3B8; &#x1F3B6; &#x1F3A4; &#x1F469; &#x1F3B9; IT'S THE FINAL HOMEWORK &#x1F3B9; &#x1F3BC; &#x1F3B8; &#x1F3B8;

### RAILS ONE-TO-MANY: PRODUCTS AND REVIEWS APP

![](https://i.imgur.com/YUD0yOM.png)

**A product has many reviews, a review belongs to a product**

### Back End

* Make Rails server work with resource for Products
* Make Reviews resource
* Edit Reviews routes as nested resources
* Make foreign keys and associations
* Routing - use **only** and **except** to filter the routes
* Change the controllers to reflect the changes we have made

### Front End

* Make a React frontend that consumes the API
* The user should be able to see all the product images and click on them
* Each product show page should display its associated reviews
* A user of the app should be able to add a review to a product
* A user of the app should be able to update and delete any reviews (chaos)

<br>
<hr>

# &#x1F4EF; START HERE

## MAKE RAILS API

Make a Rails API app called `products_reviews_app_api`.

<details><summary>Full Command</summary>

```bash
rails new products_reviews_app_api --api -d postgresql --skip-git
```

</details>

<br>

## SCAFFOLD PRODUCTS

![](https://i.imgur.com/JJ0LvHN.png)

<br>

## CREATE AND MIGRATE DB

<details><summary>Terminal Commands</summary>

![](https://i.imgur.com/1FFBUx0.png)
![](https://i.imgur.com/SDVp819.png)

</details>

<br>

## SEED DB

Put this seed data straight in to the `seeds.rb` file:

```
Product.create([
  { name: "Car", price: 20000, img: "http://www.gowithgo.net/wp-content/uploads/2011/07/Flintstone_Mobile-150x150.jpg"},
  { name: "Cat", price: 100, img: "http://animagehub.com/wp-content/uploads/2016/10/Pink-panther-vector-5-150x150.jpg"},
  { name: "Crab", price: 2, img: "http://scontent.cdninstagram.com/t51.2885-19/s150x150/13402342_1111471978911960_1380878568_a.jpg"},
  { name: "Crib", price: 200, img: "https://s-media-cache-ak0.pinimg.com/originals/99/29/ee/9929eef9086e07bd7e50102bc37ff3a8.jpg"},
  { name: "Coat", price: 200, img: "http://cooljunkyouneed.com/4548/uploads/2014/02/Workaholics-Bear-Coat-150x150.jpg"},
  { name: "Cake", price: 3, img: "http://scontent.cdninstagram.com/t51.2885-19/s150x150/11356601_447610668772561_439752401_a.jpg"},
  { name: "Concussion", price: 0, img: "http://youngmenshealthsite.org/wp-content/uploads/2015/05/concussion1-150x150.jpg"},
  { name: "Coal", price: 1, img: "http://www.whitecatpublications.com/wp-content/uploads/2010/12/lump-of-coal-150x150.jpg"},
  { name: "Cyclone", price: 70000, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cyclone_Mala.JPG/150px-Cyclone_Mala.JPG"},
  { name: "Career", price: 13500, img: "http://waterfordwhispersnews.com/wp-content/uploads/2014/10/happy-worker-e1412334561186-150x150.jpg"},
  { name: "Cillian Murphy", price: 400, img: "http://static.buzznet.com/uploads/2012/03/msg-133176055505-150x150.jpg"},
  { name: "Climate Change", price: 9, img: "http://scitechdaily.com/images/Detailed-Global-Climate-Change-Projections-150x150.jpg" }
]);
```

<details><summary>Run the seed file</summary>

![](https://i.imgur.com/hSEJob5.png)

</details>

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 1: Rails API for Products complete".
<hr>
<br>

## SCAFFOLD REVIEWS

Unfortunately there is no official way to do a scaffold with nested resources and associations. There is a gem--[Nested scaffold gem](https://github.com/amatsuda/nested_scaffold)--which you may want to use for Project 4. But what we will do is scaffold as usual and then make tweaks to our code. That way we will be able to operate on our code a bit and see how it works.

![](https://i.imgur.com/gYuEXzR.png)

`rails routes` gives us the routes below: **but** we only want reviews to be accessed in relation to a product. That is, we first get a product by its id, then get the relevant review that belongs to that product. We don't really want free-floating CRUDdable reviews.

![](https://i.imgur.com/gWFE08E.png)

<br>

## NESTED RESOURCES

So let's change our resources. Nest reviews inside of products:

`config/routes.rb`

![](https://i.imgur.com/Ye7EgeK.png)

When we run `rails routes`, we should see:

![](https://i.imgur.com/YhdjQ7H.png)

We can see that, in our `reviews` controller, the first param will be called `:product_id` and the second param will be called `:id`. We can only ever create or alter a review in relation to a product. This is the restriction we have chosen! No free-floating reviews!

<br>
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 2: Reviews nested routes complete".
<hr>
<br>

## FOREIGN KEY

General good practice is to add the foreign key with a migration rather than up-front in the scaffold or generator or original migration or what-have-you, to prevent running things in the wrong order or getting **one** and **many** sides confused.

![](https://i.imgur.com/qPVpLkn.png)

![](https://i.imgur.com/yB82yqp.png)

Open Rails console and test the association.

* `rails c`
* `Product.find(1).reviews`
* **&#x1F47E; Glitch!**

Look at that horrible error. At the top is this:

![](https://i.imgur.com/fpp1B7J.png)

NoMethodError for 'reviews'. That means we must first add the relations to our models:

<details><summary>Model Code</summary>

![](https://i.imgur.com/WIIMtZ0.png)

![](https://i.imgur.com/6uvP9Jv.png)

</details>

Try again:

* `Product.find(1).reviews`

Zig-a-zig ahhh:

![](https://i.imgur.com/FaQGTup.png)

It works. There are no reviews yet, but it works.

<br>
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 3: Products and Reviews associated".
<hr>
<br>

## GIVE A PRODUCT SOME REVIEWS

```
Product.find(1).reviews.create(title: "first review", content: "not a bad product", author: "Terminator 2")
```

```
Product.find(1).reviews.create(title: "second review", title: "middling product I'd say", author: "Chingy Right Thurr")
```

* See Product 1's many Reviews: `Product.find(1).reviews`

* See the Reviews that belong to Product 1: `Review.where(product_id: 1)`

<br>
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 4: Products and Reviews associations tested and working".
<hr>
<br>

## ROUTES - ONLY AND EXCEPT

**Products:** Currently, we have more routes than we intend or need. We want the users of our API only to be able to see an **index** and **show** of our Products, and not to alter the db.

**Routes:** We will want all the routes for the reviews except for the **show** route. (We won't really ever need to see a review in isolation).

### Product routes: only

Tell the router that for Products we **only** want index and show, and leave out the others:

![](https://i.imgur.com/c1j1NfX.png)

`rails routes` now has fewer routes:

![](https://i.imgur.com/0Uw5WH2.png)

### Review routes: except

Tell the router that for Reviews we want everything **except** show:

![](https://i.imgur.com/GbH1qfk.png)

`rails routes` now has even fewer routes:

![](https://i.imgur.com/XxMZIID.png)

<br>
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 5: Routes trimmed with only and except".
<hr>
<br>

## CONTROLLERS - PRODUCTS

In the products controller, we'll need to make some changes given that we have changed the routing.

* Delete the methods that alter data: **create**, **update**, **destroy**, and the **product_params**, and `before action` helper.
* Change the `show` action to `.find` the Product
* Add status codes (either render status codes or send them through as json)

<details><summary>Complete Products controller with rendered status codes</summary>

![](https://i.imgur.com/r564LHl.png)

</details>

<br>
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 6: Products controller fixed".
<hr>
<br>

## CONTROLLERS - REVIEWS

* Delete the show method, and the show argument to `before_action`.

Remember, since our Reviews routes are nested inside Products like below...

```
/products/:product_id/reviews
```

... we will have to adjust each of our methods to reflect the **params hash**.

If we run `rails routes`, remember, the URI for our reviews always has a param for a product id.

In each of our routes, we will have to query for our reviews by whatever number is stored in that param.

### Reviews Index

We have a number coming through in `:product_id`, so we can do the following:

* Since we are in the Reviews controller, let's find Reviews instead of Products
* Since there is a param called `:product_id` let's match it to a column called `product_id`.

Code:

```
  def index
    reviews = Review.where(product_id: params[:product_id])

    render json: reviews
  end
```

Check out the reviews for Product 1 in the browser, `/products/1/reviews`:

![](https://i.imgur.com/FEZROKL.png)

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 7: Reviews index method fixed".
<hr>
<br>

### Reviews Create

Create the review as usual.

We can set its `product_id` column to the `:product_id` param from the **params hash**. Et voilà.

Remove `location: @review` because we don't need or want a URL redirect.

<details><summary>Create Method Code</summary>

![](https://i.imgur.com/GLEO4PM.png)

</details>

Test Review Create with Postman:

![](https://i.imgur.com/jnI9Ztp.png)

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 7: Reviews create method fixed".
<hr>
<br>


## Reviews Update and Destroy

The cool things is we don't need a `product_id` to reference which review to update or destroy. We can just update it or destroy it by id.

> We would need the product_id in the update route only if we were going to _change which product_ the review belongs to. We are not going to do that . . .

In our routes, we can remove `update` and `destroy` from the nested routes, and give them their own domain:

![](https://i.imgur.com/dNIPgup.png)

This will remove `:update` and `:destroy` from nested resources.

Reviews resources gets `:update` and `:destroy` on its own.

`rails routes` gives us some modified routes:

![](https://i.imgur.com/wAUWn0A.png)

Since un-nested is actually the default behavior from a Rails scaffold, we don't need to alter either the update or delete methods in the Reviews controller.

**Test your routes with Postman**

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 8: Routes changed for Reviews update and delete".
<hr>
<br>

# HUNGRY FOR MORE?

## Configure CORS

Make it so a frontend app running on a local port can access your API

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 9: Configured CORS".
<hr>
<br>

## Front End

Make it so an Express project using some kind of frontend framework or library, which could be...

* jQuery
* React
* Angular, Vue, or a framework you're using for your lightning talk or final project

...can make an AJAX request to the Products index.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 10: AJAX request to Products Index".
<hr>
<br>

## Display Product images and reviews

Make it so your frontend app will display all the Product images.

When the user **clicks on an image**, they will be shown all the Reviews associated with that Product. You will need to make an AJAX request to the reviews index.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 11: AJAX request to Reviews Index".
<hr>
<br>

## Write a Review

Make it so a user of your frontend app can write a review of a particular Product

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 12: AJAX request to Reviews Create".
<hr>
<br>

## Update a Review

Make it so a user of your frontend app can edit a review of a particular Product

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 13: AJAX request to Reviews Update".
<hr>
<br>

## Remove a Review

Make it so a user of your frontend app can remove a review of a particular Product.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 14: AJAX request to Reviews Destroy".
<hr>
<br>

# HUNGRY FOR EVEN MORE?

## Make an 'admin' app

The admin app should be able to create, edit, and delete Products from the database. On the Rails server, you will need to:

* Configure CORS to allow only the admin app db privileges for Products
* Alter the routes and controller for Products

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 15: The Void".
<hr>
<br>

<br>
<hr>
Congratulations, you completed the final homework!!
<hr>
