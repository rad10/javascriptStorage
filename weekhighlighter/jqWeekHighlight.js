$(document).ready(function(){
	var d=new Date()
	function week(){
		var weekBase = (((d.getMonth()*31)+d.getDate()-(d.getDay()+1))/7)-1;
		if (d.getDay() <= 6) {
			weekBase += 1;
		};
		return Math.round(weekBase);
	};
	$("#week").append("week"+week());
	$("#week"+week()).addClass("currWeek");
	$("#weekday").append(d.getMonth());
	$("#amountDay").append((d.getMonth()*31)+d.getDate());
});
