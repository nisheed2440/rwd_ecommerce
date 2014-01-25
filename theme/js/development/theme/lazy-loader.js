Modernizr.load([
  {
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load( NRWD.baseJs + 'production/jquery-1.10.2.min.js');
      }
      if( NRWD.minifiedFlag === true){
    	  /*Minified files go here*/
    	  Modernizr.load( NRWD.baseJs + 'production/nrwd-ecomm.min.js');
      } else {
    	  /*Development files go here*/ 
    	  
    	  /*Bootstrap files*/
    	  Modernizr.load( NRWD.baseJs + 'production/nrwd-ecomm.js');
    	  /*Theme Files*/
      }
    }
  },{
	  load: NRWD.baseJs + 'development/bootstrap/holder.js'
  },
  {
	  load: '../plugins/hammerjs/hammer.min.js',
	  complete:function(){
		  Modernizr.load([
		                  {
		                	  load:'../plugins/jquery-mmenu/js/jquery.mmenu.min.all.js',
		                	  complete:function(){
		        				  $(function(){
		        					  $('#nrwd-main-menu').mmenu({
			        					  classes: "mm-light",
			        				      zposition: "next",
			        				      counters: true
			        				  });
		        				  });
		                	  }
		                  }]);
	  }
  }
]);