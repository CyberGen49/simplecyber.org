
// Tool Javascript

init.push(() => {
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('timestamp').addEventListener(type, timestampUpdated);
        _id('date').addEventListener(type, dateUpdated);
    });
    timestampUpdated();
    let lastType = '';
    setInterval(() => {
        if (lastType != window.formInput.timestampType) {
            lastType = window.formInput.timestampType;
            timestampUpdated();
        }
    }, 100);
});

function timestampUpdated() {
    let timestamp = parseInt(_id('timestamp').value);
    if (window.formInput.timestampType == 's') timestamp *= 1000;
    timestamp -= (window.localTimeOffset*60*1000);
    let date = new Date(timestamp);
    _id('date').value = date.toISOString().slice(0,16);
}

function dateUpdated() {
    let timestamp = new Date(_id('date').value).getTime();
    timestamp += window.localTimeOffset;
    if (window.formInput.timestampType == 'ms')
        _id('timestamp').value = timestamp;
    else
        _id('timestamp').value = Math.round(timestamp/1000);
}