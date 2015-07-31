# RequireJS

TroopJS can be used with any AMD capable loader, but since the official builds use RequireJS we know what you read here works for us.

Let's start by adding `requirejs` to our `bower.json` development dependencies:

!CODEFILE "bower.json"

After that we can need to our newly added dependency using `bower install`:

```bash
$ bower install
```

> After adding a dependency to `bower.json` you should always make it available to RequireJS by executing `bower install`.

Before we do anything more specific we want to make sure our general setup works by creating a configuration that will log `"ok"` to the developer console.

!CODEFILE "index.js"

> By default Bower installs packages in `bower_components/{package}/{module}` so we use that to configure our `baseUrl`.

To run in a browser we need an `index.html` file:

!CODEFILE "index.html"

Open `index.html` in a browser and If you can see `"ok"` in the developer console then you have a working RequireJS configuration to start from.

# Adding jQuery

The first thing most web-applications need is jQuery, so let's start by creating a configuration that will log `"ready"` to the developer console when jQuery notifies us our `document` is ready.

First let's add `jquery` as a dependency in our `bower.json` file:

!CODEFILE "bower.jquery.json"

Now let's add the JS code:

!CODEFILE "index.jquery.js"

## Adding TroopJS

The easiest way to get started with TroopJS is to use the [`troopjs-widget`](http://troopjs.com/troopjs-widget/) module and starting an `Application` from the `HTML` element.

First let's add `troopjs-widget` to our `bower.json` dependences:

!CODEFILE "bower.troopjs.json"

And then let's add some code that will log `"started"` to the developer console when our TroopJS application is started.

!CODEFILE "index.troopjs.js"