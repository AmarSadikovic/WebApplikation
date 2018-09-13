$("section").first().show();

$("menu li").on("click", function(){
	if($(this).attr("class") != "chosen"){
		$("menu li").removeClass("chosen");
		$(this).addClass("chosen");
		
		$("section").slideUp();
		var section = $(this).attr("id");
		$("."+section).slideDown();
	}
});