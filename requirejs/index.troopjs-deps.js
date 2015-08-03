require({
    "baseUrl": "bower_components",
    "packages": [{
        "name": "troopjs-learn-requirejs",
        "location": ".."
    }],
    "deps": [ "require", "troopjs" ],
    "callback": function(localRequire) {
        localRequire([ "troopjs-core/composition" ], function(Composition) {
            console.log(Composition);
        });
    }
});
