var dictionary = ["apple", "ball", "cat", "dog", "pakistan", "banana", "fahad"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

var inputs = [];
var pushingValues;


// for(i = 0; i <=letters.length; i++){
//     var randomLetter = Math.floor(Math.random()* 26);
//     document.getElementById("letter").innerText += letters[randomLetter];
    

// }

function letter(val){
    console.log(val)
    document.getElementById("result").value += val;
    inputs.push(val);
    pushingValues = inputs.join('')
    console.log("inputs", pushingValues)
}

function check(){
    for(var i = 0; i<=dictionary.length; i++){
        if(pushingValues == dictionary[i] ){
            document.getElementById("result").value = "";
            inputs = []
            alert("The Word is Correct: "+pushingValues);
            // break;
        }
        // else{
        // alert("The Word is incorrect");
        // document.getElementById("result").value = ""
        // break;
    // }
        
    }
    
}
