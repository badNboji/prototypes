module.exports = function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        console.log('this is ', path.node.name);
        path.node.name = path.node.name.split('').reverse().join('');
      }
    }
  };
}
