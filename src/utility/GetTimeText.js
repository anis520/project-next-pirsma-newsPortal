export function getTimeOfDay() {
  // Create a new Date object using the provided timestamp
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);

  // Get the current hour from the Date object
  const currentHour = currentDate.getHours();

  // Define thresholds for morning, afternoon, evening, and night
  const MORNING_START = 5;
  const AFTERNOON_START = 12;
  const EVENING_START = 17;
  const NIGHT_START = 20;

  // Determine the time of the day
  let timeOfDay;

  if (currentHour >= MORNING_START && currentHour < AFTERNOON_START) {
    timeOfDay = "Morning";
  } else if (currentHour >= AFTERNOON_START && currentHour < EVENING_START) {
    timeOfDay = "Afternoon";
  } else if (currentHour >= EVENING_START && currentHour < NIGHT_START) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return timeOfDay;
}

// Example usage:
const currentTimeStamp = Date.now();
console.log(`It's currently ${getTimeOfDay(currentTimeStamp)}.`);
