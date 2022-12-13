function trigger() {
    var frame = document.getElementById('myFrame').contentDocument;

    alert(frame.body.textContent);
}