module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            options: { livereload: true },
            scripts: {
                files:['public/javascripts/*.js']
            },
            routes: {
                files: ['routes/*.js']
            },
            services: {
                files: ['services/*.js']
            },
            styles: {
                files: ['public/stylesheets/*.css']
            },
            hbs: {
                files: ['views/**/*.hbs']
            }
        }
    });

    grunt.registerTask('default', 'watch');
}