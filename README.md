# Grunt Setup

This repository contains a basic install for Grunt. All necessary files are
included and the rest can be initialise through the command line.

## Dependencies

In order for this to work, you will need some things to be installed.

- [NPM](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/getting-started)

## Installing

### Getting files

Installing this setup should be as easy as cloning the repository:

    git clone git@github.com:james-jlo-long/magento-grunt.git folder-name

Just remember to replace `folder-name` with the name of the folder that
contains your Magento store.

Alternatively, you can download the files and copy them into the folder. There
should be very few files.

### Initialising Node packages

Once cloned, navigate to the folder and run the following commands in the
command line:

    npm-init
    npm update

Running `npm-init` will tweak the `package.json` file - be sure to add the
correct name at this stage. You can always change it later so don't worry if you
forget that stage.

### Updating .gitignore

The standard .gitignore file with our Magento stores should handle everything
necessary, but double check that all parts of of the following snippit exist

    # Ignore Grunt and Node files
    Gruntfile.js
    Gruntsetup.js
    package.json
    node_modules/
    grunt/

Crucially, the `Gruntsetup.js` file may be missing.

## Gruntsetup.js

On line 3 of Gruntsetup.js should be this line:

    var dir     = 'skin/frontend/xigen/__THEME_NAME_HERE__/',

Replace `__THEME_NAME_HERE__` with the name of the Magento theme we're using.

Around about line 9 you should see this line:

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

The commented out section is for our updated
[FontAwesome](http://fortawesome.github.io/Font-Awesome/) integration. If the
following file does not exist, the update is not being used and these lines
should remain commented out.

    skin/frontend/xigen/default/font-awesome/xigen-README.txt

## Using

Grunt is setup to have two basic commands: `default` and `update`

`default` will start watching for file changes and re-compile when changes are
detected. To use it, simply type the following into the command line:

    grunt

This automatically runs the `default` task. Stop watching with `Ctrl + C`.

`update` will compile the files without watching for changes. It's handy when
you want to make a quick change or forgot to start watching for changes. To use
it, simply type the following into the command line:

    grunt update
