document.querySelectorAll('.challenge-box').forEach(box => {
    box.addEventListener('click', function(event) {
        const details = this.querySelector('.challenge-details');
        // Only toggle if the click target is not an input or button
        if (!event.target.matches('input, button')) {
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        }
    });
});
