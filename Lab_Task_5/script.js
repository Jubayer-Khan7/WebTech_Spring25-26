function analyzeText() {
    let text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        document.getElementById("result").innerHTML = "Please enter some text!";
        return;
    }

    let charCount = text.length;

    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

  
    let reversedText = text.split("").reverse().join("");

    document.getElementById("result").innerHTML = 
        `<p><b>Total Characters:</b> ${charCount}</p>
        <p><b>Total Words:</b> ${wordCount}</p>
        <p><b>Reversed Text:</b> ${reversedText}</p>`;
}