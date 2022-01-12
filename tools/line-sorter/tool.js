
// Tool Javascript

window.addEventListener('load', function() {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('input').addEventListener(type, onInputUpdate);
    });
    _id('copy').addEventListener('click', () => {
        copyText(_id('output').value);
    });
    window.lastSortOrder = '';
    setInterval(() => {
        if (window.formInput.order != window.lastSortOrder)
            onInputUpdate();
        window.lastSortOrder = window.formInput.order;
    }, 250);
});

function onInputUpdate() {
    const el = _id('input');
    // Generate the result
    let arr = el.value.split("\n");
    const localeCompareOptions = {
        'sensitivity': 'base',
        'ignorePunctuation': true,
        'numeric': true,
        'caseFirst': false,
    };
    switch (window.formInput.order) {
        case 'alphaUp':
            arr.sort((a, b) => {
                return a.localeCompare(b, undefined, localeCompareOptions);
            });
            break;
        case 'alphaDown':
            arr.sort((b, a) => {
                return a.localeCompare(b, undefined, localeCompareOptions);
            });
            break;
        case 'lengthUp':
            arr.sort((a, b) => {
                if (a.length > b.length) return 1;
                if (a.length < b.length) return -1;
                if (a.length == b.length) return 0;
            });
            break;
        case 'lengthDown':
            arr.sort((b, a) => {
                if (a.length > b.length) return 1;
                if (a.length < b.length) return -1;
                if (a.length == b.length) return 0;
            });
            break;
        case 'shuffle':
            array_shuffle(arr);
            break;
    }
    let result = arr.join("\n");
    // Show the result
    _id('output').value = result;
    // Enable/disable copy button
    _id('copy').disabled = false;
    if (el.value === '') _id('copy').disabled = true;
}