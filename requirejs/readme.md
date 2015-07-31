# RequireJS

TroopJS can be used with any AMD loader but we use RequireJS when we build and test TroopJS.

Let's start by adding `requirejs` to our `bower.json` development dependencies:

!CODEFILE "bower.json"

After that we can install our newly added dependency using `bower install`:

```bash
$ bower install
```

Before we do anything more TroopJS specific we want to make sure our general setup works by creating a configuration that will log `"ok"` to the developer console.

!CODEFILE "index.js"

And to run it in a browser we need an `index.html` file:

!CODEFILE "index.html"

# Vanilla

Let's start with a vanilla RequireJS configuration for a web project.

> We're not going to explain how to use RequireJS in detail here but in these examples we employ the [`data-main` entry point](http://requirejs.org/docs/api.html#data-main) technique.

> For Bower and RequireJS to play along it's best to leave the standard structure for installed packages `bower_components/{package}/{module}` as-is.

## Starting fresh

Let's start by creating a configuration that will log `"ready"` to the developer console when [jQuery](http://jquery.com/) notifies us our `document` is ready.

First let's add `jquery` as a dependency in our `bower.json` file:

!CODEFILE "bower.jquery.json"

> After adding a dependency to `bower.json` you should make it available to RequireJS by executing `bower install`.

Now let's add the JS code:

!CODEFILE "index.jquery.js"

If you can see `"ready"` in the console then you have a working RequireJS configuration to start from.

## Adding TroopJS

The easiest way to get started with TroopJS is to use the [`troopjs-widget`](http://troopjs.com/troopjs-widget/) module and starting an `Application` from the `HTML` element.

First let's add `troopjs-widget` to our `bower.json` dependences:

!CODEFILE "bower.troopjs.json"

And then let's add some code that will log `"started"` to the developer console when our TroopJS application is started.

!CODEFILE "index.troopjs.js"