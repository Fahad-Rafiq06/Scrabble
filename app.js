var dictionary = ["apple", "ball", "cat", "dog", "pakistan", "banana", "fahad"];

var inputs = [];
var pushingValues;


function letter(val){
    console.log(val)
    document.getElementById("result").value += val;
    inputs.push(val);
    pushingValues = inputs.join('')
    console.log("inputs", pushingValues)
}
var score = 0;
function check(){
    for(var i = 0; i<=dictionary.length; i++){
        if(pushingValues == dictionary[i] ){
            document.getElementById("result").value = "";
            score++
            inputs = [];
            countdown();
            alert("The Word is Correct: "+pushingValues);
            // break;
        }
    //     else if(pushingValues !== dictionary[i] ){
    //     alert("The Word is incorrect");
    //     document.getElementById("result").value = "";
    //     console.log("incorrect ",pushingValues)
    //     break;
    // }
        
    }
    
}

// CountDown

function countdown() {
    var seconds = 60;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else if(seconds <= 0) {
        
        document.getElementById("winner").innerHTML = "<h1> Your Score is " + score + "</h1>"
      }
    //   if(counter == 0){
        
    //   }
    }
    tick();
  }
  countdown();


