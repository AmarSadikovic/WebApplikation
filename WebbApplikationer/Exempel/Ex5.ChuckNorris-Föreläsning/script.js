$("#get-joke").on("click", function(){
	$("#joke").show();
	$("#joke").text("Laddar...");
	$.ajax({
		url: "http://api.icndb.com/jokes/random",
		dataType: "JSON"
	}).done(function(data){
		var joke = data.value.joke;
		$("#joke").text(joke);
		$("#joke").show();
	}).fail(function(data){
		$("#joke").text("Något gick fel...");
		$("#joke").show();
	});
});