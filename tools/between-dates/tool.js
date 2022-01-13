
// Tool Javascript

window.addEventListener('load', function() {
    window.addEventListener('keyup', function(event) {
        if (event.key == "Enter") generate();
    });
    ['change', 'paste', 'keyup'].forEach((type) => {
        _id('dateA').addEventListener(type, getResult);
        _id('dateB').addEventListener(type, getResult);
    });
    [_id('secs'), _id('mins'), _id('hours'), _id('days'), _id('weeks'), _id('months'), _id('years')].forEach((el) => {
        el.addEventListener('click', (event) => {
            copyText(el.innerHTML);
        });
    });
    _id('copy').addEventListener('click', function(event) {
        copyText(_id('result').innerHTML);
    });
    _id('share').addEventListener('click', function(event) {
        changeUrl(`?a=${window.shareA}&b=${window.shareB}`, true);
        copyText(window.location.href);
    });
    if (qs_param('a') && qs_param('b')) {
        let a = qs_param('a');
        let b = qs_param('b');
        const getDate  = function(source) {
            let timestamp = (parseInt(source)*1000)-(window.localTimeOffset*60*1000);
            source = new Date(timestamp).toISOString().slice(0,16);
            return source;
        }
        if (a == 'now') a = _id('dateNowA').classList.add('selected');
        else a = getDate(a);
        if (b == 'now') b = _id('dateNowA').classList.add('selected');
        else b = getDate(b);
        _id('dateA').value = a;
        _id('dateB').value = b;
    }
    setInterval(() => {
        getResult();
    }, 100);
});

var shareA = 'now';
var shareB = 'now';
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
        _id('copy').disabled = true;
        _id('share').disabled = true;
        return;
    }
    _id('copy').disabled = false;
    _id('share').disabled = false;
    let unixDateA = (new Date(_id('dateA').value).getTime()/1000);
    let unixDateB = (new Date(_id('dateB').value).getTime()/1000);
    window.shareA = unixDateA;
    window.shareB = unixDateB;
    if (dateANow) {
        unixDateA = (Date.now()/1000);
        window.shareA = 'now';
    }
    if (dateBNow) {
        unixDateB = (Date.now()/1000);
        window.shareB = 'now';
    }
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
    if (d >= 30.4366) {
        d = d/30.4366;
        mo = Math.floor(d);
        d = Math.round((30.4366*(d-mo)));
    }
    if (mo >= 12) {
        mo = mo/12;
        y = Math.floor(mo);
        mo = Math.round((12*(mo-y)));
    }
    let cumulative = [];
    cumulative.push(`${s} secs`);
    if (m > 0) cumulative.push(`${m} mins`);
    if (h > 0) cumulative.push(`${h} hours`);
    if (d > 0) cumulative.push(`${d} days`);
    if (mo > 0) cumulative.push(`${mo} months`);
    if (y > 0) cumulative.push(`${numberWithCommas(y)} years`);
    cumulative = cumulative.reverse();
    cumulative = cumulative.join(', ');
    _id('result').innerHTML = `${cumulative} apart`;
    // Set totals
    _id('secs').innerHTML = numberWithCommas(Math.floor(secondsDifference));
    _id('mins').innerHTML = numberWithCommas(Math.floor(secondsDifference/60));
    _id('hours').innerHTML = numberWithCommas(Math.floor(secondsDifference/60/60));
    _id('days').innerHTML = numberWithCommas(Math.floor(secondsDifference/60/60/24));
    _id('weeks').innerHTML = numberWithCommas(Math.floor(secondsDifference/60/60/24/7));
    _id('months').innerHTML = numberWithCommas(roundSmart(secondsDifference/60/60/24/30.4366, 1));
    _id('years').innerHTML = numberWithCommas(roundSmart(secondsDifference/60/60/24/365.2422, 2));
}