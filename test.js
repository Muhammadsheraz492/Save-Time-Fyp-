function getTimeElapsed(startDate) {
    const currentTime = new Date();
    const difference = currentTime - new Date(startDate);
  
    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLate: false };
    }
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds, isLate: true };
  }
  
  // Example usage:
  const startDate = '2025-06-25T12:00:00';
  const elapsedTime = getTimeElapsed(startDate);
  
  console.log(elapsedTime);