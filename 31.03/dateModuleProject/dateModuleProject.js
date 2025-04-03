function getCurrentDate() {
    const currentDate = new Date(); // Create a new Date object with the current date and time
    const year = currentDate.getFullYear();  // Get the current year
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');// Get the current month (0-11, so we add 1)
    const day = String(currentDate.getDate()).padStart(2, '0');// Get the current day of the month
    return `${year}-${month}-${day}`;// Format the date as YYYY-MM-DD
}

function getCurrentTime(){
    const currentTime = new Date() 
    return currentTime.toLocaleTimeString()
}

console.log(getCurrentDate());
console.log(getCurrentTime())
