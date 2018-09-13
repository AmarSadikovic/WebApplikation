//Window.onload = renderTheme();

document.querySelector("#toogle-menu").addEventListener("click", function(){
    if(window.innerWidth < 480){
        var menuUl = this.nextElementSibling;
        if(menuUl.style.display == "block"){
            menuUl.style.display = "none";
        }else{
            menuUl.style.display = "block";
        }
    }
}, false);



var val;
document.getElementById("selector").addEventListener("change", changeCss, false);

function changeCss(){
    val = this.value;
    alert("Choosen "+val);
    completeChange(val);
    if(getTheme() != val){
        localStorage.clear();
    }
    saveTheme(val); 


}
function completeChange(theme){

    if(theme == "regularSida1"){
        document.getElementById("cssCode").setAttribute("href", "regularSida1.css");
    }else if(theme == "darkerSida1"){
        document.getElementById("cssCode").setAttribute("href", "darkerSida1.css");
    }else if(theme == "prettierSida1"){
        document.getElementById("cssCode").setAttribute("href", "prettierSida1.css");
    }
}








