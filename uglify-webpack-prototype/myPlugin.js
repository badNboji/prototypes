function myPlugin(options) {}

myPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    var source = compilation.assets["../spec/AddNumberSpec.js"].source();
    console.log("hello", source);

    compilation.assets['../spec/AddNumberSpec.js'] = {
      source: function() {
        return source.replace(/(\/\* dab)|(\*\/)/g, " ");
      },
      size: function() {
        return "hello";
      }
    };

    callback();
  });
};

module.exports = myPlugin;