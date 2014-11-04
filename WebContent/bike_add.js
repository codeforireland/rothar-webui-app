$(document).ready(function() {
	var userId = getURLParameter('userId');
	$("#button").attr("href", 'bike_list.html?userId=' + userId);
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
		.done(function( msg ) {
			alert( "Data Saved");
		})
		 .fail(function() {
			 alert( "error" );
		 });
}