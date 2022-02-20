
init.push(() => {
    _id('ip').value = _id('userIp').innerHTML;
    _id('ip').placeholder = _id('userIp').innerHTML;
    _id('useIp').addEventListener('click', () => {
        _id('ip').value = _id('userIp').innerHTML;
    });
    _id('go').addEventListener('click', () => { callApi(_id('ip').value) });
    setInterval(() => {
        let ip = _id('ip').value;
        if (isValidIp(ip) || isValidHostname(ip) && !window.working)
            _id('go').disabled = false;
        else
            _id('go').disabled = true;
    }, 100);
    let values = document.getElementsByClassName('dataValue');
    for (i = 0; i < values.length; i++) {
        let el = values[i];
        el.addEventListener('click', () => {
            copyText(el.innerHTML);
        });
    }
    setTimeout(() => {
        _id('go').click();
    }, 200);
});

async function callApi(ip) {
    window.working = true;
    _id('resultsCont').classList.add('hidden');
    _id('resultsContFailed').classList.add('hidden');
    let response = await fetchJSONSimple(`./server.php?ip=${ip}${(!isValidIp(ip) && isValidHostname(ip)) ? '&isHostname' : ''}`);
    console.log(response);
    if (response.response.status === 'success') {
        response = response.response;
        _id('resultsCont').classList.remove('hidden');
        _id('dataIp').innerText = response.query;
        _id('dataCountry').innerText = response.country;
        _id('dataCity').innerText = response.city;
        _id('dataRegion').innerText = response.regionName;
        _id('dataZip').innerText = response.zip;
        _id('dataLat').innerText = response.lat;
        _id('dataLon').innerText = response.lon;
        _id('dataIsp').innerText = response.isp;
        const setDate = () => { _id('dataTime').innerText = new Date().toLocaleString(undefined, { timeZone: response.timezone }); }
        clearInterval(window.dataTimeInterval);
        window.dataTimeInterval = setInterval(setDate, 1000);
        setDate();
    } else {
        _id('resultsContFailed').classList.remove('hidden');
    }
    window.working = false;
}