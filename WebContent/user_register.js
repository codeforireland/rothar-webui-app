$(document).ready(function() {
	$.post('http://api.dev.rothar.appbucket.eu/v2/users', function(jd) {
		$('#userId').html(jd.userId);		
		$("#button").attr("href", 'user_login.html?userId=' + jd.userId);
	});
});