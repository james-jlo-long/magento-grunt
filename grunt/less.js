module.exports = function () {

    var setup = require('../Gruntsetup.js').less;

    return {

        production: {
            files: setup.files
        }

    };

};
