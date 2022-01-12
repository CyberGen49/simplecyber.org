
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

var lastNum = 1;
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
    let num = randInt(min, max);
    let localLastNum = window.lastNum;
    window.lastNum = num;
    let i = 0;
    let displayInterval = setInterval(() => {
        if (i == 12) clearInterval(displayInterval);
        //_id('result').innerHTML = (localLastNum+(Math.round((lastNum-num)/12)*(i+1)));
        _id('result').innerHTML = randInt(min, max);
        i++;
    }, 25);
}