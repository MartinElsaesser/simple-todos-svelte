import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from "/imports/api/TasksCollection";
import { join } from "path";
require("dotenv").config({ path: join(Meteor.absolutePath, ".env") });

const SEED_USERNAME = process.env.SEED_USERNAME;
const SEED_PASSWORD = process.env.SEED_PASSWORD;

Meteor.startup(() => {
	console.log({ SEED_USERNAME, SEED_PASSWORD });
	if (!Accounts.findUserByUsername(SEED_USERNAME)) {
		Accounts.createUser({
			username: SEED_USERNAME,
			password: SEED_PASSWORD,
		});
	}

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
