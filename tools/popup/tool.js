
// Tool Javascript

init.push(() => {
    let shareIds = ['url', 'screenX', 'screenY', 'width', 'height'];
    _id('go').addEventListener('click', openPopup);
    _id('share').addEventListener('click', function(event) {
        let qs = [];
        shareIds.forEach((id) => {
            if (_id(id).value != '')
                qs.push(`${id}=${encodeURIComponent(_id(id).value)}`);
        });
        changeUrl(`?${qs.join('&')}`, true);
        copyText(window.location.href);
    });
    shareIds.forEach((id) => {
        let tmp = qs_param(id);
        if (tmp) _id(id).value = tmp;
    });
    setInterval(() => {
        if (isValidUrl(_id('url').value))
            _id('go').disabled = false;
        else
            _id('go').disabled = true;
        _id('share').disabled = _id('go').disabled;
        if (window.popup == null || window.popup.closed) {
            _id('go').innerHTML = "Create popup";
        } else _id('go').innerHTML = "Close and recreate popup";
    }, 100);
});

var popup;
function openPopup() {
    if (window.popup == null || window.popup.closed) {
        // Nothing happens
    } else window.popup.close();
    let url = _id('url').value;
    let options = ['popup'];
    ['screenX', 'screenY', 'width', 'height'].forEach((id) => {
        if (_id(id).value != '') options.push(`${id}=${_id(id).value}`);
    });
    options = options.join(',');
    window.popup = window.open(url, "simplecyber.org Generated Popup", options);
    console.log(`Created popup with options: ${options}`);
}