module.exports = {
	init: function(el, options){
		this.options = options;
		this.$el = $(el);
		this.initContainer();
		this.initTable();
		this.initHeader();
		this.initBody();
<<<<<<< HEAD
=======
		this.initPage();
>>>>>>> Sorting&Searching
		this.initToolBar();
	}
}
