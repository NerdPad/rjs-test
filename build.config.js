require.config({
    "baseUrl": "./",
    "paths": {
        "jquery": "bower_components/jquery/dist/jquery",
        "underscore": "bower_components/underscore/underscore",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "angular": "bower_components/angular/angular"
    },

    "shim": {
        "jquery": {
            "exports": "jquery"
        },
        "underscore": {
            "exports": "underscore"
        },
        "bootstrap": {
            "deps": ["jquery"],
            "exports": "bootstrap"
        },
        "angular": {
            "exports": "angular"
        }
    },
});
