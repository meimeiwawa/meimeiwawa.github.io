(function($){
	
	var link = $('<link rel="stylesheet" href="js/tab.css" />');
	$('head').append(link);
	var opation = { //默认对象
		header:['娱乐','八卦','财经','新闻','体育'],
		content:['张柏芝','谢霆锋','马云','习近平','吉他']
	}
	var setting={};
	var parent = null;
	
	function tab(obj){
		obj = obj||{};
		setting = $.extend(opation,obj);
		parent = this;
		createInput();
		createDiv();
		changeTab();
		console.log(this)
	}
	
	
	function createInput(){
		var box = $('<div class="btn">');
		for(var i=0;i<setting.header.length;i++){
			if(i == 0){
				var inp = $('<input type="button" value="'+setting.header[i]+'" class="active">');
			}else{
				var inp = $('<input type="button" value="'+setting.header[i]+'">');
			}
			
			box.append(inp);
		}
		parent.append(box);
	}
	function changeTab(){
		var inputs = parent.find('.btn input');
		var divs = parent.find('.cont div');
		inputs.on('click',function(){
			inputs.removeClass('active');
			$(this).addClass('active');
			divs.attr('class','hide');
			divs.eq($(this).index('input')).attr('class','show');
		})
		
	}
	
	
	function createDiv(){
		var cont = $('<div class="cont">');
		for(var i=0;i<setting.header.length;i++){
			if(i==0){
				var div = $('<div class="show">'+setting.content[i]+'</div>');
			}else{
				var div = $('<div class="hide">'+setting.content[i]+'</div>');
			}
			cont.append(div);
		}
		parent.append(cont);
	}
	
	$.fn.extend({
		tabs:tab
	})
	
})(jQuery)



