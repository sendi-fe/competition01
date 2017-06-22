/**
 * create by ldt
 *
 */
module.exports = {
	initPage: function(){
		var that = this;
		var data = this.options.currentData;
		this.list = 10;//每页显示条数
		this.dataCount = this.options.currentData.length;//数据总量
		this.pageCount = Math.ceil(this.dataCount/this.list);//总共多少页
		this.nowPage = 1;//当前页数

		var ullist = [];
		ullist.push('<nav aria-label="Page navigation"><ul class="pagination">');
		ullist.push('<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
		for(var i = 1 ; i <= this.pageCount; i ++){
			ullist.push('<li><a href="#">'+i+'</a></li>');
		}
		ullist.push('<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>');
		this.$pagination.html(ullist.join(''));
		$('.pagination').on('click','a',function(){
			if($(this).attr('aria-label')){
				if($(this).attr('aria-label') == 'Previous'){
					if(that.nowPage == 1){
						return;
					}else{
						that.nowPage -= 1;
					}
				}else{
					if(that.nowPage == that.pageCount){
						return;
					}else{
						that.nowPage += 1;
					}
				}
			}else{
				that.nowPage = $(this).html();
			}
			that.updatePage();
		});
		this.updatePage();
	},

	updatePage: function() {
		var beginList = Math.ceil(this.list*(this.nowPage-1));
		var endLlist = Math.ceil(beginList+this.list);
		var data = this.options.currentData.slice(beginList,endLlist);
		this.initBody(data);
	}
}
