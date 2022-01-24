
// Tool Javascript

init.push(() => {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('users').addEventListener(type, () => {
            setPageVar('users', _id('users').value);
        });
        _id('messages').addEventListener(type, () => {
            setPageVar('messages', _id('messages').value);
        });
    });
    _id('go').addEventListener('click', generate);
    _id('users').value = getPageVar('users');
    _id('messages').value = getPageVar('messages');
    setInterval(() => {
        if (_id('users').value && _id('messages').value)
            _id('go').disabled = false;
        else
            _id('go').disabled = true;
    }, 100);

    generate();
});

function generate() {
    let workingCont = _id('working');
    workingCont.insertAdjacentHTML("beforeend", `
        <canvas id="canvas0" width=350 height=500></canvas>
    `);
    let canvas = _id('canvas0');
    let draw = canvas.getContext('2d');
    draw.fillStyle = '#18181B';
    draw.fillRect(0, 0, canvas.width, canvas.height);
    draw.fillStyle = 'rgba(255, 255, 255, 0.6)';
    draw.font = '15px Inter, Sora, Segoe UI';
    draw.fillText("12:10", 10, 50);
}