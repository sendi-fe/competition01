module.exports = {
  cloneData: function() {
    var clone = [];

<<<<<<< HEAD
<<<<<<< HEAD
    for(var i = 0; i < this.data.length; i++) {
        clone.push(deepClone(this.data[i]));
    }

    return clone;
  }，
=======
=======
>>>>>>> Sorting&Searching
    for(var i = 0; i < this.options.currentData.length; i++) {
        clone.push(this.deepClone(this.options.currentData[i]));
    }

    return clone;
  },
<<<<<<< HEAD
>>>>>>> Sorting&Searching
=======
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
<<<<<<< HEAD
    objClone.toString = obj.toString;
    objClone.valueOf = obj.valueOf;
=======
>>>>>>> Sorting&Searching
=======
>>>>>>> Sorting&Searching
    return objClone;
  }
}
