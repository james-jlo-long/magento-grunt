module.exports = (function () {

    var dir     = 'skin/frontend/xigen/__THEME_NAME_HERE__/',
        cssDir  = dir + 'css/',
        lessDir = dir + 'less/';

    return {

        less: {
            files: [
                {
                    src:  lessDir + 'style.less',
                    dest: cssDir  + 'style.css'
                }//,
                //{
                //    src:  lessDir + 'font-awesome.less',
                //    dest: cssDir  + 'font-awesome.css'
                //}
            ]
        },

        postcss: {
            autoprefix: ['last 2 versions', 'IE 9'],
            minify:     false,
            production: cssDir + '*.css'
        },

        watch: {
            files: [
                lessDir + '**/*.less',
                dir + 'bootstrap/**/*.less'
            ]
        }

    };

}());
