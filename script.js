// displayed current day at the top of calendar
let showCalendar = document.querySelector("#currentDay").textContent = "DateTime.local().toLocaleString()";






// create grid of time blocks that would contain text areas
// color code according to time
//  on save we would save to local storage
// on page load fill in time blocks on local storage