var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;
var time = document.getElementById('time');
var intervalId;
var startButton = document.getElementById('startButton');

function start(){
    clearInterval(intervalId);
     intervalId = setInterval(function(){
            seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
        }
        if(minutes === 60){
            hours++;
            minutes  = 0;
        }
        if(hours === 24){
            days++;
            hours = 0;
        }

        var timer = [days.toString().padStart(2, '0'), hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')];
        time.innerHTML = timer.join(':');
        
        
    }, 1000)
    
    
}

function pause(){
    clearInterval(intervalId);
}

function reset(){
    clearInterval(intervalId);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    var timer = [days.toString().padStart(2, '0'), hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')];
        time.innerHTML = timer.join(':');
}



