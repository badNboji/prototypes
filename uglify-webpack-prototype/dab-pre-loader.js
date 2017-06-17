module.exports = function (source) {
  console.log('SOURCE', source);
  // work magic
  return source.replace('dab','BAD');
}
