$(".menu button").on("click", function(){
	if($(this).attr("id") == "all"){
		$("#movies li").show();
	}else{
		var btnId = $(this).attr("id");
		$("#movies li").hide();
		$("#movies li[data-genre='"+btnId+"']").show();
	}
});