<script>
	import {TasksCollection} from "../api/TasksCollection";
	export let task;

	const toggleChecked = () => {
		TasksCollection.update(task._id, {
			$set: { isChecked: !task.isChecked }
		});
	}

	const deleteThisTask = () => {
		TasksCollection.remove(task._id);
	}
</script>

<li on:dblclick={toggleChecked}>
	<input
		type="checkbox"
		readonly
		checked={!!task.isChecked}
		on:click={toggleChecked}>
	<span>{task.text}</span>
	<button class="delete" on:click={deleteThisTask}>&times;</button>
</li>