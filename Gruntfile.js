/*global module:false*/
module.exports = function(grunt) {

  var banner = '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: banner
      },
      build: {
        src: "src/<%= pkg.name %>.js",
        dest: "<%= pkg.name %>.min.js"
      }
    },
    concat : {
      options: {
        banner: banner,
        stripBanners: true
      },
      dist: {
        src: "src/<%= pkg.name %>.js",
        dest: "<%= pkg.name %>.js"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
    
  grunt.registerTask('default', ['uglify', 'concat']);

};
