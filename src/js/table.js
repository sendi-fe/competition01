module.exports = {
	init: function(el, options){
		console.log('createing')
		this.options = options;
		this.$el = $(el);
		this.initContainer();
		this.initTable();
		this.initHeader();
		this.initData();
		this.initBody();
		// this.initSearch();
		// this.initPage();
	}
}