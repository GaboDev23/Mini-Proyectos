const trigger = document.getElementById('trigger');
const close = document.getElementById('close');
const alert = document.getElementById('alert');

trigger.addEventListener('click', () => {
    alert.style.display = 'flex';
});

close.addEventListener('click', () => {
    alert.style.display = 'none';
});