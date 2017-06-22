/**
 * Created by wzb on 2017/6/20.
 * 表格增删改
 */
module.exports = {

    //顶部工具栏
    initToolBar: function () {
        var that = this;
        this.$createButton = this.$toolbar.find('#create');
        this.$batchDelete = this.$toolbar.find('#batchDelete');

        $(this.$toolbar).append(
          // '<button id="batchDelete">批量删除</button>' +
          //   '<button id="create">添加</button>' +
            '<label><input class="search"></label>');

        $(".search").on("keyup", function() {
          var val = $(this).val();
          console.log(val)
          if(val == "") {
            that.options.currentData = that.options.data;
          } else {
            that.searchByKey(val);
          }

          that.initPage();
        });
    },
    //弹出添加框
    initCreateBar: function () {
        $(this.$createButton).on('click', function () {

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

}
