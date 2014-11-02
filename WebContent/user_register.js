$(document).ready(function() {
      $("#button").click(function(event){
          $.post('http://api.dev.rothar.appbucket.eu/v2/users', 
        		  function(jd) {
        	  		$('#stage').html('<p> Your new user id is: ' + jd.userId + '</p>');
          });
      });
});