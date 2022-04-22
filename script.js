let keys = document.querySelectorAll('.pianoBoard .key');

keys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.classList.contains('active')) {
            key.classList.remove('active');
            return
        }

        key.classList.add('active');
    })
});