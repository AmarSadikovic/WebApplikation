$(".addUser").on("click", function(){
    $(".searchUserBox").toggle();
});

$("#btnSearch").on("click", function(){
    $(".searchedUsers").toggle();
});

$(".user").hover(function(){
    $(".deleteIcon").toggle();
});



