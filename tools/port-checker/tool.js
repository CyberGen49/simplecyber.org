
// Tool Javascript

init.push(() => {
    _id('useIp').addEventListener('click', () => {
        _id('host').value = _id('userIp').innerHTML;
    });
    _id('go').addEventListener('click', checkPort);
    _id('host').value = _id('userIp').innerHTML;
    setInterval(() => {
        let host = _id('host').value;
        let port = _id('port').value;
        if ((isValidIp(host) || isValidHostname(host)) && port > 0 && port < 65536 && !isNaN(port))
            _id('go').disabled = false;
        else
            _id('go').disabled = true;
    }, 100);
});

async function checkPort() {
    _id('result').style.color = '';
    _id('result').innerHTML = "Checking..."
    let host = _id('host').value;
    let port = _id('port').value;
    await fetch(`./server.php?host=${host}&port=${port}`).then((response) => {
        if (response.ok) return response.json();
        _id('result').innerHTML = "The request to the server failed! Try again."
    }).then((data) => {
        if (data.open) {
            _id('result').innerHTML = `Port ${port} on ${host} is open!`;
            _id('result').style.color = '#acffa6';
        } else {
            _id('result').innerHTML = `Port ${port} on ${host} is closed.`;
            _id('result').style.color = '#ffa6a6';
        }
    });
}