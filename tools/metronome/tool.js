
// Tool Javascript

window.addEventListener('load', function() {
    const tempoOnChange = (event) => {
        let value = parseInt(_id('tempo').value);
        _id('playPause').disabled = false;
        _id('bigTempo').innerHTML = value;
        if (value > 2000 || value < 1 || isNaN(value)) {
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
            if (value > 32 || value < 1 || isNaN(value)) {
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
        if (event.code == 'KeyT' || event.code == 'KeyR') {
            _id('tapper').classList.add('active');
            _id('tapper').click();
            _id('tapper').active = true;
        }
        if (event.code == 'Space' || event.code == 'KeyP') {
            event.preventDefault();
            _id('playPause').click();
        }
    });
    window.addEventListener('keyup', function(event) {
        if (event.code == 'KeyT' || event.code == 'KeyR') {
            _id('tapper').classList.remove('active');
        }
    });
});

var metronomePlaying = false;
var metronomeInterval = null;
var beatDown = zounds.load('beat.wav');
var beatUp = zounds.load('beatAccent.wav');
function metronomePlayPause() {
    if (window.metronomePlaying) {
        // Stop playing
        clearInterval(window.metronomeInterval);
        _id('playPause').innerHTML = 'play_arrow';
        window.metronomePlaying = false;
    } else {
        // Set variables
        let startTime = Date.now();
        let totalBeats = 1;
        let nextBeat = 0;
        let lastMspb = 0;
        let currentBeat = 1;
        // Start the loop
        window.metronomeInterval = setInterval(() => {
            // Set variables
            let now = Date.now();
            let bpm = parseInt(_id('tempo').value);
            let mspb = (60000/bpm);
            let bpb = parseInt(_id('beatCount').value);
            let localCurrentBeat = currentBeat;
            let circles = _id('beatIndicators').getElementsByClassName('circle');
            // If the BPM has changed, reset the timing variables
            if (lastMspb != mspb) {
                startTime = now;
                totalBeats = 1;
                nextBeat = 0;
                currentBeat = 1;
            }
            lastMspb = mspb;
            // If its time for the next beat
            if ((now-nextBeat) >= 0) {
                // Set the next beat time
                nextBeat = (startTime+(mspb*totalBeats));
                // Play the beat
                if (currentBeat == 1) {
                    beatUp.play();
                } else {
                    beatDown.play();
                }
                // Animate the current beat indicator
                try {
                    circles[(localCurrentBeat-1)].classList.add('active');
                } catch (error) {}
                setTimeout(() => {
                    try {
                        circles[(localCurrentBeat-1)].classList.remove('active');
                    } catch (error) {}
                }, (mspb/2));
                // Update loop variables
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
    // Get the amount of time since the last tap
    let difference = (Date.now()-window.lastTap);
    window.lastTap = Date.now();
    // Clear saved taps if this tap is more than 500ms different than the last one
    if (window.taps.length > 0 && Math.abs(window.taps[0]-difference) > 500)
        window.taps = [];
    // Save this tap
    window.taps.unshift(difference);
    // If it's been less than 2 seconds since the last tap
    if (difference < 2000) {
        // Get the average tap difference (delay)
        let avg = 0;
        window.taps.forEach((tap) => {
            avg += tap;
        });
        avg /= window.taps.length;
        // Stop the metronome if it's running
        if (window.metronomePlaying) metronomePlayPause();
        // Convert the average difference to BPM and update the textbox
        _id('tempo').value = Math.round(60000/avg);
    // If longer, clear the saved taps
    } else window.taps = [];
}