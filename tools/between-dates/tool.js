
// Tool Javascript

window.addEventListener('load', function() {
    window.addEventListener('keyup', function(event) {
        if (event.key == "Enter") generate();
    });
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('dateA').addEventListener(type, getResult);
        _id('dateB').addEventListener(type, getResult);
    });
    setInterval(() => {
        getResult();
    }, 500);
});

function getResult() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    let dateNow = now.toISOString().slice(0,16);
    let dateA = _id('dateA').value;
    let dateB = _id('dateB').value;
    let dateANow = false;
    let dateBNow = false;
    if (_id('dateNowA').classList.contains('selected')) {
        _id('dateA').value = dateNow;
        _id('dateA').disabled = true;
        dateANow = true;
    } else _id('dateA').disabled = false;
    if (_id('dateNowB').classList.contains('selected')) {
        _id('dateB').value = dateNow;
        _id('dateB').disabled = true;
        dateBNow = true;
    } else _id('dateB').disabled = false;
    if (dateA == '' || dateB == '') {
        _id('result').innerHTML == 'Unknown';
        return;
    }
    let unixDateA = (new Date(_id('dateA').value).getTime()/1000);
    let unixDateB = (new Date(_id('dateB').value).getTime()/1000);
    if (dateANow) unixDateA = (Date.now()/1000);
    if (dateBNow) unixDateB = (Date.now()/1000);
    let secondsDifference = 0;
    if (unixDateA > unixDateB)
        secondsDifference = (unixDateA-unixDateB);
    else
        secondsDifference = (unixDateB-unixDateA);
    // Set cumulative
    let s = Math.floor(secondsDifference);
    let [m, h, d, mo, y] = [0, 0, 0, 0, 0];
    if (s >= 60) {
        s = s/60;
        m = Math.floor(s);
        s = Math.round((60*(s-m)));
    }
    if (m >= 60) {
        m = m/60;
        h = Math.floor(m);
        m = Math.round((60*(m-h)));
    }
    if (h >= 24) {
        h = h/24;
        d = Math.floor(h);
        h = Math.round((24*(h-d)));
    }
    if (d >= 365) {
        d = d/365;
        y = Math.floor(d);
        d = Math.round((365*(d-y)));
    }
    let cumulative = [];
    cumulative.push(`${s} secs`);
    if (m > 0) cumulative.push(`${m} mins`);
    if (h > 0) cumulative.push(`${h} hours`);
    if (d > 0) cumulative.push(`${d} days`);
    if (y > 0) cumulative.push(`${y} years`);
    cumulative = cumulative.reverse();
    cumulative = cumulative.join(', ');
    _id('result').innerHTML = `${cumulative} apart`;
    // Set totals
    _id('secs').innerHTML = Math.floor(secondsDifference);
    _id('mins').innerHTML = Math.floor(secondsDifference/60);
    _id('hours').innerHTML = Math.floor(secondsDifference/60/60);
    _id('days').innerHTML = Math.floor(secondsDifference/60/60/24);
    _id('weeks').innerHTML = Math.floor(secondsDifference/60/60/24/7);
    _id('months').innerHTML = Math.floor(secondsDifference/60/60/24/30.4366);
    _id('years').innerHTML = Math.floor(secondsDifference/60/60/24/365.2422);
}