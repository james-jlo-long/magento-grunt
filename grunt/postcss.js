module.exports = function () {

    var setup      = require('../Gruntsetup.js').postcss,
        processors = [
            require('autoprefixer-core')({
                browsers: setup.browsers
            })
        ];

    if (setup.minify) {
        processors.push(require('csswring'));
    }

    return {

        options: {
            processors: processors
        },
        production: {
            src: setup.production
        }

    };

};