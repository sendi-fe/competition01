module.exports = {
  sort: function(ops) {//ops为排序范围数组
    var cloneData = cloneData();//数据副本用以排序
    var dataField;//当前排序基于的列

    if(arguments.length == 0) {
      return cloneData;
    }

    for(var i in ops) {
      dataField = ops[i];




    }

    return cloneData;
  },
  search: function(target, ops) {//target为搜索关键词，ops为搜索范围数组
    var cloneData = cloneData();//数据副本用以筛选
    var selectedData = [];//筛选后的对象数组


    return selectedData;
  }
}
