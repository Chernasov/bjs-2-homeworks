// тут вы можете вызывать функции из task.js
function testCase() {
	let phoneAlarm = new AlarmClock();
	let now = new Date();
	let time = ("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2);
	phoneAlarm.addClock(time, () => console.log("Пора вставать!"), 1);
	now.setMinutes(now.getMinutes() + 1);
	time = ("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2);
	phoneAlarm.addClock(time, () => { console.log("Вставай уже!"); phoneAlarm.removeClock(2)}, 2);
	now.setMinutes(now.getMinutes() + 1);
	time = ("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2);
	phoneAlarm.addClock(time, () => { console.log("Вставай, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()}, 3);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}

