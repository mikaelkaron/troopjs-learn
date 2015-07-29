# Vanilla web-configuration

Let's start with a vanilla RequireJS configuration.

> *note*
>
> We're not going to explain how to use RequireJS here but in these examples we employ the [`data-main`](http://requirejs.org/docs/api.html#data-main) style of usage.

Before we do anything TroopJS specific we want to make sure our general setup works by creating a configuration that will log `"ready"` when [jQuery](http://jquery.com/) notifies us the `document` is ready.

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