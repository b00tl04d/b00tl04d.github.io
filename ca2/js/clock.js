function startTime() {

    // Declared variables from the Date object
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // Ante Meridiem and Post Meridiem text 
    if (hr < 12) {
        meridiemText = "<span>AM</span>"
    }
    else {
        meridiemText = "<span>PM</span>";
    }

    // If midnight set to 12
    if (hr == 0) {
        hr = 12;
    }
    else {
        hr = hr;
    }

    // Set to 12-hour clock value in PM
    if (hr > 12) {
        hr -= 12;
    }
    else {
        hr = hr;
    }

    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + meridiemText;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var curWeekDay = days[date.getDay()];
    var curDay = date.getDate();
    var curMonth = months[date.getMonth()];
    var curYear = date.getFullYear();

    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;

    document.getElementById("date").innerHTML = date;
    
    setTimeout(function(){ startTime() }, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime();
