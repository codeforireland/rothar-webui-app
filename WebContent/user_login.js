$(document).ready(function() {
	var userId = getURLParameter('userId');
	$('#userId').val(userId);		
	$( "#button-login" ).bind( "click", function() {		
		$("#button-login").attr("href", 'bike_list.html?userId=' + $('#userId').val());
	});
});