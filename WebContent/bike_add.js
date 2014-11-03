$(document).ready(function() {
	var userId = getURLParameter('userId');
	$( "#button" ).bind( "click", function() {
		addBike(userId);
	});
});

function addBike(userId) {
	var descriptionValue = $('#description').val();
	console.log(descriptionValue);	
	var uuIdValue = $('#uuId').val();
	console.log(uuIdValue);
	var majorIdValue = $('#majorId').val();
	console.log(majorIdValue);
	var minorIdValue = $('#minorId').val();
	console.log(minorIdValue);
	var urlValue = 'http://api.dev.rothar.appbucket.eu/v2/users/' + userId + '/assets';		
	var dataValue = {"uuid":uuIdValue, "minor":minorIdValue, "major":majorIdValue, "description":descriptionValue};
	console.log(dataValue);
	$.ajax({
		type: "POST",
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