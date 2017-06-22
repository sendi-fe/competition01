/**
 * Created by wzb on 2017/6/20.
 * 表格增删改
 */
module.exports = {

    //顶部工具栏
    initToolBar: function () {
        // console.log(this.$toolbar);
        this.$createButton = $('#create');
        this.$batchDelete = this.$toolbar.find('#batchDelete');

        $(this.$toolbar).append('<button class="btn btn-danger" id="batchDelete">批量删除</button>' +
            '<button class="btn btn-default" id="create">添加</button>' +
            '<label for="search"><input class="" id="search"></label>');
    },
    //弹出添加框
    initCreateBar: function () {
        console.log(this.$createButton)
        this.$createButton.click(function () {
            console.log('fadsfdsg')
            $(this.$container).append('<div style="z-index: 1000">' +
                '<head>添加数据 <button class="glyphicon-volume-down"></button></head>' +
                '<label for="class"><input type="text" id="class"></label>' +
                '<label for="name"><input type="text" id="name"></label>' +
                '<label for="number"><input type="text" id="number"></label>' +
                '<footer><button class="btn btn-primary">确认</button></footer>' +
                '</div>');
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