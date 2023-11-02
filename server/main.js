import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";
require("dotenv").config();

Meteor.startup(() => {
	console.log(process.env.SECRET2);
	if (TasksCollection.find().count() === 0) {
		[
			"First Task",
			"Second Task",
			"Third Task",
			"Fourth Task",
			"Fifth Task",
			"Sixth Task",
			"Seventh Task",
		].forEach(taskText => TasksCollection.insert({ text: taskText }));
	}
});
