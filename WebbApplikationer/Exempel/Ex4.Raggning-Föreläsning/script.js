$("#get-tips").on("click", function(){
	$.ajax({
		url: "http://localhost:1234/date.php"
	}).done(function(data){
		$("#tips").text(data);
		$("#tips").show();
	}).fail(function(data){
		// FAIL
	});
});