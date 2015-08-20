module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'frontend/static/frontend/js/*.js',
                dest: 'frontend/static/frontend/generated/js/project_gui.min.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'frontend/static/frontend/generated/js/project_libs.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                    ],
                    'frontend/static/frontend/generated/css/project_libs.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css'
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
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};