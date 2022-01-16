
// Tool Javascript

init.push(() => {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('input').addEventListener(type, onInputUpdate);
    });
    _id('copy').addEventListener('click', () => {
        copyText(_id('output').value);
    });
});

function onInputUpdate() {
    const el = _id('input');
    // Generate the result
    let arr = el.value.split('');
    let result = [];
    arr.forEach((char) => {
        if (Math.random() > 0.5) result.push(char.toLowerCase());
        else result.push(char.toUpperCase());
    });
    result = result.join('');
    // Show the result
    _id('output').value = result;
    // Enable/disable copy button
    _id('copy').disabled = false;
    if (el.value === '') _id('copy').disabled = true;
}