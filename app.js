//Hamburger toggle 

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
});


///end






// Change progress bar percentage fill and number 
window.randomize = function () {

    var rand = Math.floor(Math.random() * 28);
    var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = (rand * 16.5) + ' 999';
    var el = document.querySelector('.progress-text');
    var from = $('.progress-text').data('progress');
    $('.progress-text').data('progress', rand);
    var start = new Date().getTime();
    setTimeout(function () {
        var now = (new Date().getTime()) - start;
        var progress = now / 200;
        result = rand > from ? Math.floor((rand - from) * progress + from) : Math.floor(from - (from - rand) * progress);
        el.innerHTML = progress < 1 ? result + '' : rand + '';
        if (progress < 28) setTimeout(arguments.callee, 10);
    }, 20);
}
setTimeout(window.randomize, 200);
$('.progress_rad').click(window.randomize);

///end





// Change time on reload
var timeSection = document.querySelector(".time")
var timesSelection = ["15:00", "9:00", "14:00", "10:30", "16:40"];
var randomFunc = timesSelection[Math.floor(Math.random() * timesSelection.length)];
timeSection.innerHTML = randomFunc
///end 




/// Change date on reload
var dateSection = document.querySelector(".date")
var dateWhen = document.querySelector(".date_when")
var dateSelection = [12, 13, 14];
var randomDateFunc = dateSelection[Math.floor(Math.random() * dateSelection.length)];
if (randomDateFunc === 13) {
    dateWhen.innerHTML = 'in 1 day,'
} else if (randomDateFunc === 14) {
    dateWhen.innerHTML = 'in 2 days,'
}
dateSection.innerHTML = randomDateFunc;

///end 






/// Change name on reload
var accountSection = document.querySelector(".account")
var accountSelection = ["Clinton Ackerman", "Kathleen Adler", "Jon Rixon", "Micheal Jones", "Barbara Adolphe"];
var randomAccountFunc = accountSelection[Math.floor(Math.random() * accountSelection.length)];
accountSection.innerHTML = randomAccountFunc;


///end 
