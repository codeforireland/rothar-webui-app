$(document).ready(function() {
	var userId = getURLParameter('userId');
	$('#button').on('click', function(e) {
		addBike(userId);		
	});
});

function addBike(userId) {
	var descriptionValue = $('#description').val();		
	var urlValue = BACKEND_URL + '/v3/users/' + userId + '/assets';		
	var dataValue = {"description":descriptionValue};	
	$.ajax({
			type: "POST",
			url: urlValue,
			dataType: "json",		
			processData:false,
			data: JSON.stringify(dataValue),		
			contentType: "application/json; charset=UTF-8"
		})
		.success(function(result, status, xhttp) {
			window.location.href = 'bike_summary.html?userId=' + result.userId + '&assetId=' + result.assetId;
		})
		.fail(function(result, status, xhttp) {
			var serverResponse = $.parseJSON(result.responseText);
			 alert("Adding new bike failed: " + serverResponse.clientMessage);
		 });
}
