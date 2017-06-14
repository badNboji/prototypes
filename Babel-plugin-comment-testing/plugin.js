  
module.exports = function ({types: t }) {

  return {
    visitor: {
     Program(node) {
        let array = node.parent.comments;
        for (let i = 0; i < array.length; i++) {
          var eachObj = array[i];
          var value = eachObj.value;
          console.log(eachObj.value);
          if (value.indexOf("dab~") > -1){
            var newVal = value.split("/"); 
            newVal[1] = "changed";
            eachObj.value = newVal.join("/");
          }
        }
      } 
    }
  };
}
