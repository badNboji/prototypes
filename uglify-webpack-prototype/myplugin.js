function MyPlugin() {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    var source = compilation.assets['../spec/numbersSpec.js'].source();
    console.log(typeof source);
    compilation.assets['../spec/numbersSpec.js'] = {
      source: function() {
        return source.replace(/(\/\* dab)|(\*\/)/g,'');
      },
      size: function() {
        return 'doesnt matter';
      }
    };
    callback();
  });
};

module.exports = MyPlugin;
