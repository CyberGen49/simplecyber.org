
init.push(() => {
    let values = document.getElementsByClassName('dataValue');
    for (i = 0; i < values.length; i++) {
        let el = values[i];
        el.addEventListener('click', () => {
            copyText(el.innerHTML);
        });
    }
    const updateValues = () => {
        for (i = 0; i < values.length; i++) {
            let el = values[i];
            if (el.dataset.js) {
                try {
                    el.innerHTML = eval(el.dataset.js);
                    if (el.innerHTML == '') throw new Error();
                } catch (error) {
                    el.innerHTML = "Unknown";
                }
            }
        }
    };
    setInterval(() => {
        updateValues();
    }, 1000);
    updateValues();
});