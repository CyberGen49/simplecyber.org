window.addEventListener('load', function() {
    const onInputUpdate = function(el) {
        let value = _id('input').value.replace("\r", "");
        
        // Delete the saved value to free to memory
        delete value;
    }
    _id('input').addEventListener('keyup', onInputUpdate);
    _id('input').addEventListener('change', onInputUpdate);
    _id('input').addEventListener('paste', onInputUpdate);
    onInputUpdate();
});