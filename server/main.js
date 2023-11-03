import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from "/imports/api/TasksCollection";

// Dev code
import { join } from "path";
require("dotenv").config({ path: join(Meteor.absolutePath, ".env") });
const SEED_USERNAME = process.env.SEED_USERNAME;
const SEED_PASSWORD = process.env.SEED_PASSWORD;

const insertTask = (taskText, user) =>
	TasksCollection.insert({
		text: taskText,
		userId: user._id,
		createdAt: new Date(),
		checked: false
	});

Meteor.startup(() => {
	// Dev code
	if (!Accounts.findUserByUsername(SEED_USERNAME)) {
		Accounts.createUser({
			username: SEED_USERNAME,
			password: SEED_PASSWORD,
		});
	}

	const defaultUser = Accounts.findUserByUsername(SEED_USERNAME);

	if (TasksCollection.find().count() === 0) {
		[
			"First Task",
			"Second Task",
			"Third Task",
			"Fourth Task",
			"Fifth Task",
			"Sixth Task",
			"Seventh Task",
		].forEach(taskText => insertTask(taskText, defaultUser));
	}
});
