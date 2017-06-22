/**
 * Created by wzb on 2017/6/20.
 * 表格增删改
 */
module.exports = {

    //顶部工具栏
    initToolBar: function () {
<<<<<<< HEAD
        console.log(this.$toolbar);
        this.$createButton = this.$toolbar.find('#create');
        this.$batchDelete = this.$toolbar.find('#batchDelete');

        $(this.$toolbar).append('<button id="batchDelete">批量删除</button>' +
            '<botton id="create">添加</botton>' +
            '<label for="search"><input id="search"></label>');
=======
        var that = this;
        this.$createButton = this.$toolbar.find('#create');
        this.$batchDelete = this.$toolbar.find('#batchDelete');

        $(this.$toolbar).append(
          // '<button id="batchDelete">批量删除</button>' +
          //   '<button id="create">添加</button>' +
            '<label><input class="search"></label>');

        $(".search").on("change", function() {
          var val = $(this).val();
          if(val == "") {
            that.options.currentData = that.options.data;
          } else {
            that.searchByKey(val);
          }

          that.initPage();
        });
>>>>>>> Sorting&Searching
    },
    //弹出添加框
    initCreateBar: function () {
        $(this.$createButton).on('click', function () {
<<<<<<< HEAD
            $(this.$container)
=======

>>>>>>> Sorting&Searching
        })
    },
    //添加数据
    createRow: function () {

    },
    //批量删除
    initBatchDelete: function () {
        $(this.$batchDelete).on('click', function () {

        })
    }

<<<<<<< HEAD
}
=======
}
>>>>>>> Sorting&Searching
