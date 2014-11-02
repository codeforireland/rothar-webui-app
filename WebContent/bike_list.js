$(document).ready(function() {
      $("#button").click(function(event){
    	  $.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/'+$('#user_id').val()+'/assets',
    			  function(jd) {
    		  		var list = $('#list');
    		  		$.each(jd, function( index, value ) {
    		  			list.append(
    		  			'<li>' 
    		  			+ value.description
    		  			+ ' <a href="bike_edit.html?assetId='+value.assetId+'">edit</a>'
    		  			+ ' <a href="report_show.html?assetId='+value.assetId+'">reports</a>'
    		  			);
	        	  });
          	});
      });
});