
// Tool Javascript

init.push(() => {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('text').addEventListener(type, textUpdated);
        _id('base64').addEventListener(type, base64Updated);
    });
    _id('copyText').addEventListener('click', () => {
        copyText(_id('text').value);
    });
    _id('copyBase64').addEventListener('click', () => {
        copyText(_id('base64').value);
    });
    setInterval(() => {
        if (_id('text').value == '' || _id('text').disabled)
            _id('copyText').disabled = true;
        else _id('copyText').disabled = false;
        if (_id('base64').value == '') _id('copyBase64').disabled = true;
        else _id('copyBase64').disabled = false;
    }, 250);
});

function textUpdated() {
    let value = _id('text').value;
    _id('base64').value = btoa(value);
}

function base64Updated() {
    let value = _id('base64').value;
    try {
        _id('text').value = atob(value);
        _id('text').disabled = false;
    } catch (error) {
        _id('text').value = "Invalid base64 input!";
        _id('text').disabled = true;
    }
}