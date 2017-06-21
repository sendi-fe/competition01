module.exports = {
	initContainer: function() {
		this.$container = $([
	        '<div class="sendi-table">',
	        '<div class="fixed-table-toolbar"></div>',
	        '<div class="fixed-table-container">',
	        '<div class="fixed-table-header"><table></table></div>',
	        '<div class="fixed-table-body"></div>',
	        '<div class="fixed-table-pagination"></div>',
	        '</div>',
	        '</div>'
	    ].join(''));

	    this.$container.insertAfter(this.$el);
	    this.$tableContainer = this.$container.find('.fixed-table-container');
	    this.$tableHeader = this.$container.find('.fixed-table-header');
	    this.$tableBody = this.$container.find('.fixed-table-body');
	    this.$toolbar = this.$container.find('.fixed-table-toolbar');
	    this.$pagination = this.$container.find('.fixed-table-pagination');

	    this.$tableBody.append(this.$el);
	    this.$container.after('<div class="clearfix"></div>');
	},
	initTable: function() {
		var that = this,
		    columns = [],
		    data = [];

		this.$header = this.$el.find('>thead');
		if (!this.$header.length) {
		    this.$header = $('<thead></thead>').appendTo(this.$el);
		}
	},
	initHeader: function() {
		
	},
	initData: function() {

	}, 
	initBody: function() {

	}
}