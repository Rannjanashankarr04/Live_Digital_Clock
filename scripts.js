function updateClock() {
    const now = new Date();
    
    // Format time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format date as Month Day, Year and Day of the week
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    document.querySelector('.time').textContent = timeString;
    document.querySelector('.date').textContent = dateString;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();