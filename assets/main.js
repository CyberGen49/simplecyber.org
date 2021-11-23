
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

var lastScrollPos = 0;
function checkScroll() {
    let el = document.documentElement;
    let scrollPos = el.scrollTop;
    // Show the titlebar if we're less than 50px from the top, or if the
    // user scrolled up
    if (scrollPos < 50 || scrollPos < window.lastScrollPos) {
        _id('topbar').style.top = 0;
        _id('topbar').style.opacity = 1;
    // Otherwise, hide it
    } else {
        _id('topbar').style.top = '-55px';
        _id('topbar').style.opacity = 0;
    }
    window.lastScrollPos = scrollPos;
}

// On load
window.onload = function() {
    document.getElementById("body").classList.remove("no-transitions");
    console.log("Page loaded");
    checkScroll();
    document.addEventListener('scroll', function(e) {
        checkScroll();
    });
};