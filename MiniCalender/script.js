const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const daynum = document.getElementById("day-no")
const year = document.getElementById("year")

const date = new Date();
const month = date.getMonth();

monthName.innerText = date.toLocaleString("en",{
    month:"long"
})
dayName.innerText = date.toLocaleString("en",{
    weekday:"long"
})

daynum.innerText = date.getDate();
year.innerText = date.getFullYear();
