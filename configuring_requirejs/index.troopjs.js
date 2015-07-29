require({
    "baseUrl": "bower_components",
    "paths": {
        "jquery": "jquery/dist/jquery"
    },
    "deps": [ "jquery", "troopjs-widget/application" ],
    "callback": function(jQuery, Application) {
        jQuery(function($) {
            Application($("html"), "bootstrap")
                .start()
                .then(function() {
                    console.log("started");
                });
        });
    }
});
