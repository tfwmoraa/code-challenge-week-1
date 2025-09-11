
function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    if (demeritPoints <= 12) {
      console.log("Points:", demeritPoints);
    } else {
      console.log("License suspended");
    }
  }
}

speedDetector(80);