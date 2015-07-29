# Configuring RequireJS

TroopJS can be used with any AMD loader but we use [RequireJS](http://requirejs.org/) when we build and test TroopJS. This chapter will teach you some lessons we've learned and tricks of the trade that we've picked up over the years.

> *prerequisites*
>
> In these examples we assume that you use [bower](http://bower.io/) to manage your dependencies and that they are located in `bower_components`.

## Vanilla web-configuration

```javascript
/**
---
file: index.js
---
*/
require({
    "baseUrl": "bower_components",
    "paths": {
        "jquery": "juery/dist/jquery"
    },
    "deps": [ "jquery" ],
    "callback": function(jQuery) {
        jQuery(function($) {
            console.log("ready");
        });
    }
});
```