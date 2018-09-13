window.onload = favoriteMovie();

function favoriteMovie(){
    var favoriteMovie = JSON.parse(localStorage.getItem("favorite"));
    if(favoriteMovie == null){
        $("nav p").text("Favorit film: -");

    }else{
        $("nav p").text("Favorit film: "+favoriteMovie);
    }

}


$("#btnSearch").on("click", function(){
    var input = $("#search").val();

    $(".search").show();
    $(".search-result").not(':first').remove();

    console.log($(".search"));
    $(".search-result").find("h3").show();
    $(".search-result").find("h3").text("Laddar...");
    $.ajax({
        url: "http://www.omdbapi.com/?s="+input+"&y=&plot=short&r=json",
        dataType: "JSON"
    }).done(function(data){
        var search = data.Search;
        var movies = "Movie: ";

        if(data.response == "true"){
            console.log("Identify");
        }else{

            $(".search-result").find("h3").text("Finns ingen film med den titlen...");
            $(".search-result").find("h3").show();    

            for(movie in search){
                var moviePrint = search[movie].Title +"("+search[movie].Year+")";
                console.log(search[movie].Title);
                $(".search-result:first").clone().appendTo(".search").find('h3').text(moviePrint);
            }
            if($(".search-result").length > 1){
                $(".search-result:first").remove();    
            }
        }
    }).fail(function(data){
        $(".search-result").find("h3").text("Något gick fel...");
        $(".search-result").find("h3").show();
    });

});


$("body").on("click", ".btnFavorite", function() {
    var favoriteMovieTest = $(this).closest("div").find("h3").text();
    saveFavorite(favoriteMovieTest);
    favoriteMovie();
});

$("#btnArkiv").on("click", function(){
    var input = $("#search").val();
    saveArkiv(input);
});

function saveFavorite(input){
    var JSONMovie = JSON.stringify(input);
    localStorage.setItem("favorite", JSONMovie);
}

function saveArkiv(input){
    var JSONArkiv = JSON.stringify(input);
    localStorage.setItem("arkiv", JSONArkiv);
}







