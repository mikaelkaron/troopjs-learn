# RequireJS

TroopJS can be used with any AMD capable loader, but since the official builds use RequireJS we know what you read here works for us.

Let's start by adding `requirejs` to our `bower.json` development dependencies:

!CODEFILE "bower.json"

After that we need to install our newly added dependency using `bower install`:

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

## Adding TroopJS

TroopJS is split up into packages based on functionality, for example `troopjs-compose` contains the composition layer used in TroopJS while `troopjs-core` contains core objects and utilities.

To use the latest tested combination of stack packages you just have to add `troopjs` to your `bower.json` dependencies:

!CODEFILE "bower.troopjs.json"

> If you are using a different combination of package versions than the official ones and you are careful enough to manage your own `troopjs-*` versions you can depend on the individual packages instead of the top level`troopjs` one.

### Using a bundle

TroopJS is also available pre-bundled if you want to save on HTTP requests. To use this feature you have two options, either a combination of the `deps` option and the magic module `require` or the `bundles` option.

#### Method 1: `deps`

The most compatible albeit more verbose option is the `deps` option:

!CODEFILE "index.troopjs-deps.js"

> The reason we use `localRequire` is because without it RequireJS would not load `troopjs-core/composition` from the bundle but from its own package. Using this constuct we also ensure that the whole bundle is loaded _before_ we use any of the contained modules.

#### Method 2: `bundles`

If you are using a later RequireJS version >= 2.1.10 you can use the `bundles` option to make RequireJS load our bundle automatically before we use any of the contained modules.

!CODEFILE "index.troopjs-bundles.js"


## Adding jQuery

The first thing most web-applications need is jQuery, so let's start by creating a configuration that will log `"ready"` to the developer console when jQuery notifies us our `document` is ready.

First let's add `jquery` as a dependency in our `bower.json` file:

!CODEFILE "bower.jquery.json"

Now let's add the JS code:

!CODEFILE "index.jquery.js"

## Bootstrapping

The easiest way to get started with TroopJS is to use the [`troopjs-widget`](http://troopjs.com/troopjs-widget/) module and starting an `Application` from the `HTML` element.

First let's add `troopjs-widget` to our `bower.json` dependences:

!CODEFILE "bower.troopjs-widget.json"

And then let's add some code that will log `"started"` to the developer console when our TroopJS application is started.

!CODEFILE "index.troopjs-widget.js"