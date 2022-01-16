
// Tool Javascript

init.push(() => {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('items').addEventListener(type, () => {
            window.items = [];
            let value = _id('items').value;
            let split = value.split("\n");
            split.forEach((item) => {
                if (item != '')
                    window.items.push(item.replace("\n", '').replace("\r", ''));
                console.log(item);
            });
            _id('go').disabled = false;
            if (window.items.length > 0) _id('go').disabled = false;
            else _id('go').disabled = true;
        });
    });
    _id('copy').addEventListener('click', () => {
        copyText(_id('result').innerHTML);
    });
    _id('go').addEventListener('click', choose);
});

var items = [];
function choose() {
    let item = window.items[randInt(0, (window.items.length-1))];
    _id('copy').disabled = true;
    _id('result').innerHTML = "Choosing...";
    _id('resultPlaceholder').classList.add('hidden');
    _id('resultContainer').classList.remove('hidden');
    setTimeout(() => {
        _id('result').innerHTML = item;
        _id('copy').disabled = false;
    }, 800);
}