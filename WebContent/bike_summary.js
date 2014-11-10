$(document).ready(function() {
	var assetId = getURLParameter('assetId');
	var userId = getURLParameter('userId');
	loadBike(userId, assetId);
	$("#button").attr("href", 'bike_list.html?userId=' + userId);
});

function loadBike(userId, bikeId) {
	$.getJSON(BACKEND_URL + '/v2/users/'+userId+'/assets/'+bikeId,
			  function(jd) {
				$('#uuid').val(jd.uuid);
				$('#major_id').val(jd.major);
				$('#minor_id').val(jd.minor);
				$('#description').val(jd.description);
    	});
}