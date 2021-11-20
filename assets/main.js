
// Copies the specified text to the clipboard
function copyText(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    console.log("Copied text to clipboard: "+value);
}

// Shorthand function for document.getElementById()
function _id(id) {
    return document.getElementById(id);
}

// On load
window.onload = function() {
    document.getElementById("body").classList.remove("no-transitions");
    console.log("Page loaded");
};