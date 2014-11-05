$(document).ready(function() {
	var userId = getURLParameter('userId');
	$('#button').on('click', function(e) {
		addBike(userId);		
	});
});

function addBike(userId) {
	var descriptionValue = $('#description').val();	
	var uuIdValue = $('#tagId').val();
	var majorIdValue = $('#majorId').val();
	var minorIdValue = $('#minorId').val();
	var urlValue = 'http://api.dev.rothar.appbucket.eu/v2/users/' + userId + '/assets';		
	var dataValue = {"uuid":uuIdValue, "minor":minorIdValue, "major":majorIdValue, "description":descriptionValue};	
	$.ajax({
			type: "POST",
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
			 alert("Adding new bike failed: " + serverResponse.clientMessage);
		 });
}
