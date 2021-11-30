window.addEventListener('load', function() {
    const onInputUpdate = function(el) {
        let value = _id('input').value.replace("\r", "");
        _id('charCount').innerHTML = numberWithCommas(value.length);
        _id('charCountAlt').innerHTML = numberWithCommas(value.replaceAll(' ', '').length);
        _id('lineCount').innerHTML = numberWithCommas(value.split("\n").length);
        _id('wordCount').innerHTML = numberWithCommas(countWords(value));
        if (value.length > 5000) {
            _id('wordFreq').innerHTML = `<p>Processing...</p>`;
            _id('charFreq').innerHTML = `<p>Processing...</p>`;
        }
        clearInterval(window.freqInterval);
        window.freqInterval = setInterval(() => {
            let words = value.match(/[^\s,?!.]+/g);
            // Get word frequency
            if (words && words.length > 1) {
                words.sort();
                let html = '';
                let wordFreq = {};
                let totalWords = words.length;
                // Get the number of occurrences of each word
                words.forEach(word => {
                    if (!wordFreq[word])
                        wordFreq[word] = 1;
                    else
                        wordFreq[word]++;
                });
                // Convert that list to a numeric one
                let wordFreqAlt = [];
                Object.keys(wordFreq).forEach(word => {
                    wordFreqAlt.push({
                        'word': word,
                        'count': wordFreq[word]
                    });
                });
                // Sort the numeric list
                wordFreqAlt.sort(function(a, b) {
                    if (a.count > b.count) return -1;
                    if (a.count < b.count) return 1;
                    return 0;
                });
                // Build the HTML
                wordFreqAlt.forEach(freq => {
                    html += `
                    <div class="row no-gutters">
                        <div class="col-auto" style="width: 80px">
                            <span class="statValue" title="${roundSmart(((freq.count/totalWords)*100), 2)}%">${freq.count}x</span>
                        </div>
                        <div class="col">${freq.word}</div>
                    </div>
                    `;
                });
                _id('wordFreq').innerHTML = html;
            } else _id('wordFreq').innerHTML = `<p>Input some text to get word frequency.</p>`;
            let chars = value.split('');
            // Get character frequency
            if (chars && chars.length > 1) {
                chars.sort();
                let html = '';
                let charFreq = {};
                let totalChars = value.length;
                // Get the number of occurrences of each char
                chars.forEach(char => {
                    if (char == ' ') char = "<em>Space</em>";
                    if (char == '\n') char = "<em>Newline</em>";
                    if (char == '\r') char = "<em>Carriage Return</em>";
                    if (!charFreq[char])
                        charFreq[char] = 1;
                    else
                        charFreq[char]++;
                });
                // Convert that list to a numeric one
                let charFreqAlt = [];
                Object.keys(charFreq).forEach(char => {
                    charFreqAlt.push({
                        'char': char,
                        'count': charFreq[char]
                    });
                });
                // Sort the numeric list
                charFreqAlt.sort(function(a, b) {
                    if (a.count > b.count) return -1;
                    if (a.count < b.count) return 1;
                    return 0;
                });
                // Build the HTML
                charFreqAlt.forEach(freq => {
                    html += `
                    <div class="row no-gutters">
                        <div class="col-auto" style="width: 80px">
                            <span class="statValue" title="${roundSmart(((freq.count/totalChars)*100), 2)}%">${freq.count}x</span>
                        </div>
                        <div class="col">${freq.char}</div>
                    </div>
                    `;
                });
                _id('charFreq').innerHTML = html;
            } else _id('charFreq').innerHTML = `<p>Input some text to get character frequency.</p>`;
            // Delete words and characters to free up memory
            delete words, chars;
        }, (value.length > 5000 ? (value.length/20) : 0));
        // Delete the saved value to free to memory
        delete value;
    }
    _id('input').addEventListener('keyup', onInputUpdate);
    _id('input').addEventListener('change', onInputUpdate);
    _id('input').addEventListener('paste', onInputUpdate);
    onInputUpdate();
});