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
