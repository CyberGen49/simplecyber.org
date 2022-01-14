
// Copies the specified text to the clipboard
function copyText(value) {
    navigator.clipboard.writeText(value);
    console.log("Copied text to clipboard: ");
    console.log(value);
    showToast(`
        Text copied to clipboard!
        <div class="desc">\"${escapeHtml(value)}\"</div>
    `, 'inventory');
}

// Shorthand function for document.getElementById()
function _id(id) {
    return document.getElementById(id);
}

// Escapes HTML-sensitive characters
function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "\n": '<br>',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Count the number of words in a string
function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," "); //2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function(str){return str!="";}).length;
    //return s.split(' ').filter(String).length; - this can also be used
}

// Return a number with comma separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Rounds a number to a certain number of decimal places
function roundSmart(number, decimalPlaces = 0) {
    const factorOfTen = Math.pow(10, decimalPlaces)
    return Math.round(number * factorOfTen) / factorOfTen
}

// Get a query string parameter
function qs_param(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    try {
        return decodeURIComponent(results[2].replace(/\+/g, '%20'));
    } catch {
        console.log(`Failed to decode "${results[2]}"`);
        return null;
    }
}

// Update the address bar
function changeUrl(url, replace = false) {
    if (replace)
        history.replaceState(null, 'URL Replacement', url);
    else
        history.pushState(null, 'URL Replacement', url);
}

// Shuffles an array
function array_shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
  
    return array;
}

// Returns a random integer between min (inclusive) and max (exclusive)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Handle scrolling
var lastScrollPos = 0;
function checkScroll() {
    return;
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
        hideMainMenu();
    }
    window.lastScrollPos = scrollPos;
}

var mainMenuTimeout;
function showMainMenu() {
    clearTimeout(window.mainMenuTimeout);
    _id('mainMenuHitArea').style.display = 'block';
    window.mainMenuTimeout = setTimeout(() => {
        _id('mainMenu').style.transition = '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        _id('mainMenu').style.left = '0px';
        _id('mainMenu').style.opacity = 1;
    }, 50);
}
function hideMainMenu() {
    _id('mainMenu').style.left = '';
    _id('mainMenu').style.opacity = '';
    window.mainMenuTimeout = setTimeout(() => {
        _id('mainMenuHitArea').style.display = '';
        _id('mainMenu').style.transition = '';
    }, 300);
}

var formInput = {};
function prepareForms() {
    let singleSels = document.getElementsByClassName('form singleSel');
    let multiSels = document.getElementsByClassName('form multiSel');
    let buttons = document.getElementsByClassName('form button');
    const addFormEvents = function(type, item, items, key) {
        item.addEventListener('click', function() {
            this.blur();
            if (item.classList.contains('disabled')) return;
            if (type == 'single') {
                if (item.classList.contains('selected')) return;
                for (k = 0; k < items.length; k++) {
                    items[k].classList.remove('selected');
                }
                item.classList.add('selected');
                window.formInput[key] = item.innerHTML;
                if (item.dataset.value) window.formInput[key] = item.dataset.value;
            }
            if (type == 'multi') {
                let select = true;
                if (item.classList.contains('selected')) {
                    item.classList.remove('selected');
                    select = false;
                } else {
                    item.classList.add('selected');
                }
                let value = item.innerHTML;
                if (item.dataset.value) value = item.dataset.value;
                if (select) window.formInput[key].push(value);
                else {
                    let index = window.formInput[key].indexOf(value);
                    window.formInput[key].splice(index, 1);
                }
            }
            if (key !== '') {
                console.log(`New value for input '${key}':`);
                console.log(window.formInput[key]);
            }
        });
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
            item.click();
        }
    }
    for (i = 0; i < singleSels.length; i++) {
        let section = singleSels[i];
        let items = section.querySelectorAll('.item');;
        window.formInput[section.dataset.name] = null;
        for (j = 0; j < items.length; j++) {
            let item = items[j];
            addFormEvents('single', item, items, section.dataset.name);
        }
    }
    for (i = 0; i < multiSels.length; i++) {
        let section = multiSels[i];
        let items = section.querySelectorAll('.item');;
        window.formInput[section.dataset.name] = [];
        for (j = 0; j < items.length; j++) {
            let item = items[j];
            addFormEvents('multi', item, items, section.dataset.name);
        }
    }
    for (i = 0; i < buttons.length; i++) {
        let section = buttons[i];
        let items = section.querySelectorAll('.btn');
        for (j = 0; j < items.length; j++) {
            let item = items[j];
            addFormEvents('btn', item, items, '');
        }
    }
}

// On load
window.addEventListener('load', () => {
    document.getElementById("body").classList.remove("no-transitions");
    console.log("Page loaded");
    checkScroll();
    // Run the checkScroll function on scroll
    document.addEventListener('scroll', function(e) {
        checkScroll();
    });
    // Make the menu button clickable
    _id('mainMenuButton').addEventListener('click', function() {
        this.blur();
        showMainMenu();
    });
    _id('mainMenuHitArea').addEventListener('click', function() {
        hideMainMenu();
    });
    // Make all menu items hide the menu when clicked
    let mainMenuItems = _id('mainMenu').getElementsByClassName('item');
    for (i = 0; i < mainMenuItems.length; i++) {
        let item = mainMenuItems[i];
        if (item.classList.contains('disabled')) continue;
        item.addEventListener('click', function() {
            hideMainMenu();
        });
    }
    // Prepare form elements
    prepareForms();
});

function showToast(text, icon = 'info', duration = 3) {
    let id = `toast-${Date.now()}`;
    if (duration == 0) text += `<div class="desc">Click here to dismiss</div>`;
    _id('toastContainer').insertAdjacentHTML('afterbegin', `
        <div id="${id}" class="toast acrylic">
            <div class="icon">${icon}</div>
            <div class="text">${text}</div>
        </div>
    `);
    setTimeout(() => {
        _id(id).addEventListener('click', () => {
            hideToast(id);
        });
        _id(id).style.opacity = 1;
    }, 50);
    setTimeout(() => {
        hideToast(id);
    }, (duration*1000));
}

function hideToast(id) {
    _id(id).style.opacity = 0;
    setTimeout(() => {
        _id(id).remove();
    }, 200);
}

var humanTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
var localTimeOffset = new Date().getTimezoneOffset();