
// Tool Javascript

var result = '';
var extraChars = [];
init.push(() => {
    ['change', 'paste', 'keyup', 'input'].forEach((type) => {
        _id('extraChars').addEventListener(type, function(event) {
            let chars = _id('extraChars').value.split('');
            let result = [];
            chars.forEach((char) => {
                if (!result.includes(char)) result.push(char);
            });
            window.extraChars = result;
        });
    });
    _id('go').addEventListener('click', function(event) {
        _id('copy').disabled = true;
        _id('go').disabled = true;
        _id('result').innerHTML = "Generating...";
        _id('resultCont').classList.remove('hidden');
        // Get character set
        let charSetPresets = {
            'upper': 'ABCDEFGHJKLMNPQRSTUVWXYZ',
            'lower': 'abcdefghijkmnopqrstuvwxyz',
            'num': '0123456789',
            'seps': '-_',
            'punc': '.?!:,',
            'sym': '@#$%^&*+=',
            'slash': '/\\',
            'quote': '"\'`',
            'bracket': '()[]{}<>',
            'spaces': ' ',
        }
        let charSets = [];
        window.formInput.charSets.forEach((set) => {
            let setArr = charSetPresets[set].split('');
            for (i = 0; i < setArr.length; i++) {
                charSets.push(charSetPresets[set].split(''));
            }
        });
        // Get all selected characters as a single array
        const getCharList = (charSets) => {
            let charList = [];
            let addedSets = [];
            charSets.forEach((set) => {
                let setStr = set.join('');
                if (!addedSets.includes(setStr)) {
                    set.forEach((char) => { charList.push(char) });
                    addedSets.push(setStr);
                }
            });
            return charList;
        };
        let charList = getCharList(charSets);
        // Add extra characters if they aren't added already
        if (window.extraChars.length > 0) {
            let extraChars = [];
            window.extraChars.forEach((char) => {
                if (!charList.includes(char)) extraChars.push(char);
            });
            charSets.push(extraChars);
        }
        // Generate the password
        let passLength = parseInt(_id('length').value);
        let usedSets = [];
        let result = [];
        console.log(`Generating a ${passLength} char password with chars: ${getCharList(charSets).join('')}`);
        i = 0;
        while (result.length < passLength) {
            if (i > 10000) { result = "Loop overflow".split(''); break; }
            // Pick a character set at random
            let currentSet = charSets[randInt(0, (charSets.length-1))];
            let currentSetStr = currentSet.join('');
            // If we haven't used a character from all sets yet and this set has
            // already been used, skip it
            if (usedSets.length < window.formInput.charSets.length
              && usedSets.includes(currentSetStr))
                continue;
            else
                usedSets.push(currentSetStr);
            // Get the character
            let char = currentSet[randInt(0, (currentSet.length-1))];
            // Don't allow spaces to appear at the beginning or end of the password
            if (char == ' ' && (i == 0 || (i+1) == passLength)) continue;
            // Add the character to the password and increment
            result.push(char);
            i++;
        };
        result = result.join('');
        window.result = result;
        _id('result').innerHTML = escapeHtml(result);
        _id('copy').disabled = false;
        _id('go').disabled = false;
    });
    _id('copy').addEventListener('click', function(event) {
        copyText(window.result);
    });

    setInterval(() => {
        // Conditions
        let noPresets = (window.formInput.charSets.length == 0);
        let noExtraChars = (window.extraChars.length == 0);
        let justSpaces = (window.formInput.charSets.length == 1 && window.formInput.charSets[0] == 'spaces');
        let extraJustSpaces = (window.extraChars.length == 1 && window.extraChars[0] == ' ');
        // Combining the conditions
        // This gets pretty confusing
        if (((noExtraChars || extraJustSpaces) && noPresets) || ((noExtraChars || extraJustSpaces) && justSpaces))
            _id('go').disabled = true;
        else
            _id('go').disabled = false;
    }, 100);
});