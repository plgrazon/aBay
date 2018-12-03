
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws');
  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "ratings-reviews-component",
        region: "us-west-1"
      },
      build: {
        cwd: "static",
        src: "bundle.js"
      }
    }
  });
  grunt.registerTask("default", ["s3"])
};

