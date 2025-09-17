function speedDetector(speed) {
  const speedLimit = 70;// Allowed maximum speed (km/h)
  const kmPerDemeritPoint = 5;// Every 5 km/h above the limit adds 1 demerit point

  // If the car speed is below the limit
  if (speed < speedLimit) {
    console.log("Ok");// Driver is safe
  } else {
    // Calculate how much the driver has exceeded the limit
    const excessSpeed = speed - speedLimit;

    // Calculate demerit points (floor ensures whole number)
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    // Check if the demerit points are within the allowed threshold
    if (demeritPoints <= 12) {
      console.log("Points:", demeritPoints); // Show number of points
    } else {
      console.log("License suspended");// More than 12 points → license suspended
    }
  }
}

speedDetector(80);
