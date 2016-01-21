(function(root) {
    'use strict';

    require.config({
        "baseUrl": "/",
        "paths": {
            "libs": "libs/libs"
        },
        "bundles": {
            "libs": ["jquery", "underscore", "bootstrap", "angular"]
        }
    });

    function init(jq, boot, ang) {
        console.log(ang.bootstrap);
        debugger;
    }

    require(["jquery", "bootstrap", "angular"], init);
}(this));
