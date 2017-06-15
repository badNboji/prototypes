module.exports = function ({types: t}) {
  return {
    visitor: {
     Program(node) {
        // path.node.name = path.node.name.split('').reverse().join('');
        let array = node.parent.comments;
        for (let i = 0; i < array.length; i++) {
          var eachObj = array[i];
          var value = eachObj.value;
          if (value.indexOf("~dab") > -1){
            var newVal = value.split("/"); 
            newVal[1] = "changedddddd";
            eachObj.value = newVal.join("/");
          }
        }
      }
    }
  };
}

