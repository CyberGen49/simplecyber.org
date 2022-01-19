
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
        let chars = [];
        window.formInput.charSets.forEach((set) => {
            switch (set) {
                case 'upper':
                    chars = chars.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
                    break;
                case 'lower':
                    chars = chars.concat('abcdefghijklmnopqrstuvwxyz'.split(''));
                    break;
                case 'num': chars = chars.concat('0123456789'.split('')); break;
                case 'seps': chars = chars.concat('-_'.split('')); break;
                case 'punc': chars = chars.concat('.?!:;,'.split('')); break;
                case 'sym': chars = chars.concat('~@#$%^&*+'.split('')); break;
                case 'slash': chars = chars.concat('/\\'.split('')); break;
                case 'quote': chars = chars.concat('"\'`'.split('')); break;
                case 'bracket': chars = chars.concat('()[]{}<>'.split('')); break;
                case 'spaces': chars = chars.concat(' '.split('')); break;
            };
        });
        // Add extra characters if they aren't added already
        if (window.extraChars.length > 0) window.extraChars.forEach((char) => {
            if (!chars.includes(char)) chars.push(char);
        });
        // Generate the password
        let passLength = parseInt(_id('length').value);
        let result = [];
        console.log(`Generating a ${passLength} char password with chars: ${chars.join('')}`);
        let i = 0;
        while (i < passLength) {
            // Get the character
            let char = chars[randInt(0, (chars.length-1))];
            // Don't allow spaces to appear at the beginning or end of the password
            if (char == ' ' && (i == 0 || (i+1) == passLength)) continue;
            // Don't allow uppercase I, lowercase L, or number 1 in the same password
            if (char.match(/^(I|l)$/) && result.includes('1')) continue;
            if (char.match(/^(1|I)$/) && result.includes('l')) continue;
            if (char.match(/^(l|1)$/) && result.includes('I')) continue;
            // Don't allow number 0 and uppercase O in the same password
            if (char.match(/^(0)$/) && result.includes('O')) continue;
            if (char.match(/^(O)$/) && result.includes('0')) continue;
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