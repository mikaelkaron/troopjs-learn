# Configuring RequireJS

TroopJS can be used with any AMD loader but we use [RequireJS](http://requirejs.org/) when we build and test TroopJS. This chapter will teach you some tricks of the trade that we've picked up over the years and maybe even some lessons we've learned along the way.

> In the rest of this chapter we assume that you use [bower](http://bower.io/) to manage your dependencies and that they are located using the standard bower structure `bower_components/{module}/{path/file.ext}`.

First let's create a `bower.json` file for our project.

!CODEFILE "bower.json"