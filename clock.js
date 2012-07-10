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

	// Get current time
	now = new Date();

	seconds = now.getSeconds();
	minutes = now.getMinutes();
	hours = now.getHours();

	// calculate angles of hands
	sDeg = seconds * 6;
	mDeg = minutes * 6;
	hDeg = hours * 30;

	// get clock DOM
	secondHand = document.getElementById('second-hand');
	minuteHand = document.getElementById('minute-hand');
	hourHand = document.getElementById('hour-hand');

	// set all the hands to the current time
	secondHand.style.webkitTransform = "rotate(" + sDeg + "deg)";
	minuteHand.style.webkitTransform = "rotate(" + mDeg + "deg)";
	hourHand.style.webkitTransform = "rotate(" + hDeg + "deg)";

	// define runClock function
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
				hDeg += 30;
				hourHand.style.webkitTransform = "rotate(" + hDeg + "deg)";
				// console.log('BAM!!!  hour.');
			}
		}
	}
	// run the clock
	setInterval(runClock,1000); 
}