$(document).ready(function() {
	var assetId = getURLParameter('assetId');
	var userId = getURLParameter('userId');
	loadBike(userId, assetId);
	$( "#button" ).bind( "click", function() {
		updateBike(userId, assetId);
	});
});

function loadBike(userId, bikeId) {
	$.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/'+userId+'/assets/'+bikeId,
			  function(jd) {
				$('#description').val(jd.description);
				radionButtonSelectedValueSet('status', jd.status);
    	});
}

function updateBike(userId, bikeId) {
	var descriptionValue = $('#description').val();
	console.log(descriptionValue);
	var statusValue = $('input[name=status]:checked').val();	
	console.log(statusValue);
	var urlValue = 'http://api.dev.rothar.appbucket.eu/v2/users/' + userId + '/assets/' + bikeId;
	console.log(urlValue);
	var dataValue = {"description":descriptionValue, "status":statusValue};
	console.log(dataValue);
	$.ajax({
		type: "PUT",
		url: urlValue,
		dataType: "json",		
		processData:false,
		data: JSON.stringify(dataValue),		
		contentType: "application/json; charset=UTF-8"
		})
		.done(function( msg ) {
		alert( "Data Saved: " + msg );
		});
}

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

function radionButtonSelectedValueSet(name, SelectedValue) {
    $('input[name="' + name+ '"]').val([SelectedValue]);
}