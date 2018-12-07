
$(document).ready(function() {

    var score;
    var seconds1 = 5;
    
    function getRadioVal(form, name) {
        var ans;
        // get list of radio buttons with specified name
        var radios = form.elements[name];
        
        // loop through list of radio buttons
        for (var i=0; i< radios.length;  i++) {
            if ( radios[i].checked ) { // radio checked?
                ans = radios[i].value; // if so, hold its value in val
                break; // and break out of for loop
            }
        }
        console.log(ans);
        return ans; // return value of checked radio or undefined if none checked
        
    }
    
    ///////////  TIMER # 1
    function startTime1(){
        intervalId1 = setInterval(decrement1, 1000);
        clockRunning = true;
      }
      
    function decrement1(){
        $('.clock_display').text('Time remaining:   '+ seconds1);
        seconds1--;
    
        if (seconds1 == -1){
            stopTime1();
            $('#questionForm').empty();
            $('.clock_display').text("Game Over - Time is UP!");
        }
    }
    
    function stopTime1(){
        clearTimeout(intervalId1);
        clockRunning = false;
        seconds1 = 5;
    }
    

    document.getElementById('questionForm').onsubmit = function() {
        stopTime1()
        event.preventDefault()
        // this (keyword) refers to form to which onsubmit attached
        // 'one' is name of radio button group
        var question1 = getRadioVal(this, 'one');
        var question2 = getRadioVal(this, 'two');
        var question3 = getRadioVal(this, 'three');
        
        score = parseInt(question1) + parseInt(question2) + parseInt(question3);
        $('#score').text("Your final score is: " + score);
        
    }

    startTime1();

});

