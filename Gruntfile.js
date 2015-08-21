module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                options: {
                    beautify: true
                },
                files: {
                    'frontend/static/frontend/generated/js/project_gui.min.js': [
                        'frontend/static/frontend/js/grayscale.js'
                    ],
                    'frontend/static/frontend/generated/js/project_libs.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                    ]
                }
            }
        },
        less: {
            development: {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({
                            browsers: ["last 2 versions"]
                        }),
                        new (require('less-plugin-clean-css'))
                    ]
                },
                files: {
                    "frontend/static/frontend/generated/css/project_gui.min.css": [
                        'frontend/static/frontend/less/*.less'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};