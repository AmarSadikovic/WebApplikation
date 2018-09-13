var e1 = document.querySelector("#success");


document.querySelector("#success").addEventListener("click", mySuccess, false);

function mySuccess(){
    var p = document.querySelector("#message-box");
    p.innerHTML = "success";
    p.className = "success";
}

document.querySelector("#error").addEventListener("click", myError, false);

function myError(){
    var p = document.querySelector("#message-box");
    p.innerHTML = "error";
    p.className = "error";
}

document.querySelector("#info").addEventListener("click", myInfo, false);

function myInfo(){
    var p = document.querySelector("#message-box");
    p.innerHTML = "info";
    p.className = "info";
}

document.querySelector("#add-item").addEventListener("click", addItem, false);

function addItem(){
    //skapar eett <p>-element
    var li = document.createElement("li");
    // skapar en text-nod, alltså det som ska stå i paragrafen
    var input = prompt("type node name");
    var textNode = "<li>"+ input +"/li";
    //var textNode = document.createTextNode("Lite torr exeompeltext");
    //lägger till text-noden till paragrafen
    li.appendChild(textNode);
    //lägger till parafrafen som ett barn till elementet <body>
    document.querySelector("#message-box").appendChild(li);
  
}

document.querySelector(".remove-list-item").addEventListener("click", removeItem, false);

function removeItem(){
    alert("hej");
    parent.removeChild(child);
}