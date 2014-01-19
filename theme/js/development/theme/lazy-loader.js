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
	  load: NRWD.baseJs + 'production/masonry.pkgd.min.js',
  }
]);