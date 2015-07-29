require({
    "baseUrl": "bower_components",
    "packages": [{
        "name": "troopjs-learn-requirejs",
        "location": ".."
    }],
    "callback": function(jQuery) {
        console.log("ok");
    }
});
