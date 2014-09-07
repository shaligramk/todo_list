// Problem: User interaction doesn't provide desired results.
// Solution: Add interactvity so the user can manage daily tasks.

// Add a new task
	// When the button is pressed
	// Create a new list item with the text from #new-task
		// input (checkbox)
		// label
		// input (text)
		// button.edit
		// button.delete
		// Each elements, needs to modified and appended

// Edit an existing task
		// When the Edit button is pressed
			// if the class of the parent is .editMode
				// Switch from .editMode
				// label text become input's value
			// else
				// Switch to editMode 
				// input value becomes the label's text

			// Toggle .editMode on the parent

// Delete an existing task
	//When the Delete button is pressed
		// Remove the parent list item from the ul

// Mark a Task as Complete
	//When the checkbox is checked
	// Append the task list item to the #completed-tasks

// Mark a task as Incomplete
	//When the checkbox is unchecked
	// Append the task list item to the #incompleted-tasks