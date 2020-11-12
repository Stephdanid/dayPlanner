// displayed current day at the top of calendar
let showCalendar = document.querySelector("#currentDay");
dayjs().format()
console.log(dayjs());
showCalendar.textContent = dayjs()

let savebtn = document.querySelector[0](".saveBtn");

savebtn.addEventListener("submit", function(event) {
        console.log("I have been clicked")
    })
    // if (conditional based on time in library) {
    //     code to run change to past, present.future in styling
    // }
    // setattrbute to past
    // create grid of time blocks that would contain text areas
    // color code according to time
    //  on save we would save to local storage
    // on page load fill in time blocks on local storage