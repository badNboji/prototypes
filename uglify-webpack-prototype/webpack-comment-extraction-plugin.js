function webpackCommentExtractionPlugin() {}

webpackCommentExtractionPlugin.prototype.apply = function(compiler) {
  compiler.plugin('after-compile', function(compilation, callback) {
    console.log('hello');
    const source = compilation.assets['../tests/tape-test-sample.js'].source();
    compilation.assets['../tests/tape-test-sample.js'] = {
      source: function() {
        return source.replace(/(\/\* ~dab)|(\*\/)/g,'');
      },
      size: function() {
        return source.length;
      }
    };
    callback();
  });
};

module.exports = webpackCommentExtractionPlugin;
