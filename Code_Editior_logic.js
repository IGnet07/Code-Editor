// Main Function to get the code of HTML CSS and JavaScript and provide the output of it
function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode  = document.getElementById("css-code").value;
    let jsCode   = document.getElementById("js-code").value;
    let output   = document.getElementById("output");
    
    // main Part which help to Change the enter text into code 
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}
