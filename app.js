var dictionary = ["apple", "ball", "cat", "dog", "pakistan", "banana", "fahad"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

var inputs = [];


for(i = 0; i <=letters.length; i++){
    var randomLetter = Math.floor(Math.random()* 26);
    document.getElementById("letter").innerText += letters[randomLetter];
    

}