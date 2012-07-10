window.onload = function(e){
	
	var sDeg
	, mDeg
	, hDeg
	, secondHand
	, minuteHand
	, hourHand
	, now
	, seconds
	, minutes
	, hours
	, s
	;

	// Calculate starting position for hands

	now = new Date();

	seconds = now.getSeconds();
	minutes = now.getMinutes();
	hours = now.getHours();

	sDeg = seconds * 6;
	mDeg = minutes * 6;
	hDeg = hours * 30;

	secondHand = document.getElementById('second-hand');
	minuteHand = document.getElementById('minute-hand');
	hourHand = document.getElementById('hour-hand');


	
	// set all the hands to the current time
	secondHand.style.webkitTransform = "rotate(" + sDeg + "deg)";
	minuteHand.style.webkitTransform = "rotate(" + mDeg + "deg)";
	hourHand.style.webkitTransform = "rotate(" + hDeg + "deg)";

	s = 0;
	var runClock = function(){

		sDeg+=6;
		s++;

		secondHand.style.webkitTransform = "rotate(" + sDeg + "deg)";
		// console.log(s + " : " + sDeg + " deg");
		
		if((sDeg % 360) === 0){
			mDeg += 6;
			minuteHand.style.webkitTransform = "rotate(" + mDeg + "deg)";
			// console.log('BAM!!!  minute.');

			if((mDeg % 360) === 0){
				hDeg += 6;
				hourHand.style.webkitTransform = "rotate(" + hDeg + "deg)";
				// console.log('BAM!!!  hour.');
			}

		}
	}

	setInterval(runClock,1000); 



}