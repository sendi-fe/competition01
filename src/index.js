import $ from 'expose-loader?$!jquery'
import jquery from 'expose-loader?$!jquery'

require('./css/index.css');

import data from './text.js';
import table from './js/table.js';
import initTable from './js/create_table.js';
import initPage from './js/page.js';

// 创建jquery插件
(function($){

	// 存放默认参数
	var _DEFAULTS = {
		data: [], // 存放数据，现考虑的格式为数组对象格式
		sortable: true, // 默认开启排序功能
		pagination: true, //默认开启分页功能
		searchable: true, // 默认开启搜索功能
		editable: true, // 默认开启编辑功能，即删改
		checkbox: true, // 默认开启复选框功能，即第一行有复选框
		columns: [], // 列信息
	}
	
	$.fn.sendiTable = $.extend(true, {}, table, initTable,initPage);
})(jquery)

// 初始化表格
$.fn.sendiTable.init($('#sendi-table')[0], {data: data});

