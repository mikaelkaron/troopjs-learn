require({
    "baseUrl": "troopjs",
    "packages": [{
        "name": "troopjs-learn-requirejs",
        "location": ".."
    }],
    "bundles": {
        "troopjs/main": [
            "troopjs/version",
            "troopjs-compose/decorator",
            "troopjs-compose/decorator/after",
            "troopjs-compose/decorator/around",
            "troopjs-compose/decorator/before",
            "troopjs-compose/decorator/extend",
            "troopjs-compose/decorator/from",
            "troopjs-compose/config",
            "troopjs-core/config",
            "troopjs-core/component/signal/initialize",
            "troopjs-core/component/signal/start",
            "troopjs-core/component/signal/stop",
            "troopjs-core/component/signal/finalize",
            "troopjs-compose/factory",
            "troopjs-core/composition",
            "troopjs-core/emitter/executor",
            "troopjs-core/emitter/composition",
            "troopjs-core/component/executor",
            "troopjs-core/registry/emitter",
            "troopjs-core/component/registry",
            "troopjs-core/task/registry",
            "troopjs-core/task/factory",
            "troopjs-core/component/emitter",
            "troopjs-hub/config",
            "troopjs-hub/executor",
            "troopjs-hub/emitter",
            "troopjs-hub/component",
            "troopjs-dom/config",
            "troopjs-dom/executor",
            "troopjs-dom/error",
            "troopjs-dom/component"
        ]
    },
    "deps": [ "troopjs-core/composition" ],
    "callback": function(Composition) {
        console.log(Composition);
    }
});
