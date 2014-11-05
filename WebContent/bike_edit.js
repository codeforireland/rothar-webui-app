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
				$('#status').val(jd.status);
    	});
}

function updateBike(userId, bikeId) {
	var descriptionValue = $('#description').val();
	var statusValue = $('#status').val();	
	var urlValue = 'http://api.dev.rothar.appbucket.eu/v2/users/' + userId + '/assets/' + bikeId;	
	var dataValue = {"description":descriptionValue, "status":statusValue};
	$.ajax({
		type: "PUT",
		url: urlValue,
		dataType: "json",		
		processData:false,
		data: JSON.stringify(dataValue),		
		contentType: "application/json; charset=UTF-8"
	})
	.success(function(msg) {
		window.location.href = 'bike_list.html?userId='+userId;
	})
	.fail(function(result, status, xhttp) {
		var serverResponse = $.parseJSON(result.responseText);
		 alert("Updating bike failed: " + serverResponse.clientMessage);
	});
}