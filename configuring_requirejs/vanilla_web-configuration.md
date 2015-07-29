# Vanilla web-configuration

Let's start with a vanilla RequireJS configuration for a web project.

> We're not going to explain how to use RequireJS in detail here but in these examples we employ the [`data-main` entry point](http://requirejs.org/docs/api.html#data-main) technique.

## Starting fresh

Let's start by creating a configuration that will log `"ready"` to the developer console when [jQuery](http://jquery.com/) notifies us our `document` is ready.

First let's add `jquery` as a dependency in our `bower.json` file:

!CODEFILE "bower.jquery.json"

> After adding a dependency to `bower.json` you should make it available to RequireJS by executing `bower install`.

Now let's add the JS code:

!CODEFILE "index.jquery.json"

If you can see `"ready"` in the console then you have a working RequireJS configuration to start from.

## Including TroopJS

The easiest way to get started with TroopJS is to use the [`troopjs-widget`](http://troopjs.com/troopjs-widget/) module and starting an `Application` from the `HTML` element.

Let's add some code that will log `"started"` to the developer console when our TroopJS application is started.

!CODEFILE "index.troopjs.js"