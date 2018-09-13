window.onload = favoriteMovie();
window.onload = getImage();
window.onload = getVideo();
window.onload = getAudio();



function favoriteMovie(){
    var favoriteMovie = JSON.parse(localStorage.getItem("favorite"));
    if(favoriteMovie == null){
        $("nav p").text("Favorit film: -");

    }else{
        $("nav p").text("Favorit film: "+favoriteMovie);
    }
}



$(document).ready(function() {
    $('#myForm').on("submit", function(e){


        if($("#type-selector")[0].selectedIndex <= 0){
            $( "#progress" ).text("Please select a type!");
            e.preventDefault();
        }else if (!$("#search").val()){
            $( "#progress" ).text("Please insert a title!");
            e.preventDefault();
        }
        else if(!$("#fileChooser").val()){
            $( "#progress" ).text("Please select a file!");
            e.preventDefault();
        }
        else{
            $( "#progress" ).text("Laddar upp...");
            e.preventDefault();
            $('#myForm').ajaxSubmit({
                success: function(data) {
                    var obj = JSON.parse(data);
                    if (obj.success == true){
                        $( "#progress" ).text(obj.message);
                        $("#myForm").trigger("reset");
                    } else {
                        $( "#progress" ).text("Något gick fel");
                    }
                },
                error: function(){
                    $( "#progress" ).text("Något gick fel");
                }
            });
        }
    });
});


$("#btnTest").on("click", function(){
    getImage();
});

function resetSearches(){

    $(".search-result-img").not(':first').remove();
    $(".search-result-video").not(':first').remove();
    $(".search-result-audio").not(':first').remove();
    $(".search-result-img").hide();
    $(".search-result-video").hide();
    $(".search-result-audio").hide();


}

var valType;
document.getElementById("type-selector").addEventListener("change", acceptInput, false);
function acceptInput(){
    valType = this.value;

    if(valType=="photo"){
        $("#fileChooser").attr("accept", "image/*")
    }else if(valType=="video"){
        $("#fileChooser").attr("accept", "video/*");
    }else if(valType=="audio"){
        $("#fileChooser").attr("accept", "audio/*");
    }

}

var val;
document.getElementById("selector").addEventListener("change", changeCss, false);
function changeCss(){
    val = this.value;
    resetSearches();
    if(val=="photo"){
        getImage();
    }else if(val=="video"){
        getVideo();
    }else if(val=="audio"){
        getAudio();
    }else if(val=="all"){
        getImage();
        getVideo();
        getAudio();
    }

}

function getImage(){
    $(".search-result-img").show();
    $(".search-result-img").not(':first').remove();
    $.ajax({
        url: "server.php?action=getMedia&type=photo",
        dataType: "JSON"
    }).done(function(data){
        var search = data.files;
        var mainUrl =  "http://ddwap.mah.se/af6851/";

        for(file in search){
            var title = search[file].title;
            var photo = search[file].path;
            var clone = $(".search-result-img:first").clone();
            clone.appendTo(".searchMedia").find("h3").text(title);
            clone.appendTo(".searchMedia").find(".holder").attr("src",mainUrl+photo);
            console.log(title+"+"+photo);
        }

        if($(".search-result-img").length > 1){
            $(".search-result-img:first").remove();    
        }

    }).fail(function(data){
        consol.log("Fail: ");
    });
};

function getVideo(){
    $(".search-result-video").show();
    $(".search-result-video").not(':first').remove();
    $.ajax({
        url: "server.php?action=getMedia&type=video",
        dataType: "JSON"
    }).done(function(data){
        var search = data.files;
        var mainUrl =  "http://ddwap.mah.se/af6851/";

        for(file in search){
            var title = search[file].title;
            var photo = search[file].path;
            var clone = $(".search-result-video:first").clone();
            clone.appendTo(".searchMedia").find("h3").text(title);
            clone.appendTo(".searchMedia").find(".holder-video").attr("src",mainUrl+photo);
            console.log(title+"+"+photo);
        }

        if($(".search-result-video").length > 1){
            $(".search-result-video:first").remove();    
        }

    }).fail(function(data){
        consol.log("Fail: ");
    });
};

function getAudio(){
    $(".search-result-audio").show();
    $(".search-result-audio").not(':first').remove();
    $.ajax({
        url: "server.php?action=getMedia&type=audio",
        dataType: "JSON"
    }).done(function(data){
        var search = data.files;
        var mainUrl =  "http://ddwap.mah.se/af6851/";

        for(file in search){
            var title = search[file].title;
            var photo = search[file].path;
            var clone = $(".search-result-audio:first").clone();
            clone.appendTo(".searchMedia").find("h3").text(title);
            clone.appendTo(".searchMedia").find(".holder-audio").attr("src",mainUrl+photo);
            console.log(title+"+"+photo);
        }

        if($(".search-result-audio").length > 1){
            $(".search-result-audio:first").remove();    
        }

    }).fail(function(data){
        consol.log("Fail: ");
    });
};


