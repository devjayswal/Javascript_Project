const bulboff = document.getElementById('bulb-off');
const bulbon = document.getElementById('bulb-on');
const button = document.getElementById('button');


function turnOn() {
    button.textContent = 'Turn Off';
    bulboff.style.display = 'none';
    bulbon.style.display = 'block';
}

function turnOff() {
    button.textContent = 'Turn On';
    bulboff.style.display = 'block';
    bulbon.style.display = 'none';
}

button.addEventListener('click', function() {
    if (button.textContent == 'Turn On') {
        turnOn();
    } else {
        turnOff();
    }
})