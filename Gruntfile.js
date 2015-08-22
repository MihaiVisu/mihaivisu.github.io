module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                beautify: true
            },
            gui: {
                files: {
                    'frontend/static/frontend/generated/js/project_gui.min.js': [
                        'frontend/static/frontend/js/grayscale.js'
                    ]
                }
            },
            libs: {
                files: {
                    'frontend/static/frontend/generated/js/project_libs.min.js': [
                        'frontend/static/frontend/libs/jquery/jquery.min.js',
                        'frontend/static/frontend/libs/jquery-ui-1.11.4.custom/jquery-ui.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                    ]
                }
            }
        },
        less: {
            options: {
                beautify: true,
                plugins: [
                    new (require('less-plugin-autoprefix'))({
                        browsers: ["last 2 versions"]
                    }),
                    new (require('less-plugin-clean-css'))
                ]
            },
            target: {
                files: {
                    'frontend/static/frontend/generated/css/project_gui.min.css': [
                        'frontend/static/frontend/less/*.less'
                    ]
                }
            }
        },
        cssmin: {
            gui: {
                files: {
                    'frontend/static/frontend/generated/css/project_gui.min.css': [
                        'frontend/static/frontend/generated/css/project_gui.min.css'
                    ]
                }
            },
            libs: {
                files: {
                    'frontend/static/frontend/generated/css/project_libs.min.css': [
                        'node_modules/bootstrap/dist/css/*.min.css',
                        'frontend/static/frontend/libs/jquery-ui-1.11.4.custom/jquery-ui.min.css'
                    ]
                }
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 5
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/bootstrap/fonts/',
                    src: ['**/*.{eot,svg,ttf,woff,woff2}'],
                    dest: 'frontend/static/frontend/generated/fonts/'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'frontend/static/images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'frontend/static/images/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};