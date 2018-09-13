$(".menu button").on("click", function(){
	if($(this).attr("id") == "all"){
		$("#movies li").show();
	}else{
		$("#movies li").hide();
		$("#movies li[data-genre='"+$(this).attr("id")+"']").show();
	}
});

$(".edit-title").on("click", function(){
	var title = prompt("Ange ny titel:");
	$(this).prev().text(title);
});