/*******************************************************************
 * Given a clock time in hh:mm format, determine, to the 
 * nearest degree, the angle between the hour and the minute hands.
 *
 * Bonus: When, during the course of a day, will the angle be zero?
 *******************************************************************/
function AngleBetweenClockHands(time) {
  // make sure the format is correct
  if (!ValidTimeFormat(time)) {
    return -1;
  }

  hourMinPair = time.split(':').map(num => parseInt(num));
  let hour = hourMinPair[0];
  let minute = hourMinPair[1];

  // convert the string to ints
  if (hour == NaN ||
    minute == NaN ||
    hour > 23 || minute > 59) {
    return -1;
  }
  if (hour >= 12) {
    hour -= 12;
  }

  // do the fancy maths
  let minuteAngle = minute * 360 / 60;
  let hourAngle = (hour / 12 * 360) + (minuteAngle / 12);
  let angleDiff = Math.floor(hourAngle - minuteAngle);

  angleDiff = Math.abs(angleDiff);
  if (angleDiff > 180) {
    angleDiff = 360 - angleDiff;
  }

  return angleDiff;
}

function ValidTimeFormat(time) {
  let regex = /\b\d{2}\:\d{2}\b/
  return regex.test(time);
}


console.log(AngleBetweenClockHands("02:11"));