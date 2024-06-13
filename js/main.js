let countDownDate = new Date("Aug 1, 2025 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;

    document.querySelector(".hours").innerHTML = hours;

    document.querySelector(".minutes").innerHTML = minutes;

    document.querySelector(".seconds").innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);



// document.querySelectorAll('.linkkk').forEach(item => {
//     item.addEventListener('click', function() {
//         // Remove 'active' class from all nav items
//         document.querySelectorAll('.linkkk').forEach(nav => nav.classList.remove('active'));

//         // Add 'active' class to the clicked nav item
//         this.classList.add('active');
//     });
// });