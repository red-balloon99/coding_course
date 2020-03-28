# Intro to the Internet

<!-- Hook:

Who has ever watched a hacker or computer movie, and been like, "Wow, that is so not how the Internet works"?  And who has ever stopped and thought, "Wait, is it?"  Today, we're going to talk about that so whenever we want to be Internet snobs, we have a strong basis for our snobbery.
-->

<!--SEI1 5:29 -->

## Lesson Objectives

1. Define what a server is
1. Diagram the request response cycle
1. Describe the different parts of a URL
1. Explain what Node.js is and why it's useful
1. Diagram how the internet works
1. Explain what DNS is
1. Describe what packets are and how they travel to servers

## Define what a server is

A server is just a computer that is always turned on and connected to the internet.

## Diagram the request response cycle

![Request Response Cycle](https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png)

There are four different types of requests we can make which correspond to four basic ways we can manipulate data

- POST (Create data)
- GET (Read data)
- PUT/PATCH (Update data)
- DELETE (Destroy data)

## Describe the different parts of a URL

URL stands for Uniform Resource Locator, and it's just a string of text characters used by Web browsers, email clients and other software to format the contents of an internet request message.

Let's break down the contents of a URL:

```
    http://www.example.org:3000/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__/ \_________________/ \_____________/ \____/
  protocol  host/domain    port        path          query-string  hash/fragment
```

Element | About
------|--------
protocol | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS
host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource
port | a server can have multiple applications listening on multiple ports.  This allows users to access a different application on the same host
path | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file from which directory the client wants
query-string | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result
hash/fragment | this URL fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - it isn't the case for the previous elements

<!--SEI1 5:42 -->

## Explain what Node.js is and why it's useful

- Node is just a command line application that reads a JavaScript file and executes it within the context of the terminal
	- until recently, JavaScript could only be executed within a browser
- Node allows JavaScript to become the first programming language that can be executed in both the browser and in a terminal application
	- Makes it easier to find a developer who can build all aspects of a web application
- Asynchronous
	- Uses event handlers (just like `click`, `hover`, etc) so you can tell an application to run code while waiting for other commands to finish executing
		- previously, long running commands like updating a database would have to finish before the application could continue running

## Diagram how the internet works

<!-- They already saw this for HW so can skip if short on time-->

<!--SEI1 5:45-5:51 -->

- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)

![](img/packet-switching.gif)

1. Request starts at local computer
1. Goes to Router (can have multiple computers hooked up to it, forming a Local Area Network)
1. Goes to Modem
1. Goes to ISP (internet service provider)
1. ISP is connected to other ISPs and similar institutions
	- we're in the actual net at this point
1. If the ISP isn't connected to the Network containing the final destination
	- it will ask the networks it is connected to if they are connected to the final destination's network
	- this process continues, building up a path to the final destination
		- each path to the final destination contains how many nodes it must visit to get to destination
		- can determine shortest path to final destination
1. Once connection to final destination is made, it goes to final destination's network (ISP)
1. From ISP it goes to the modem
1. From the modem, it goes to the router
1. From the router, it goes to the host computer

## Extra stuff

### HTTP Status Codes

When requests and responses are made, 2 things are sent

- headers
- body

#### Request/Response Headers

Request and response headers are always sent. They give details about the request/response. Things like:

- Accept: types of media allowed (e.g. `text/plain`)
- Date: the date
- Host: domain name of host

[A more complete list here](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

#### Request/Response Body

The other portion is the `body` of the request. The `body` may be empty, but generally includes the actual content being sent.

`Express` and our browser will be handling most of the details of our request/response headers.

However, we often will want to send HTTP Status Codes. The most common one we encounter is probably `404` (Not Found).

We can get a sampling of codes, with memorable visuals [here](https://www.flickr.com/photos/girliemac/sets/72157628409467125/) or [here](https://httpstatusdogs.com/).

Or, [here is a link to the official documentation](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

### What DNS is

Domain Name Servers help convert a domain (`example.com`) to an IP address (`12.34.56.78`). This is similar to the contacts in our phone: rather than remembering all the numbers, we can just remember the name of the people or places we want to call. So rather than having to remember an arbitrary set of numbers, you can have a name for it that is easier to remember/ type.

#### What is the Resolution Process

- [DNS Explained](https://www.youtube.com/watch?v=72snZctFFtA)

1. If a computer can't find an IP in cache, it asks The Resolving Name Server (configured in OS)
1. If the RNS doesn't have info in memory, it will ask the Root Name Servers
1. Root Name Servers know where TLD (Top Level Domain) servers are (.com, .edu, .gov, etc)
1. TLDs know where Authoritative Name Servers are (example.com)
1. Authoritative Name Servers know the IP address of final destination
1. The Resolving Name Server gives IP to the operating system

#### How does the Authoritative Name Server know IP addresses?

1. When a domain is purchased
	- the registrar (company that registers the domain name, e.g. godaddy) is told which Authoritative Name Severs to use
	- The Authoritative Name Server is also told which IP address to use
1. The registrar then notifies the organization responsible for TLD name servers (the registry)
1. The registry tells the TLD name servers (.com, .net, etc) which Authoritative Name Servers to use for that new domain

### Describe what packets are and how they travel to servers

- [How Packet Travels in Network](https://www.youtube.com/watch?v=Gfoc3Cxgnpk)
- If a problem occurs, data in transit is lost forever
	- Sender would have to send entire data all over again
		- think about resending an entire movie just because something dropped for a moment at the last second
- Solution
	- Break each transmission up into tiny chunks
	- Receiver reassembles the chunks as they are received
	- If one piece is missing, sender just resends that tiny chunk

  <!-- **Personal Closing**

  I am more than happy to help with any of this.  If you have an error, and you're pretty sure it's a connection issue, let me know.  This was basically all I did for about a year.  I love working through these problems.

  I also highly recommend, if you haven't done it yet, going into a server room and really seeing how these machines connect.  It gives you a whole new appreciation for things.
  -->

<!--SEI1 6:16 -->
