const timer = function(end = "2025-05-30"){
	const timeCulc = function(){
		const deadLine = new Date(end);
		let nowDays = new Date();
		let diff = deadLine - nowDays;

		diff < 0 ? clearInterval(int) : "";

		let days = diff > 0 ? Math.floor(diff/1000/60/60/24) : "0",
			 hours = diff > 0 ? Math.floor(diff/1000/60/60 % 24) : "0",
			 minutes = diff > 0 ? Math.floor(diff/1000/60 % 60) : "0",
			 seconds = diff > 0 ? Math.floor(diff/1000 % 60) : "0";

		const timeBlock = document.querySelectorAll(".require_time > div"),
				 daysBlock = timeBlock[0],
				 hoursBlock = timeBlock[1],
				 minutesBlock = timeBlock[2],
				 secondsBlock = timeBlock[3];

		daysBlock.textContent = days;
		hoursBlock.textContent = hours;
		minutesBlock.textContent = minutes;
		secondsBlock.textContent = seconds;

	}

	const int = setInterval(timeCulc , 1000);

}

export default timer