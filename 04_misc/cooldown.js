function cooldown(seconds) {
	return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function cooldownedLog() {
	console.log("Starting cooldown...");
	await cooldown(5);
	console.log("cooldown complete!");
}

cooldownedLog();
