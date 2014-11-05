$(document).ready(
		function() {
			
			$('#table').hide();			
			$('#no_bikes').hide();
			$('#loading').show();
			var userId = getURLParameter('userId');
			$("#button-add").attr("href", 'bike_add.html?userId=' + userId);
			
			var userId = getURLParameter('userId');
			$.getJSON('http://api.dev.rothar.appbucket.eu/v2/users/'
					+ userId + '/assets', function(bikes) {
				$.each(bikes, function(index, bike) {				
					$('table tr:last').after(
							'<tr>'
							+ '<td>' + bike.uuid + '</td>' 
							+ '<td>' + bike.description + '</td>'
							+ '<td>' + bike.status + '</td>'
							+ '<td><a class="btn btn-default" id="button-reports" href="report_list.html'
							+'?assetId=' + bike.assetId 
							+ '&userId=' + userId + '">Reports</a></td>'
							+ '<td><a class="btn btn-default" id="button-edit" href="bike_edit.html'
							+ '?assetId=' + bike.assetId
							+ '&userId=' + userId + '">Edit</a></td>'
							+ '</tr>');
				});
			}) .done(function(bikes) {
				$('#loading').hide();			
				if(bikes.length === 0) {
					$('#table').hide();
					$('#no_bikes').show();
				} else {
					$('#table').show();
					$('#no_bikes').hide();
				}
			});
		});
