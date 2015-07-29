require({
    "baseUrl": "bower_components",
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
