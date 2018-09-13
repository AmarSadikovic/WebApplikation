$(document).on("ready", renderTodoList);

function renderTodoList(){
	// 1. Hämta todolistan
	var todo = getTodoList();
	
	// 2. Nollställ tabellen (utom första raden)
	$("#todo-table tr:not(:first-child)").remove();
	
	// 3. Skriv ut alla todo-sakerna
	for(var i = 0; i < todo.length; i++){
		$("#todo-table tbody").append("\
			<tr class='"+getPrioClass(todo[i].prio)+"'>\
				<td>"+todo[i].title+"</td>\
				<td>"+todo[i].prio+"</td>\
				<td><img src='delete.png' class='delete-item'></td>\
			</tr>\
		");
	}
}

function getPrioClass(prio){
	if(prio == 1){
		return "success";
	}else if(prio == 2){
		return "warning";
	}else{
		return "danger";
	}
}

function getTodoList(){
	if(localStorage.getItem("todo") == null){
		// Det finns inget spara med nyckeln "todo" i localStorage
		var todo = [];
	}else{
		// Hämtar den sparade listan och läser in JSON till JavaScript
		var todo = JSON.parse(localStorage.getItem("todo"));
	}
	return todo;
}

function deleteItem(item){
	var todo = getTodoList();
	// Letar upp index i arrayen av den sak vi vill ta bort
	var indexOfItem = todo.indexOf(item);
	// Tar bort saken
	todo.splice(indexOfItem, 1);
	// Sparar den nya listan till localStorage
	saveTodoList(todo);
	// Skriver ut den nya listan på webbplatsen
	renderTodoList();
}

function saveTodoList(todoList){
	// Gör om vår lista med saker till JSON
	var JSONTodo = JSON.stringify(todoList);
	// Sparar vår lista (i JSON) i localStorage
	localStorage.setItem("todo", JSONTodo);
}

$("#add-item-form").on("submit", function(e){
	// Hindrar formuläret från att skickas iväg
	e.preventDefault();
	
	// 1. Hämta värde
	var title = $("#title");
	var prio = $("#prio");
	
	// 2. Validera input
	if(title.val() == ""){
		title.parent().addClass("has-error has-feedback");
		title.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
		return false;
	}
	
	// 3. Läs in / skapa vår array med todo-saker
	var todo = getTodoList();
	
	// 4. Lägg till vår sak i listan
	todo.push({
		title: title.val(),
		prio: prio.val()
	});
	
	// 5. Uppdatera vår listan
	saveTodoList(todo);
	
	// 6. Skriv ut vår lista
	renderTodoList();
	
});

$("#todo-table").on("click", ".delete-item", function(){
	// Hämtar titeln på den sak vi vill ta bort
	var item = $(this).parent().prev().prev().text();
	// Tar bort saken
	deleteItem(item);
});

$("#title").on("keyup", function(){
	if($(this).val().length > 0){
		// Om längden på användarens input är minst ett tecken, ta bort ev. element & klasser
		$(this).next().remove();
		$(this).parent().removeClass("has-error has-feedback");
	}else{
		// Om längden på användarens input är tom, lägger till ev. element & klasser
		$(this).parent().addClass("has-error has-feedback");
		$(this).after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
	}
});