$(document).ready(function() {
	var assetId = getURLParameter('assetId');
	var userId = getURLParameter('userId');
	$.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/'+userId+'/assets/' + assetId + '/reports',
			function(jd) {
				var list = $('#list');
				$.each(jd, function( index, value ) {
					list.append(
					'<li>' 
    		  			+ value.created
    		  			+ '<img src="https://maps.googleapis.com/maps/api/staticmap?center='+value.latitude+','+value.longitude+'&zoom=16&size=200x200&markers=color:blue%7Clabel:S%7C'+value.latitude+','+value.longitude+'">'
    		  			);
	        	  });
          	});

});

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};
