module.exports = {
  cloneData: function() {
    var clone = [];

<<<<<<< HEAD
    for(var i = 0; i < this.data.length; i++) {
        clone.push(deepClone(this.data[i]));
    }

    return clone;
  }，
=======
    for(var i = 0; i < this.options.currentData.length; i++) {
        clone.push(this.deepClone(this.options.currentData[i]));
    }

    return clone;
  },
>>>>>>> Sorting&Searching
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

<<<<<<< HEAD
    objClone.toString = obj.toString;
    objClone.valueOf = obj.valueOf;
=======
>>>>>>> Sorting&Searching
    return objClone;
  }
}
