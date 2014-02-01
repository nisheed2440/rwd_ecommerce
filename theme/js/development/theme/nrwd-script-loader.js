//Google fonts lazy loading
WebFontConfig = {
		google: { families:  [ 'Roboto+Condensed:400,300,700:latin' ] }
};


//Call the google fonts library as soon as jQuery loads
Modernizr.load([
                {
                	load: NRWD.baseJs + 'production/jquery-1.10.2.min.js',
                	complete: function () {
                		/*Load the google font asynchronously to prevent lag*/
                		(function() {
                			var wf = document.createElement('script');
                			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                			wf.type = 'text/javascript';
                			wf.async = 'true';
                			var s = document.getElementsByTagName('script')[0];
                			s.parentNode.insertBefore(wf, s);
                		})();

                		if( NRWD.minifiedFlag === true){
                			/*Production files go here*/

                			Modernizr.load([
                			                { load: NRWD.baseJs + 'production/nrwd-ecomm.min.js'} //Bootstrap min file
                			                ]);
                		} else {
                			/*Development files go here*/

                			Modernizr.load([
                			                {load: NRWD.baseJs + 'production/nrwd-ecomm.js'} //Bootstrap combined dev file.
                			                ]);
                		}
                	}
                }
                ]);

//Load touch based js if browser supports touch
if(Modernizr.touch === true){
	Modernizr.load([
	                {
	                	//Hammerjs loaded
	                	load:'../plugins/hammerjs/hammer.min.js',
	                	complete:function(){
	                		
	                		//Only load the mmenu js when we are in mobile mode.
	                		if(Modernizr.mq('only all and (max-width: 768px)')){
	                			Modernizr.load([
	                			                {
	                			                	load:'../plugins/jquery-mmenu/js/jquery.mmenu.min.js',
	                			                	complete:function(){
	                			                		$(function(){
	                			                			$('#nrwd-mm')
	                			                			.mmenu()
	                			                			.removeClass('nrwd-mm row');
	                			                		});
	                			                	}
	                			                }
	                			                ]);
	                		}
	                	}
	                },
	                {
	                	load: NRWD.baseJs + 'development/theme/nrwd-gesture-control.js'
	                }
	                ]);
}
