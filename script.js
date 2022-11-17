const alertBtn = document.getElementById('alert');

if (alertBtn) {
    alertBtn.addEventListener('click', event => {
        alert('Alert button has been pressed');
    });
} else {
    console.log('Couldn\'t find any element with id \'alert\'');
}