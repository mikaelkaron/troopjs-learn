# Vanilla web-configuration

Let's start with a vanilla RequireJS configuration for a web project.

> We're not going to explain how to use RequireJS in detail here but in these examples we employ the [`data-main` entry point](http://requirejs.org/docs/api.html#data-main) technique.

## Starting fresh

Before we do anything TroopJS specific we want to make sure our general setup works by creating a configuration that will log `"ready"` to the developer console when [jQuery](http://jquery.com/) notifies us our `document` is ready.

!CODEFILE "index.js"

If you can see `"ready"` in the console then you have a working RequireJS configuration to start from.

## Including TroopJS

The easiest way to get started with TroopJS is to use the [`troopjs-widget`](http://troopjs.com/troopjs-widget/) module and starting an `Application` from the `HTML` element.

!CODEFILE "index.troopjs.js"