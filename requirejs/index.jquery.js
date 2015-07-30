require({
    "baseUrl": "bower_components",
    "packages": [{
        "name": "troopjs-learn-requirejs",
        "location": ".."
    }],
    "paths": {
        "jquery": "jquery/dist/jquery"
    },
    "deps": [ "jquery" ],
    "callback": function(jQuery) {
        jQuery(function($) {
            console.log("ready");
        });
    }
});
