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
	    // this.$tableHeader = this.$container.find('.fixed-table-header');
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

		// 处理表头
		this.$header = this.$el.find('>thead');
		this.$header.find('tr').each(function () {
            $(this).find('th').each(function () {
                columns.push($.extend({}, {
                    title: $(this).html(),
                }, $(this).data()));
            });
        });

        this.options.columns = columns;
        this.columns = [];
        this.fieldsColumnsIndex = [];
	},
	initHeader: function() {
		var that = this,
		    html = [];
	    html.push('<tr>');
		$.each(this.options.columns, function (i, columns) {
	        html.push('<th data-field=' + columns.field + ' style="width: 100px;">' + columns.title + '</th>');
		});
	    html.push('</tr>');

		this.$header.html(html.join(''));
	},
	initBody: function(data) {
		this.options.currentData = data || this.options.data;

		var that = this,
		    html = [],
		    data = this.options.currentData;
		    columns = this.options.columns;

		this.$body = this.$el.find('>tbody');
		if (!this.$body.length) {
		    this.$body = $('<tbody></tbody>').appendTo(this.$el);
		}

		$.each(data, function(i, row){
			html.push('<tr>');
			$.each(columns, function(i,data){
				html.push('<td>'+row[data.field]+'</td>')
			})
			html.push('</tr>');
		})
		this.$body.html(html);
	}
}
