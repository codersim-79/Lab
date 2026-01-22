let text = "Welcome to Programming Hub🌎";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);

    }

}
typing();
function goToLanguages() {
    window.location.href = "language.html";

}

function sending() {
    alert("Message sent successfully🎉");

}
fun