# RequireJS

TroopJS can be used with any AMD loader but we use [RequireJS](http://requirejs.org/) when we build and test TroopJS. This chapter will teach you some tricks of the trade that we've picked up over the years and maybe even some lessons we've learned along the way.

> In the rest of this chapter we assume that you use [bower](http://bower.io/) to manage your dependencies and that they are located using the standard bower structure `bower_components/{package}/{module}`.
> If you don't already have a `bower.json` file we'll help getting you started.

!CODEFILE "bower.json"

You can now install RequireJS using `bower install`:

```bash
$ bower install
```

Before we do anything TroopJS specific we want to make sure our general setup works by creating a configuration that will log `"ok"` to the developer console.

!CODEFILE "index.js"
