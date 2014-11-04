$(document).ready(
		function() {
			var userId = getURLParameter('userId');
			$.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/'
					+ userId + '/assets', function(bikes) {
				$.each(bikes, function(index, bike) {				
					$('table tr:last').after(
							'<tr>'
							+ '<td>' + bike.uuid + '</td>' 
							+ '<td>' + bike.description + '</td>' 
							+ '<td><a class="btn btn-default" href="report_list.html?assetId=' + bike.assetId + '">Reports</a></td>'
							+ '<td><a class="btn btn-default" href="bike_edit.html?assetId=' + bike.assetId + '">Edit</a></td>'
							+ '</tr>');
				});
			}) .done(function(bikes) {
				$('#loading').remove();
				if(bikes.length === 0) {
					$('table tr:last').after(
							'<tr>'
							+ '<td colspan="4" class="text-center"> You have no registered bikes</td>' 							
							+ '</tr>');
				}				
			});

		});
