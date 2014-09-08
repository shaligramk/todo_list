// Problem: User interaction doesn't provide desired results.
// Solution: Add interactvity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks


//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item 
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input"); //type checkbox
	var label = document.createElement("label"); //type label
	var editInput = document.createElement("input"); //type label
	var editButton = document.createElement("button"); //type label
	var deleteButton = document.createElement("button"); //type label

  //Each element needs modifying
  
  	checkBox.type = "checkbox";
  	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className =  "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

// Add a new task
var addTask = function() {
	console.log("Add task...");
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

// Edit an existing task
var editTask = function(){
	console.log("Edit task...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	
	// When the Edit button is pressed
	var containsClass = listItem.classList.contains("editMode");
	
	if(containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
	
	listItem.classList.toggle("editMode");
}
		

// Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

// Mark a Task as Complete
var taskCompleted = function() {
	console.log("Task Complete");
	//When the checkbox is checked
	var listItem = this.parentNode;	
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}
// Mark a task as Incomplete
var taskIncomplete = function() {
	console.log("Task incomplete");
	//When the checkbox is unchecked
	// Append the task list item to the #incompleted-tasks	
}
var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");	
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	  	//bind editTask to edit button
	  	editButton.onclick = editTask;

  		//bind deleteTask to delete button
  		deleteButton.onclick = deleteTask;

  		//bind checkBoxEventHandler to checkbox
  		checkBox.onchange = checkBoxEventHandler;

		// select it's children
		// bind editTask to edit button
		// bind deleteTask to delete button
		// bind taskCompleted to checkbox
	}

var ajaxRequest = function(){
	console.log("AJAX request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

