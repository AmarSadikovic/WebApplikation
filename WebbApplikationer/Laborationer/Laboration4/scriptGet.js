

$(document).on("ready", function(){
    // Sidan har laddat klart
    var color = $("body").css("background-color");
    var textSize = $("h1").css("font-size");
    console.log(color);
    console.log(textSize);
});

$("p").on("click", function(){
        $(this).css("color", "red");
});
$("h2").hover(function(){
    $(this).css("color", "red")
});

$("p").dblclick(function(){
    var pSize = parseInt($(this).css("font-size"));
    pSize++;
    $(this).css("font-size", pSize);
});



