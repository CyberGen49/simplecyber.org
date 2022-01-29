
// Copy text to the clipboard
function copyText(value) {
    navigator.clipboard.writeText(value);
    console.log("Copied text to clipboard: ");
    console.log(value);
    showToast("Text copied to clipboard!", 'inventory', `\"${escapeHtml(value)}\"`);
}

// Shorthand function for *.getElementById()
function _id(id, ancestor = document) {
    return ancestor.getElementById(id);
}
// Shorthand function for *.getElementsByClassName()
function _class(name, ancestor = document) {
    return ancestor.getElementsByClassName(name);
}
// Shorthand function for *.getElementsByTagName()
function _tag(tag, ancestor = document) {
    return ancestor.getElementsByTagName(tag);
}
// Shorthand function for *.querySelectorAll()
function _qSelA(tag, ancestor = document) {
    return ancestor.querySelector(tag);
}

// Escapes HTML entities characters
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

// Add commas to a large number
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Rounds a number to no more than a set number of decimal places
// Passing a whole number, for example, will yield no decimal places
function roundSmart(number, decimalPlaces = 0) {
    const factorOfTen = Math.pow(10, decimalPlaces)
    return Math.round(number * factorOfTen) / factorOfTen
}

// Get a query string parameter from the URL
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

// Update the address bar without reloading the page
// When replace is disabled, the old URL is added to browser history
function changeUrl(url, replace = false) {
    if (replace)
        history.replaceState(null, 'URL Replacement', url);
    else
        history.pushState(null, 'URL Replacement', url);
}

// Redirect to another URL
function redirect(url, newTab = false) {
    if (newTab) window.open(url, '_blank');
    else window.location.href = url;
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
// If there are only two possible choices, handle things a little differently
function randInt(min, max) {
    if ((max-min) == 1)
        return ((Math.random() > 0.5) ? max : min);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Adds leading characters to a string to match a specified length
function addLeadingZeroes(string, newLength = 2, char = "0") {
    return string.toString().padStart(newLength, char);
}

// Checks if a string is a valid URL
function isValidUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

// Checks if a string is a valid hostname, excluding localhost
function isValidHostname(string) {
    return string.match(/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/) && !string.match(/^localhost$/);
}

// Checks if a string is a valid IPv4 or IPv6 address, excluding reserved ones
function isValidIp(string) {
    return string.match(/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/) && !string.match(/(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/) && !string.match(/^::1$/);
}

// Checks if a string is a valid email address
function isValidEmail(email) {
    let match = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (match) return true;
    else return false;
};

// Checks if a string is a valid Discord username#tag
function isValidDiscord(userAndTag) {
    let match = userAndTag.match(/^.{3,32}#[0-9]{4}$/);
    if (match) return true;
    else return false;
};

// Returns a consistently formatted string of the current path
function pagePath() {
    let split = window.location.pathname.split('/');
    let final = '';
    split.forEach((part) => {
        if (part !== '') final += `/${part}`;
    });
    if (final === '') final = '/';
    return final;
}

// Update the attributes of <a> elements
function updateAnchors() {
    let anchors = document.getElementsByTagName('a');
    for (i = 0; i < anchors.length; i++) {
        let el = anchors[i];
        if (!el.hasAttribute('href')) continue;
        el.rel = 'noreferrer';
        let regex = new RegExp(`^${window.location.origin}.*$`, 'g')
        let title = '';
        if (el.hasAttribute('title')) title = `${el.title}\n\n`;
        if (!el.href.match(regex)) {
            el.target = '_blank';
            el.title = `${title}Click to open this link in a new tab:\n${el.href}`;
        } else {
            if (el.hasAttribute('download'))
                el.title = `${title}Click to download this file:\n${el.href}`;
            else
                el.title = `${title}${el.href}`;
        }
    }
    console.log(`Updated ${anchors.length} <a> element(s)`);
}

// Handle scrolling
var lastScrollPos = 0;
function checkScroll() {
    return; // We aren't doing this anymore
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

// Show and hide the main menu
var mainMenuTimeout = {};
function showMenu(data, anchorElement = null) {
    let menuId = `menu-${Date.now()}`;
    clearTimeout(window.mainMenuTimeout[menuId]);
    _id('body').insertAdjacentHTML('beforeend', `
        <div id="${menuId}" class="menuArea">
            <div id="${menuId}-inner" class="menu acrylic"></div>
        </div>
    `);
    let i = 0;
    data.forEach((item) => {
        switch (item.type) {
            case 'header':
                _id(`${menuId}-inner`).insertAdjacentHTML('beforeend', `
                    <div class="sectionHead">${item.text}</div>
                `);
                break;
            case 'item':
                _id(`${menuId}-inner`).insertAdjacentHTML('beforeend', `
                    <a id="${menuId}-inner-${i}"
                        class="item row no-gutters ${(item.disabled) ? 'disabled':''}"
                        ${(!item.disabled && !item.openMenu) ? `href="${item.href}"`:''}
                        title="${item.text}${(item.desc) ? `\n${item.desc}`:''}">
                        <div class="icon col-auto material-icons">${item.icon}</div>
                        <div class="name col">${item.text}</div>
                    </a>
                `);
                if (!item.disabled) {
                    _id(`${menuId}-inner-${i}`).addEventListener('click', () => {
                        window.navigator.vibrate(2);
                        hideMenu(menuId);
                        if (item.openMenu) {
                            let sections = item.openMenu.split(',');
                            let newMenu = [];
                            sections.forEach((section) => {
                                newMenu = newMenu.concat(window.menuStore[section])
                            });
                            let menu = [];
                            if (item.openMenuRef) {
                                menu = [{
                                    type: 'item',
                                    text: 'Back...',
                                    icon: 'arrow_back',
                                    openMenu: item.openMenuRef
                                }].concat(newMenu);
                            } else menu = newMenu;
                            showMenu(menu);
                        }
                    });
                }
                break;
        }
        i++;
    });
    updateAnchors()
    _id(menuId).addEventListener('click', () => {
        hideMenu(menuId);
    });
    window.mainMenuTimeout[menuId] = setTimeout(() => {
        _id(`${menuId}-inner`).style.maxHeight = 'calc(100% - 75px)';
        _id(`${menuId}-inner`).style.opacity = 1;
    }, 50);
    return menuId;
}
function hideMenu(menuId) {
    clearTimeout(window.mainMenuTimeout[menuId]);
    _id(`${menuId}-inner`).style.opacity = '';
    _id(`${menuId}-inner`).style.maxHeight = '';
    window.mainMenuTimeout[menuId] = setTimeout(() => {
        _id(menuId).remove();
    }, 300);
}

function showMainMenu() {
    let data = [];
    data = data.concat(window.menuStore.main);
    data = data.concat(window.menuStore.extras);
    showMenu(data);
}

// Make custom form elements functional
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

// Show and hide toast notifications
function showToast(text, icon = 'info', desc = null, danger = false, duration = 3) {
    let id = `toast-${Date.now()}`;
    if (desc !== null) {
        if (Array.isArray(desc))
            desc.forEach((part) => {
                text += `<div class="desc">${part}</div>`;
            });
        else
            text += `<div class="desc">${desc}</div>`;
    }
    if (duration == 0) text += `<div class="desc">Click here to dismiss.</div>`;
    _id('toastContainer').insertAdjacentHTML('afterbegin', `
        <div id="${id}" class="toast acrylic ${(danger ? 'danger' : '')}">
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
    if (duration > 0) {
        setTimeout(() => {
            hideToast(id);
        }, (duration*1000));
    }
}
function hideToast(id) {
    _id(id).style.opacity = 0;
    setTimeout(() => {
        _id(id).remove();
    }, 200);
}

// Handle getting and setting per-page local storage
function setPageVar(name, value) {
    let data = getPageVars();
    if (data === null) data = {};
    data[name] = value;
    window.localStorage.setItem(window.location.pathname, JSON.stringify(data));
}
function delPageVar(name) {
    let data = getPageVars();
    if (data === null) data = {};
    delete data[name];
    if (Object.keys(data).length === 0)
        window.localStorage.removeItem(window.location.pathname);
    else
        window.localStorage.setItem(window.location.pathname, JSON.stringify(data));
}
function getPageVar(name) {
    let data = window.localStorage.getItem(window.location.pathname);
    if (data === null) return null;
    data = JSON.parse(data);
    if (!data[name]) return null;
    else return data[name];
}
function getPageVars() {
    let data = window.localStorage.getItem(window.location.pathname);
    if (data === null) return {};
    else return JSON.parse(data);
}

// Fetch a URL and handle the response
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
var fetchUrl_defaultHandlers = {
    response: (response) => {
        if (response.ok) return response.text();
        else throw new Error(`Fetch failed with status code ${response.status}`);
    },
    data: (data) => {},
    error: (error) => {
        console.error(error);
    }
};
async function fetchUrl(url, handlers = window.fetchUrl_defaultHandlers, options = {}){
    handlers = {
        ...window.fetchUrl_defaultHandlers,
        ...handlers
    };
    console.log(handlers);
    await fetch(url, options)
        .then(handlers.response)
        .then(handlers.data)
        .catch(handlers.error);
}

// Fetch a URL and return the response
// null will be returned if there's an error
// Use await with this function
async function fetchTextSimple(url, options = {}) {
    return fetch(url, options).then((response) => {
        if (response.ok) return response.text();
        else throw new Error();
    }).then((data) => {
        return data;
    }).catch((error) => {
        return false;
    });
}
async function fetchJSONSimple(url, options = {}) {
    return fetch(url, options).then((response) => {
        if (response.ok) return response.json();
        else throw new Error();
    }).then((data) => {
        return data;
    }).catch((error) => {
        return false;
    });
}

// Post JSON data to a URL and return the response as an object
var postJSONSimple_defaultOptions = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{}'
};
async function postJSONSimple(url, object = {}, options = window.postJSONSimple_defaultOptions, returnDataOnError = false) {
    options = {
        ...window.postJSONSimple_defaultOptions,
        ...options
    };
    options.body = JSON.stringify(object);
    return fetch(url, options).then((response) => {
        if (response.ok) return response.json();
        else {
            if (returnDataOnError) {
                let json = response.json();
                json._httpResponseCode = response.status;
                return json;
            } else
                throw new Error();
        }
    }).then((data) => {
        return data;
    }).catch((error) => {
        return false;
    });
}

// Overwrite setInterval
var setIntervalVanilla = setInterval;
var globalIntervals = [];
setInterval = (func, delay) => {
    let interval = setIntervalVanilla(func, delay);
    window.globalIntervals.push(interval);
    console.log(`Started an interval to run every ${delay}ms`);
    return interval;
};
function clearIntervals() {
    let count = window.globalIntervals.length;
    window.globalIntervals.forEach((interval) => {
        clearInterval(interval);
    });
    window.globalIntervals = [];
    console.log(`Cleared ${count} global interval(s)`);
}

// Create the init array and add the main onload code to it
var init = [];
init.push(async () => {
    document.getElementById("body").classList.remove("no-transitions");
    checkScroll();
    // Show toast if on IE
    if (!!document.documentMode) {
        showToast("You're using Internet Explorer", 'error_outline', "Internet Explorer is becoming increasingly out of date and more dangerous to use. Please consider switching to a modern browser ASAP.", true, 0);
    }
    // Run the checkScroll function on scroll
    document.addEventListener('scroll', function(e) {
        checkScroll();
    });
    // Load menu data
    let menuDataEl = document.querySelector('[data-menu-index]');
    window.menuStore = JSON.parse(atob(menuDataEl.dataset.menuIndex));
    menuDataEl.remove();
    // Make the menu button clickable
    _id('mainMenuButton').addEventListener('click', function() {
        this.blur();
        showMainMenu();
    });
    prepareForms();
    // Fetch content for Markdown file elements
    let markdownEls = document.querySelectorAll('[data-content-markdown]');
    for (i = 0; i < markdownEls.length; i++) {
        let el = markdownEls[i];
        el.innerHTML = marked.parse(
            await fetchTextSimple(el.dataset.contentMarkdown, {mode: 'no-cors'})
        );
        el.style.opacity = 1;
    }
    // Update all a elements with rel=noopener, and target=_blank for absolute links
    updateAnchors();
    // Make all img elements clickable
    let images = document.getElementsByTagName('img');
    for (i = 0; i < images.length; i++) {
        let el = images[i];
        let title = '';
        if (el.hasAttribute('alt')) title = `${el.alt}\n\n`
        el.title += `Click to view this image in a new tab:\n${el.src}`;
        el.addEventListener('click', () => {
            redirect(el.src, true);
        });
    }
    // Make all button elements vibrate
    let buttons = document.getElementsByTagName('button');
    for (i = 0; i < buttons.length; i++) {
        let el = buttons[i];
        el.addEventListener('click', () => {
            window.navigator.vibrate(2);
        });
    }
    // Load Disqus embed if needed
    if (_id('disqus_thread')) {
        // Set Disqus variables
        window.disqus_config = function () {
            this.page.url = `https://simplecyber.org${pagePath()}`;
            this.page.identifier = window.disqus_id;
        };
        // Load the embed
        let d = document;
        let s = d.createElement('script');
        s.src = 'https://simplecyber-org.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        console.log(`Loading Disqus with thread ID '${disqus_id}'`);
    }
    // Restore scroll position
    let scrollSave = getPageVar('scrollSave');
    if (scrollSave) {
        if ((Date.now()-scrollSave.time) < (1000*10))
            window.scrollTo(0, scrollSave.pos);
        delPageVar('scrollSave');
    }
});
// On load
window.addEventListener('load', () => {
    // Loop through and run all init functions
    window.init.forEach((func) => {
        func();
    });
    console.log("Page loaded!");
});

// Stop scroll position restoration
if ('scrollRestoration' in history) {
    // Back off, browser, I got this...
    history.scrollRestoration = 'manual';
}

// On error
window.addEventListener('error', (error) => {
    showToast(`Error - ${error.filename.split('/').reverse()[0]}:${error.lineno}`, 'error_outline', [`${error.message}`, 'See the DevTools console for details.'], true, 0);
});

// Before unload
var showClosePrompt = false;
window.addEventListener('beforeunload', () => {
    setPageVar('scrollSave', {
        pos: window.scrollY,
        time: Date.now()
    });
});

var humanTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
var localTimeOffset = new Date().getTimezoneOffset();