
// Tool Javascript

window.addEventListener('load', function() {
    window.addEventListener('keyup', function(event) {
        if (event.key == "Enter") generate();
    });
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('min').addEventListener(type, function(event) {
            if (_id('min').value == '') _id('go').disabled = true;
            else _id('go').disabled = false;
        });
        _id('max').addEventListener(type, function(event) {
            if (_id('max').value == '') _id('go').disabled = true;
            else _id('go').disabled = false;
        });
    });
    _id('go').addEventListener('click', generate);
    _id('copy').addEventListener('click', function() {
        copyText(_id('result').innerHTML);
    });
    generate();
});

function generate() {
    let min = parseInt(_id('min').value);
    let max = parseInt(_id('max').value);
    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
        console.log("Swapped max and min");
    }
    if (max > Number.MAX_SAFE_INTEGER) {
        _id('result').innerHTML = "Too big";
        _id('copy').disabled = true;
        return;
    }
    if (min < 0) {
        _id('result').innerHTML = "Too small";
        _id('copy').disabled = true;
        return;
    }
    _id('copy').disabled = false;
    let i = 0;
    let displayInterval = setInterval(() => {
        if (i == 12) clearInterval(displayInterval);
        let num = randInt(min, max);
        if (_id('addCommas').classList.contains('selected'))
            _id('result').innerHTML = numberWithCommas(num);
        else
            _id('result').innerHTML = num;
        i++;
    }, 25);
}