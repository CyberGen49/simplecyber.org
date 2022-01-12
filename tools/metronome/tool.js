
// Tool Javascript

window.addEventListener('load', function() {
    const tempoOnChange = (event) => {
        let value = parseInt(_id('tempo').value);
        _id('playPause').disabled = false;
        _id('bigTempo').innerHTML = value;
        if (value > 1000 || value < 20 || isNaN(value)) {
            _id('playPause').disabled = true;
            _id('bigTempo').innerHTML = '--';
            if (metronomePlaying) metronomePlayPause();
        }
    }
    ['change', 'paste', 'keyup', 'input'].forEach((type) => {
        _id('tempo').addEventListener(type, tempoOnChange);
        _id('beatCount').addEventListener(type, function(event) {
            let value = parseInt(_id('beatCount').value);
            _id('playPause').disabled = false;
            if (value > 64 || value < 1 || isNaN(value)) {
                _id('playPause').disabled = true;
                if (metronomePlaying) metronomePlayPause();
                value = 4;
            }
            let html = '';
            for (i = 0; i < value; i++) {
                html += `<div class="circle"></div>`;
            }
            _id('beatIndicators').innerHTML = html;
        });
    });
    _id('playPause').addEventListener('click', function() {
        this.blur();
        if (this.disabled) return;
        metronomePlayPause();
    });
    _id('tapper').addEventListener('click', function(event) {
        tapperTapped();
        tempoOnChange();
    });
    window.addEventListener('keydown', function(event) {
        if (event.code == 'KeyT') {
            _id('tapper').click();
            _id('tapper').active = true;
        }
        if (event.code == 'Space' || event.code == 'KeyP') {
            event.preventDefault();
            _id('playPause').click();
        }
    });
    beatUp.volume = 0;
    beatDown.volume = 0;
    beatUp.play();
    beatDown.play();
});

var metronomePlaying = false;
var metronomeInterval = null;
var beatDown = new Audio('beat.wav');
var beatUp = new Audio('beatAccent.wav');
function metronomePlayPause() {
    if (window.metronomePlaying) {
        // Stop playing
        clearInterval(window.metronomeInterval);
        _id('playPause').innerHTML = 'play_arrow';
        window.metronomePlaying = false;
    } else {
        // Start playing
        let startTime = Date.now();
        let totalBeats = 1;
        let nextBeat = 0;
        let lastMspb = 0;
        let currentBeat = 1;
        beatUp.volume = 1;
        beatDown.volume = 1;
        window.metronomeInterval = setInterval(() => {
            let now = Date.now();
            let bpm = parseInt(_id('tempo').value);
            let mspb = (60000/bpm);
            if (lastMspb != mspb) {
                startTime = now;
                totalBeats = 1;
                nextBeat = 0;
                currentBeat = 1;
            }
            lastMspb = mspb;
            let bpb = parseInt(_id('beatCount').value);
            let localCurrentBeat = currentBeat;
            let circles = _id('beatIndicators').getElementsByClassName('circle');
            if ((now-nextBeat) > 0) {
                nextBeat = (startTime+(mspb*totalBeats));
                if (currentBeat == 1) {
                    beatUp.currentTime = 0;
                    beatUp.play();
                } else {
                    beatDown.currentTime = 0;
                    beatDown.play();
                }
                try {
                    circles[(localCurrentBeat-1)].classList.add('active');
                    setTimeout(() => {
                        circles[(localCurrentBeat-1)].classList.remove('active');
                    }, 50);
                } catch (error) {}
                totalBeats++;
                currentBeat++;
                if (currentBeat > bpb) currentBeat = 1;
            }
        }, 1);
        _id('playPause').innerHTML = 'pause';
        window.metronomePlaying = true;
    }
}

var lastTap = 0;
var taps = [];
function tapperTapped() {
    let difference = (Date.now()-window.lastTap);
    if (window.taps.length > 0 && Math.abs(window.taps[0]-difference) > 500)
        window.taps = [];
    window.taps.unshift(difference);
    if (difference < 2000) {
        let avg = 0;
        window.taps.forEach((tap) => {
            avg += tap;
        });
        avg /= window.taps.length;
        _id('tempo').value = Math.round(60000/avg);
        // let avgDiff = Math.round(avg-difference);
        // if (avgDiff > 0) avgDiff = `+${avgDiff}`;
        // console.log(`Tap count: ${window.taps.length}\nHit avg. delay: ${Math.round(avg)}ms\nHit error (from avg.): ${avgDiff}ms`);
    } else window.taps = [];
    window.lastTap = Date.now();
}