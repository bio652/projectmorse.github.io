const morse = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
  'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
  'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..'
};
const morseAlphabet = {
    '/':' ',
    '.-': 'A',    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '1488': 'пасхалко',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z'
};

let isMorse = false;

toggleButton.addEventListener('click', () => {
    isMorse = !isMorse;
    if(isMorse == true){
    document.getElementById('output2').textContent = "to english";
    }else{
        document.getElementById('output2').textContent = "to morse";
    }
});


function getText() {
    const a = document.getElementById('textInput').value;
    if(isMorse === true){
        detransl(a);
    }
    else{
        transl(a);
    }
}

function copacity(a){
var element = document.getElementById("output");
if(a ===""||a===""){
    element.style.opacity = "0"
}else{
    element.style.opacity = "0.7"
}

}

function transl(a) {
    let encodedMessage = "";
    for(let i = 0;i<a.length;i++){
        let char = a[i].toLowerCase();
        if (morse[char]) {
            encodedMessage += morse[char] + " ";
        } 
        else if (char === " ") {
            encodedMessage += " / ";
        }
    }
    console.log(encodedMessage);
    document.getElementById('output').textContent = encodedMessage;
    copacity(a);
    return encodedMessage;
}

function detransl(a) {
    let encodedMessage = a.split(" ").map(code => morseAlphabet[code] || "").join("").toUpperCase();
    document.getElementById('output').textContent = encodedMessage;
    copacity(a);
}