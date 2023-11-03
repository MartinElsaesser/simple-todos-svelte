<script>
	import {TasksCollection} from "../api/TasksCollection";

	let newTask = "";
	export let user = null;

	const handleSubmit = () => {
		
		TasksCollection.insert({
			text: newTask,
			createdAt: new Date(),
			userId: user._id,
			checked: false
		});
		newTask = "";
	}
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
	<input
		type="text"
		name="text"
		id="Type to add new tasks"
		bind:value={newTask}>
	<button type="submit">Add Task</button>
</form>