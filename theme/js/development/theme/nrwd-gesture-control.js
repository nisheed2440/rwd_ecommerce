var NRWD = NRWD || {};
NRWD.GestureControl = NRWD.GestureControl || {};
NRWD.GestureControl.fn = {
		//Main nav l1,l2 on tap
		mainNavTap:function(menuCls){
			$(menuCls).each(function(){

				$(this).data('href',$(this).prop('href'));
				$(this).prop('href','javascript:void(0);');
				var $parent = $(this).parent();
				
				Hammer(this).on('tap',function(e){
					$parent.prevAll().removeClass('selected');
					$parent.nextAll().removeClass('selected');
					$parent.toggleClass('selected');
					
					//Default set selected for level2
					$parent.find('li.mm-l2-cat').removeClass('selected').first().addClass('selected');
				});
			});
		},
		//Main nav l1,l2 on doubletap
		mainNavDoubleTap:function(menuCls){
			$(menuCls).each(function(){
				Hammer(this).on('hold',function(e){
					window.location.href = $(this).data('href');
				});
			});
		},
		mainNavTapInit:function(){
			var _arguments = arguments;
			//Main nav l1,l2 reset
			if(arguments.length <= 0){
				return;
			}
			$(document).on('click','html,body',function(e){
				for(var i=0;i<_arguments.length;i++){
					if(typeof _arguments[i] === 'string'){
						$(_arguments[i]).each(function(){
							var parent = $(this).parent();
							if(parent.hasClass('selected')){
								parent.removeClass('selected');
							}
						});
					}
				}
			});
			
			//To prevent the default propogation
			for(var i=0;i<_arguments.length;i++){
				if(typeof arguments[i] === 'string'){
					$(document).on('click',_arguments[i],function(e){
						e.preventDefault()
						e.stopPropagation()
					});
					
					NRWD.GestureControl.fn.mainNavTap(_arguments[i]);
					NRWD.GestureControl.fn.mainNavDoubleTap(_arguments[i]);
				}
			}
		}
}

$(function(){
	NRWD.GestureControl.fn.mainNavTapInit('.nrwd-mm .mm-l1-cat-link','.nrwd-mm .mm-l2-cat-link');	
});
