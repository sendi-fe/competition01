module.exports = {
  sortByKeys: function(ops) {//ops为排序范围数组
    var sortedData = this.cloneData();//数据副本用以排序
    var dataField;//当前排序基于的列

    if(arguments.length == 0) {
      return sortedData;
    }

    for(var i in ops) {
      dataField = ops[i];
      sortedData.sort(this.by(dataField));
    }

    //return sortedData;
    // this.initBody(sortedData);
    this.options.currentData = sortedData;
  },
  searchByKey: function(target, ops) {//target为搜索关键词，ops为搜索范围数组
    var cloneData = this.cloneData();//数据副本用以筛选
    var selectedData = [];//筛选后的对象数组

    for(var i in cloneData) {
      if(ops == undefined || this.inArray(key, ops)) {
        for(key in cloneData[i]) {
          if(this.contains(cloneData[i][key], target)) {
            selectedData.push(cloneData[i]);
            break;
          }
        }
      }
    }

    //return selectedData;
    // this.initBody(selectedData);
    this.options.currentData = selectedData;
  },
  by: function(dataField) {
    return function(o, p){
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[dataField];
            b = p[dataField];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }
        else {
            throw ("error");
        }
    }
  },
  contains: function(src, tar) {
    if(typeof src == "string") {
      if(src.indexOf(tar) != -1) {
        return true;
      }
    } else if(typeof src == "number") {
      if(src.toString().indexOf(tar) != -1) {
        return true;
      }
    } else if(typeof src == "boolean") {
      if(src.toString().indexOf(tar) != -1) {
        return true;
      }
    }

    return false;
  },
  inArray: function(target, arr) {
    for(var i in arr) {
      if(target == arr[i]) {
        return true;
      }
    }

    return false;
  },
  compare: function(op1, op2) {

  }
}
