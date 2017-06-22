module.exports = {
  cloneData: function() {
    var clone = [];

    for(var i = 0; i < this.options.currentData.length; i++) {
        clone.push(this.deepClone(this.options.currentData[i]));
    }

    return clone;
  },
  deepClone: function(obj) {
    var objClone;
    if(obj.constructor == Object) {
      objClone = new obj.constructor();
    } else {
      objClone = new obj.constructor(obj.valueOf());
    }

    for(var key in obj) {
      if(objClone[key] != obj[key]) {
        if(typeof(obj[key]) == "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }

    return objClone;
  }
}
