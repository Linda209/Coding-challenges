

function ConvertTime(num) {

  var hours = (num / 60);

  var RealHours = Math.floor(hours);
  var mins = (hours - RealHours) * 60;

  var RealMinutes = Math.round(mins);
  return RealHours + " hours and " + RealMinutes + " minutes.";
}

console.log(ConvertTime(133));
