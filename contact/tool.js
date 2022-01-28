
// Tool Javascript

init.push(() => {
    setInterval(() => {
        _id('sendLore').innerHTML = '';
        _id('send').disabled = false;
        if (_id('message').value == '')  {
            _id('sendLore').innerHTML = "You can't send an empty message.";
            _id('send').disabled = true;
        }
        switch (_id('contactType').value) {
            case 'discord':
                _id('contactInputCont').classList.remove('hidden');
                _id('discordTag').classList.remove('hidden');
                _id('email').classList.add('hidden');
                if (_id('discordTag').value == '') {
                    _id('sendLore').innerHTML = "Enter your Discord username and tag or change the response type.";
                    _id('send').disabled = true;
                } else if (!isValidDiscord(_id('discordTag').value)) {
                    _id('sendLore').innerHTML = "That Discord tag is invalid.";
                    _id('send').disabled = true;
                }
                break;
            case 'email':
                _id('contactInputCont').classList.remove('hidden');
                _id('discordTag').classList.add('hidden');
                _id('email').classList.remove('hidden');
                if (_id('email').value == '') {
                    _id('sendLore').innerHTML = "Enter your email address or change the response type.";
                    _id('send').disabled = true;
                } else if (!isValidEmail(_id('email').value)) {
                    _id('sendLore').innerHTML = "That email address is invalid.";
                    _id('send').disabled = true;
                }
                break;
            case 'none':
                _id('contactInputCont').classList.add('hidden');
                break;
        }
        
        if (_id('send').disabled) _id('sendLore').classList.remove('hidden');
        else _id('sendLore').classList.add('hidden');
    }, 250);

    _id('send').addEventListener('click', async () => {
        _id('send').innerHTML = "Sending...";
        _id('send').disabled = true;
        let response = await postJSONSimple("./server.php", {
            contact: {
                type: _id('contactType').value,
                discordTag: _id('discordTag').value,
                email: _id('email').value,
            },
            message: _id('message').value
        }, null, true);
        console.log(response);
        _id('send').innerHTML = "Send";
        _id('send').disabled = false;
        if (!response || response.status !== 'good') {
            _id('sendError').classList.remove('hidden');
            if (!response)
                _id('sendError').innerHTML = "Your message failed to send.";
            else switch (response.status) {
                case 'rateLimit':
                    _id('sendError').innerHTML = "You're sending messages too quickly. Wait a little bit before sending again.";
                    break;
                default:
                    _id('sendError').innerHTML = "The server failed to process your request, possibly because some parameters are invalid.";
                    break;
            }
        } else {
            _id('sendSuccessContext').innerHTML = "Your message has been sent successfully! ";
            switch (_id('contactType').value) {
                case 'discord':
                    _id('sendSuccessContext').innerHTML += "Expect a friend request and/or DM from <b>Cyber#1000</b> on Discord soon.";
                    break;
                case 'email':
                    _id('sendSuccessContext').innerHTML += "Expect a response in your email's inbox from <b>cybergen49@gmail.com</b> soon.";
                    break;
                case 'none':
                    _id('sendSuccessContext').innerHTML += "You won't receive a response since you didn't ask for one.";
                    break;
            }
            _id('preSendCont').classList.add('hidden');
            _id('sendSuccessCont').classList.remove('hidden');
        }
    });
});