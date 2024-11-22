const items = document.querySelectorAll('.accordion-header');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Si el elemento clicado ya está activo, ciérralo
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('opened');
            item.nextElementSibling.classList.add('closed');
        } else {
            // Cierra todos los elementos abiertos
            items.forEach(i => {
                i.classList.remove('active');
                i.nextElementSibling.classList.remove('opened');
                i.nextElementSibling.classList.add('closed');
            });

            // Abre el contenido del elemento clicado
            item.classList.add('active');
            item.nextElementSibling.classList.remove('closed');
            item.nextElementSibling.classList.add('opened');
        }
    });
});