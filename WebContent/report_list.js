$(document).ready(function() {
	var assetId = getURLParameter('assetId');
	var userId = getURLParameter('userId');
	$('#table').hide();			
	$('#no_reports').hide();
	$('#loading').show();
	loadReports(assetId, userId);
});

function loadReports(bikeId, ownerId) {
	$.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/' + ownerId + '/assets/' + bikeId + '/reports' + '?limit=5',
			function(bikes) {
				$.each(bikes, function(index, bike) {				
					$('table tr:last').after(
							'<tr>'
							+ '<td>' + formatDate(bike.created) + '</td>'
							+ '<td><img src="https://maps.googleapis.com/maps/api/staticmap?center='+bike.latitude+','+bike.longitude+'&zoom=16&size=400x100&markers=color:blue%7Clabel:S%7C'+bike.latitude+','+bike.longitude+'"></td>'							
							+ '</tr>');
				});
    })
    .fail(function(result, status, xhttp) {
		var serverResponse = $.parseJSON(result.responseText);
		 alert("Can't retrieve reports: " + serverResponse.clientMessage);
	}).done(function(bikes) {
		$('#loading').hide();			
		if(bikes.length === 0) {
			$('#table').hide();
			$('#no_reports').show();
		} else {
			$('#table').show();
			$('#no_reports').hide();
		}
	});
}

function formatDate(timeStamp) {
	var d = new Date(timeStamp);
	return d;
}
