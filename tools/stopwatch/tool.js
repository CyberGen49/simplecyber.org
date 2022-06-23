
// Tool Javascript

init.push(() => {
    _id('go').addEventListener('click', startStop);
    _id('reset').addEventListener('click', resetTime);
    _id('lap').addEventListener('click', lapTime);
});

var startTime = 0;
var stopTime = 0;
var lapCount = 1;
var lapStart = 0;
var lapFormatted = '';
var running = false;
var updateInterval;
function startStop() {
    if (window.running) {
        clearInterval(window.updateInterval);
        window.stopTime = Date.now();
        window.running = false;
        _id('go').innerHTML = "Continue";
        _id('reset').disabled = false;
        _id('lap').disabled = true;
    } else {
        if (window.startTime == 0) {
            window.startTime = Date.now();
            window.lapStart = window.startTime;
        } else {
            let offset = (Date.now()-window.stopTime);
            window.startTime += offset;
            window.lapStart += offset;
        }
        window.updateInterval = setInterval(() => {
            const formatMs = (inputMs) => {
                let s = inputMs;
                let ms = s % 1000;
                s = (s - ms) / 1000;
                let secs = s % 60;
                s = (s - secs) / 60;
                let mins = s % 60;
                let hrs = (s - mins) / 60;
                return `${addLeadingZeroes(hrs, 2)}:${addLeadingZeroes(mins, 2)}:${addLeadingZeroes(secs, 2)}.${addLeadingZeroes(ms, 3)}`;
            };
            _id('result').innerHTML = formatMs(Date.now()-window.startTime);
            window.lapFormatted = formatMs(Date.now()-window.lapStart);
            _id('lapTime').innerHTML = `Lap ${window.lapCount}: ${window.lapFormatted}`;
        }, 1);
        window.running = true;
        _id('go').innerHTML = "Suspend";
        _id('reset').disabled = true;
        _id('lap').disabled = false;
    }
}

function resetTime() {
    _id('reset').disabled = true;
    _id('result').innerHTML = `00:00:00.000`;
    _id('go').innerHTML = "Start";
    _id('lapTime').classList.add('hidden');
    _id('lapsCont').classList.add('hidden');
    _id('laps').innerHTML = '';
    window.startTime = 0;
    window.lapStart = 0;
    window.lapCount = 1;
}

function lapTime() {
    _id('laps').insertAdjacentHTML('afterbegin', `
        <div class="row no-gutters lap">
            <div class="col-sm-2 lapNum">Lap ${window.lapCount}</div>
            <div class="col-sm lapTimestamp">${window.lapFormatted}</div>
        </div>
    `);
    window.lapCount++;
    window.lapStart = Date.now();
    _id('lapTime').classList.remove('hidden');
    _id('lapsCont').classList.remove('hidden');
}