const button = document.getElementById("findButton");
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}

function getAnagramsOf(input) {
    let transInput = alphabetize(input)
    let pal = []
    console.log(transInput)
    for(let i = 0; i < palavras.length; i++) {
        words = palavras[i]

        if (transInput === alphabetize(words)) {
            pal.push(words)
        } 
    }

    for (let anag in pal) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode(pal[anag] + " "); 
        span.appendChild(textContent); 
        document.body.appendChild(span); 
    }

    if (pal.length === 0){
        alert(`Não tem anagrama para esta palavra`)
    }
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

